<?php
/**
 * Footer Block Template
 * 
 * Renders the site footer with contact info, widgets and EU funding banner
 * Based on the original carpentry theme design
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Get company information from customizer
$company_address = get_theme_mod('carpentry_company_address', 'Calle Teleférico de las Canteras 4, bajo A, 28052 Madrid');
$company_email = get_theme_mod('carpentry_company_email', 'contacto@carpinterianudo.es');
$company_phone = get_theme_mod('carpentry_company_phone', '910 05 37 00');
$company_phone_link = get_theme_mod('carpentry_company_phone_link', '910053700');

// Get social media URLs from customizer
$instagram_url = get_theme_mod('carpentry_instagram_url', 'https://www.instagram.com/reformas.servilucas/');
$linkedin_url = get_theme_mod('carpentry_linkedin_url', 'https://www.linkedin.com/company/reformas-servilucas-s-l/');
$facebook_url = get_theme_mod('carpentry_facebook_url', '');
$twitter_url = get_theme_mod('carpentry_twitter_url', '');
$youtube_url = get_theme_mod('carpentry_youtube_url', '');
$whatsapp_number = get_theme_mod('carpentry_whatsapp_number', '');
$whatsapp_url = '';
if (!empty($whatsapp_number)) {
    $digits = preg_replace('/\D+/', '', $whatsapp_number);
    if (!empty($digits)) {
        $whatsapp_url = 'https://wa.me/' . $digits;
    }
}
?>

<div class="wp-block-carpentry-footer">
<footer id="colophon" class="site-footer">
    <!-- Footer Contact Info Section -->
    <div class="footer-contact-info-wrap">
        <div class="container">
            <div class="row">
                <!-- Logo Container -->
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                    <div class="footer-logo-container">
                        <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/logo_servilucas_bn.png" alt="<?php bloginfo('name'); ?>" class="img-fluid">
                        </a>
                    </div>
                </div>

                <!-- Contact Info Container -->
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    <div class="footer-contact-container">
                        <div class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-content">
                                <h4 class="contact-title">Dirección</h4>
                                <p class="contact-text"><?php echo nl2br(esc_html($company_address)); ?></p>
                            </div>
                        </div>
                        <div class="contact-divider"></div>

                        <div class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-content">
                                <h4 class="contact-title">Teléfono</h4>
                                <p class="contact-text">
                                    <a href="tel:<?php echo esc_attr($company_phone_link); ?>"><?php echo esc_html($company_phone); ?></a>
                                </p>
                            </div>
                        </div>
                        <div class="contact-divider"></div>

                        <div class="contact-item">
                            <div class="contact-icon-wrapper">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-content">
                                <h4 class="contact-title">Email</h4>
                                <p class="contact-text">
                                    <a href="mailto:<?php echo esc_attr($company_email); ?>"><?php echo esc_html($company_email); ?></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Widgets Section -->
    <div class="footer-widgets-wrapper">
        <div class="container">
            <div class="row">
                <!-- Horario de atención -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <h2 class="widget-title">Horario de atención</h2>
                        <div class="schedule-wrapper">
                            <ul class="schedule-list">
                                <li>
                                    <span class="schedule-title">Lu – Ju</span>
                                    <span class="schedule-value">09:00 am – 06:00 pm</span>
                                </li>
                                <li>
                                    <span class="schedule-title">Viernes</span>
                                    <span class="schedule-value">09:00 am – 03:00 pm</span>
                                </li>
                                <li>
                                    <span class="schedule-title">Sa – Do</span>
                                    <span class="schedule-value">Cerrado</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Menú -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <h2 class="widget-title">Menú</h2>
                        <?php echo carpentry_get_footer_menu(); ?>
                    </div>
                </div>

                <!-- Servicios -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <h2 class="widget-title">Servicios</h2>
                        <?php echo carpentry_get_footer_services_menu(); ?>
                    </div>
                </div>

                <!-- Legal -->
                <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="footer-widget">
                        <h2 class="widget-title">Legal</h2>
                        <?php echo carpentry_get_footer_legal_menu(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="social-info-wrapper">
                        <ul class="social-info">
                            <?php if (!empty($instagram_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($instagram_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                            <?php if (!empty($linkedin_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($linkedin_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                            <?php if (!empty($facebook_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($facebook_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                            <?php if (!empty($twitter_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($twitter_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                            <?php if (!empty($youtube_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($youtube_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                            <?php if (!empty($whatsapp_url)): ?>
                            <li>
                                <a href="<?php echo esc_url($whatsapp_url); ?>" target="_blank" rel="nofollow">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 text-end">
                    <div class="footer-copyright">
                        Copyright © <?php echo date('Y'); ?> Reformas Servilucas S.L.
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Back to Top Button -->
<div id="back-to-top" class="back-to-top">
    <i class="fas fa-chevron-up"></i>
</div>
</footer>
</div>

