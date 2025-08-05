<?php
/**
 * Request Quote Block Template
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
        'reformas' => 'Reformas',
        'mantenimiento' => 'Mantenimiento',
        'tabiqueria' => 'Tabiquería',
        'electricidad' => 'Electricidad',
        'fontaneria' => 'Fontanería',
        'pintura' => 'Pintura'
    ];
}
?>

<section class="request-quote-section">
    <div class="container">
        <div class="quote-form-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <form class="quote-form" id="quote-form">
                        <h2 class="form-title">
                            <?php echo esc_html($attributes['formTitle'] ?? 'Solicita tu Presupuesto'); ?>
                        </h2>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" 
                                           class="form-control" 
                                           placeholder="<?php echo esc_attr($attributes['namePlaceholder'] ?? 'Nombre *'); ?>" 
                                           name="nombre" 
                                           required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" 
                                           class="form-control" 
                                           placeholder="<?php echo esc_attr($attributes['emailPlaceholder'] ?? 'Email *'); ?>" 
                                           name="email" 
                                           required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="tel" 
                                           class="form-control" 
                                           placeholder="<?php echo esc_attr($attributes['phonePlaceholder'] ?? 'Teléfono *'); ?>" 
                                           name="telefono" 
                                           required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select class="form-control" name="servicio">
                                        <option value="">
                                            <?php echo esc_html($attributes['servicePlaceholder'] ?? '—Por favor, elije una opción—'); ?>
                                        </option>
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
                            <textarea class="form-control" 
                                      rows="5" 
                                      placeholder="<?php echo esc_attr($attributes['messageePlaceholder'] ?? 'Mensaje'); ?>" 
                                      name="mensaje"></textarea>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input type="checkbox" 
                                       class="form-check-input" 
                                       id="privacy-check" 
                                       name="privacy" 
                                       required>
                                <label class="form-check-label" for="privacy-check">
                                    <?php 
                                    $privacy_text = $attributes['privacyText'] ?? 'He leído y acepto la política de privacidad';
                                    $privacy_url = $attributes['privacyUrl'] ?? '/politica-privacidad';
                                    
                                    if (strpos($privacy_text, 'política de privacidad') !== false) {
                                        $privacy_text_with_link = str_replace(
                                            'política de privacidad',
                                            '<a href="' . esc_url(home_url($privacy_url)) . '" target="_blank">política de privacidad</a>',
                                            $privacy_text
                                        );
                                        echo $privacy_text_with_link;
                                    } else {
                                        echo esc_html($privacy_text);
                                    }
                                    ?>
                                </label>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-submit">
                            <?php echo esc_html($attributes['submitButtonText'] ?? 'Enviar'); ?>
                        </button>
                    </form>
                </div>

                <div class="col-lg-6">
                    <div class="testimonial-card">
                        <div class="testimonial-stars">
                            <?php 
                            $stars = $attributes['testimonialStars'] ?? 5;
                            for ($i = 1; $i <= 5; $i++): 
                            ?>
                                <i class="fas fa-star<?php echo $i <= $stars ? '' : ' empty'; ?>"></i>
                            <?php endfor; ?>
                        </div>

                        <div class="testimonial-content">
                            <p class="testimonial-text">
                                "<?php echo esc_html($attributes['testimonialText'] ?? 'Estamos muy satisfechos de haber hecho la reforma con Servilucas. Gabriela da mucha confianza llevando el control de la obra, y Lucas ha sabido buscar soluciones a todas mis solicitudes, siendo además exigente y detallista en la ejecución del trabajo. Sin duda repetiríamos.'); ?>"
                            </p>
                        </div>

                        <div class="testimonial-author">
                            <h4 class="author-name">
                                <?php echo esc_html($attributes['testimonialAuthor'] ?? 'Ivan Martín'); ?>
                            </h4>
                            <span class="author-designation">
                                <?php echo esc_html($attributes['testimonialDesignation'] ?? '- OPINIÓN'); ?>
                            </span>
                        </div>

                        <div class="testimonial-stats">
                            <div class="stat-circle">
                                <div class="testimonial-stat-number">
                                    <?php echo esc_html($attributes['statNumber'] ?? '100+'); ?>
                                </div>
                                <div class="testimonial-stat-label">
                                    <?php echo esc_html($attributes['statLabel'] ?? 'Clientes satisfechos'); ?>
                                </div>
                            </div>
                        </div>

                        <div class="testimonial-navigation">
                            <button class="nav-btn nav-prev">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="nav-btn nav-next">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
