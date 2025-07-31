<?php
if (!defined('ABSPATH')) {
    exit;
}

// Get current post data
global $post;
if (!$post || $post->post_type !== 'servicios') {
    return;
}

// Extract attributes
$show_featured_image = $attributes['showFeaturedImage'] ?? true;
$show_title = $attributes['showTitle'] ?? true;
$show_content = $attributes['showContent'] ?? true;
$show_sidebar = $attributes['showSidebar'] ?? true;
$sidebar_title = $attributes['sidebarTitle'] ?? __('Servicios', 'carpentry-blocks');
$show_navigation_buttons = $attributes['showNavigationButtons'] ?? true;
$prev_text = $attributes['prevText'] ?? __('Servicio Anterior', 'carpentry-blocks');
$next_text = $attributes['nextText'] ?? __('Siguiente Servicio', 'carpentry-blocks');
$show_contact_cta = $attributes['showContactCTA'] ?? true;
$cta_title = $attributes['ctaTitle'] ?? __('¿Interesado en este servicio?', 'carpentry-blocks');
$cta_text = $attributes['ctaText'] ?? __('Contacta con nosotros para más información y presupuesto sin compromiso', 'carpentry-blocks');
$cta_button_text = $attributes['ctaButtonText'] ?? __('Solicitar Presupuesto', 'carpentry-blocks');
$background_color = $attributes['backgroundColor'] ?? '#ffffff';
$text_color = $attributes['textColor'] ?? '#333333';
$accent_color = $attributes['accentColor'] ?? '#a17a66';
$sidebar_background = $attributes['sidebarBackground'] ?? '#f8f9fa';
$layout = $attributes['layout'] ?? 'sidebar-left';

// Get post data
$post_title = get_the_title();
$post_content = get_the_content();
$featured_image_url = get_the_post_thumbnail_url($post->ID, 'large');

// Get all services for sidebar
$all_services = get_posts(array(
    'post_type' => 'servicios',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'post_status' => 'publish'
));

$current_id = get_the_ID();

// Get navigation services
$prev_service = null;
$next_service = null;

foreach ($all_services as $index => $service) {
    if ($service->ID == $current_id) {
        if ($index > 0) {
            $prev_service = $all_services[$index - 1];
        }
        if ($index < count($all_services) - 1) {
            $next_service = $all_services[$index + 1];
        }
        break;
    }
}

// Get custom fields
$subtitle = get_post_meta($current_id, 'service_subtitle', true);
$description = get_post_meta($current_id, 'service_description', true);
$features = get_post_meta($current_id, 'service_features', true);

?>

<div class="service-single-container">
    <div class="container">
        <div class="row">
            <!-- Sidebar de servicios -->
            <div class="col-lg-4 col-md-5">
                <div class="services-sidebar">
                    <div class="services-sidebar-header">
                        <?php echo esc_html($sidebar_title); ?>
                    </div>
                    <ul class="services-list">
                        <?php foreach ($all_services as $service):
                            $is_current = ($service->ID == $current_id);
                        ?>
                            <li>
                                <a href="<?php echo esc_url(get_permalink($service->ID)); ?>"
                                    class="<?php echo $is_current ? 'active' : ''; ?>">
                                    <?php echo esc_html($service->post_title); ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>

            <!-- Contenido principal -->
            <div class="col-lg-8 col-md-7">
                <div class="service-content">
                    <?php if ($show_featured_image && $featured_image_url): ?>
                        <div class="service-hero-image">
                            <img src="<?php echo esc_url($featured_image_url); ?>" alt="<?php echo esc_attr($post_title); ?>" class="img-fluid">
                        </div>
                    <?php endif; ?>

                    <div class="service-details">
                        <?php if ($show_title): ?>
                            <h1 class="service-title"><?php echo esc_html($post_title); ?></h1>
                        <?php endif; ?>

                        <?php if ($subtitle): ?>
                            <h3 class="service-subtitle"><?php echo esc_html($subtitle); ?></h3>
                        <?php endif; ?>

                        <?php if ($show_content): ?>
                            <?php if ($description): ?>
                                <div class="service-description">
                                    <?php echo wpautop($description); ?>
                                </div>
                            <?php else: ?>
                                <div class="service-description">
                                    <?php echo wp_kses_post($post_content); ?>
                                </div>
                            <?php endif; ?>
                        <?php endif; ?>

                        <?php if ($features): ?>
                            <div class="service-features">
                                <h4>Nuestro servicio incluye:</h4>
                                <?php
                                $features_array = explode("\n", $features);
                                if (!empty($features_array)):
                                ?>
                                    <ul>
                                        <?php foreach ($features_array as $feature):
                                            $feature = trim($feature);
                                            if (!empty($feature)):
                                        ?>
                                                <li><?php echo esc_html($feature); ?></li>
                                        <?php
                                            endif;
                                        endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>

                    <!-- Navegación entre servicios -->
                    <?php if ($show_navigation_buttons && ($prev_service || $next_service)): ?>
                    <div class="row">
                        <div class="col-12">
                            <div class="service-navigation">
                                <div class="service-nav-wrapper">
                                    <?php if ($prev_service): ?>
                                        <a href="<?php echo esc_url(get_permalink($prev_service->ID)); ?>" class="service-nav-item service-nav-prev">
                                            <div class="service-nav-icon">
                                                <i class="fas fa-chevron-left"></i>
                                            </div>
                                            <div class="service-nav-content">
                                                <h5 class="service-nav-title"><?php echo esc_html($prev_service->post_title); ?></h5>
                                            </div>
                                        </a>
                                    <?php else: ?>
                                        <div class="service-nav-item"></div>
                                    <?php endif; ?>

                                    <?php if ($next_service): ?>
                                        <a href="<?php echo esc_url(get_permalink($next_service->ID)); ?>" class="service-nav-item service-nav-next">
                                            <div class="service-nav-content">
                                                <h5 class="service-nav-title"><?php echo esc_html($next_service->post_title); ?></h5>
                                            </div>
                                            <div class="service-nav-icon">
                                                <i class="fas fa-chevron-right"></i>
                                            </div>
                                        </a>
                                    <?php else: ?>
                                        <div class="service-nav-item"></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ($show_contact_cta): ?>
                    <div class="service-cta">
                        <h4><?php echo esc_html($cta_title); ?></h4>
                        <p>Contacta con nosotros y te haremos un presupuesto personalizado sin compromiso</p>
                        <a href="<?php echo home_url('/contacto'); ?>" class="btn">
                            <?php echo esc_html($cta_button_text); ?>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
