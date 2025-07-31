import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const {
    formTitle,
    addressTitle,
    addressText,
    phoneTitle,
    phoneText,
    phoneLink,
    emailTitle,
    emailText,
    emailLink,
    showSocialMedia,
    instagramUrl,
    linkedinUrl,
  } = attributes;

  const blockProps = useBlockProps({
    className: "contacto-section",
  });

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody
          title={__("Configuración de Contacto", "carpentry-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Enlace del teléfono (solo números)", "carpentry-blocks")}
            value={phoneLink}
            onChange={(value) => setAttributes({ phoneLink: value })}
            placeholder="910053700"
          />
          <TextControl
            label={__("Email para enlace", "carpentry-blocks")}
            value={emailLink}
            onChange={(value) => setAttributes({ emailLink: value })}
            placeholder="info@reformasservilucas.com"
          />
        </PanelBody>

        <PanelBody
          title={__("Redes Sociales", "carpentry-blocks")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Mostrar redes sociales", "carpentry-blocks")}
            checked={showSocialMedia}
            onChange={(value) => setAttributes({ showSocialMedia: value })}
          />
          {showSocialMedia && (
            <>
              <TextControl
                label={__("URL de Instagram", "carpentry-blocks")}
                value={instagramUrl}
                onChange={(value) => setAttributes({ instagramUrl: value })}
                placeholder="https://instagram.com/..."
              />
              <TextControl
                label={__("URL de LinkedIn", "carpentry-blocks")}
                value={linkedinUrl}
                onChange={(value) => setAttributes({ linkedinUrl: value })}
                placeholder="https://linkedin.com/..."
              />
            </>
          )}
        </PanelBody>
      </InspectorControls>

      <section {...blockProps}>
        <div className="container">
          <div className="contact-unified-wrapper">
            <div className="row">
              <div className="col-lg-7">
                <div className="contact-form-wrapper">
                  <RichText
                    tagName="h2"
                    className="contact-form-title"
                    value={formTitle}
                    onChange={(value) => setAttributes({ formTitle: value })}
                    placeholder={__(
                      "Contacta con nosotros",
                      "carpentry-blocks"
                    )}
                  />

                  <div className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre *"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Teléfono *"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-control" disabled>
                            <option>—Por favor, elige una opción—</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="6"
                        placeholder="Mensaje"
                        disabled
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <div className="privacy-checkbox">
                        <input type="checkbox" disabled />
                        <label>
                          He leído y acepto la política de privacidad
                        </label>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-contact-submit"
                      disabled
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="contact-info-integrated">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-info-content">
                      <RichText
                        tagName="h5"
                        value={addressTitle}
                        onChange={(value) =>
                          setAttributes({ addressTitle: value })
                        }
                        placeholder={__("Dirección", "carpentry-blocks")}
                      />
                      <RichText
                        tagName="p"
                        value={addressText}
                        onChange={(value) =>
                          setAttributes({ addressText: value })
                        }
                        placeholder={__(
                          "Escribe tu dirección aquí...",
                          "carpentry-blocks"
                        )}
                      />
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="contact-info-content">
                      <RichText
                        tagName="h5"
                        value={phoneTitle}
                        onChange={(value) =>
                          setAttributes({ phoneTitle: value })
                        }
                        placeholder={__("Teléfono", "carpentry-blocks")}
                      />
                      <RichText
                        tagName="p"
                        value={phoneText}
                        onChange={(value) =>
                          setAttributes({ phoneText: value })
                        }
                        placeholder={__("910 05 37 00", "carpentry-blocks")}
                      />
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="contact-info-content">
                      <RichText
                        tagName="h5"
                        value={emailTitle}
                        onChange={(value) =>
                          setAttributes({ emailTitle: value })
                        }
                        placeholder={__("Email", "carpentry-blocks")}
                      />
                      <RichText
                        tagName="p"
                        value={emailText}
                        onChange={(value) =>
                          setAttributes({ emailText: value })
                        }
                        placeholder={__(
                          "info@reformasservilucas.com",
                          "carpentry-blocks"
                        )}
                      />
                    </div>
                  </div>

                  {showSocialMedia && (
                    <div className="contact-social">
                      <a href="#" className="social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
