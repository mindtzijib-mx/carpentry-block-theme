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

// Contact page URL (you can customize this)
$contact_url = home_url('/contacto/');

?>

<section class="service-single-block service-layout-<?php echo esc_attr($layout); ?>" 
         style="background-color: <?php echo esc_attr($background_color); ?>; color: <?php echo esc_attr($text_color); ?>;">
    <div class="container">
        <div class="service-single-wrapper">
            
            <?php if ($show_sidebar && $layout !== 'full-width'): ?>
            <aside class="service-sidebar" style="background-color: <?php echo esc_attr($sidebar_background); ?>;">
                <div class="sidebar-header">
                    <h3 class="sidebar-title"><?php echo esc_html($sidebar_title); ?></h3>
                </div>
                
                <nav class="services-navigation">
                    <ul class="services-list">
                        <?php foreach ($all_services as $service): ?>
                        <li class="service-item <?php echo ($service->ID == $current_id) ? 'active' : ''; ?>">
                            <a href="<?php echo esc_url(get_permalink($service->ID)); ?>" 
                               style="<?php echo ($service->ID == $current_id) ? 'background-color: ' . esc_attr($accent_color) . '; color: white;' : ''; ?>">
                                <i class="fas fa-tools"></i>
                                <span><?php echo esc_html($service->post_title); ?></span>
                                <?php if ($service->ID == $current_id): ?>
                                <i class="fas fa-check-circle current-indicator"></i>
                                <?php endif; ?>
                            </a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </aside>
            <?php endif; ?>

            <main class="service-content">
                <?php if ($show_featured_image && $featured_image_url): ?>
                <div class="service-featured-image">
                    <img src="<?php echo esc_url($featured_image_url); ?>" 
                         alt="<?php echo esc_attr($post_title); ?>" 
                         class="img-fluid">
                </div>
                <?php endif; ?>

                <div class="service-content-inner">
                    <?php if ($show_title): ?>
                    <header class="service-header">
                        <h1 class="service-title" style="color: <?php echo esc_attr($accent_color); ?>;">
                            <?php echo esc_html($post_title); ?>
                        </h1>
                    </header>
                    <?php endif; ?>

                    <?php if ($show_content): ?>
                    <div class="service-description">
                        <?php echo wp_kses_post($post_content); ?>
                    </div>
                    <?php endif; ?>

                    <?php if ($show_contact_cta): ?>
                    <div class="service-cta" style="border-color: <?php echo esc_attr($accent_color); ?>;">
                        <div class="cta-content">
                            <h3 class="cta-title" style="color: <?php echo esc_attr($accent_color); ?>;">
                                <?php echo esc_html($cta_title); ?>
                            </h3>
                            <p class="cta-text">
                                <?php echo esc_html($cta_text); ?>
                            </p>
                            <div class="cta-actions">
                                <a href="<?php echo esc_url($contact_url); ?>" 
                                   class="cta-button" 
                                   style="background-color: <?php echo esc_attr($accent_color); ?>;">
                                    <i class="fas fa-phone"></i>
                                    <?php echo esc_html($cta_button_text); ?>
                                </a>
                                <div class="contact-quick-info">
                                    <div class="contact-item">
                                        <i class="fas fa-phone" style="color: <?php echo esc_attr($accent_color); ?>;"></i>
                                        <a href="tel:<?php echo esc_attr(get_theme_mod('carpentry_company_phone_link', '910053700')); ?>">
                                            <?php echo esc_html(get_theme_mod('carpentry_company_phone', '910 05 37 00')); ?>
                                        </a>
                                    </div>
                                    <div class="contact-item">
                                        <i class="fas fa-envelope" style="color: <?php echo esc_attr($accent_color); ?>;"></i>
                                        <a href="mailto:<?php echo esc_attr(get_theme_mod('carpentry_company_email', 'info@reformasservilucas.com')); ?>">
                                            <?php echo esc_html(get_theme_mod('carpentry_company_email', 'info@reformasservilucas.com')); ?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endif; ?>

                    <?php if ($show_navigation_buttons && ($prev_service || $next_service)): ?>
                    <nav class="service-navigation">
                        <div class="navigation-links">
                            <?php if ($prev_service): ?>
                            <div class="nav-previous">
                                <a href="<?php echo esc_url(get_permalink($prev_service->ID)); ?>" 
                                   class="nav-link">
                                    <div class="nav-direction" style="color: <?php echo esc_attr($accent_color); ?>;">
                                        <i class="fas fa-chevron-left"></i>
                                        <?php echo esc_html($prev_text); ?>
                                    </div>
                                    <div class="nav-title"><?php echo esc_html($prev_service->post_title); ?></div>
                                </a>
                            </div>
                            <?php endif; ?>

                            <?php if ($next_service): ?>
                            <div class="nav-next">
                                <a href="<?php echo esc_url(get_permalink($next_service->ID)); ?>" 
                                   class="nav-link">
                                    <div class="nav-direction" style="color: <?php echo esc_attr($accent_color); ?>;">
                                        <?php echo esc_html($next_text); ?>
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                    <div class="nav-title"><?php echo esc_html($next_service->post_title); ?></div>
                                </a>
                            </div>
                            <?php endif; ?>
                        </div>
                    </nav>
                    <?php endif; ?>
                </div>
            </main>

        </div>
    </div>
</section>
