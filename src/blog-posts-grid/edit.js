import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, ColorPalette } from "@wordpress/block-editor";
import {
  PanelBody,
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionTitle,
    showTitle,
    postsPerPage,
    columns,
    showExcerpt,
    excerptLength,
    showFeaturedImage,
    showDate,
    showAuthor,
    showCategory,
    showReadMore,
    readMoreText,
    dateFormat,
    orderBy,
    order,
    backgroundColor,
    textColor,
    accentColor,
    cardStyle,
    showPagination,
    paginationStyle,
  } = attributes;

  const blockProps = useBlockProps({
    className: "blog-posts-grid-editor",
    style: {
      backgroundColor: backgroundColor,
      color: textColor,
    },
  });

  const orderByOptions = [
    { label: "Fecha", value: "date" },
    { label: "Título", value: "title" },
    { label: "Orden del menú", value: "menu_order" },
    { label: "Aleatorio", value: "rand" },
  ];

  const orderOptions = [
    { label: "Descendente", value: "DESC" },
    { label: "Ascendente", value: "ASC" },
  ];

  const cardStyleOptions = [
    { label: "Moderno", value: "modern" },
    { label: "Clásico", value: "classic" },
    { label: "Minimalista", value: "minimal" },
  ];

  const paginationStyleOptions = [
    { label: "Solo números", value: "numbers" },
    { label: "Solo flechas", value: "arrows" },
    { label: "Números y flechas", value: "both" },
  ];

  const colors = [
    { name: "White", color: "#ffffff" },
    { name: "Light Gray", color: "#f8f9fa" },
    { name: "Primary", color: "#a17a66" },
    { name: "Dark", color: "#333333" },
    { name: "Secondary", color: "#3b3430" },
    { name: "Light Blue", color: "#e3f2fd" },
    { name: "Light Green", color: "#e8f5e8" },
  ];

  // Generate sample blog posts for preview
  const samplePosts = [
    {
      id: 1,
      title: "Reforma Integral de Cocina Moderna",
      excerpt:
        "Descubre cómo transformamos esta cocina tradicional en un espacio moderno y funcional...",
      author: "ServiLucas",
      date: "15 Jul 2024",
      category: "Reformas",
      image: true,
    },
    {
      id: 2,
      title: "Instalación de Parquet en Salón",
      excerpt:
        "Proceso completo de instalación de suelo de parquet en salón principal...",
      author: "ServiLucas",
      date: "12 Jul 2024",
      category: "Suelos",
      image: true,
    },
    {
      id: 3,
      title: "Armarios Empotrados a Medida",
      excerpt:
        "Diseño y construcción de armarios empotrados personalizados para maximizar el espacio...",
      author: "ServiLucas",
      date: "10 Jul 2024",
      category: "Carpintería",
      image: true,
    },
  ];

  const displayPosts = samplePosts.slice(0, Math.min(postsPerPage, 6));

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración General", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar título de sección", "carpentry-blocks")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />

          <RangeControl
            label={__("Entradas por página", "carpentry-blocks")}
            value={postsPerPage}
            onChange={(value) => setAttributes({ postsPerPage: value })}
            min={1}
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

        <PanelBody title={__("Elementos a mostrar", "carpentry-blocks")}>
          <ToggleControl
            label={__("Imagen destacada", "carpentry-blocks")}
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />

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
            label={__("Categoría", "carpentry-blocks")}
            checked={showCategory}
            onChange={(value) => setAttributes({ showCategory: value })}
          />

          <ToggleControl
            label={__("Extracto", "carpentry-blocks")}
            checked={showExcerpt}
            onChange={(value) => setAttributes({ showExcerpt: value })}
          />

          {showExcerpt && (
            <RangeControl
              label={__("Longitud del extracto (palabras)", "carpentry-blocks")}
              value={excerptLength}
              onChange={(value) => setAttributes({ excerptLength: value })}
              min={10}
              max={50}
              step={5}
            />
          )}

          <ToggleControl
            label={__('Botón "Leer más"', "carpentry-blocks")}
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

          <SelectControl
            label={__("Orden", "carpentry-blocks")}
            value={order}
            options={orderOptions}
            onChange={(value) => setAttributes({ order: value })}
          />
        </PanelBody>

        <PanelBody title={__("Paginación", "carpentry-blocks")}>
          <ToggleControl
            label={__("Mostrar paginación", "carpentry-blocks")}
            checked={showPagination}
            onChange={(value) => setAttributes({ showPagination: value })}
          />

          {showPagination && (
            <SelectControl
              label={__("Estilo de paginación", "carpentry-blocks")}
              value={paginationStyle}
              options={paginationStyleOptions}
              onChange={(value) => setAttributes({ paginationStyle: value })}
            />
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
          }}
        >
          {showTitle && (
            <RichText
              tagName="h2"
              value={sectionTitle}
              onChange={(value) => setAttributes({ sectionTitle: value })}
              placeholder={__("Título de la sección...", "carpentry-blocks")}
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "2rem",
                color: textColor,
                textAlign: "center",
              }}
            />
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {displayPosts.map((post, index) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                {showFeaturedImage && (
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: "#f8f9fa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#666",
                      position: "relative",
                    }}
                  >
                    <i
                      className="fas fa-image"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    {showDate && (
                      <div
                        style={{
                          position: "absolute",
                          top: "15px",
                          right: "15px",
                          backgroundColor: accentColor,
                          color: "white",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }}
                      >
                        {post.date}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ padding: "1.5rem" }}>
                  {(showCategory || showAuthor) && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1rem",
                        fontSize: "0.85rem",
                        color: "#666",
                      }}
                    >
                      {showCategory && (
                        <span
                          style={{
                            backgroundColor: "rgba(161, 122, 102, 0.1)",
                            color: accentColor,
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                          }}
                        >
                          {post.category}
                        </span>
                      )}
                      {showAuthor && <span>Por {post.author}</span>}
                    </div>
                  )}

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      marginBottom: "0.8rem",
                      color: textColor,
                      lineHeight: "1.4",
                    }}
                  >
                    {post.title}
                  </h3>

                  {showExcerpt && (
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: "1.6",
                        marginBottom: showReadMore ? "1rem" : "0",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  )}

                  {showReadMore && (
                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          color: accentColor,
                          fontWeight: "600",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {readMoreText} <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {showPagination && (
            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "25px",
                }}
              >
                <span style={{ color: "#666", fontSize: "0.9rem" }}>
                  Vista previa de paginación
                </span>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: accentColor,
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#e9ecef",
                    color: "#666",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  2
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
