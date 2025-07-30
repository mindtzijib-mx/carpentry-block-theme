import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const {
    sectionImage,
    sectionImageAlt,
    sectionSubtitle,
    sectionTitle,
    paragraph1,
    paragraph2,
    stat1Icon,
    stat1Number,
    stat1Label,
    stat2Icon,
    stat2Number,
    stat2Label,
    servicesButtonText,
    servicesButtonUrl,
    contactEmail,
    contactPhone,
    contactPhoneLink,
  } = attributes;

  const blockProps = useBlockProps({
    className: "professional-experts-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Imagen de Sección", "carpentry-blocks")}
          initialOpen={true}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ sectionImage: media.url })}
              allowedTypes={["image"]}
              value={sectionImage}
              render={({ open }) => (
                <div>
                  {sectionImage ? (
                    <div>
                      <img
                        src={sectionImage}
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
                      {__("Seleccionar Imagen", "carpentry-blocks")}
                    </Button>
                  )}
                </div>
              )}
            />
          </MediaUploadCheck>
          <TextControl
            label={__("Texto Alternativo", "carpentry-blocks")}
            value={sectionImageAlt}
            onChange={(value) => setAttributes({ sectionImageAlt: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Contenido de Sección", "carpentry-blocks")}
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
            label={__("Primer Párrafo", "carpentry-blocks")}
            value={paragraph1}
            onChange={(value) => setAttributes({ paragraph1: value })}
            rows={3}
          />
          <TextareaControl
            label={__("Segundo Párrafo", "carpentry-blocks")}
            value={paragraph2}
            onChange={(value) => setAttributes({ paragraph2: value })}
            rows={3}
          />
        </PanelBody>

        <PanelBody
          title={__("Estadísticas", "carpentry-blocks")}
          initialOpen={false}
        >
          <h4>{__("Estadística 1", "carpentry-blocks")}</h4>
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={stat1Icon}
            onChange={(value) => setAttributes({ stat1Icon: value })}
            help={__(
              "Clase Font Awesome (ej: fas fa-tools)",
              "carpentry-blocks"
            )}
          />
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

          <h4 style={{ marginTop: "20px" }}>
            {__("Estadística 2", "carpentry-blocks")}
          </h4>
          <TextControl
            label={__("Icono", "carpentry-blocks")}
            value={stat2Icon}
            onChange={(value) => setAttributes({ stat2Icon: value })}
            help={__(
              "Clase Font Awesome (ej: fas fa-users)",
              "carpentry-blocks"
            )}
          />
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
        </PanelBody>

        <PanelBody
          title={__("Botones y Contacto", "carpentry-blocks")}
          initialOpen={false}
        >
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
          <TextControl
            label={__("Email de Contacto", "carpentry-blocks")}
            value={contactEmail}
            onChange={(value) => setAttributes({ contactEmail: value })}
          />
          <TextControl
            label={__("Teléfono (Mostrar)", "carpentry-blocks")}
            value={contactPhone}
            onChange={(value) => setAttributes({ contactPhone: value })}
          />
          <TextControl
            label={__("Teléfono (Enlace)", "carpentry-blocks")}
            value={contactPhoneLink}
            onChange={(value) => setAttributes({ contactPhoneLink: value })}
            help={__("Solo números para el enlace tel:", "carpentry-blocks")}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="professional-experts-preview">
          <h3>👥 Sección Expertos Profesionales</h3>
          <div className="preview-content">
            <div className="image-preview">
              <h4>📸 Imagen</h4>
              {sectionImage ? (
                <img
                  src={sectionImage}
                  alt={sectionImageAlt}
                  style={{ maxWidth: "150px", height: "auto" }}
                />
              ) : (
                <p>Sin imagen seleccionada</p>
              )}
            </div>

            <div className="content-preview">
              <h4>📝 Contenido</h4>
              <p>
                <strong>Subtítulo:</strong> {sectionSubtitle}
              </p>
              <p>
                <strong>Título:</strong> {sectionTitle}
              </p>
              <p>
                <strong>Párrafo 1:</strong> {paragraph1.substring(0, 80)}...
              </p>
              <p>
                <strong>Párrafo 2:</strong> {paragraph2.substring(0, 80)}...
              </p>
            </div>

            <div className="stats-preview">
              <h4>📊 Estadísticas</h4>
              <div className="stats-grid">
                <div className="stat-item">
                  <i className={stat1Icon}></i>
                  <strong>{stat1Number}</strong>
                  <span>{stat1Label}</span>
                </div>
                <div className="stat-item">
                  <i className={stat2Icon}></i>
                  <strong>{stat2Number}</strong>
                  <span>{stat2Label}</span>
                </div>
              </div>
            </div>

            <div className="actions-preview">
              <h4>🔘 Acciones</h4>
              <p>
                <strong>Botón:</strong> {servicesButtonText}
              </p>
              <p>
                <strong>Email:</strong> {contactEmail}
              </p>
              <p>
                <strong>Teléfono:</strong> {contactPhone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
