<?php
/**
 * Contact Section Block Template
 * Replica exacta de la sección de contacto del tema clásico
 */

// Obtener servicios dinámicamente del custom post type
$services_query = new WP_Query([
    'post_type' => 'servicios',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'title',
    'order' => 'ASC'
]);

$service_options = [];

if ($services_query->have_posts()) {
    while ($services_query->have_posts()) {
        $services_query->the_post();
        $service_options[get_the_ID()] = get_the_title();
    }
    wp_reset_postdata();
}

// Fallback a opciones estáticas si no hay servicios disponibles
if (empty($service_options)) {
    $service_options = [
        'carpinteria' => 'Carpintería General',
        'reformas' => 'Reformas Integrales',
        'mantenimiento' => 'Mantenimiento',
        'acabados' => 'Acabados',
        'otro' => 'Otro'
    ];
}

// Obtener datos de contacto de la configuración global del Customizer
$global_address = get_theme_mod('carpentry_company_address', 'Calle Teléfrico de las Canteras 4, bajo A, 28052 Madrid');
$global_email = get_theme_mod('carpentry_company_email', 'contacto@carpinterianudo.es');
$global_phone = get_theme_mod('carpentry_company_phone', '910 05 37 00');
$global_phone_link = get_theme_mod('carpentry_company_phone_link', '910053700');
$whatsapp_number = get_theme_mod('carpentry_whatsapp_number', '');
$whatsapp_url = '';
if (!empty($whatsapp_number)) {
    $digits = preg_replace('/\D+/', '', $whatsapp_number);
    if (!empty($digits)) {
        $whatsapp_url = 'https://wa.me/' . $digits;
    }
}

// Obtener atributos con valores por defecto
$form_title = !empty($attributes['formTitle']) ? esc_html($attributes['formTitle']) : 'Contacta con nosotros';
$address_title = !empty($attributes['addressTitle']) ? esc_html($attributes['addressTitle']) : 'Dirección';
$phone_title = !empty($attributes['phoneTitle']) ? esc_html($attributes['phoneTitle']) : 'Teléfono';
$email_title = !empty($attributes['emailTitle']) ? esc_html($attributes['emailTitle']) : 'Email';

// Usar datos globales pero permitir override desde atributos del bloque
$address_text = !empty($attributes['addressText']) ? wp_kses_post($attributes['addressText']) : wp_kses_post($global_address);
$phone_text = !empty($attributes['phoneText']) ? esc_html($attributes['phoneText']) : esc_html($global_phone);
$phone_link = !empty($attributes['phoneLink']) ? esc_attr($attributes['phoneLink']) : esc_attr($global_phone_link);
$email_text = !empty($attributes['emailText']) ? wp_kses_post($attributes['emailText']) : wp_kses_post(str_replace('@', '<br>@', $global_email));
$email_link = !empty($attributes['emailLink']) ? esc_attr($attributes['emailLink']) : esc_attr($global_email);

$show_social_media = !empty($attributes['showSocialMedia']) ? $attributes['showSocialMedia'] : true;
$instagram_url = !empty($attributes['instagramUrl']) ? esc_url($attributes['instagramUrl']) : '#';
$linkedin_url = !empty($attributes['linkedinUrl']) ? esc_url($attributes['linkedinUrl']) : '#';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'contacto-section'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="contact-unified-wrapper">
            <div class="row">
                <div class="col-lg-7">
                    <div class="contact-form-wrapper">
                        <h2 class="contact-form-title"><?php echo $form_title; ?></h2>

                        <form class="contact-form" method="post" action="">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre *" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" id="email" name="email" class="form-control" placeholder="Email *" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="tel" id="telefono" name="telefono" class="form-control" placeholder="Teléfono *" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select id="servicio" name="servicio" class="form-control">
                                            <option value="">—Por favor, elige una opción—</option>
                                            <?php foreach ($service_options as $value => $label): ?>
                                                <option value="<?php echo esc_attr($value); ?>">
                                                    <?php echo esc_html($label); ?>
                                                </option>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea id="mensaje" name="mensaje" class="form-control" rows="6" placeholder="Mensaje" required></textarea>
                            </div>
                            <div class="form-group">
                                <div class="privacy-checkbox">
                                    <input type="checkbox" id="privacy" name="privacy" required>
                                    <label for="privacy">He leído y acepto la política de privacidad</label>
                                </div>
                            </div>
                            <?php wp_nonce_field('carpentry_contact_form', 'contact_nonce'); ?>
                            <button type="submit" class="btn btn-contact-submit">Enviar</button>
                            <div class="form-messages" style="display: none;"></div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-5">
                    <div class="contact-info-integrated">
                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5><?php echo $address_title; ?></h5>
                                <p><?php echo $address_text; ?></p>
                            </div>
                        </div>

                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5><?php echo $phone_title; ?></h5>
                                <p><a href="tel:+34<?php echo $phone_link; ?>"><?php echo $phone_text; ?></a></p>
                            </div>
                        </div>

                        <div class="contact-info-item">
                            <div class="contact-info-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-info-content">
                                <h5><?php echo $email_title; ?></h5>
                                <p><a href="mailto:<?php echo $email_link; ?>"><?php echo $email_text; ?></a></p>
                            </div>
                        </div>

                        <?php if ($show_social_media): ?>
                        <div class="contact-social">
                            <?php if ($instagram_url !== '#'): ?>
                            <a href="<?php echo $instagram_url; ?>" class="social-link" target="_blank" rel="noopener">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <?php endif; ?>
                            <?php if ($linkedin_url !== '#'): ?>
                            <a href="<?php echo $linkedin_url; ?>" class="social-link" target="_blank" rel="noopener">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <?php endif; ?>
                            <?php if (!empty($whatsapp_url)): ?>
                            <a href="<?php echo esc_url($whatsapp_url); ?>" class="social-link" target="_blank" rel="noopener">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
