import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, ColorPalette } from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  SelectControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const {
    showFeaturedImage,
    showTitle,
    showContent,
    showSidebar,
    sidebarTitle,
    showNavigationButtons,
    prevText,
    nextText,
    showContactCTA,
    ctaTitle,
    ctaText,
    ctaButtonText,
    backgroundColor,
    textColor,
    accentColor,
    sidebarBackground,
    layout,
  } = attributes;

  const blockProps = useBlockProps({
    className: "service-single-editor",
    style: {
      backgroundColor: backgroundColor,
      color: textColor,
    },
  });

  const colors = [
    { name: "White", color: "#ffffff" },
    { name: "Light Gray", color: "#f8f9fa" },
    { name: "Primary", color: "#a17a66" },
    { name: "Dark", color: "#333333" },
    { name: "Secondary", color: "#3b3430" },
    { name: "Light Blue", color: "#e3f2fd" },
    { name: "Light Green", color: "#e8f5e8" },
  ];

  const layoutOptions = [
    {
      label: __("Sidebar izquierda", "carpentry-blocks"),
      value: "sidebar-left",
    },
    {
      label: __("Sidebar derecha", "carpentry-blocks"),
      value: "sidebar-right",
    },
    { label: __("Ancho completo", "carpentry-blocks"), value: "full-width" },
  ];

  const mockServices = [
    "Reformas Integrales",
    "Instalaciones Eléctricas",
    "Tabiquería Seca",
    "Carpintería a Medida",
    "Fontanería",
    "Pintura y Decoración",
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración del Layout", "carpentry-blocks")}>
          <SelectControl
            label={__("Diseño de la página", "carpentry-blocks")}
            value={layout}
            options={layoutOptions}
            onChange={(value) => setAttributes({ layout: value })}
          />
        </PanelBody>

        <PanelBody title={__("Elementos del Contenido", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar imagen destacada", "carpentry-blocks")}
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />

          <ToggleControl
            label={__("Mostrar título", "carpentry-blocks")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />

          <ToggleControl
            label={__("Mostrar contenido", "carpentry-blocks")}
            checked={showContent}
            onChange={(value) => setAttributes({ showContent: value })}
          />
        </PanelBody>

        <PanelBody title={__("Configuración del Sidebar", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar sidebar", "carpentry-blocks")}
            checked={showSidebar}
            onChange={(value) => setAttributes({ showSidebar: value })}
          />

          {showSidebar && (
            <TextControl
              label={__("Título del sidebar", "carpentry-blocks")}
              value={sidebarTitle}
              onChange={(value) => setAttributes({ sidebarTitle: value })}
            />
          )}
        </PanelBody>

        <PanelBody title={__("Navegación entre Servicios", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar botones de navegación", "carpentry-blocks")}
            checked={showNavigationButtons}
            onChange={(value) =>
              setAttributes({ showNavigationButtons: value })
            }
          />

          {showNavigationButtons && (
            <>
              <TextControl
                label={__("Texto botón anterior", "carpentry-blocks")}
                value={prevText}
                onChange={(value) => setAttributes({ prevText: value })}
              />

              <TextControl
                label={__("Texto botón siguiente", "carpentry-blocks")}
                value={nextText}
                onChange={(value) => setAttributes({ nextText: value })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__("Call to Action", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar CTA de contacto", "carpentry-blocks")}
            checked={showContactCTA}
            onChange={(value) => setAttributes({ showContactCTA: value })}
          />

          {showContactCTA && (
            <>
              <TextControl
                label={__("Título del CTA", "carpentry-blocks")}
                value={ctaTitle}
                onChange={(value) => setAttributes({ ctaTitle: value })}
              />

              <TextControl
                label={__("Texto del CTA", "carpentry-blocks")}
                value={ctaText}
                onChange={(value) => setAttributes({ ctaText: value })}
              />

              <TextControl
                label={__("Texto del botón", "carpentry-blocks")}
                value={ctaButtonText}
                onChange={(value) => setAttributes({ ctaButtonText: value })}
              />
            </>
          )}
        </PanelBody>

        <PanelBody title={__("Configuración de Colores", "carpentry-blocks")}>
          <h4>{__("Color de fondo", "carpentry-blocks")}</h4>
          <ColorPalette
            colors={colors}
            value={backgroundColor}
            onChange={(color) => setAttributes({ backgroundColor: color })}
          />

          <h4>{__("Color de texto", "carpentry-blocks")}</h4>
          <ColorPalette
            colors={colors}
            value={textColor}
            onChange={(color) => setAttributes({ textColor: color })}
          />

          <h4>{__("Color de acento", "carpentry-blocks")}</h4>
          <ColorPalette
            colors={colors}
            value={accentColor}
            onChange={(color) => setAttributes({ accentColor: color })}
          />

          <h4>{__("Color de fondo del sidebar", "carpentry-blocks")}</h4>
          <ColorPalette
            colors={colors}
            value={sidebarBackground}
            onChange={(color) => setAttributes({ sidebarBackground: color })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "40px",
            border: "2px dashed #dee2e6",
            borderRadius: "8px",
            backgroundColor: backgroundColor,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: layout === "sidebar-right" ? "row-reverse" : "row",
              gap: "2rem",
              alignItems: "stretch",
            }}
          >
            {/* Sidebar Preview */}
            {showSidebar && layout !== "full-width" && (
              <div
                style={{
                  flex: "0 0 300px",
                  backgroundColor: sidebarBackground,
                  borderRadius: "8px",
                  padding: "1.5rem",
                }}
              >
                <RichText
                  tagName="h3"
                  value={sidebarTitle}
                  onChange={(value) => setAttributes({ sidebarTitle: value })}
                  placeholder={__("Título del sidebar...", "carpentry-blocks")}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: textColor,
                    fontFamily: "Viga, sans-serif",
                  }}
                />

                <div style={{ marginBottom: "1rem" }}>
                  {mockServices.map((service, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "0.75rem 1rem",
                        marginBottom: "0.5rem",
                        backgroundColor:
                          index === 0 ? accentColor : "rgba(0,0,0,0.05)",
                        color: index === 0 ? "white" : textColor,
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                        fontWeight: index === 0 ? "600" : "400",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {service} {index === 0 && "(Actual)"}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Main Content Preview */}
            <div style={{ flex: "1", minWidth: "0" }}>
              {showFeaturedImage && (
                <div
                  style={{
                    height: "300px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <div style={{ textAlign: "center", color: "#6c757d" }}>
                    <i
                      className="fas fa-image"
                      style={{ fontSize: "2rem", marginBottom: "0.5rem" }}
                    ></i>
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                      Imagen destacada del servicio
                    </p>
                  </div>
                </div>
              )}

              {showTitle && (
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    marginBottom: "1.5rem",
                    color: accentColor,
                    fontFamily: "Viga, sans-serif",
                  }}
                >
                  Reforma Integral de Cocinas
                </h1>
              )}

              {showContent && (
                <div
                  style={{
                    marginBottom: "3rem",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    color: textColor,
                  }}
                >
                  <p style={{ marginBottom: "1.5rem" }}>
                    <strong>Contenido del servicio:</strong> Aquí se mostrará
                    todo el contenido del servicio individual con descripciones
                    detalladas, características, procesos de trabajo, etc.
                  </p>
                  <p style={{ marginBottom: "1.5rem", color: "#666" }}>
                    El contenido incluirá texto, imágenes, listas, y todos los
                    elementos necesarios para describir completamente el
                    servicio ofrecido.
                  </p>
                </div>
              )}

              {showContactCTA && (
                <div
                  style={{
                    backgroundColor: "rgba(161, 122, 102, 0.1)",
                    padding: "2rem",
                    borderRadius: "12px",
                    textAlign: "center",
                    marginBottom: "2rem",
                    border: `1px solid rgba(161, 122, 102, 0.2)`,
                  }}
                >
                  <RichText
                    tagName="h3"
                    value={ctaTitle}
                    onChange={(value) => setAttributes({ ctaTitle: value })}
                    placeholder={__("Título del CTA...", "carpentry-blocks")}
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                      color: accentColor,
                      fontFamily: "Viga, sans-serif",
                    }}
                  />

                  <RichText
                    tagName="p"
                    value={ctaText}
                    onChange={(value) => setAttributes({ ctaText: value })}
                    placeholder={__("Texto del CTA...", "carpentry-blocks")}
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "#666",
                      marginBottom: "1.5rem",
                    }}
                  />

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: accentColor,
                      color: "white",
                      padding: "1rem 2rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-phone"></i>
                    <RichText
                      tagName="span"
                      value={ctaButtonText}
                      onChange={(value) =>
                        setAttributes({ ctaButtonText: value })
                      }
                      placeholder={__("Texto del botón...", "carpentry-blocks")}
                    />
                  </div>
                </div>
              )}

              {showNavigationButtons && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: accentColor,
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                      <RichText
                        tagName="span"
                        value={prevText}
                        onChange={(value) => setAttributes({ prevText: value })}
                        placeholder={__(
                          "Texto anterior...",
                          "carpentry-blocks"
                        )}
                      />
                    </div>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        fontSize: "0.85rem",
                        color: "#666",
                      }}
                    >
                      Instalaciones Eléctricas
                    </p>
                  </div>

                  <div
                    style={{
                      flex: "1",
                      textAlign: "right",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: accentColor,
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      <RichText
                        tagName="span"
                        value={nextText}
                        onChange={(value) => setAttributes({ nextText: value })}
                        placeholder={__(
                          "Texto siguiente...",
                          "carpentry-blocks"
                        )}
                      />
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <p
                      style={{
                        margin: "0.5rem 0 0 0",
                        fontSize: "0.85rem",
                        color: "#666",
                      }}
                    >
                      Tabiquería Seca
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Layout Info */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "rgba(161, 122, 102, 0.1)",
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid rgba(161, 122, 102, 0.2)",
            }}
          >
            <i
              className="fas fa-info-circle"
              style={{
                color: accentColor,
                marginRight: "0.5rem",
              }}
            ></i>
            <strong>Vista previa de servicio individual</strong>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              Layout: {layout} | Sidebar: {showSidebar ? "Visible" : "Oculto"} |
              CTA: {showContactCTA ? "Visible" : "Oculto"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
