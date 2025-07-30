<?php
/**
 * Added Value Block Template
 */

// Obtener las imágenes por defecto si no están definidas
$default_main_image = get_template_directory_uri() . '/images/RSL_Home_Valor_Anadido_1041_800_2-qu1he63kz8be8rsaap0ps4a4d1yybb3sdh3zg8nmek.jpg';
$default_circular_image = get_template_directory_uri() . '/images/RSL_Home_Valor-Anadido_1200_X_1000_2-qu1he63fh06pyra1vyw5iigtof48a8anep86vfk4ge.jpg';

$main_image = !empty($attributes['mainImage']) ? $attributes['mainImage'] : $default_main_image;
$circular_image = !empty($attributes['circularImage']) ? $attributes['circularImage'] : $default_circular_image;
?>

<section class="added-value-section">
    <div class="decorative-triangle triangle-top"></div>
    <div class="decorative-triangle triangle-bottom"></div>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-lg-6 p-0">
                <div class="value-image-wrapper">
                    <div class="geometric-shape">
                        <div class="main-image">
                            <img src="<?php echo esc_url($main_image); ?>" 
                                 alt="<?php echo esc_attr($attributes['mainImageAlt'] ?? 'Sala de estar moderna'); ?>" 
                                 class="img-fluid">
                        </div>
                        <div class="circular-image">
                            <img src="<?php echo esc_url($circular_image); ?>" 
                                 alt="<?php echo esc_attr($attributes['circularImageAlt'] ?? 'Comedor moderno'); ?>" 
                                 class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="value-content">
                    <div class="section-subtitle">
                        <?php echo esc_html($attributes['sectionSubtitle'] ?? 'VALOR AÑADIDO'); ?>
                    </div>
                    <h2 class="section-title">
                        <?php echo esc_html($attributes['sectionTitle'] ?? 'Lo que marca nuestra diferencia'); ?>
                    </h2>
                    <p class="section-description">
                        <?php echo esc_html($attributes['sectionDescription'] ?? 'Nuestra dedicación y atención al detalle nos distinguen en cada proyecto que realizamos.'); ?>
                    </p>

                    <div class="value-features">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="<?php echo esc_attr($attributes['feature1Icon'] ?? 'fas fa-cog'); ?>"></i>
                                    </div>
                                    <h4 class="feature-title">
                                        <?php echo esc_html($attributes['feature1Title'] ?? 'Soluciones a medida'); ?>
                                    </h4>
                                    <p class="feature-description">
                                        <?php echo esc_html($attributes['feature1Description'] ?? 'Nuestro objetivo es entender completamente tus deseos y expectativas para poder ofrecerte soluciones a medida.'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="<?php echo esc_attr($attributes['feature2Icon'] ?? 'fas fa-users'); ?>"></i>
                                    </div>
                                    <h4 class="feature-title">
                                        <?php echo esc_html($attributes['feature2Title'] ?? 'Profesionales Expertos'); ?>
                                    </h4>
                                    <p class="feature-description">
                                        <?php echo esc_html($attributes['feature2Description'] ?? 'Equipo de profesionales altamente capacitados y experimentados en el campo de las reformas.'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="<?php echo esc_attr($attributes['feature3Icon'] ?? 'fas fa-heart'); ?>"></i>
                                    </div>
                                    <h4 class="feature-title">
                                        <?php echo esc_html($attributes['feature3Title'] ?? 'Satisfacción de nuestros clientes'); ?>
                                    </h4>
                                    <p class="feature-description">
                                        <?php echo esc_html($attributes['feature3Description'] ?? 'Nos aseguraremos de que cada detalle sea tenido en cuenta y de que se cumplan todas tus exigencias durante el proceso de reforma.'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="feature-item">
                                    <div class="feature-icon">
                                        <i class="<?php echo esc_attr($attributes['feature4Icon'] ?? 'fas fa-star'); ?>"></i>
                                    </div>
                                    <h4 class="feature-title">
                                        <?php echo esc_html($attributes['feature4Title'] ?? 'Máxima Calidad'); ?>
                                    </h4>
                                    <p class="feature-description">
                                        <?php echo esc_html($attributes['feature4Description'] ?? 'Estamos aquí para hacer realidad tus sueños y transformar tu espacio en algo que supere tus expectativas.'); ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="additional-services">
                        <ul class="services-list">
                            <li>
                                <i class="fas fa-arrow-right"></i>
                                <span><?php echo esc_html($attributes['additionalService1'] ?? 'Ofrecemos servicios complementarios.'); ?></span>
                            </li>
                            <li>
                                <i class="fas fa-arrow-right"></i>
                                <span><?php echo esc_html($attributes['additionalService2'] ?? 'Comunicación constante con nuestros clientes.'); ?></span>
                            </li>
                        </ul>
                    </div>

                    <div class="value-buttons">
                        <a href="<?php echo esc_url($attributes['contactButtonUrl'] ?? '#contacto'); ?>" 
                           class="btn btn-primary-custom">
                            <?php echo esc_html($attributes['contactButtonText'] ?? 'Contacta'); ?>
                        </a>
                        <a href="<?php echo esc_url($attributes['servicesButtonUrl'] ?? '#servicios'); ?>" 
                           class="btn btn-dark-custom">
                            <?php echo esc_html($attributes['servicesButtonText'] ?? 'Servicios'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
