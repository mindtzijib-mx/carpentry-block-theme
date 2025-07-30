import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { title, description, backgroundImage, buttonText, buttonUrl } =
    attributes;

  const onSelectImage = (media) => {
    setAttributes({ backgroundImage: media.url });
  };

  const handleTitleChange = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  const handleDescriptionChange = (newDescription) => {
    setAttributes({ description: newDescription });
  };

  const handleButtonTextChange = (newButtonText) => {
    setAttributes({ buttonText: newButtonText });
  };

  const handleButtonUrlChange = (newButtonUrl) => {
    setAttributes({ buttonUrl: newButtonUrl });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración del Hero", "carpentry-blocks")}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <Button
                  className={
                    backgroundImage ? "image-button" : "button button-large"
                  }
                  onClick={open}
                >
                  {!backgroundImage
                    ? __("Subir imagen de fondo", "carpentry-blocks")
                    : __("Reemplazar imagen", "carpentry-blocks")}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {backgroundImage && (
            <Button
              className="button button-small"
              onClick={() => setAttributes({ backgroundImage: "" })}
            >
              {__("Eliminar imagen", "carpentry-blocks")}
            </Button>
          )}

          <TextControl
            label={__("Texto del botón", "carpentry-blocks")}
            value={buttonText}
            onChange={handleButtonTextChange}
          />

          <TextControl
            label={__("URL del botón", "carpentry-blocks")}
            value={buttonUrl}
            onChange={handleButtonUrlChange}
            help={__(
              "Ejemplo: #servicios, /contacto, https://ejemplo.com",
              "carpentry-blocks"
            )}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section
          className="hero-section hero-expertos wp-block-carpentry-hero"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "768px",
            position: "relative",
            padding: "0",
            display: "flex",
            alignItems: "center",
            marginTop: "-37px",
          }}
        >
          <div
            className="hero-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
          <div
            className="container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div
              className="row align-items-center hero-row"
              style={{ height: "768px" }}
            >
              <div className="col-lg-6">
                <div className="hero-content">
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h1"
                    className="hero-title hero-expertos-title"
                    style={{
                      fontSize: "90px",
                      lineHeight: "90px",
                      color: "#3b3430",
                      fontFamily: "Viga, sans-serif",
                      fontWeight: "normal",
                      marginBottom: "30px",
                    }}
                    value={title}
                    onChange={handleTitleChange}
                    placeholder={__(
                      "Escribe el título del hero...",
                      "carpentry-blocks"
                    )}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="hero-description hero-expertos-description"
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      color: "#27262d",
                      fontWeight: "500",
                      maxWidth: "563px",
                      marginBottom: "40px",
                    }}
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder={__(
                      "Escribe la descripción del hero...",
                      "carpentry-blocks"
                    )}
                  />
                  <div className="hero-buttons">
                    <a
                      href={buttonUrl || "#"}
                      className="btn-hero-modern"
                      style={{
                        backgroundColor: "#a17a66",
                        color: "#fff",
                        padding: "15px 35px",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "14px",
                        display: "inline-block",
                        border: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        boxShadow: "0 8px 25px rgba(161, 122, 102, 0.2)",
                        cursor: "pointer",
                      }}
                      onClick={(e) => e.preventDefault()} // Prevent navigation in editor
                    >
                      {buttonText || "Ver más"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* La imagen de fondo ya cubre toda la sección */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
