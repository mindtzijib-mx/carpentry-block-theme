/**
 * Contact Forms Handler for Carpentry Block Theme
 *
 * Handles AJAX form submissions for quote-request and contact-section blocks
 */

document.addEventListener("DOMContentLoaded", function () {
  // Simple debug toggle. Set window.CARPENTRY_DEBUG = true in console to enable verbose logs.
  const isDebug = () => window.CARPENTRY_DEBUG === true;

  function dlog(...args) {
    if (isDebug()) {
      // Group under a namespace for easy filtering
      console.debug("[CarpentryForms]", ...args);
    }
  }

  // Helper to extract textual response when JSON fails
  async function tryParseJSON(response) {
    const clone = response.clone();
    try {
      return { ok: true, json: await response.json(), raw: null };
    } catch (err) {
      dlog("JSON parse failed", err);
      try {
        const text = await clone.text();
        return { ok: false, json: null, raw: text };
      } catch (err2) {
        return { ok: false, json: null, raw: null };
      }
    }
  }

  // Detect missing global (frequent production issue)
  if (
    typeof window.carpentryBlocks === "undefined" ||
    !carpentryBlocks.ajaxUrl
  ) {
    console.error(
      "[CarpentryForms] carpentryBlocks.ajaxUrl no está disponible. Verifica que el script principal esté encolado y que wp_localize_script se ejecuta antes."
    );
  }

  // Get all contact forms on the page
  const contactForms = document.querySelectorAll(".quote-form, .contact-form");
  dlog(`Encontrados ${contactForms.length} formularios`);

  contactForms.forEach(function (form, idx) {
    dlog(`Inicializando formulario #${idx + 1}`, form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formId = form.getAttribute("id") || `form-${idx + 1}`;
      console.groupCollapsed(
        `[CarpentryForms] Enviando ${formId} (${new Date().toISOString()})`
      );

      const submitButton = form.querySelector('button[type="submit"]');
      const messagesContainer = form.querySelector(".form-messages");
      const originalButtonText = submitButton ? submitButton.textContent : "";

      if (!submitButton) {
        console.warn("[CarpentryForms] No se encontró botón submit en", form);
      } else {
        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";
      }

      // Hide previous messages
      if (messagesContainer) {
        messagesContainer.style.display = "none";
        messagesContainer.className = "form-messages";
      }

      // Collect form data
      const formData = new FormData(form);
      formData.append("action", "carpentry_contact_form");

      // Log sanitized snapshot (omit mensaje largo)
      const snapshot = {};
      formData.forEach((v, k) => {
        if (k === "mensaje") {
          snapshot[k] =
            (v || "").toString().slice(0, 60) + (v && v.length > 60 ? "…" : "");
        } else if (k.toLowerCase().includes("nonce")) {
          snapshot[k] = v ? "(presente)" : "(vacío)";
        } else {
          snapshot[k] = v;
        }
      });
      dlog("Payload", snapshot);

      const ajaxUrl =
        (window.carpentryBlocks && carpentryBlocks.ajaxUrl) ||
        "/wp-admin/admin-ajax.php";
      dlog("Usando ajaxUrl", ajaxUrl);

      const startTime = performance.now();

      fetch(ajaxUrl, {
        method: "POST",
        body: formData,
        credentials: "same-origin",
        headers: {
          // Intentionally let browser set Content-Type for FormData boundary.
          "X-Requested-With": "XMLHttpRequest",
        },
      })
        .then(async (response) => {
          const elapsed = (performance.now() - startTime).toFixed(0);
          dlog(`HTTP status ${response.status} (${elapsed}ms)`);
          const parsed = await tryParseJSON(response);
          if (parsed.ok) {
            dlog("JSON recibido", parsed.json);
            return { response, data: parsed.json };
          } else {
            console.error(
              "[CarpentryForms] Respuesta no-JSON. Posible error PHP/WP (ver raw).",
              parsed.raw
            );
            return {
              response,
              data: {
                success: false,
                data: "Respuesta inesperada del servidor. Revisa consola.",
                _raw: parsed.raw,
              },
            };
          }
        })
        .then((payload) => {
          const { data } = payload;
          // Backward compatibility: expect shape {success:boolean,data:...}
          if (data.success && data.data) {
            const msg =
              typeof data.data === "object" && data.data.message
                ? data.data.message
                : data.data;
            showMessage(messagesContainer, msg, "success");
            form.reset();
            console.info("[CarpentryForms] Éxito:", data.data);
            return;
          }
          // New structured error shape {success:false,data:{code,message,debug?}}
          if (!data.success && data.data) {
            const errObj = data.data;
            const userMsg =
              errObj.message || errObj.data || "Error desconocido";
            let finalMsg = userMsg;
            if (
              errObj.code &&
              errObj.code !== "validation" &&
              errObj.code !== "sent"
            ) {
              finalMsg += ` (código: ${errObj.code})`;
            }
            if (
              errObj.code === "validation" &&
              errObj.debug &&
              errObj.debug.fields
            ) {
              // Highlight invalid fields
              Object.keys(errObj.debug.fields).forEach((fieldName) => {
                const f = form.querySelector(`[name="${fieldName}"]`);
                if (f) f.classList.add("error");
              });
            }
            showMessage(messagesContainer, finalMsg, "error");
            console.error(
              "[CarpentryForms] Error del servidor estructurado:",
              errObj
            );
            return;
          }
          // Fallback
          showMessage(
            messagesContainer,
            "Respuesta inesperada del servidor",
            "error"
          );
          console.error(
            "[CarpentryForms] Estructura de respuesta inesperada",
            data
          );
        })
        .catch((error) => {
          console.error("[CarpentryForms] Error de red o JS:", error);
          showMessage(
            messagesContainer,
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            "error"
          );
        })
        .finally(() => {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          }
          console.groupEnd();
        });
    });
  });

  /**
   * Show message to user
   */
  function showMessage(container, message, type) {
    container.innerHTML = "<p>" + message + "</p>";
    container.className =
      "form-messages " + (type === "success" ? "success" : "error");
    container.style.display = "block";

    // Scroll to message
    container.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    // Auto-hide success messages after 5 seconds
    if (type === "success") {
      setTimeout(() => {
        container.style.display = "none";
      }, 5000);
    }
  }

  /**
   * Real-time form validation
   */
  const formInputs = document.querySelectorAll(
    ".quote-form input, .quote-form textarea, .quote-form select, .contact-form input, .contact-form textarea, .contact-form select"
  );

  formInputs.forEach(function (input) {
    input.addEventListener("blur", function () {
      validateField(input);
    });

    input.addEventListener("input", function () {
      // Remove error styling on input
      if (input.classList.contains("error")) {
        input.classList.remove("error");
      }
    });
  });

  /**
   * Validate individual field
   */
  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    // Required field validation
    if (field.hasAttribute("required") && !value) {
      isValid = false;
    }

    // Email validation
    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
      }
    }

    // Phone validation (basic Spanish phone number format)
    if (field.type === "tel" && value) {
      const phoneRegex = /^[6-9]\d{8}$|^[89]\d{8}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ""))) {
        // Allow more flexible phone formats
        const flexiblePhoneRegex = /^[+]?[0-9\s\-()]{9,}$/;
        if (!flexiblePhoneRegex.test(value)) {
          isValid = false;
        }
      }
    }

    // Apply visual feedback
    if (isValid) {
      field.classList.remove("error");
      field.classList.add("valid");
    } else {
      field.classList.remove("valid");
      field.classList.add("error");
    }

    return isValid;
  }
});
