import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
  BlockControls,
  __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
  PanelBody,
  ToolbarGroup,
  ToolbarButton,
  Popover,
  SelectControl,
  Button,
} from "@wordpress/components";
import { link } from "@wordpress/icons";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { text, linkObject, style, size } = attributes;
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);

  const handleTextChange = (newText) => {
    setAttributes({ text: newText });
  };

  const handleLinkChange = (newLink) => {
    setAttributes({ linkObject: newLink });
  };

  const toggleLinkPicker = () => {
    setIsLinkPickerVisible((prev) => !prev);
  };

  // Definir estilos disponibles basados en el tema carpentry
  const buttonStyles = [
    { label: __("Primario", "carpentry-blocks"), value: "primary" },
    { label: __("Secundario", "carpentry-blocks"), value: "secondary" },
    { label: __("Hero", "carpentry-blocks"), value: "hero" },
    { label: __("Outline", "carpentry-blocks"), value: "outline" },
  ];

  const buttonSizes = [
    { label: __("Pequeño", "carpentry-blocks"), value: "small" },
    { label: __("Mediano", "carpentry-blocks"), value: "medium" },
    { label: __("Grande", "carpentry-blocks"), value: "large" },
  ];

  // Generar clases CSS basadas en los estilos del tema
  const getButtonClass = () => {
    let className = "carpentry-button";

    switch (style) {
      case "primary":
        className += " btn-primary-custom";
        break;
      case "secondary":
        className += " btn-dark-custom";
        break;
      case "hero":
        className += " btn-hero-modern";
        break;
      case "outline":
        className += " btn-outline-custom";
        break;
      default:
        className += " btn-primary-custom";
    }

    switch (size) {
      case "small":
        className += " btn-sm";
        break;
      case "large":
        className += " btn-lg";
        break;
      default:
        // medium es el tamaño por defecto
        break;
    }

    return className;
  };

  // Estilos inline para el preview en el editor
  const getInlineStyles = () => {
    let styles = {
      display: "inline-block",
      padding: "12px 24px",
      borderRadius: "25px",
      textDecoration: "none",
      fontWeight: "500",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
    };

    switch (style) {
      case "primary":
        styles.backgroundColor = "#a17a66";
        styles.color = "#fff";
        break;
      case "secondary":
        styles.backgroundColor = "#3b3430";
        styles.color = "#fff";
        break;
      case "hero":
        styles.backgroundColor = "#a17a66";
        styles.color = "#fff";
        styles.boxShadow = "0 8px 25px rgba(161, 122, 102, 0.2)";
        break;
      case "outline":
        styles.backgroundColor = "transparent";
        styles.color = "#a17a66";
        styles.border = "2px solid #a17a66";
        break;
      default:
        styles.backgroundColor = "#a17a66";
        styles.color = "#fff";
    }

    switch (size) {
      case "small":
        styles.padding = "8px 16px";
        styles.fontSize = "14px";
        break;
      case "large":
        styles.padding = "16px 32px";
        styles.fontSize = "18px";
        break;
      default:
        styles.fontSize = "16px";
    }

    return styles;
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton icon={link} onClick={toggleLinkPicker} />
        </ToolbarGroup>
      </BlockControls>

      <InspectorControls>
        <PanelBody title={__("Configuración del Botón", "carpentry-blocks")}>
          <SelectControl
            label={__("Estilo", "carpentry-blocks")}
            value={style}
            options={buttonStyles}
            onChange={(newStyle) => setAttributes({ style: newStyle })}
          />
          <SelectControl
            label={__("Tamaño", "carpentry-blocks")}
            value={size}
            options={buttonSizes}
            onChange={(newSize) => setAttributes({ size: newSize })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <RichText
          allowedFormats={[]}
          tagName="a"
          className={getButtonClass()}
          style={getInlineStyles()}
          value={text}
          onChange={handleTextChange}
          placeholder={__("Texto del botón...", "carpentry-blocks")}
        />

        {isLinkPickerVisible && (
          <Popover
            position="middle center"
            onFocusOutside={() => setIsLinkPickerVisible(false)}
          >
            <LinkControl
              settings={[]}
              value={linkObject}
              onChange={handleLinkChange}
            />
            <Button
              variant="primary"
              onClick={() => setIsLinkPickerVisible(false)}
              style={{ display: "block", width: "100%", marginTop: "10px" }}
            >
              {__("Confirmar Enlace", "carpentry-blocks")}
            </Button>
          </Popover>
        )}
      </div>
    </>
  );
}
