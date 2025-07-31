<?php
/**
 * Contact Section Block Template
 * Replica exacta de la sección de contacto del tema clásico
 */

// Obtener atributos con valores por defecto
$form_title = !empty($attributes['formTitle']) ? esc_html($attributes['formTitle']) : 'Contacta con nosotros';
$address_title = !empty($attributes['addressTitle']) ? esc_html($attributes['addressTitle']) : 'Dirección';
$address_text = !empty($attributes['addressText']) ? wp_kses_post($attributes['addressText']) : 'Calle Teléfrico de las Canteras 4, bajo A, 28052 Madrid';
$phone_title = !empty($attributes['phoneTitle']) ? esc_html($attributes['phoneTitle']) : 'Teléfono';
$phone_text = !empty($attributes['phoneText']) ? esc_html($attributes['phoneText']) : '910 05 37 00';
$phone_link = !empty($attributes['phoneLink']) ? esc_attr($attributes['phoneLink']) : '910053700';
$email_title = !empty($attributes['emailTitle']) ? esc_html($attributes['emailTitle']) : 'Email';
$email_text = !empty($attributes['emailText']) ? wp_kses_post($attributes['emailText']) : 'info@reformas servilucas.com';
$email_link = !empty($attributes['emailLink']) ? esc_attr($attributes['emailLink']) : 'info@reformasservilucas.com';
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
                                            <option value="carpinteria">Carpintería General</option>
                                            <option value="reformas">Reformas Integrales</option>
                                            <option value="mantenimiento">Mantenimiento</option>
                                            <option value="acabados">Acabados</option>
                                            <option value="otro">Otro</option>
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
                            <button type="submit" class="btn btn-contact-submit">Enviar</button>
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
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
