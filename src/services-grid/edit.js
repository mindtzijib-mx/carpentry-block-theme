import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, ColorPalette } from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  SelectControl,
  RangeControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionTitle,
    sectionSubtitle,
    showTitle,
    showSubtitle,
    postsPerPage,
    columns,
    cardStyle,
    showExcerpt,
    showReadMore,
    readMoreText,
    showPagination,
    backgroundColor,
    textColor,
    accentColor,
    orderBy,
    order,
  } = attributes;

  const blockProps = useBlockProps({
    className: "services-grid-editor",
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

  const cardStyleOptions = [
    { label: __("Moderno", "carpentry-blocks"), value: "modern" },
    { label: __("Clásico", "carpentry-blocks"), value: "classic" },
    { label: __("Minimalista", "carpentry-blocks"), value: "minimal" },
  ];

  const orderByOptions = [
    {
      label: __("Orden personalizado", "carpentry-blocks"),
      value: "menu_order",
    },
    { label: __("Fecha", "carpentry-blocks"), value: "date" },
    { label: __("Título", "carpentry-blocks"), value: "title" },
    { label: __("Aleatorio", "carpentry-blocks"), value: "rand" },
  ];

  const orderOptions = [
    { label: __("Ascendente", "carpentry-blocks"), value: "ASC" },
    { label: __("Descendente", "carpentry-blocks"), value: "DESC" },
  ];

  // Mock services data for preview
  const mockServices = [
    {
      id: 1,
      title: "Reformas Integrales",
      excerpt: "Transformamos tu hogar con reformas completas y profesionales.",
      image:
        "/wp-content/themes/carpentry-block-theme/images/RSL_Servicios_1200_X_1000_Reformas-600x430.jpg",
      icon: "fas fa-home",
    },
    {
      id: 2,
      title: "Instalaciones Eléctricas",
      excerpt: "Servicios eléctricos profesionales con todas las garantías.",
      image:
        "/wp-content/themes/carpentry-block-theme/images/RSL_Servicios_1200_X_1000_Electricidad-600x430.jpg",
      icon: "fas fa-bolt",
    },
    {
      id: 3,
      title: "Tabiquería Seca",
      excerpt: "Divisiones y estructuras con sistemas de tabiquería moderna.",
      image:
        "/wp-content/themes/carpentry-block-theme/images/RSL_Servicios_1200_X_1000_Tabiqueria-600x430.jpg",
      icon: "fas fa-tools",
    },
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración del Título", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar título", "carpentry-blocks")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />

          <ToggleControl
            label={__("Mostrar subtítulo", "carpentry-blocks")}
            checked={showSubtitle}
            onChange={(value) => setAttributes({ showSubtitle: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Configuración de la Cuadrícula", "carpentry-blocks")}
        >
          <RangeControl
            label={__("Servicios por página", "carpentry-blocks")}
            value={postsPerPage}
            onChange={(value) => setAttributes({ postsPerPage: value })}
            min={3}
            max={12}
            step={1}
          />

          <RangeControl
            label={__("Columnas", "carpentry-blocks")}
            value={columns}
            onChange={(value) => setAttributes({ columns: value })}
            min={1}
            max={4}
            step={1}
          />

          <SelectControl
            label={__("Estilo de tarjeta", "carpentry-blocks")}
            value={cardStyle}
            options={cardStyleOptions}
            onChange={(value) => setAttributes({ cardStyle: value })}
          />
        </PanelBody>

        <PanelBody title={__("Contenido de las Tarjetas", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar descripción", "carpentry-blocks")}
            checked={showExcerpt}
            onChange={(value) => setAttributes({ showExcerpt: value })}
          />

          <ToggleControl
            label={__('Mostrar botón "Leer más"', "carpentry-blocks")}
            checked={showReadMore}
            onChange={(value) => setAttributes({ showReadMore: value })}
          />

          {showReadMore && (
            <TextControl
              label={__("Texto del botón", "carpentry-blocks")}
              value={readMoreText}
              onChange={(value) => setAttributes({ readMoreText: value })}
            />
          )}
        </PanelBody>

        <PanelBody title={__("Ordenación", "carpentry-blocks")}>
          <SelectControl
            label={__("Ordenar por", "carpentry-blocks")}
            value={orderBy}
            options={orderByOptions}
            onChange={(value) => setAttributes({ orderBy: value })}
          />

          {orderBy !== "rand" && (
            <SelectControl
              label={__("Orden", "carpentry-blocks")}
              value={order}
              options={orderOptions}
              onChange={(value) => setAttributes({ order: value })}
            />
          )}
        </PanelBody>

        <PanelBody title={__("Paginación", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar paginación", "carpentry-blocks")}
            checked={showPagination}
            onChange={(value) => setAttributes({ showPagination: value })}
          />
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
            backgroundColor: backgroundColor,
          }}
        >
          {/* Header Section */}
          {(showTitle || showSubtitle) && (
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              {showTitle && (
                <RichText
                  tagName="h2"
                  value={sectionTitle}
                  onChange={(value) => setAttributes({ sectionTitle: value })}
                  placeholder={__(
                    "Título de la sección...",
                    "carpentry-blocks"
                  )}
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    color: accentColor,
                    fontFamily: "Viga, sans-serif",
                  }}
                />
              )}

              {showSubtitle && (
                <RichText
                  tagName="p"
                  value={sectionSubtitle}
                  onChange={(value) =>
                    setAttributes({ sectionSubtitle: value })
                  }
                  placeholder={__(
                    "Subtítulo de la sección...",
                    "carpentry-blocks"
                  )}
                  style={{
                    fontSize: "1.2rem",
                    color: "#666",
                    marginBottom: "0",
                  }}
                />
              )}
            </div>
          )}

          {/* Preview Notice */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              padding: "1rem",
              backgroundColor: "rgba(161, 122, 102, 0.1)",
              borderRadius: "8px",
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
            <strong>Vista previa del grid de servicios</strong>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "0.9rem",
                color: "#666",
              }}
            >
              Configuración: {postsPerPage} servicios, {columns} columnas,
              estilo {cardStyle}
            </p>
          </div>

          {/* Services Grid Preview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {mockServices
              .slice(0, Math.min(postsPerPage, 3))
              .map((service, index) => (
                <div
                  key={service.id}
                  style={{
                    backgroundColor:
                      cardStyle === "minimal" ? "transparent" : "#fff",
                    borderRadius: cardStyle === "classic" ? "4px" : "12px",
                    overflow: "hidden",
                    boxShadow:
                      cardStyle === "minimal"
                        ? "none"
                        : "0 4px 12px rgba(0,0,0,0.1)",
                    border: cardStyle === "minimal" ? "1px solid #eee" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Service Image */}
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        width: "50px",
                        height: "50px",
                        backgroundColor: accentColor,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      <i className={service.icon}></i>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "1rem",
                        color: textColor,
                        fontFamily: "Viga, sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    {showExcerpt && (
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                          color: "#666",
                          marginBottom: showReadMore ? "1.5rem" : "0",
                        }}
                      >
                        {service.excerpt}
                      </p>
                    )}

                    {showReadMore && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: accentColor,
                          fontWeight: "600",
                          fontSize: "0.9rem",
                        }}
                      >
                        {readMoreText}
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination Preview */}
          {showPagination && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                « Anterior
              </div>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: accentColor,
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                1
              </div>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                2
              </div>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                  fontSize: "0.9rem",
                  color: "#666",
                }}
              >
                Siguiente »
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
