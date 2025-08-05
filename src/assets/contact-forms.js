/**
 * Contact Forms Handler for Carpentry Block Theme
 *
 * Handles AJAX form submissions for quote-request and contact-section blocks
 */

document.addEventListener("DOMContentLoaded", function () {
  // Get all contact forms on the page
  const contactForms = document.querySelectorAll(".quote-form, .contact-form");

  contactForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const messagesContainer = form.querySelector(".form-messages");
      const originalButtonText = submitButton.textContent;

      // Disable submit button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";

      // Hide previous messages
      messagesContainer.style.display = "none";
      messagesContainer.className = "form-messages";

      // Collect form data
      const formData = new FormData(form);
      formData.append("action", "carpentry_contact_form");

      // Make AJAX request
      fetch(carpentryBlocks.ajaxUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Show success message
            showMessage(messagesContainer, data.data, "success");
            // Reset form
            form.reset();
          } else {
            // Show error message
            showMessage(messagesContainer, data.data, "error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          showMessage(
            messagesContainer,
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            "error"
          );
        })
        .finally(() => {
          // Re-enable submit button
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
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
