import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  TextControl,
  ToggleControl,
} from "@wordpress/components";
import apiFetch from "@wordpress/api-fetch";
import { useEffect, useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const { logoId, logoUrl, logoAlt, useGlobalFooterLogo } = attributes;
  const blockProps = useBlockProps();
  const [globalLogo, setGlobalLogo] = useState({ id: 0, url: "", alt: "" });
  const [loadingGlobal, setLoadingGlobal] = useState(false);

  const onSelectImage = (media) => {
    if (!media) return;
    setAttributes({
      logoId: media.id || 0,
      logoUrl: media.url || "",
      logoAlt: media.alt || media.title || "",
    });
  };

  const removeImage = () => {
    setAttributes({ logoId: 0, logoUrl: "", logoAlt: "" });
  };

  // Load current global footer logo
  useEffect(() => {
    if (!useGlobalFooterLogo) return;
    setLoadingGlobal(true);
    apiFetch({ path: "/carpentry/v1/footer-logo" })
      .then((res) => setGlobalLogo(res || { id: 0, url: "", alt: "" }))
      .catch(() => setGlobalLogo({ id: 0, url: "", alt: "" }))
      .finally(() => setLoadingGlobal(false));
  }, [useGlobalFooterLogo]);

  const onSelectGlobal = async (media) => {
    if (!media) return;
    try {
      setLoadingGlobal(true);
      await apiFetch({
        path: "/carpentry/v1/footer-logo",
        method: "POST",
        data: { id: media.id, alt: media.alt || media.title || "" },
      });
      setGlobalLogo({
        id: media.id,
        url: media.url,
        alt: media.alt || media.title || "",
      });
    } finally {
      setLoadingGlobal(false);
    }
  };

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Logo del Footer", "carpentry-blocks")}
          initialOpen={true}
        >
          <ToggleControl
            label={__("Usar logo global del footer", "carpentry-blocks")}
            checked={!!useGlobalFooterLogo}
            onChange={(val) => setAttributes({ useGlobalFooterLogo: !!val })}
            help={__(
              "Cuando está activo, se usará el logo configurado en el Personalizador para todas las páginas.",
              "carpentry-blocks"
            )}
          />
          {useGlobalFooterLogo ? (
            <>
              {loadingGlobal ? (
                <p>{__("Cargando logo global…", "carpentry-blocks")}</p>
              ) : globalLogo?.url ? (
                <div style={{ margin: "0 0 12px" }}>
                  <img
                    src={globalLogo.url}
                    alt={
                      globalLogo.alt || __("Logo footer", "carpentry-blocks")
                    }
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ) : (
                <p style={{ marginTop: 8 }}>
                  {__(
                    "No hay logo global de footer configurado. Puedes establecer uno a continuación.",
                    "carpentry-blocks"
                  )}
                </p>
              )}
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectGlobal}
                  allowedTypes={["image"]}
                  value={globalLogo?.id || 0}
                  render={({ open }) => (
                    <Button
                      variant="primary"
                      onClick={open}
                      disabled={loadingGlobal}
                    >
                      {globalLogo?.id
                        ? __(
                            "Cambiar logo global del footer",
                            "carpentry-blocks"
                          )
                        : __(
                            "Seleccionar logo global del footer",
                            "carpentry-blocks"
                          )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </>
          ) : (
            <>
              {logoUrl ? (
                <div style={{ marginBottom: "1rem" }}>
                  <img
                    src={logoUrl}
                    alt={logoAlt || __("Logo", "carpentry-blocks")}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              ) : (
                <p>{__("No hay logo seleccionado.", "carpentry-blocks")}</p>
              )}
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage}
                  allowedTypes={["image"]}
                  value={logoId}
                  render={({ open }) => (
                    <Button
                      variant="primary"
                      onClick={open}
                      style={{ marginRight: 8 }}
                    >
                      {logoUrl
                        ? __("Cambiar logo", "carpentry-blocks")
                        : __("Seleccionar logo", "carpentry-blocks")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {logoUrl && (
                <Button variant="secondary" onClick={removeImage} isDestructive>
                  {__("Quitar", "carpentry-blocks")}
                </Button>
              )}
              {logoUrl && (
                <TextControl
                  label={__("Texto alternativo", "carpentry-blocks")}
                  value={logoAlt}
                  onChange={(val) => setAttributes({ logoAlt: val })}
                  help={__(
                    "Importante para accesibilidad e SEO.",
                    "carpentry-blocks"
                  )}
                />
              )}
            </>
          )}
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div
          style={{
            background: "#2c3e50",
            color: "white",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h3>{__("Footer de ServiLucas", "carpentry-blocks")}</h3>
          <p>
            {__(
              "Este es el footer (vista previa). El contenido final y el logo se renderizan en el frontend.",
              "carpentry-blocks"
            )}
          </p>
          {logoUrl && (
            <div style={{ marginTop: "1rem" }}>
              <img
                src={logoUrl}
                alt={logoAlt || __("Logo", "carpentry-blocks")}
                style={{ maxWidth: 200, height: "auto" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
