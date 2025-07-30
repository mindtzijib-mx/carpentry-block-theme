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
  Button,
  RangeControl,
  TextControl,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const {
    backgroundImage,
    backgroundImageAlt,
    mainText,
    buttonText,
    buttonUrl,
    overlayOpacity,
  } = attributes;

  const blockProps = useBlockProps({
    className: "cta-casa-suenos-block",
  });

  const onSelectImage = (media) => {
    setAttributes({
      backgroundImage: media.url,
      backgroundImageAlt: media.alt || "Casa de sueños",
    });
  };

  const removeImage = () => {
    setAttributes({
      backgroundImage: "",
      backgroundImageAlt: "Casa de sueños",
    });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody
          title={__("Configuración de Imagen", "carpentry-blocks")}
          initialOpen={true}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={backgroundImage}
              render={({ open }) => (
                <Button
                  className={
                    backgroundImage
                      ? "editor-post-featured-image__preview"
                      : "editor-post-featured-image__toggle"
                  }
                  onClick={open}
                >
                  {backgroundImage
                    ? __("Cambiar imagen", "carpentry-blocks")
                    : __("Seleccionar imagen de fondo", "carpentry-blocks")}
                </Button>
              )}
            />
          </MediaUploadCheck>
          {backgroundImage && (
            <Button onClick={removeImage} isLink isDestructive>
              {__("Eliminar imagen", "carpentry-blocks")}
            </Button>
          )}
          <TextControl
            label={__("Texto alternativo de la imagen", "carpentry-blocks")}
            value={backgroundImageAlt}
            onChange={(value) => setAttributes({ backgroundImageAlt: value })}
          />
          <RangeControl
            label={__("Opacidad del overlay", "carpentry-blocks")}
            value={overlayOpacity}
            onChange={(value) => setAttributes({ overlayOpacity: value })}
            min={0}
            max={1}
            step={0.1}
          />
        </PanelBody>
        <PanelBody
          title={__("Configuración del Botón", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("URL del botón", "carpentry-blocks")}
            value={buttonUrl}
            onChange={(value) => setAttributes({ buttonUrl: value })}
            placeholder="/contacto"
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          className="cta-casa-suenos-content"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "none",
            "--overlay-opacity": overlayOpacity,
          }}
        >
          <div className="cta-casa-suenos-overlay"></div>
          <div className="container">
            <div className="cta-casa-suenos-inner">
              <RichText
                tagName="h2"
                className="cta-casa-suenos-title"
                value={mainText}
                onChange={(value) => setAttributes({ mainText: value })}
                placeholder={__(
                  "Escribe el mensaje principal...",
                  "carpentry-blocks"
                )}
                allowedFormats={["core/bold", "core/italic"]}
              />
              <div className="cta-casa-suenos-button-wrapper">
                <RichText
                  tagName="span"
                  className="btn btn-primary cta-casa-suenos-button"
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  placeholder={__("Texto del botón...", "carpentry-blocks")}
                  allowedFormats={[]}
                />
              </div>
            </div>
          </div>
        </div>
        {!backgroundImage && (
          <div className="cta-casa-suenos-placeholder">
            <p>
              {__(
                "Selecciona una imagen de fondo desde el panel lateral",
                "carpentry-blocks"
              )}
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
}
