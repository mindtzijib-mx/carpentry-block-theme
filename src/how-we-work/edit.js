import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl, TextareaControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionSubtitle,
    sectionTitle,
    step1Number,
    step1Icon,
    step1Title,
    step1Description,
    step2Number,
    step2Icon,
    step2Title,
    step2Description,
    step3Number,
    step3Icon,
    step3Title,
    step3Description,
  } = attributes;

  const blockProps = useBlockProps({
    className: "how-we-work-editor",
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
        </PanelBody>

        <PanelBody title={__("Paso 1", "carpentry-blocks")} initialOpen={false}>
          <TextControl
            label={__("Número del Paso", "carpentry-blocks")}
            value={step1Number}
            onChange={(value) => setAttributes({ step1Number: value })}
          />
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={step1Icon}
            onChange={(value) => setAttributes({ step1Icon: value })}
            help={__(
              "Clase Font Awesome (ej: fas fa-home)",
              "carpentry-blocks"
            )}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={step1Title}
            onChange={(value) => setAttributes({ step1Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={step1Description}
            onChange={(value) => setAttributes({ step1Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody title={__("Paso 2", "carpentry-blocks")} initialOpen={false}>
          <TextControl
            label={__("Número del Paso", "carpentry-blocks")}
            value={step2Number}
            onChange={(value) => setAttributes({ step2Number: value })}
          />
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={step2Icon}
            onChange={(value) => setAttributes({ step2Icon: value })}
            help={__(
              "Clase Font Awesome (ej: fas fa-calendar-alt)",
              "carpentry-blocks"
            )}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={step2Title}
            onChange={(value) => setAttributes({ step2Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={step2Description}
            onChange={(value) => setAttributes({ step2Description: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody title={__("Paso 3", "carpentry-blocks")} initialOpen={false}>
          <TextControl
            label={__("Número del Paso", "carpentry-blocks")}
            value={step3Number}
            onChange={(value) => setAttributes({ step3Number: value })}
          />
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={step3Icon}
            onChange={(value) => setAttributes({ step3Icon: value })}
            help={__(
              "Clase Font Awesome (ej: fas fa-file-invoice-dollar)",
              "carpentry-blocks"
            )}
          />
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={step3Title}
            onChange={(value) => setAttributes({ step3Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={step3Description}
            onChange={(value) => setAttributes({ step3Description: value })}
            rows={3}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="how-we-work-preview">
          <h3>📋 Sección Cómo Trabajamos</h3>
          <div className="preview-content">
            <div className="section-info">
              <p>
                <strong>Subtítulo:</strong> {sectionSubtitle}
              </p>
              <p>
                <strong>Título:</strong> {sectionTitle}
              </p>
            </div>

            <div className="steps-preview">
              <h4>📝 Pasos del Proceso</h4>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-header">
                    <span className="step-number">{step1Number}</span>
                    <i className={step1Icon}></i>
                  </div>
                  <div className="step-content">
                    <h5>{step1Title}</h5>
                    <p>{step1Description}</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-header">
                    <span className="step-number">{step2Number}</span>
                    <i className={step2Icon}></i>
                  </div>
                  <div className="step-content">
                    <h5>{step2Title}</h5>
                    <p>{step2Description}</p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-header">
                    <span className="step-number">{step3Number}</span>
                    <i className={step3Icon}></i>
                  </div>
                  <div className="step-content">
                    <h5>{step3Title}</h5>
                    <p>{step3Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
