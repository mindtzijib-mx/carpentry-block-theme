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
  RangeControl,
  Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    backgroundImage,
    leftSubtitle,
    leftTitle,
    progress1Title,
    progress1Value,
    progress2Title,
    progress2Value,
    rightSubtitle,
    rightTitle,
    rightDescription,
    feature1Icon,
    feature1Title,
    feature1Text,
    feature2Icon,
    feature2Title,
    feature2Text,
    feature3Icon,
    feature3Title,
    feature3Text,
    feature4Icon,
    feature4Title,
    feature4Text,
  } = attributes;

  // Default background image
  const defaultBgImage =
    "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-66-1024x853.jpg";

  const blockProps = useBlockProps({
    className: "valor-anadido-nosotros-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Imagen de Fondo", "carpentry-blocks")}
          initialOpen={true}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) =>
                setAttributes({ backgroundImage: media.url })
              }
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <div>
                  {backgroundImage ? (
                    <div>
                      <img
                        src={backgroundImage}
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
                      {__("Seleccionar Imagen de Fondo", "carpentry-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>

        <PanelBody
          title={__("Lado Izquierdo - Compromiso", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Subtítulo", "carpentry-blocks")}
            value={leftSubtitle}
            onChange={(value) => setAttributes({ leftSubtitle: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={leftTitle}
            onChange={(value) => setAttributes({ leftTitle: value })}
          />
          <TextControl
            label={__("Título Progreso 1", "carpentry-blocks")}
            value={progress1Title}
            onChange={(value) => setAttributes({ progress1Title: value })}
          />
          <RangeControl
            label={__("Valor Progreso 1 (%)", "carpentry-blocks")}
            value={progress1Value}
            onChange={(value) => setAttributes({ progress1Value: value })}
            min={0}
            max={100}
          />
          <TextControl
            label={__("Título Progreso 2", "carpentry-blocks")}
            value={progress2Title}
            onChange={(value) => setAttributes({ progress2Title: value })}
          />
          <RangeControl
            label={__("Valor Progreso 2 (%)", "carpentry-blocks")}
            value={progress2Value}
            onChange={(value) => setAttributes({ progress2Value: value })}
            min={0}
            max={100}
          />
        </PanelBody>

        <PanelBody
          title={__("Lado Derecho - Diferencia", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Subtítulo", "carpentry-blocks")}
            value={rightSubtitle}
            onChange={(value) => setAttributes({ rightSubtitle: value })}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={rightTitle}
            onChange={(value) => setAttributes({ rightTitle: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={rightDescription}
            onChange={(value) => setAttributes({ rightDescription: value })}
            rows={3}
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
            help={__(
              "Clase Font Awesome (ej: fas fa-user-tie)",
              "carpentry-blocks"
            )}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={feature1Title}
            onChange={(value) => setAttributes({ feature1Title: value })}
          />
          <TextareaControl
            label={__("Texto", "carpentry-blocks")}
            value={feature1Text}
            onChange={(value) => setAttributes({ feature1Text: value })}
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
            label={__("Texto", "carpentry-blocks")}
            value={feature2Text}
            onChange={(value) => setAttributes({ feature2Text: value })}
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
            label={__("Texto", "carpentry-blocks")}
            value={feature3Text}
            onChange={(value) => setAttributes({ feature3Text: value })}
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
            label={__("Texto", "carpentry-blocks")}
            value={feature4Text}
            onChange={(value) => setAttributes({ feature4Text: value })}
            rows={3}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section
          className="valor-anadido-section py-5"
          style={{
            backgroundImage: `url(${backgroundImage || defaultBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            minHeight: "600px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          ></div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row">
              {/* Lado Izquierdo - Directo sobre el fondo */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="compromiso-content">
                  <div className="section-subtitle text-uppercase mb-2">
                    <RichText
                      allowedFormats={["core/bold", "core/italic"]}
                      tagName="span"
                      value={leftSubtitle}
                      onChange={(value) =>
                        setAttributes({ leftSubtitle: value })
                      }
                      placeholder={__(
                        "Subtítulo izquierdo...",
                        "carpentry-blocks"
                      )}
                      style={{ color: "white", opacity: 0.8 }}
                    />
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="section-title mb-4"
                    value={leftTitle}
                    onChange={(value) => setAttributes({ leftTitle: value })}
                    placeholder={__("Título izquierdo...", "carpentry-blocks")}
                    style={{ color: "white", fontSize: "36px" }}
                  />

                  {/* Barras de progreso */}
                  <div className="progress-bars">
                    <div className="progress-item">
                      <div className="progress-header d-flex justify-content-between">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="span"
                          className="progress-title"
                          value={progress1Title}
                          onChange={(value) =>
                            setAttributes({ progress1Title: value })
                          }
                          placeholder={__(
                            "Título progreso 1...",
                            "carpentry-blocks"
                          )}
                          style={{ color: "white" }}
                        />
                        <span
                          className="progress-value"
                          style={{ color: "#ffc107" }}
                        >
                          {progress1Value}%
                        </span>
                      </div>
                      <div
                        className="progress-bar-custom"
                        style={{
                          height: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="progress-fill"
                          style={{
                            width: `${progress1Value}%`,
                            height: "100%",
                            background:
                              "linear-gradient(90deg, #ffc107 0%, #ff9800 100%)",
                            borderRadius: "4px",
                            transition: "width 2s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="progress-item">
                      <div className="progress-header d-flex justify-content-between">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="span"
                          className="progress-title"
                          value={progress2Title}
                          onChange={(value) =>
                            setAttributes({ progress2Title: value })
                          }
                          placeholder={__(
                            "Título progreso 2...",
                            "carpentry-blocks"
                          )}
                          style={{ color: "white" }}
                        />
                        <span
                          className="progress-value"
                          style={{ color: "#ffc107" }}
                        >
                          {progress2Value}%
                        </span>
                      </div>
                      <div
                        className="progress-bar-custom"
                        style={{
                          height: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="progress-fill"
                          style={{
                            width: `${progress2Value}%`,
                            height: "100%",
                            background:
                              "linear-gradient(90deg, #ffc107 0%, #ff9800 100%)",
                            borderRadius: "4px",
                            transition: "width 2s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Derecho - Caja blanca */}
              <div className="col-lg-7" style={{ marginTop: "-180px" }}>
                <div className="diferencia-content bg-white p-5 rounded-3 shadow">
                  <div className="section-subtitle text-uppercase mb-2">
                    <RichText
                      allowedFormats={["core/bold", "core/italic"]}
                      tagName="span"
                      value={rightSubtitle}
                      onChange={(value) =>
                        setAttributes({ rightSubtitle: value })
                      }
                      placeholder={__(
                        "Subtítulo derecho...",
                        "carpentry-blocks"
                      )}
                    />
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="section-title mb-3"
                    value={rightTitle}
                    onChange={(value) => setAttributes({ rightTitle: value })}
                    placeholder={__("Título derecho...", "carpentry-blocks")}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="section-description mb-4"
                    value={rightDescription}
                    onChange={(value) =>
                      setAttributes({ rightDescription: value })
                    }
                    placeholder={__("Descripción...", "carpentry-blocks")}
                  />

                  {/* Características en grid 2x2 */}
                  <div className="caracteristicas-grid">
                    <div className="caracteristica-item">
                      <div className="caracteristica-icon">
                        <i className={feature1Icon}></i>
                      </div>
                      <div className="caracteristica-content">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="h5"
                          className="caracteristica-title"
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
                          className="caracteristica-text"
                          value={feature1Text}
                          onChange={(value) =>
                            setAttributes({ feature1Text: value })
                          }
                          placeholder={__(
                            "Texto característica...",
                            "carpentry-blocks"
                          )}
                        />
                      </div>
                    </div>

                    <div className="caracteristica-item">
                      <div className="caracteristica-icon">
                        <i className={feature2Icon}></i>
                      </div>
                      <div className="caracteristica-content">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="h5"
                          className="caracteristica-title"
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
                          className="caracteristica-text"
                          value={feature2Text}
                          onChange={(value) =>
                            setAttributes({ feature2Text: value })
                          }
                          placeholder={__(
                            "Texto característica...",
                            "carpentry-blocks"
                          )}
                        />
                      </div>
                    </div>

                    <div className="caracteristica-item">
                      <div className="caracteristica-icon">
                        <i className={feature3Icon}></i>
                      </div>
                      <div className="caracteristica-content">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="h5"
                          className="caracteristica-title"
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
                          className="caracteristica-text"
                          value={feature3Text}
                          onChange={(value) =>
                            setAttributes({ feature3Text: value })
                          }
                          placeholder={__(
                            "Texto característica...",
                            "carpentry-blocks"
                          )}
                        />
                      </div>
                    </div>

                    <div className="caracteristica-item">
                      <div className="caracteristica-icon">
                        <i className={feature4Icon}></i>
                      </div>
                      <div className="caracteristica-content">
                        <RichText
                          allowedFormats={["core/bold", "core/italic"]}
                          tagName="h5"
                          className="caracteristica-title"
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
                          className="caracteristica-text"
                          value={feature4Text}
                          onChange={(value) =>
                            setAttributes({ feature4Text: value })
                          }
                          placeholder={__(
                            "Texto característica...",
                            "carpentry-blocks"
                          )}
                        />
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
