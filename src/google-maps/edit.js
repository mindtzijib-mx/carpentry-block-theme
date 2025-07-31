import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { PanelBody, TextControl, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
  const { mapSrc, mapTitle, mapHeight } = attributes;

  const blockProps = useBlockProps({
    className: "google-maps-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Configuración del Mapa", "carpentry-blocks")}>
          <TextControl
            label={__("URL del mapa embebido", "carpentry-blocks")}
            value={mapSrc}
            onChange={(value) => setAttributes({ mapSrc: value })}
            help={__("URL del iframe de Google Maps", "carpentry-blocks")}
          />

          <TextControl
            label={__("Título del mapa", "carpentry-blocks")}
            value={mapTitle}
            onChange={(value) => setAttributes({ mapTitle: value })}
            help={__(
              "Texto alternativo y título para accesibilidad",
              "carpentry-blocks"
            )}
          />

          <RangeControl
            label={__("Altura del mapa (px)", "carpentry-blocks")}
            value={mapHeight}
            onChange={(value) => setAttributes({ mapHeight: value })}
            min={200}
            max={800}
            step={50}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "20px",
            border: "2px dashed #dee2e6",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: `${mapHeight}px`,
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "1px solid #dee2e6",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#a17a66",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                }}
              ></i>
            </div>
            <h4
              style={{
                margin: "0 0 10px 0",
                color: "#333",
                fontSize: "1.2rem",
              }}
            >
              {__("Google Maps", "carpentry-blocks")}
            </h4>
            <p
              style={{
                margin: "0",
                color: "#666",
                fontSize: "0.9rem",
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              {mapTitle}
            </p>
            <div
              style={{
                marginTop: "15px",
                fontSize: "0.8rem",
                color: "#999",
              }}
            >
              {__("Altura:", "carpentry-blocks")} {mapHeight}px
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
