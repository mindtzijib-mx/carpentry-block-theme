<?php
/**
 * Render template for Services & Projects Block
 *
 * @package CarpentryBlocks
 */

$services_subtitle = $attributes['servicesSubtitle'] ?? 'NUESTROS SERVICIOS';
$services_title = $attributes['servicesTitle'] ?? 'Servicios integrales y de la máxima calidad';

$service1_title = $attributes['service1Title'] ?? 'Mantenimiento';
$service1_description = $attributes['service1Description'] ?? 'Nuestros servicios integrales son clave para garantizar la operatividad continua de los sistemas e infraestructuras esenciales de su empresa.';
$service1_icon = $attributes['service1Icon'] ?? 'fas fa-tools';

$service2_title = $attributes['service2Title'] ?? 'Reformas';
$service2_description = $attributes['service2Description'] ?? 'Transformamos tu hogar o negocio con reformas completas que incluyen diseño, planificación y ejecución, adaptándonos a tus gustos y necesidades.';
$service2_icon = $attributes['service2Icon'] ?? 'fas fa-home';

$service3_title = $attributes['service3Title'] ?? 'Tabiquería';
$service3_description = $attributes['service3Description'] ?? 'Realizamos todo tipo de estructuras en pladur garantizando seguridad y eficiencia en cada proyecto.';
$service3_icon = $attributes['service3Icon'] ?? 'fas fa-hammer';

$service4_title = $attributes['service4Title'] ?? 'Electricidad';
$service4_description = $attributes['service4Description'] ?? 'Desde la actualización de sistemas eléctricos hasta la instalación de iluminación y soluciones de ahorro energético, nos aseguramos de que todo funcione de manera segura y eficiente.';
$service4_icon = $attributes['service4Icon'] ?? 'fas fa-bolt';

$projects_subtitle = $attributes['projectsSubtitle'] ?? 'ÚLTIMOS PROYECTOS';
$projects_title = $attributes['projectsTitle'] ?? 'Compromiso de calidad en cada uno de nuestros trabajos';

$project1_image = $attributes['project1Image'] ?? '';
$project1_alt = $attributes['project1Alt'] ?? 'Proyecto de cocina';
$project2_image = $attributes['project2Image'] ?? '';
$project2_alt = $attributes['project2Alt'] ?? 'Proyecto de reforma';
$project3_image = $attributes['project3Image'] ?? '';
$project3_alt = $attributes['project3Alt'] ?? 'Proyecto de baño';
$project4_image = $attributes['project4Image'] ?? '';
$project4_alt = $attributes['project4Alt'] ?? 'Proyecto exterior';
?>

<section class="services-projects-section">
    <!-- Services Section -->
    <div class="services-wrapper">
        <div class="container">
            <div class="services-header text-center">
                <div class="section-subtitle"><?php echo esc_html($services_subtitle); ?></div>
                <h2 class="section-title"><?php echo esc_html($services_title); ?></h2>
                <div class="services-navigation">
                    <button class="nav-arrow nav-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="nav-arrow nav-next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="<?php echo esc_attr($service1_icon); ?>"></i>
                    </div>
                    <h3 class="service-title-home-home"><?php echo esc_html($service1_title); ?></h3>
                    <p class="service-description"><?php echo esc_html($service1_description); ?></p>
                    <div class="service-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="<?php echo esc_attr($service2_icon); ?>"></i>
                    </div>
                    <h3 class="service-title-home"><?php echo esc_html($service2_title); ?></h3>
                    <p class="service-description"><?php echo esc_html($service2_description); ?></p>
                    <div class="service-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="<?php echo esc_attr($service3_icon); ?>"></i>
                    </div>
                    <h3 class="service-title-home"><?php echo esc_html($service3_title); ?></h3>
                    <p class="service-description"><?php echo esc_html($service3_description); ?></p>
                    <div class="service-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="<?php echo esc_attr($service4_icon); ?>"></i>
                    </div>
                    <h3 class="service-title-home"><?php echo esc_html($service4_title); ?></h3>
                    <p class="service-description"><?php echo esc_html($service4_description); ?></p>
                    <div class="service-arrow">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Projects Section -->
    <div class="projects-wrapper">
        <div class="container">
            <div class="projects-header text-center">
                <div class="section-subtitle text-white"><?php echo esc_html($projects_subtitle); ?></div>
                <h2 class="section-title text-white"><?php echo esc_html($projects_title); ?></h2>
            </div>

            <div class="projects-grid">
                <?php if ($project1_image): ?>
                <div class="project-item">
                    <img src="<?php echo esc_url($project1_image); ?>" alt="<?php echo esc_attr($project1_alt); ?>" class="img-fluid">
                </div>
                <?php else: ?>
                <div class="project-item">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/Proyecto-nuevo-64-1024x853.jpg" alt="<?php echo esc_attr($project1_alt); ?>" class="img-fluid">
                </div>
                <?php endif; ?>
                
                <?php if ($project2_image): ?>
                <div class="project-item">
                    <img src="<?php echo esc_url($project2_image); ?>" alt="<?php echo esc_attr($project2_alt); ?>" class="img-fluid">
                </div>
                <?php else: ?>
                <div class="project-item">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/Proyecto-nuevo-65-1024x853.jpg" alt="<?php echo esc_attr($project2_alt); ?>" class="img-fluid">
                </div>
                <?php endif; ?>
                
                <?php if ($project3_image): ?>
                <div class="project-item">
                    <img src="<?php echo esc_url($project3_image); ?>" alt="<?php echo esc_attr($project3_alt); ?>" class="img-fluid">
                </div>
                <?php else: ?>
                <div class="project-item">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/Proyecto-nuevo-66-1024x853.jpg" alt="<?php echo esc_attr($project3_alt); ?>" class="img-fluid">
                </div>
                <?php endif; ?>
                
                <?php if ($project4_image): ?>
                <div class="project-item">
                    <img src="<?php echo esc_url($project4_image); ?>" alt="<?php echo esc_attr($project4_alt); ?>" class="img-fluid">
                </div>
                <?php else: ?>
                <div class="project-item">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/Proyecto-nuevo-70-1024x853.jpg" alt="<?php echo esc_attr($project4_alt); ?>" class="img-fluid">
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
