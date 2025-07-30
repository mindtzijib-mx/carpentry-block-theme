<?php
/**
 * Header Block Template
 * 
 * Renders the site header with navigation and contact information
 * Based on the original carpentry theme design
 */

// Get the custom logo
$custom_logo_id = get_theme_mod('custom_logo');
$logo = wp_get_attachment_image_src($custom_logo_id, 'full');
?>

<header id="masthead" class="site-header-container">
    <div class="site-header">
        <!-- Header Top Section -->
        <div class="site-header-top">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <!-- Logo -->
                    <div class="site-logo">
                        <?php if (has_custom_logo()) : ?>
                            <?php the_custom_logo(); ?>
                        <?php else : ?>
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <img src="<?php echo get_template_directory_uri(); ?>/images/logo_servilucas.png" alt="<?php bloginfo('name'); ?>" class="img-fluid">
                            </a>
                        <?php endif; ?>
                    </div>

                    <!-- Contact Info -->
                    <div class="contact-info d-none d-lg-flex">
                        <div class="contact-item d-flex align-items-center me-4">
                            <i class="fas fa-map-marker-alt contact-icon"></i>
                            <div class="contact-list">
                                <span class="contact-label">DIRECCIÓN</span>
                                <span class="contact-value">Calle Teleférico de las Canteras 4, bajo A, 28052 Madrid</span>
                            </div>
                        </div>
                        <div class="contact-item d-flex align-items-center">
                            <i class="fas fa-envelope contact-icon"></i>
                            <div class="contact-list">
                                <span class="contact-label">EMAIL</span>
                                <span class="contact-value">
                                    <a href="mailto:info@reformasservilucas.com">info@reformasservilucas.com</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Social Icons -->
                    <div class="social-info-wrapper d-none d-md-block">
                        <ul class="social-info d-flex">
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
            </div>
        </div>

        <!-- Header Bottom - Navigation -->
        <div class="site-header-bottom">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <!-- Main Navigation with integrated search -->
                    <nav id="site-navigation" class="main-navigation">
                        <div class="nav-wrapper">
                            <!-- Botón de cerrar menú móvil -->
                            <button class="mobile-menu-close d-lg-none" type="button" aria-label="Cerrar menú">
                                <i class="fas fa-times"></i>
                            </button>
                            
                            <?php
                            wp_nav_menu(array(
                                'theme_location' => 'primary',
                                'menu_id'        => 'primary-menu',
                                'container'      => false,
                                'items_wrap'     => '<ul id="%1$s" class="menu">%3$s</ul>',
                                'fallback_cb'    => function() {
                                    echo '<ul class="menu">
                                            <li><a href="' . esc_url(home_url('/')) . '">Inicio</a></li>
                                            <li><a href="#">Nosotros</a></li>
                                            <li><a href="#">Servicios</a></li>
                                            <li><a href="#">Contacto</a></li>
                                          </ul>';
                                }
                            ));
                            ?>
                            
                            <!-- Search Icon integrated -->
                            <div class="header-search">
                                <a href="#" class="search-icon" id="search-toggle">
                                    <i class="fas fa-search"></i>
                                </a>
                            </div>
                        </div>
                    </nav>

                    <!-- Phone Button -->
                    <div class="header-phone-button">
                        <a href="tel:910053700" class="phone-button d-flex align-items-center">
                            <div class="header-phone-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="phone-info">
                                <span class="header-phone-label">TELÉFONO</span>
                                <span class="header-phone-number">910 05 37 00</span>
                            </div>
                        </a>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle d-lg-none" type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Search Modal -->
<div id="search-popup-modal" class="white-popup-block" style="display: none;">
    <form method="get" class="hendy-searchform" action="<?php echo esc_url(home_url('/')); ?>">
        <input type="search" class="hendy-searchform-field" name="s" placeholder="Buscar..." value="<?php echo get_search_query(); ?>">
        <button class="hendy-search-button" type="submit">
            <i class="fas fa-search fa-1x"></i>
        </button>
    </form>
    <button title="Close (Esc)" type="button" class="mfp-close hkangles-mfp-close">×</button>
</div>
