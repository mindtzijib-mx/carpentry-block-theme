import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { PanelBody, SelectControl, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionTitle,
    sectionSubtitle,
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
    testimonial1Name,
    testimonial1Text,
    testimonial1Rating,
    testimonial2Name,
    testimonial2Text,
    testimonial2Rating,
  } = attributes;

  const blockProps = useBlockProps({
    className: "valor-anadido-nosotros-editor",
  });

  const iconOptions = [
    { label: "Clock", value: "fas fa-clock" },
    { label: "Shield", value: "fas fa-shield-alt" },
    { label: "Tools", value: "fas fa-tools" },
    { label: "Users", value: "fas fa-users" },
    { label: "Star", value: "fas fa-star" },
    { label: "Heart", value: "fas fa-heart" },
    { label: "Award", value: "fas fa-award" },
    { label: "Thumbs Up", value: "fas fa-thumbs-up" },
    { label: "Check Circle", value: "fas fa-check-circle" },
    { label: "Cog", value: "fas fa-cog" },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? "#ffc107" : "#e9ecef",
          fontSize: "1.2rem",
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Iconos de Características", "carpentry-blocks")}>
          <SelectControl
            label={__("Icono Característica 1", "carpentry-blocks")}
            value={feature1Icon}
            options={iconOptions}
            onChange={(value) => setAttributes({ feature1Icon: value })}
          />
          <SelectControl
            label={__("Icono Característica 2", "carpentry-blocks")}
            value={feature2Icon}
            options={iconOptions}
            onChange={(value) => setAttributes({ feature2Icon: value })}
          />
          <SelectControl
            label={__("Icono Característica 3", "carpentry-blocks")}
            value={feature3Icon}
            options={iconOptions}
            onChange={(value) => setAttributes({ feature3Icon: value })}
          />
          <SelectControl
            label={__("Icono Característica 4", "carpentry-blocks")}
            value={feature4Icon}
            options={iconOptions}
            onChange={(value) => setAttributes({ feature4Icon: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Valoraciones de Testimonios", "carpentry-blocks")}
        >
          <RangeControl
            label={__("Valoración Testimonio 1", "carpentry-blocks")}
            value={testimonial1Rating}
            onChange={(value) => setAttributes({ testimonial1Rating: value })}
            min={1}
            max={5}
          />
          <RangeControl
            label={__("Valoración Testimonio 2", "carpentry-blocks")}
            value={testimonial2Rating}
            onChange={(value) => setAttributes({ testimonial2Rating: value })}
            min={1}
            max={5}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "60px 20px",
            backgroundColor: "#f8f9fa",
            border: "2px dashed #dee2e6",
            borderRadius: "8px",
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <RichText
              tagName="p"
              value={sectionSubtitle}
              onChange={(value) => setAttributes({ sectionSubtitle: value })}
              placeholder={__("Subtítulo de la sección...", "carpentry-blocks")}
              style={{
                color: "#a17a66",
                fontSize: "1rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "15px",
              }}
            />
            <RichText
              tagName="h2"
              value={sectionTitle}
              onChange={(value) => setAttributes({ sectionTitle: value })}
              placeholder={__("Título de la sección...", "carpentry-blocks")}
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "0",
              }}
            />
          </div>

          {/* Features Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#a17a66",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                }}
              >
                <i className={feature1Icon}></i>
              </div>
              <RichText
                tagName="h3"
                value={feature1Title}
                onChange={(value) => setAttributes({ feature1Title: value })}
                placeholder={__("Título característica...", "carpentry-blocks")}
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              />
              <RichText
                tagName="p"
                value={feature1Description}
                onChange={(value) =>
                  setAttributes({ feature1Description: value })
                }
                placeholder={__("Descripción...", "carpentry-blocks")}
                style={{
                  color: "#6c757d",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              />
            </div>

            {/* Feature 2 */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#a17a66",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                }}
              >
                <i className={feature2Icon}></i>
              </div>
              <RichText
                tagName="h3"
                value={feature2Title}
                onChange={(value) => setAttributes({ feature2Title: value })}
                placeholder={__("Título característica...", "carpentry-blocks")}
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              />
              <RichText
                tagName="p"
                value={feature2Description}
                onChange={(value) =>
                  setAttributes({ feature2Description: value })
                }
                placeholder={__("Descripción...", "carpentry-blocks")}
                style={{
                  color: "#6c757d",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              />
            </div>

            {/* Feature 3 */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#a17a66",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                }}
              >
                <i className={feature3Icon}></i>
              </div>
              <RichText
                tagName="h3"
                value={feature3Title}
                onChange={(value) => setAttributes({ feature3Title: value })}
                placeholder={__("Título característica...", "carpentry-blocks")}
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              />
              <RichText
                tagName="p"
                value={feature3Description}
                onChange={(value) =>
                  setAttributes({ feature3Description: value })
                }
                placeholder={__("Descripción...", "carpentry-blocks")}
                style={{
                  color: "#6c757d",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              />
            </div>

            {/* Feature 4 */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "#a17a66",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: "2rem",
                }}
              >
                <i className={feature4Icon}></i>
              </div>
              <RichText
                tagName="h3"
                value={feature4Title}
                onChange={(value) => setAttributes({ feature4Title: value })}
                placeholder={__("Título característica...", "carpentry-blocks")}
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#2c3e50",
                }}
              />
              <RichText
                tagName="p"
                value={feature4Description}
                onChange={(value) =>
                  setAttributes({ feature4Description: value })
                }
                placeholder={__("Descripción...", "carpentry-blocks")}
                style={{
                  color: "#6c757d",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {/* Testimonial 1 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                borderLeft: "4px solid #a17a66",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                {renderStars(testimonial1Rating)}
              </div>
              <RichText
                tagName="p"
                value={testimonial1Text}
                onChange={(value) => setAttributes({ testimonial1Text: value })}
                placeholder={__("Texto del testimonio...", "carpentry-blocks")}
                style={{
                  fontStyle: "italic",
                  color: "#495057",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              />
              <RichText
                tagName="p"
                value={testimonial1Name}
                onChange={(value) => setAttributes({ testimonial1Name: value })}
                placeholder={__("Nombre del cliente...", "carpentry-blocks")}
                style={{
                  fontWeight: "600",
                  color: "#a17a66",
                  margin: "0",
                }}
              />
            </div>

            {/* Testimonial 2 */}
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                borderLeft: "4px solid #a17a66",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                {renderStars(testimonial2Rating)}
              </div>
              <RichText
                tagName="p"
                value={testimonial2Text}
                onChange={(value) => setAttributes({ testimonial2Text: value })}
                placeholder={__("Texto del testimonio...", "carpentry-blocks")}
                style={{
                  fontStyle: "italic",
                  color: "#495057",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              />
              <RichText
                tagName="p"
                value={testimonial2Name}
                onChange={(value) => setAttributes({ testimonial2Name: value })}
                placeholder={__("Nombre del cliente...", "carpentry-blocks")}
                style={{
                  fontWeight: "600",
                  color: "#a17a66",
                  margin: "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
