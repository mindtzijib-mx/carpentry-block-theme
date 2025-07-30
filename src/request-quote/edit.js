import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  RangeControl,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    formTitle,
    namePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    servicePlaceholder,
    messageePlaceholder,
    privacyText,
    privacyUrl,
    submitButtonText,
    testimonialStars,
    testimonialText,
    testimonialAuthor,
    testimonialDesignation,
    statNumber,
    statLabel,
  } = attributes;

  const blockProps = useBlockProps({
    className: "request-quote-editor",
  });

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < count ? "active" : ""}`}
        style={{ color: i < count ? "#ffd700" : "#ccc" }}
      ></i>
    ));
  };

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Configuración del Formulario", "carpentry-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Título del Formulario", "carpentry-blocks")}
            value={formTitle}
            onChange={(value) => setAttributes({ formTitle: value })}
          />
          <TextControl
            label={__("Placeholder Nombre", "carpentry-blocks")}
            value={namePlaceholder}
            onChange={(value) => setAttributes({ namePlaceholder: value })}
          />
          <TextControl
            label={__("Placeholder Email", "carpentry-blocks")}
            value={emailPlaceholder}
            onChange={(value) => setAttributes({ emailPlaceholder: value })}
          />
          <TextControl
            label={__("Placeholder Teléfono", "carpentry-blocks")}
            value={phonePlaceholder}
            onChange={(value) => setAttributes({ phonePlaceholder: value })}
          />
          <TextControl
            label={__("Placeholder Servicio", "carpentry-blocks")}
            value={servicePlaceholder}
            onChange={(value) => setAttributes({ servicePlaceholder: value })}
          />
          <TextControl
            label={__("Placeholder Mensaje", "carpentry-blocks")}
            value={messageePlaceholder}
            onChange={(value) => setAttributes({ messageePlaceholder: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Política de Privacidad", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Texto de Privacidad", "carpentry-blocks")}
            value={privacyText}
            onChange={(value) => setAttributes({ privacyText: value })}
          />
          <TextControl
            label={__("URL de Política de Privacidad", "carpentry-blocks")}
            value={privacyUrl}
            onChange={(value) => setAttributes({ privacyUrl: value })}
          />
          <TextControl
            label={__("Texto del Botón", "carpentry-blocks")}
            value={submitButtonText}
            onChange={(value) => setAttributes({ submitButtonText: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Configuración del Testimonio", "carpentry-blocks")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Número de Estrellas", "carpentry-blocks")}
            value={testimonialStars}
            onChange={(value) => setAttributes({ testimonialStars: value })}
            min={1}
            max={5}
          />
          <TextareaControl
            label={__("Texto del Testimonio", "carpentry-blocks")}
            value={testimonialText}
            onChange={(value) => setAttributes({ testimonialText: value })}
            rows={4}
          />
          <TextControl
            label={__("Nombre del Autor", "carpentry-blocks")}
            value={testimonialAuthor}
            onChange={(value) => setAttributes({ testimonialAuthor: value })}
          />
          <TextControl
            label={__("Designación del Autor", "carpentry-blocks")}
            value={testimonialDesignation}
            onChange={(value) =>
              setAttributes({ testimonialDesignation: value })
            }
          />
        </PanelBody>

        <PanelBody
          title={__("Estadística", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Número de la Estadística", "carpentry-blocks")}
            value={statNumber}
            onChange={(value) => setAttributes({ statNumber: value })}
          />
          <TextControl
            label={__("Etiqueta de la Estadística", "carpentry-blocks")}
            value={statLabel}
            onChange={(value) => setAttributes({ statLabel: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="request-quote-preview">
          <h3>📧 Sección Solicitar Presupuesto</h3>
          <div className="preview-content">
            <div className="form-preview">
              <h4>📝 Formulario de Contacto</h4>
              <div className="form-info">
                <p>
                  <strong>Título:</strong> {formTitle}
                </p>
                <p>
                  <strong>Campos:</strong> {namePlaceholder}, {emailPlaceholder}
                  , {phonePlaceholder}
                </p>
                <p>
                  <strong>Mensaje:</strong> {messageePlaceholder}
                </p>
                <p>
                  <strong>Botón:</strong> {submitButtonText}
                </p>
              </div>
            </div>

            <div className="testimonial-preview">
              <h4>⭐ Testimonio</h4>
              <div className="testimonial-info">
                <div className="stars-preview">
                  <strong>Estrellas:</strong> {renderStars(testimonialStars)}
                </div>
                <p>
                  <strong>Autor:</strong> {testimonialAuthor}{" "}
                  {testimonialDesignation}
                </p>
                <p>
                  <strong>Testimonio:</strong>{" "}
                  {testimonialText.substring(0, 100)}...
                </p>
                <p>
                  <strong>Estadística:</strong> {statNumber} - {statLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
