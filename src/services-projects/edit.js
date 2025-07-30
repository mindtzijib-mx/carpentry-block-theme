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
        <div className="services-projects-preview">
          <div className="services-preview">
            <h3>📋 Sección de Servicios</h3>
            <p>
              <strong>Subtítulo:</strong> {servicesSubtitle}
            </p>
            <p>
              <strong>Título:</strong> {servicesTitle}
            </p>
            <div className="services-grid">
              <div className="service-preview">
                <i className={service1Icon}></i>
                <h4>{service1Title}</h4>
              </div>
              <div className="service-preview">
                <i className={service2Icon}></i>
                <h4>{service2Title}</h4>
              </div>
              <div className="service-preview">
                <i className={service3Icon}></i>
                <h4>{service3Title}</h4>
              </div>
              <div className="service-preview">
                <i className={service4Icon}></i>
                <h4>{service4Title}</h4>
              </div>
            </div>
          </div>

          <div className="projects-preview">
            <h3>🏗️ Sección de Proyectos</h3>
            <p>
              <strong>Subtítulo:</strong> {projectsSubtitle}
            </p>
            <p>
              <strong>Título:</strong> {projectsTitle}
            </p>
            <div className="projects-grid">
              {project1Image && <img src={project1Image} alt={project1Alt} />}
              {project2Image && <img src={project2Image} alt={project2Alt} />}
              {project3Image && <img src={project3Image} alt={project3Alt} />}
              {project4Image && <img src={project4Image} alt={project4Alt} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
