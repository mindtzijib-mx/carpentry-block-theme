import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { title, description, buttonText, buttonUrl, image } = attributes;

  // Default image
  const defaultImage =
    "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-65-1024x853.jpg";

  const blockProps = useBlockProps({
    className: "cta-casa-suenos-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Configuración CTA", "carpentry-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={title}
            onChange={(value) => setAttributes({ title: value })}
          />
          <TextControl
            label={__("Descripción", "carpentry-blocks")}
            value={description}
            onChange={(value) => setAttributes({ description: value })}
          />
          <TextControl
            label={__("Texto del Botón", "carpentry-blocks")}
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <TextControl
            label={__("URL del Botón", "carpentry-blocks")}
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
            help={__("Ejemplo: /contacto o #contacto", "carpentry-blocks")}
          />
        </PanelBody>

        <PanelBody title={__("Imagen", "carpentry-blocks")} initialOpen={false}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({
                  image: {
                    url: media.url,
                    alt: media.alt || "Imagen CTA",
                  },
                })
              }
              allowedTypes={["image"]}
              value={image?.url}
              render={({ open }) => (
                <div>
                  {image?.url ? (
                    <div>
                      <img
                        src={image.url}
                        alt={image.alt}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <Button
                        onClick={open}
                        isSecondary
                        style={{ marginTop: "10px" }}
                      >
                        {__("Cambiar Imagen", "carpentry-blocks")}
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={open} isPrimary>
                      {__("Seleccionar Imagen", "carpentry-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__("Texto Alternativo", "carpentry-blocks")}
            value={image?.alt || ""}
            onChange={(value) =>
              setAttributes({
                image: {
                  ...image,
                  alt: value,
                },
              })
            }
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section className="cta-casa-suenos">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="cta-image">
                  <img
                    src={image?.url || defaultImage}
                    alt={image?.alt || "Cocina moderna reformada"}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-content">
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h5"
                    className="cta-title"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Título del CTA...", "carpentry-blocks")}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="cta-description"
                    value={description}
                    onChange={(value) => setAttributes({ description: value })}
                    placeholder={__(
                      "Descripción del CTA...",
                      "carpentry-blocks"
                    )}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cta-button-wrapper">
                  <a
                    href={buttonUrl || "/contacto"}
                    className="btn btn-primary"
                  >
                    {buttonText || "Contacta"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
