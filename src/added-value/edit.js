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
        <div className="added-value-preview">
          <h3>⭐ Sección Valor Añadido</h3>
          <div className="preview-content">
            <div className="section-info">
              <p>
                <strong>Subtítulo:</strong> {sectionSubtitle}
              </p>
              <p>
                <strong>Título:</strong> {sectionTitle}
              </p>
              <p>
                <strong>Descripción:</strong> {sectionDescription}
              </p>
            </div>

            <div className="images-preview">
              <h4>📸 Imágenes</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                {mainImage && (
                  <div>
                    <small>Principal:</small>
                    <img
                      src={mainImage}
                      alt={mainImageAlt}
                      style={{ maxWidth: "100px", height: "auto" }}
                    />
                  </div>
                )}
                {circularImage && (
                  <div>
                    <small>Circular:</small>
                    <img
                      src={circularImage}
                      alt={circularImageAlt}
                      style={{ maxWidth: "100px", height: "auto" }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="features-preview">
              <h4>🔧 Características</h4>
              <div className="features-grid">
                <div className="feature-item">
                  <i className={feature1Icon}></i>
                  <strong>{feature1Title}</strong>
                </div>
                <div className="feature-item">
                  <i className={feature2Icon}></i>
                  <strong>{feature2Title}</strong>
                </div>
                <div className="feature-item">
                  <i className={feature3Icon}></i>
                  <strong>{feature3Title}</strong>
                </div>
                <div className="feature-item">
                  <i className={feature4Icon}></i>
                  <strong>{feature4Title}</strong>
                </div>
              </div>
            </div>

            <div className="services-preview">
              <h4>✅ Servicios Adicionales</h4>
              <ul>
                <li>{additionalService1}</li>
                <li>{additionalService2}</li>
              </ul>
            </div>

            <div className="buttons-preview">
              <h4>🔘 Botones</h4>
              <p>
                {contactButtonText} | {servicesButtonText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
