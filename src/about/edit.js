import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import {
  PanelBody,
  Button,
  TextControl,
  __experimentalDivider as Divider,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const {
    subtitle,
    title,
    description,
    stat1Number,
    stat1Label,
    stat1Icon,
    stat2Number,
    stat2Label,
    stat2Icon,
    additionalText,
    buttonText,
    buttonUrl,
    emailAddress,
    aboutImage,
    phoneNumber,
  } = attributes;

  const onSelectImage = (media) => {
    setAttributes({ aboutImage: media.url });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración General", "carpentry-blocks")}>
          <TextControl
            label={__("Subtítulo", "carpentry-blocks")}
            value={subtitle}
            onChange={(value) => setAttributes({ subtitle: value })}
          />
          <Divider />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={aboutImage}
              render={({ open }) => (
                <Button
                  className={
                    aboutImage ? "image-button" : "button button-large"
                  }
                  onClick={open}
                >
                  {!aboutImage
                    ? __("Subir imagen", "carpentry-blocks")
                    : __("Reemplazar imagen", "carpentry-blocks")}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {aboutImage && (
            <Button
              className="button button-small"
              onClick={() => setAttributes({ aboutImage: "" })}
            >
              {__("Eliminar imagen", "carpentry-blocks")}
            </Button>
          )}
        </PanelBody>

        <PanelBody title={__("Estadísticas", "carpentry-blocks")}>
          <h4>{__("Estadística 1", "carpentry-blocks")}</h4>
          <TextControl
            label={__("Número", "carpentry-blocks")}
            value={stat1Number}
            onChange={(value) => setAttributes({ stat1Number: value })}
          />
          <TextControl
            label={__("Etiqueta", "carpentry-blocks")}
            value={stat1Label}
            onChange={(value) => setAttributes({ stat1Label: value })}
          />
          <TextControl
            label={__("Icono (Font Awesome)", "carpentry-blocks")}
            value={stat1Icon}
            onChange={(value) => setAttributes({ stat1Icon: value })}
            help={__("Ejemplo: fas fa-award", "carpentry-blocks")}
          />

          <Divider />

          <h4>{__("Estadística 2", "carpentry-blocks")}</h4>
          <TextControl
            label={__("Número", "carpentry-blocks")}
            value={stat2Number}
            onChange={(value) => setAttributes({ stat2Number: value })}
          />
          <TextControl
            label={__("Etiqueta", "carpentry-blocks")}
            value={stat2Label}
            onChange={(value) => setAttributes({ stat2Label: value })}
          />
          <TextControl
            label={__("Icono (Font Awesome)", "carpentry-blocks")}
            value={stat2Icon}
            onChange={(value) => setAttributes({ stat2Icon: value })}
            help={__("Ejemplo: fas fa-users", "carpentry-blocks")}
          />
        </PanelBody>

        <PanelBody title={__("Información de Contacto", "carpentry-blocks")}>
          <TextControl
            label={__("Texto del botón", "carpentry-blocks")}
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
          />
          <TextControl
            label={__("URL del botón", "carpentry-blocks")}
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
          />
          <TextControl
            label={__("Email", "carpentry-blocks")}
            value={emailAddress}
            onChange={(value) => setAttributes({ emailAddress: value })}
          />
          <TextControl
            label={__("Teléfono", "carpentry-blocks")}
            value={phoneNumber}
            onChange={(value) => setAttributes({ phoneNumber: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section className="about-us-section py-5 wp-block-carpentry-about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-content">
                  <div
                    className="section-subtitle"
                    style={{
                      color: "#999",
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "15px",
                    }}
                  >
                    {subtitle}
                  </div>

                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h2"
                    className="section-title"
                    style={{
                      fontSize: "42px",
                      fontWeight: "700",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "25px",
                    }}
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Escribe el título...", "carpentry-blocks")}
                  />

                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="section-description"
                    style={{
                      color: "#666",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      marginBottom: "40px",
                    }}
                    value={description}
                    onChange={(value) => setAttributes({ description: value })}
                    placeholder={__(
                      "Escribe la descripción...",
                      "carpentry-blocks"
                    )}
                  />

                  <div
                    className="stats-wrapper"
                    style={{
                      display: "flex",
                      gap: "40px",
                      marginBottom: "30px",
                    }}
                  >
                    <div
                      className="stat-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        className="stat-icon"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <i
                          className={stat1Icon}
                          style={{ color: "#a17a66", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div className="stat-content">
                        <div
                          className="about-stat-number"
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#333",
                            lineHeight: "1",
                          }}
                        >
                          {stat1Number}
                        </div>
                        <div
                          className="about-stat-label"
                          style={{
                            fontSize: "12px",
                            color: "#999",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {stat1Label}
                        </div>
                      </div>
                    </div>

                    <div
                      className="stat-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        className="stat-icon"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <i
                          className={stat2Icon}
                          style={{ color: "#a17a66", fontSize: "20px" }}
                        ></i>
                      </div>
                      <div className="stat-content">
                        <div
                          className="about-stat-number"
                          style={{
                            fontSize: "32px",
                            fontWeight: "700",
                            color: "#333",
                            lineHeight: "1",
                          }}
                        >
                          {stat2Number}
                        </div>
                        <div
                          className="about-stat-label"
                          style={{
                            fontSize: "12px",
                            color: "#999",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {stat2Label}
                        </div>
                      </div>
                    </div>
                  </div>

                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="additional-text"
                    style={{
                      color: "#666",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      marginBottom: "40px",
                    }}
                    value={additionalText}
                    onChange={(value) =>
                      setAttributes({ additionalText: value })
                    }
                    placeholder={__(
                      "Escribe el texto adicional...",
                      "carpentry-blocks"
                    )}
                  />

                  <div
                    className="contact-info-wrapper"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <div className="contact-cta">
                      <a
                        href={buttonUrl || "#"}
                        className="btn btn-dark-custom"
                        style={{
                          backgroundColor: "#333",
                          color: "#fff",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "25px",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          fontSize: "14px",
                          letterSpacing: "0.5px",
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        {buttonText}
                      </a>
                    </div>
                    <div
                      className="contact-email"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        className="email-icon"
                        style={{
                          width: "45px",
                          height: "45px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <i
                          className="fas fa-envelope"
                          style={{ color: "#666", fontSize: "18px" }}
                        ></i>
                      </div>
                      <div className="email-content">
                        <div
                          className="email-label"
                          style={{
                            fontSize: "14px",
                            color: "#999",
                            fontWeight: "600",
                          }}
                        >
                          Email
                        </div>
                        <div
                          className="email-address"
                          style={{
                            fontSize: "15px",
                            color: "#333",
                            fontWeight: "500",
                          }}
                        >
                          {emailAddress}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="about-image-wrapper"
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  {aboutImage ? (
                    <img
                      src={aboutImage}
                      alt="Reforma de baño moderna"
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "400px",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        color: "#666",
                      }}
                    >
                      {__("Selecciona una imagen", "carpentry-blocks")}
                    </div>
                  )}

                  <div
                    className="phone-contact-overlay"
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      right: "30px",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      padding: "20px 30px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div
                      className="about-phone-icon"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#a17a66",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-phone"
                        style={{ color: "#fff", fontSize: "16px" }}
                      ></i>
                    </div>
                    <div className="phone-content">
                      <div
                        className="about-phone-label"
                        style={{
                          fontSize: "12px",
                          color: "#999",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Teléfono
                      </div>
                      <div
                        className="about-phone-number"
                        style={{
                          fontSize: "18px",
                          color: "#333",
                          fontWeight: "700",
                        }}
                      >
                        {phoneNumber}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
