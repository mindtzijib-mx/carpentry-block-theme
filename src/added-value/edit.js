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
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionSubtitle,
    sectionTitle,
    sectionDescription,
    mainImage,
    mainImageAlt,
    circularImage,
    circularImageAlt,
    feature1Icon,
    feature1Title,
    feature1Description,
    feature2Icon,
    feature2Title,
    feature2Description,
    feature3Icon,
    feature3Title,
    feature3Description,
    feature4Icon,
    feature4Title,
    feature4Description,
    additionalService1,
    additionalService2,
    contactButtonText,
    contactButtonUrl,
    servicesButtonText,
    servicesButtonUrl,
  } = attributes;

  // Default images
  const defaultImages = {
    main: "/wp-content/themes/carpentry-block-theme/images/RSL_Home_Valor_Anadido_1041_800_2-qu1he63kz8be8rsaap0ps4a4d1yybb3sdh3zg8nmek.jpg",
    circular:
      "/wp-content/themes/carpentry-block-theme/images/RSL_Home_Valor-Anadido_1200_X_1000_2-qu1he63fh06pyra1vyw5iigtof48a8anep86vfk4ge.jpg",
  };

  const blockProps = useBlockProps({
    className: "added-value-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Configuración de Sección", "carpentry-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Subtítulo", "carpentry-blocks")}
            value={sectionSubtitle}
            onChange={(value) => setAttributes({ sectionSubtitle: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={sectionTitle}
            onChange={(value) => setAttributes({ sectionTitle: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={sectionDescription}
            onChange={(value) => setAttributes({ sectionDescription: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Imágenes", "carpentry-blocks")}
          initialOpen={false}
        >
          <h4>{__("Imagen Principal", "carpentry-blocks")}</h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ mainImage: media.url })}
              allowedTypes={["image"]}
              value={mainImage}
              render={({ open }) => (
                <div>
                  {mainImage ? (
                    <div>
                      <img
                        src={mainImage}
                        alt=""
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
                      {__("Seleccionar Imagen Principal", "carpentry-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__("Texto Alternativo Imagen Principal", "carpentry-blocks")}
            value={mainImageAlt}
            onChange={(value) => setAttributes({ mainImageAlt: value })}
          />

          <h4 style={{ marginTop: "20px" }}>
            {__("Imagen Circular", "carpentry-blocks")}
          </h4>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ circularImage: media.url })}
              allowedTypes={["image"]}
              value={circularImage}
              render={({ open }) => (
                <div>
                  {circularImage ? (
                    <div>
                      <img
                        src={circularImage}
                        alt=""
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
                      {__("Seleccionar Imagen Circular", "carpentry-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__("Texto Alternativo Imagen Circular", "carpentry-blocks")}
            value={circularImageAlt}
            onChange={(value) => setAttributes({ circularImageAlt: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Característica 1", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={feature1Icon}
            onChange={(value) => setAttributes({ feature1Icon: value })}
            help={__("Clase Font Awesome (ej: fas fa-cog)", "carpentry-blocks")}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={feature1Title}
            onChange={(value) => setAttributes({ feature1Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={feature1Description}
            onChange={(value) => setAttributes({ feature1Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Característica 2", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={feature2Icon}
            onChange={(value) => setAttributes({ feature2Icon: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={feature2Title}
            onChange={(value) => setAttributes({ feature2Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={feature2Description}
            onChange={(value) => setAttributes({ feature2Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Característica 3", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={feature3Icon}
            onChange={(value) => setAttributes({ feature3Icon: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={feature3Title}
            onChange={(value) => setAttributes({ feature3Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={feature3Description}
            onChange={(value) => setAttributes({ feature3Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Característica 4", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={feature4Icon}
            onChange={(value) => setAttributes({ feature4Icon: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={feature4Title}
            onChange={(value) => setAttributes({ feature4Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={feature4Description}
            onChange={(value) => setAttributes({ feature4Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Servicios Adicionales", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Servicio Adicional 1", "carpentry-blocks")}
            value={additionalService1}
            onChange={(value) => setAttributes({ additionalService1: value })}
          />
          <TextControl
            label={__("Servicio Adicional 2", "carpentry-blocks")}
            value={additionalService2}
            onChange={(value) => setAttributes({ additionalService2: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Botones de Acción", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Texto Botón Contacto", "carpentry-blocks")}
            value={contactButtonText}
            onChange={(value) => setAttributes({ contactButtonText: value })}
          />
          <TextControl
            label={__("URL Botón Contacto", "carpentry-blocks")}
            value={contactButtonUrl}
            onChange={(value) => setAttributes({ contactButtonUrl: value })}
          />
          <TextControl
            label={__("Texto Botón Servicios", "carpentry-blocks")}
            value={servicesButtonText}
            onChange={(value) => setAttributes({ servicesButtonText: value })}
          />
          <TextControl
            label={__("URL Botón Servicios", "carpentry-blocks")}
            value={servicesButtonUrl}
            onChange={(value) => setAttributes({ servicesButtonUrl: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section className="added-value-section">
          <div className="decorative-triangle triangle-top"></div>
          <div className="decorative-triangle triangle-bottom"></div>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 p-0">
                <div className="value-image-wrapper">
                  <div className="geometric-shape">
                    <div className="main-image">
                      <img
                        src={mainImage || defaultImages.main}
                        alt={mainImageAlt || "Sala de estar moderna"}
                        className="img-fluid"
                      />
                    </div>
                    <div className="circular-image">
                      <img
                        src={circularImage || defaultImages.circular}
                        alt={circularImageAlt || "Comedor moderno"}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="value-content">
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="div"
                    className="section-subtitle"
                    value={sectionSubtitle}
                    onChange={(value) =>
                      setAttributes({ sectionSubtitle: value })
                    }
                    placeholder={__("Subtítulo...", "carpentry-blocks")}
                  />

                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h2"
                    className="section-title"
                    value={sectionTitle}
                    onChange={(value) => setAttributes({ sectionTitle: value })}
                    placeholder={__("Título principal...", "carpentry-blocks")}
                  />

                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="section-description"
                    value={sectionDescription}
                    onChange={(value) =>
                      setAttributes({ sectionDescription: value })
                    }
                    placeholder={__("Descripción...", "carpentry-blocks")}
                  />

                  <div className="value-features">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i className={feature1Icon}></i>
                          </div>
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="h4"
                            className="feature-title"
                            value={feature1Title}
                            onChange={(value) =>
                              setAttributes({ feature1Title: value })
                            }
                            placeholder={__(
                              "Título característica...",
                              "carpentry-blocks"
                            )}
                          />
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="p"
                            className="feature-description"
                            value={feature1Description}
                            onChange={(value) =>
                              setAttributes({ feature1Description: value })
                            }
                            placeholder={__(
                              "Descripción característica...",
                              "carpentry-blocks"
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i className={feature2Icon}></i>
                          </div>
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="h4"
                            className="feature-title"
                            value={feature2Title}
                            onChange={(value) =>
                              setAttributes({ feature2Title: value })
                            }
                            placeholder={__(
                              "Título característica...",
                              "carpentry-blocks"
                            )}
                          />
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="p"
                            className="feature-description"
                            value={feature2Description}
                            onChange={(value) =>
                              setAttributes({ feature2Description: value })
                            }
                            placeholder={__(
                              "Descripción característica...",
                              "carpentry-blocks"
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i className={feature3Icon}></i>
                          </div>
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="h4"
                            className="feature-title"
                            value={feature3Title}
                            onChange={(value) =>
                              setAttributes({ feature3Title: value })
                            }
                            placeholder={__(
                              "Título característica...",
                              "carpentry-blocks"
                            )}
                          />
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="p"
                            className="feature-description"
                            value={feature3Description}
                            onChange={(value) =>
                              setAttributes({ feature3Description: value })
                            }
                            placeholder={__(
                              "Descripción característica...",
                              "carpentry-blocks"
                            )}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <i className={feature4Icon}></i>
                          </div>
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="h4"
                            className="feature-title"
                            value={feature4Title}
                            onChange={(value) =>
                              setAttributes({ feature4Title: value })
                            }
                            placeholder={__(
                              "Título característica...",
                              "carpentry-blocks"
                            )}
                          />
                          <RichText
                            allowedFormats={["core/bold", "core/italic"]}
                            tagName="p"
                            className="feature-description"
                            value={feature4Description}
                            onChange={(value) =>
                              setAttributes({ feature4Description: value })
                            }
                            placeholder={__(
                              "Descripción característica...",
                              "carpentry-blocks"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="additional-services">
                    <ul className="services-list">
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="span"
                          value={additionalService1}
                          onChange={(value) =>
                            setAttributes({ additionalService1: value })
                          }
                          placeholder={__(
                            "Servicio adicional 1...",
                            "carpentry-blocks"
                          )}
                        />
                      </li>
                      <li>
                        <i className="fas fa-arrow-right"></i>
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="span"
                          value={additionalService2}
                          onChange={(value) =>
                            setAttributes({ additionalService2: value })
                          }
                          placeholder={__(
                            "Servicio adicional 2...",
                            "carpentry-blocks"
                          )}
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="value-buttons">
                    <a
                      href={contactButtonUrl || "#contacto"}
                      className="btn btn-primary-custom"
                    >
                      {contactButtonText || "Contacta"}
                    </a>
                    <a
                      href={servicesButtonUrl || "#servicios"}
                      className="btn btn-dark-custom"
                    >
                      {servicesButtonText || "Servicios"}
                    </a>
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
