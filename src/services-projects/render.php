<?php
/**
 * Render template for Services & Projects Block
 *
 * @package CarpentryBlocks
 */

$services_subtitle = $attributes['servicesSubtitle'] ?? 'NUESTROS SERVICIOS';
$services_title = $attributes['servicesTitle'] ?? 'Servicios integrales y de la máxima calidad';
$use_dynamic_services = $attributes['useDynamicServices'] ?? true;

// Prepare services array
$services = [];

if ($use_dynamic_services) {
    // Query dynamic services from custom post type
    $services_query = new WP_Query([
        'post_type' => 'servicios',
        'posts_per_page' => 8, // Show up to 8 services for slider
        'post_status' => 'publish',
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ]);
    
    if ($services_query->have_posts()) {
        while ($services_query->have_posts()) {
            $services_query->the_post();
            $service_id = get_the_ID();
            $services[] = [
                'title' => get_the_title(),
                'description' => get_the_excerpt() ?: wp_trim_words(get_the_content(), 25),
                'icon' => get_post_meta($service_id, 'service_icon', true) ?: 'fas fa-tools',
                'url' => get_permalink()
            ];
        }
        wp_reset_postdata();
    }
}

// Fallback to static services if dynamic is disabled or no dynamic services exist
if (!$use_dynamic_services || empty($services)) {
    $services = [
        [
            'title' => $attributes['service1Title'] ?? 'Mantenimiento',
            'description' => $attributes['service1Description'] ?? 'Nuestros servicios integrales son clave para garantizar la operatividad continua de los sistemas e infraestructuras esenciales de su empresa.',
            'icon' => $attributes['service1Icon'] ?? 'fas fa-tools',
            'url' => '#'
        ],
        [
            'title' => $attributes['service2Title'] ?? 'Reformas',
            'description' => $attributes['service2Description'] ?? 'Transformamos tu hogar o negocio con reformas completas que incluyen diseño, planificación y ejecución, adaptándonos a tus gustos y necesidades.',
            'icon' => $attributes['service2Icon'] ?? 'fas fa-home',
            'url' => '#'
        ],
        [
            'title' => $attributes['service3Title'] ?? 'Tabiquería',
            'description' => $attributes['service3Description'] ?? 'Realizamos todo tipo de estructuras en pladur garantizando seguridad y eficiencia en cada proyecto.',
            'icon' => $attributes['service3Icon'] ?? 'fas fa-hammer',
            'url' => '#'
        ],
        [
            'title' => $attributes['service4Title'] ?? 'Electricidad',
            'description' => $attributes['service4Description'] ?? 'Desde la actualización de sistemas eléctricos hasta la instalación de iluminación y soluciones de ahorro energético, nos aseguramos de que todo funcione de manera segura y eficiente.',
            'icon' => $attributes['service4Icon'] ?? 'fas fa-bolt',
            'url' => '#'
        ]
    ];
}

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

            <div class="services-grid<?php echo count($services) > 4 ? ' slider-mode' : ''; ?>">
                <?php if (count($services) > 4): ?>
                <div class="services-slider-container">
                    <?php foreach ($services as $index => $service): ?>
                    <div class="service-card" data-index="<?php echo $index; ?>">
                        <div class="service-icon">
                            <i class="<?php echo esc_attr($service['icon']); ?>"></i>
                        </div>
                        <h3 class="service-title-home"><?php echo esc_html($service['title']); ?></h3>
                        <p class="service-description"><?php echo esc_html($service['description']); ?></p>
                        <div class="service-arrow">
                            <a href="<?php echo esc_url($service['url']); ?>" aria-label="<?php echo esc_attr(sprintf(__('Ver más sobre %s', 'carpentry-blocks'), $service['title'])); ?>">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php else: ?>
                    <?php foreach ($services as $service): ?>
                    <div class="service-card">
                        <div class="service-icon">
                            <i class="<?php echo esc_attr($service['icon']); ?>"></i>
                        </div>
                        <h3 class="service-title-home"><?php echo esc_html($service['title']); ?></h3>
                        <p class="service-description"><?php echo esc_html($service['description']); ?></p>
                        <div class="service-arrow">
                            <a href="<?php echo esc_url($service['url']); ?>" aria-label="<?php echo esc_attr(sprintf(__('Ver más sobre %s', 'carpentry-blocks'), $service['title'])); ?>">
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <?php endforeach; ?>
                <?php endif; ?>
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
