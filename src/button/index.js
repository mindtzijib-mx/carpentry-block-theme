import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";

function Save({ attributes }) {
  const { text, linkObject, style, size } = attributes;

  // Generar clases CSS
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

  return (
    <a
      href={linkObject.url || "#"}
      className={className}
      target={linkObject.opensInNewTab ? "_blank" : "_self"}
      rel={linkObject.opensInNewTab ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

registerBlockType(metadata.name, {
  edit: Edit,
  save: Save,
});
