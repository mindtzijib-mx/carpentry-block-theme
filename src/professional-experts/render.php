<?php
/**
 * Professional Experts Block Template
 */

// Obtener la imagen por defecto si no está definida
$default_image = get_template_directory_uri() . '/images/Proyecto-nuevo-64-1024x853.jpg';
$section_image = !empty($attributes['sectionImage']) ? $attributes['sectionImage'] : $default_image;
?>

<section class="expertos-profesionales py-5">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="expertos-image">
                    <img src="<?php echo esc_url($section_image); ?>"
                         alt="<?php echo esc_attr($attributes['sectionImageAlt'] ?? 'Experto profesional en reformas'); ?>"
                         class="img-fluid rounded">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="expertos-content">
                    <div class="section-subtitle text-uppercase mb-2">
                        <span class="text-muted">
                            <?php echo esc_html($attributes['sectionSubtitle'] ?? 'SOBRE NOSOTROS'); ?>
                        </span>
                    </div>
                    <h2 class="section-title mb-4">
                        <?php echo esc_html($attributes['sectionTitle'] ?? 'Expertos Profesionales En Reformas'); ?>
                    </h2>

                    <p class="mb-3">
                        <?php echo esc_html($attributes['paragraph1'] ?? 'Proporcionamos servicios de reformas de alta calidad, asegurando la satisfacción total de nuestros clientes a través de un trabajo detallado y profesional.'); ?>
                    </p>

                    <p class="mb-4">
                        <?php echo esc_html($attributes['paragraph2'] ?? 'Nos encargamos de todos los aspectos del proceso de reforma, desde el diseño y la planificación, hasta la ejecución y el acabado final. Nuestra dedicación y atención al detalle nos distinguen en cada proyecto que realizamos.'); ?>
                    </p>

                    <!-- Estadísticas -->
                    <div class="row mb-4">
                        <div class="col-6">
                            <div class="stat-item d-flex align-items-center">
                                <div class="stat-icon me-3">
                                    <i class="<?php echo esc_attr($attributes['stat1Icon'] ?? 'fas fa-tools'); ?>"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 class="stat-number mb-0">
                                        <?php echo esc_html($attributes['stat1Number'] ?? '10+'); ?>
                                    </h3>
                                    <span class="stat-label">
                                        <?php echo esc_html($attributes['stat1Label'] ?? 'años de Experiencia'); ?>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="stat-item d-flex align-items-center">
                                <div class="stat-icon me-3">
                                    <i class="<?php echo esc_attr($attributes['stat2Icon'] ?? 'fas fa-users'); ?>"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 class="stat-number mb-0">
                                        <?php echo esc_html($attributes['stat2Number'] ?? '150+'); ?>
                                    </h3>
                                    <span class="stat-label">
                                        <?php echo esc_html($attributes['stat2Label'] ?? 'Clientes'); ?>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Botones de acción -->
                    <div class="action-buttons d-flex flex-wrap gap-3">
                        <a href="<?php echo esc_url(home_url($attributes['servicesButtonUrl'] ?? '/servicios')); ?>"
                           class="btn btn-primary">
                            <?php echo esc_html($attributes['servicesButtonText'] ?? 'Servicios'); ?>
                        </a>

                        <div class="contact-info d-flex align-items-center">
                            <i class="fas fa-phone-alt me-2"></i>
                            <div>
                                <small class="d-block text-muted">
                                    <?php echo esc_html($attributes['contactEmail'] ?? 'contacto@carpinterianudo.es'); ?>
                                </small>
                                <strong>
                                    <a href="tel:<?php echo esc_attr($attributes['contactPhoneLink'] ?? '910053700'); ?>" 
                                       class="text-decoration-none">
                                        <?php echo esc_html($attributes['contactPhone'] ?? '910 05 37 00'); ?>
                                    </a>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
