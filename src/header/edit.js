import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit() {
  const blockProps = useBlockProps({
    className: "carpentry-header-block-preview",
  });

  return (
    <div {...blockProps}>
      <div
        style={{
          background: "#3b3430",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#fff" }}>
          {__("Carpentry Header", "carpentry-blocks")}
        </h3>
        <p style={{ margin: "0", color: "#ccc", fontSize: "14px" }}>
          {__(
            "Header profesional con navegación, contacto y búsqueda. Este bloque se renderiza dinámicamente en el frontend.",
            "carpentry-blocks"
          )}
        </p>
      </div>
    </div>
  );
}
