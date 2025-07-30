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
                                <p class="contact-text">Calle Teleférico<br>de las Canteras<br>4, bajo A, 28052<br>Madrid</p>
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
                                    <a href="tel:910053700">910 05 37 00</a>
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
                                    <a href="mailto:info@reformasservilucas.com">info@reformasservilucas.com</a>
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
                        <!-- Sello Empresa Solidaria -->
                        <div class="footer-seal mt-3">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/sello-empresa-solidaria.png" alt="Empresa Solidaria" style="max-width: 65%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- European Funding Banner -->
    <div class="footer-funding-banner">
        <div class="container">
            <div class="funding-banner-wrapper">
                <div class="funding-logos">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/eu-funding-banner.png" alt="Financiado por la Unión Europea - Kit Digital - Next Generation EU" class="img-fluid">
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
                            <li>
                                <a href="https://www.instagram.com/reformas.servilucas/" target="_blank" rel="nofollow">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/reformas-servilucas-s-l/" target="_blank" rel="nofollow">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
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

