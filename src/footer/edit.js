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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          <div>
            <h4>{__("Contacto", "carpentry-blocks")}</h4>
            <p>{__("Teléfono: +34 xxx xxx xxx", "carpentry-blocks")}</p>
            <p>{__("Email: info@servilucas.com", "carpentry-blocks")}</p>
          </div>
          <div>
            <h4>{__("Servicios", "carpentry-blocks")}</h4>
            <p>
              {__("Carpintería • Reformas • Instalaciones", "carpentry-blocks")}
            </p>
          </div>
          <div>
            <h4>{__("Redes Sociales", "carpentry-blocks")}</h4>
            <p>{__("Facebook • Instagram • LinkedIn", "carpentry-blocks")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
