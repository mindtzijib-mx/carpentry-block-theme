import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div
        style={{
          background: "#2c3e50",
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h3>{__("Footer de ServiLucas", "carpentry-blocks")}</h3>
        <p>
          {__(
            "Este es el footer del sitio web. Será renderizado desde el servidor.",
            "carpentry-blocks"
          )}
        </p>
      </div>
    </div>
  );
}
