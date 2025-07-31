import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";
import { PanelBody, Button, TextControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { title, description, backgroundImage, buttonText, buttonUrl } =
    attributes;

  // Get the default background image path
  const defaultBackgroundImage =
    "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-49-qu1he63ihbsvs7fnsi8hak5s5lnm5mttx2t42kzyg0.jpg";
  const currentBackgroundImage = backgroundImage || defaultBackgroundImage;
  // Responsive design state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive styles
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 992 && windowWidth > 768;
  const isDesktop = windowWidth > 992;

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
      <style>{`
        .wp-block-carpentry-hero .hero-expertos-title {
          font-family: 'Viga', sans-serif !important;
        }
        .wp-block-carpentry-hero .hero-expertos-description {
          font-family: 'Poppins', sans-serif !important;
        }
        .wp-block-carpentry-hero .btn-hero-modern {
          font-family: 'Poppins', sans-serif !important;
        }
      `}</style>
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
            backgroundImage: currentBackgroundImage
              ? `url(${currentBackgroundImage})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isMobile ? "500px" : isTablet ? "600px" : "768px",
            position: "relative",
            padding: isMobile ? "60px 0" : "0",
            display: "flex",
            alignItems: "center",
            marginTop: isTablet || isMobile ? "0" : "-37px",
            minHeight: isMobile ? "400px" : "600px",
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
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 15px",
            }}
          >
            <div
              className="row align-items-center hero-row"
              style={{
                height: isMobile ? "auto" : isTablet ? "600px" : "768px",
                display: "flex",
                alignItems: "center",
                margin: "0 -15px",
                minHeight: isMobile ? "400px" : "auto",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                className="col-lg-6"
                style={{
                  flex: isMobile ? "1 0 100%" : "0 0 50%",
                  maxWidth: isMobile ? "100%" : "50%",
                  padding: "0 15px",
                }}
              >
                <div
                  className="hero-content"
                  style={{
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h1"
                    className="hero-title hero-expertos-title"
                    style={{
                      fontSize: isMobile ? "48px" : isTablet ? "70px" : "90px",
                      lineHeight: isMobile
                        ? "52px"
                        : isTablet
                        ? "74px"
                        : "90px",
                      color: "#3b3430",
                      fontFamily: "Viga, sans-serif",
                      fontWeight: "normal",
                      marginBottom: "30px",
                      margin: "0 0 30px 0",
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
                      fontSize: isMobile ? "14px" : "16px",
                      lineHeight: isMobile ? "22px" : "26px",
                      color: "#27262d",
                      fontWeight: "500",
                      maxWidth: isMobile ? "100%" : "563px",
                      marginBottom: "40px",
                      margin: "0 0 40px 0",
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
                        width: isMobile ? "100%" : "auto",
                        textAlign: isMobile ? "center" : "left",
                        margin: isMobile ? "0.5rem 0" : "0",
                        border: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        boxShadow: "0 8px 25px rgba(161, 122, 102, 0.2)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={(e) => e.preventDefault()} // Prevent navigation in editor
                    >
                      {buttonText || "Ver más"}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                style={{
                  flex: "0 0 50%",
                  maxWidth: "50%",
                  padding: "0 15px",
                }}
              >
                {/* La imagen de fondo ya cubre toda la sección */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
