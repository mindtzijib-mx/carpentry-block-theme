import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, ColorPalette } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, TextControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const {
    showFeaturedImage,
    showTitle,
    showMeta,
    showDate,
    showAuthor,
    showCategory,
    showTags,
    showSocialShare,
    shareTitle,
    backgroundColor,
    textColor,
    accentColor,
    showNavigation,
    navigationText,
    prevText,
    nextText,
  } = attributes;

  const blockProps = useBlockProps({
    className: "blog-post-single-editor",
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

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Elementos a mostrar", "carpentry-blocks")}>
          <ToggleControl
            label={__("Imagen destacada", "carpentry-blocks")}
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />

          <ToggleControl
            label={__("Título del post", "carpentry-blocks")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />

          <ToggleControl
            label={__("Meta información", "carpentry-blocks")}
            checked={showMeta}
            onChange={(value) => setAttributes({ showMeta: value })}
          />

          {showMeta && (
            <>
              <ToggleControl
                label={__("Fecha", "carpentry-blocks")}
                checked={showDate}
                onChange={(value) => setAttributes({ showDate: value })}
              />

              <ToggleControl
                label={__("Autor", "carpentry-blocks")}
                checked={showAuthor}
                onChange={(value) => setAttributes({ showAuthor: value })}
              />

              <ToggleControl
                label={__("Categorías", "carpentry-blocks")}
                checked={showCategory}
                onChange={(value) => setAttributes({ showCategory: value })}
              />
            </>
          )}

          <ToggleControl
            label={__("Etiquetas", "carpentry-blocks")}
            checked={showTags}
            onChange={(value) => setAttributes({ showTags: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Compartir en redes sociales", "carpentry-blocks")}
        >
          <ToggleControl
            label={__("Mostrar botones de compartir", "carpentry-blocks")}
            checked={showSocialShare}
            onChange={(value) => setAttributes({ showSocialShare: value })}
          />

          {showSocialShare && (
            <TextControl
              label={__("Título de la sección", "carpentry-blocks")}
              value={shareTitle}
              onChange={(value) => setAttributes({ shareTitle: value })}
            />
          )}
        </PanelBody>

        <PanelBody title={__("Navegación entre entradas", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar navegación", "carpentry-blocks")}
            checked={showNavigation}
            onChange={(value) => setAttributes({ showNavigation: value })}
          />

          {showNavigation && (
            <>
              <TextControl
                label={__("Título de navegación", "carpentry-blocks")}
                value={navigationText}
                onChange={(value) => setAttributes({ navigationText: value })}
              />

              <TextControl
                label={__("Texto entrada anterior", "carpentry-blocks")}
                value={prevText}
                onChange={(value) => setAttributes({ prevText: value })}
              />

              <TextControl
                label={__("Texto siguiente entrada", "carpentry-blocks")}
                value={nextText}
                onChange={(value) => setAttributes({ nextText: value })}
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
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "40px",
            border: "2px dashed #dee2e6",
            borderRadius: "8px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <i
              className="fas fa-file-alt"
              style={{
                fontSize: "3rem",
                color: accentColor,
                marginBottom: "1rem",
              }}
            ></i>
            <h3
              style={{
                color: textColor,
                margin: "0 0 1rem 0",
                fontSize: "1.5rem",
              }}
            >
              {__("Vista previa de entrada individual", "carpentry-blocks")}
            </h3>
          </div>

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
                  Imagen destacada
                </p>
              </div>
            </div>
          )}

          {showTitle && (
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: textColor,
                fontFamily: "Viga, sans-serif",
              }}
            >
              Título del Artículo
            </h1>
          )}

          {showMeta && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              {showDate && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <i
                    className="fas fa-calendar"
                    style={{ color: accentColor }}
                  ></i>
                  <span>15 de Julio, 2024</span>
                </div>
              )}
              {showAuthor && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <i className="fas fa-user" style={{ color: accentColor }}></i>
                  <span>Por ServiLucas</span>
                </div>
              )}
              {showCategory && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <i
                    className="fas fa-folder"
                    style={{ color: accentColor }}
                  ></i>
                  <span>Reformas</span>
                </div>
              )}
            </div>
          )}

          <div
            style={{
              padding: "2rem",
              backgroundColor: "rgba(248, 249, 250, 0.5)",
              borderRadius: "8px",
              marginBottom: "2rem",
              border: "1px dashed #dee2e6",
            }}
          >
            <p
              style={{
                margin: "0 0 1rem 0",
                color: "#666",
                fontSize: "0.9rem",
              }}
            >
              <strong>Contenido del artículo:</strong>
            </p>
            <p style={{ margin: "0", color: textColor, lineHeight: "1.6" }}>
              Aquí se mostrará el contenido completo del artículo del blog con
              todos los elementos configurados como texto, imágenes, listas,
              etc.
            </p>
          </div>

          {showTags && (
            <div style={{ marginBottom: "2rem" }}>
              <h4
                style={{
                  color: textColor,
                  marginBottom: "0.8rem",
                  fontSize: "1rem",
                }}
              >
                Etiquetas:
              </h4>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {["Reforma", "Cocina", "Moderno"].map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "rgba(161, 122, 102, 0.1)",
                      color: accentColor,
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {showSocialShare && (
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "rgba(161, 122, 102, 0.05)",
                borderRadius: "8px",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <RichText
                tagName="h4"
                value={shareTitle}
                onChange={(value) => setAttributes({ shareTitle: value })}
                placeholder={__("Título para compartir...", "carpentry-blocks")}
                style={{
                  color: textColor,
                  marginBottom: "1rem",
                  fontSize: "1.1rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#1877F2",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-facebook" style={{ color: "white" }}></i>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#1DA1F2",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-twitter" style={{ color: "white" }}></i>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#0077B5",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-linkedin" style={{ color: "white" }}></i>
                </div>
              </div>
            </div>
          )}

          {showNavigation && (
            <div
              style={{
                borderTop: "1px solid #dee2e6",
                paddingTop: "2rem",
              }}
            >
              <RichText
                tagName="h4"
                value={navigationText}
                onChange={(value) => setAttributes({ navigationText: value })}
                placeholder={__("Título de navegación...", "carpentry-blocks")}
                style={{
                  color: textColor,
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontSize: "1.1rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    flex: "1",
                    textAlign: "left",
                  }}
                >
                  <small style={{ color: accentColor, fontWeight: "600" }}>
                    <i className="fas fa-chevron-left"></i> {prevText}
                  </small>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Entrada anterior
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    flex: "1",
                    textAlign: "right",
                  }}
                >
                  <small style={{ color: accentColor, fontWeight: "600" }}>
                    {nextText} <i className="fas fa-chevron-right"></i>
                  </small>
                  <p
                    style={{
                      margin: "0.5rem 0 0 0",
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    Siguiente entrada
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
