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
  TextControl,
  TextareaControl,
  Button,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const {
    servicesSubtitle,
    servicesTitle,
    service1Title,
    service1Description,
    service1Icon,
    service2Title,
    service2Description,
    service2Icon,
    service3Title,
    service3Description,
    service3Icon,
    service4Title,
    service4Description,
    service4Icon,
    projectsSubtitle,
    projectsTitle,
    project1Image,
    project1Alt,
    project2Image,
    project2Alt,
    project3Image,
    project3Alt,
    project4Image,
    project4Alt,
  } = attributes;

  // Responsive design state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 992 && windowWidth > 768;
  const isDesktop = windowWidth > 992;

  // Default images
  const defaultImages = {
    project1:
      "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-64-1024x853.jpg",
    project2:
      "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-65-1024x853.jpg",
    project3:
      "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-66-1024x853.jpg",
    project4:
      "/wp-content/themes/carpentry-block-theme/images/Proyecto-nuevo-70-1024x853.jpg",
  };

  const blockProps = useBlockProps({
    className: "services-projects-editor",
  });

  return (
    <>
      <InspectorControls>
        <PanelBody
          title={__("Configuración de Servicios", "carpentry-blocks")}
          initialOpen={true}
        >
          <TextControl
            label={__("Subtítulo de Servicios", "carpentry-blocks")}
            value={servicesSubtitle}
            onChange={(value) => setAttributes({ servicesSubtitle: value })}
          />
          <TextControl
            label={__("Título de Servicios", "carpentry-blocks")}
            value={servicesTitle}
            onChange={(value) => setAttributes({ servicesTitle: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Servicio 1", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={service1Title}
            onChange={(value) => setAttributes({ service1Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={service1Description}
            onChange={(value) => setAttributes({ service1Description: value })}
            rows={3}
          />
          <TextControl
            label={__("Clase del Icono (ej: fas fa-tools)", "carpentry-blocks")}
            value={service1Icon}
            onChange={(value) => setAttributes({ service1Icon: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Servicio 2", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={service2Title}
            onChange={(value) => setAttributes({ service2Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={service2Description}
            onChange={(value) => setAttributes({ service2Description: value })}
            rows={3}
          />
          <TextControl
            label={__("Clase del Icono", "carpentry-blocks")}
            value={service2Icon}
            onChange={(value) => setAttributes({ service2Icon: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Servicio 3", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={service3Title}
            onChange={(value) => setAttributes({ service3Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={service3Description}
            onChange={(value) => setAttributes({ service3Description: value })}
            rows={3}
          />
          <TextControl
            label={__("Clase del Icono", "carpentry-blocks")}
            value={service3Icon}
            onChange={(value) => setAttributes({ service3Icon: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Servicio 4", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Título", "carpentry-blocks")}
            value={service4Title}
            onChange={(value) => setAttributes({ service4Title: value })}
          />
          <TextareaControl
            label={__("Descripción", "carpentry-blocks")}
            value={service4Description}
            onChange={(value) => setAttributes({ service4Description: value })}
            rows={3}
          />
          <TextControl
            label={__("Clase del Icono", "carpentry-blocks")}
            value={service4Icon}
            onChange={(value) => setAttributes({ service4Icon: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Configuración de Proyectos", "carpentry-blocks")}
          initialOpen={false}
        >
          <TextControl
            label={__("Subtítulo de Proyectos", "carpentry-blocks")}
            value={projectsSubtitle}
            onChange={(value) => setAttributes({ projectsSubtitle: value })}
          />
          <TextControl
            label={__("Título de Proyectos", "carpentry-blocks")}
            value={projectsTitle}
            onChange={(value) => setAttributes({ projectsTitle: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Proyecto 1", "carpentry-blocks")}
          initialOpen={false}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ project1Image: media.url })}
              allowedTypes={["image"]}
              value={project1Image}
              render={({ open }) => (
                <div>
                  {project1Image ? (
                    <div>
                      <img
                        src={project1Image}
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
            value={project1Alt}
            onChange={(value) => setAttributes({ project1Alt: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Proyecto 2", "carpentry-blocks")}
          initialOpen={false}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ project2Image: media.url })}
              allowedTypes={["image"]}
              value={project2Image}
              render={({ open }) => (
                <div>
                  {project2Image ? (
                    <div>
                      <img
                        src={project2Image}
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
            value={project2Alt}
            onChange={(value) => setAttributes({ project2Alt: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Proyecto 3", "carpentry-blocks")}
          initialOpen={false}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ project3Image: media.url })}
              allowedTypes={["image"]}
              value={project3Image}
              render={({ open }) => (
                <div>
                  {project3Image ? (
                    <div>
                      <img
                        src={project3Image}
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
            value={project3Alt}
            onChange={(value) => setAttributes({ project3Alt: value })}
          />
        </PanelBody>

        <PanelBody
          title={__("Proyecto 4", "carpentry-blocks")}
          initialOpen={false}
        >
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => setAttributes({ project4Image: media.url })}
              allowedTypes={["image"]}
              value={project4Image}
              render={({ open }) => (
                <div>
                  {project4Image ? (
                    <div>
                      <img
                        src={project4Image}
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
            value={project4Alt}
            onChange={(value) => setAttributes({ project4Alt: value })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <section className="services-projects-section">
          {/* Services Section */}
          <div className="services-wrapper">
            <div className="container">
              <div className="services-header text-center">
                <RichText
                  allowedFormats={["core/bold", "core/italic"]}
                  tagName="div"
                  className="section-subtitle"
                  value={servicesSubtitle}
                  onChange={(value) =>
                    setAttributes({ servicesSubtitle: value })
                  }
                  placeholder={__(
                    "Subtítulo de servicios...",
                    "carpentry-blocks"
                  )}
                />

                <RichText
                  allowedFormats={["core/bold", "core/italic"]}
                  tagName="h2"
                  className="section-title"
                  value={servicesTitle}
                  onChange={(value) => setAttributes({ servicesTitle: value })}
                  placeholder={__("Título de servicios...", "carpentry-blocks")}
                />

                <div className="services-navigation">
                  <button className="nav-arrow nav-prev">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="nav-arrow nav-next">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon">
                    <i className={service1Icon}></i>
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="service-title-home"
                    value={service1Title}
                    onChange={(value) =>
                      setAttributes({ service1Title: value })
                    }
                    placeholder={__(
                      "Título del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="service-description"
                    value={service1Description}
                    onChange={(value) =>
                      setAttributes({ service1Description: value })
                    }
                    placeholder={__(
                      "Descripción del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <div className="service-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <i className={service2Icon}></i>
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="service-title-home"
                    value={service2Title}
                    onChange={(value) =>
                      setAttributes({ service2Title: value })
                    }
                    placeholder={__(
                      "Título del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="service-description"
                    value={service2Description}
                    onChange={(value) =>
                      setAttributes({ service2Description: value })
                    }
                    placeholder={__(
                      "Descripción del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <div className="service-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <i className={service3Icon}></i>
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="service-title-home"
                    value={service3Title}
                    onChange={(value) =>
                      setAttributes({ service3Title: value })
                    }
                    placeholder={__(
                      "Título del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="service-description"
                    value={service3Description}
                    onChange={(value) =>
                      setAttributes({ service3Description: value })
                    }
                    placeholder={__(
                      "Descripción del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <div className="service-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>

                <div className="service-card">
                  <div className="service-icon">
                    <i className={service4Icon}></i>
                  </div>
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="h3"
                    className="service-title-home"
                    value={service4Title}
                    onChange={(value) =>
                      setAttributes({ service4Title: value })
                    }
                    placeholder={__(
                      "Título del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <RichText
                    allowedFormats={["core/bold", "core/italic"]}
                    tagName="p"
                    className="service-description"
                    value={service4Description}
                    onChange={(value) =>
                      setAttributes({ service4Description: value })
                    }
                    placeholder={__(
                      "Descripción del servicio...",
                      "carpentry-blocks"
                    )}
                  />
                  <div className="service-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="projects-wrapper">
            <div className="container">
              <div className="projects-header text-center">
                <RichText
                  allowedFormats={["core/bold", "core/italic"]}
                  tagName="div"
                  className="section-subtitle text-white"
                  value={projectsSubtitle}
                  onChange={(value) =>
                    setAttributes({ projectsSubtitle: value })
                  }
                  placeholder={__(
                    "Subtítulo de proyectos...",
                    "carpentry-blocks"
                  )}
                />

                <RichText
                  allowedFormats={["core/bold", "core/italic"]}
                  tagName="h2"
                  className="section-title text-white"
                  value={projectsTitle}
                  onChange={(value) => setAttributes({ projectsTitle: value })}
                  placeholder={__("Título de proyectos...", "carpentry-blocks")}
                />
              </div>

              <div className="projects-grid">
                <div className="project-item">
                  <img
                    src={project1Image || defaultImages.project1}
                    alt={project1Alt}
                    className="img-fluid"
                  />
                </div>
                <div className="project-item">
                  <img
                    src={project2Image || defaultImages.project2}
                    alt={project2Alt}
                    className="img-fluid"
                  />
                </div>
                <div className="project-item">
                  <img
                    src={project3Image || defaultImages.project3}
                    alt={project3Alt}
                    className="img-fluid"
                  />
                </div>
                <div className="project-item">
                  <img
                    src={project4Image || defaultImages.project4}
                    alt={project4Alt}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
