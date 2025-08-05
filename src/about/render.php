<?php
/**
 * About Us Block Render Template
 */

// Obtener datos de contacto de la configuración global del Customizer
$global_email = get_theme_mod('carpentry_company_email', 'info@reformasservilucas.com');
$global_phone = get_theme_mod('carpentry_company_phone', '910 05 37 00');

$subtitle = $attributes['subtitle'] ?? 'SOBRE NOSOTROS';
$title = $attributes['title'] ?? 'Expertos profesionales en reformas';
$description = $attributes['description'] ?? 'Proporcionamos servicios de reformas de alta calidad, asegurando la satisfacción total de nuestros clientes a través de un trabajo detallado y profesional.';

$stat1Number = $attributes['stat1Number'] ?? '15+';
$stat1Label = $attributes['stat1Label'] ?? 'AÑOS DE EXPERIENCIA';
$stat1Icon = $attributes['stat1Icon'] ?? 'fas fa-award';

$stat2Number = $attributes['stat2Number'] ?? '300+';
$stat2Label = $attributes['stat2Label'] ?? 'CLIENTES';
$stat2Icon = $attributes['stat2Icon'] ?? 'fas fa-users';

$additionalText = $attributes['additionalText'] ?? 'Nos encargamos de todos los aspectos del proceso de reforma, desde el diseño y la planificación, hasta la ejecución y el acabado final. Nuestra dedicación y atención al detalle nos distinguen en cada proyecto que realizamos.';

$buttonText = $attributes['buttonText'] ?? 'Conócenos';
$buttonUrl = $attributes['buttonUrl'] ?? '/nosotros';

// Usar datos globales pero permitir override desde atributos del bloque
$emailAddress = !empty($attributes['emailAddress']) ? $attributes['emailAddress'] : $global_email;
$phoneNumber = !empty($attributes['phoneNumber']) ? $attributes['phoneNumber'] : $global_phone;

$aboutImage = $attributes['aboutImage'] ?? '';

// Fallback image if no about image is set
if (empty($aboutImage)) {
    $aboutImage = get_template_directory_uri() . '/images/RSL_Home_Valor-Anadido_1200_X_1000_2-qu1he63fh06pyra1vyw5iigtof48a8anep86vfk4ge.jpg';
}

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'about-us-section py-5'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="about-content">
                    <div class="section-subtitle"><?php echo esc_html($subtitle); ?></div>
                    <h2 class="section-title"><?php echo wp_kses_post($title); ?></h2>
                    <p class="section-description">
                        <?php echo wp_kses_post($description); ?>
                    </p>

                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="<?php echo esc_attr($stat1Icon); ?>"></i>
                            </div>
                            <div class="stat-content">
                                <div class="about-stat-number"><?php echo esc_html($stat1Number); ?></div>
                                <div class="about-stat-label"><?php echo esc_html($stat1Label); ?></div>
                            </div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon">
                                <i class="<?php echo esc_attr($stat2Icon); ?>"></i>
                            </div>
                            <div class="stat-content">
                                <div class="about-stat-number"><?php echo esc_html($stat2Number); ?></div>
                                <div class="about-stat-label"><?php echo esc_html($stat2Label); ?></div>
                            </div>
                        </div>
                    </div>

                    <p class="additional-text">
                        <?php echo wp_kses_post($additionalText); ?>
                    </p>

                    <div class="contact-info-wrapper">
                        <div class="contact-cta">
                            <a href="<?php echo esc_url($buttonUrl); ?>" class="btn btn-dark-custom">
                                <?php echo esc_html($buttonText); ?>
                            </a>
                        </div>
                        <div class="contact-email">
                            <div class="email-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="email-content">
                                <div class="email-label">Email</div>
                                <div class="email-address"><?php echo esc_html($emailAddress); ?></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-image-wrapper">
                    <img src="<?php echo esc_url($aboutImage); ?>" alt="Reforma de baño moderna" class="img-fluid">
                    <div class="phone-contact-overlay">
                        <div class="about-phone-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="phone-content">
                            <div class="about-phone-label">Teléfono</div>
                            <div class="about-phone-number"><?php echo esc_html($phoneNumber); ?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
