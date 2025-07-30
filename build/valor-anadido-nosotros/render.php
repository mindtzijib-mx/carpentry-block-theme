<?php
/**
 * Valor Añadido Nosotros Block Template
 *
 * @param array $attributes Block attributes
 * @param string $content Block content
 * @param WP_Block $block Block instance
 */

// Obtener atributos con valores por defecto
$section_title = $attributes['sectionTitle'] ?? 'Nuestro Valor Añadido';
$section_subtitle = $attributes['sectionSubtitle'] ?? 'Lo que nos diferencia';

$feature1_icon = $attributes['feature1Icon'] ?? 'fas fa-clock';
$feature1_title = $attributes['feature1Title'] ?? 'Puntualidad';
$feature1_description = $attributes['feature1Description'] ?? 'Cumplimos con los plazos establecidos y respetamos tu tiempo';

$feature2_icon = $attributes['feature2Icon'] ?? 'fas fa-shield-alt';
$feature2_title = $attributes['feature2Title'] ?? 'Garantía';
$feature2_description = $attributes['feature2Description'] ?? 'Todos nuestros trabajos incluyen garantía de satisfacción';

$feature3_icon = $attributes['feature3Icon'] ?? 'fas fa-tools';
$feature3_title = $attributes['feature3Title'] ?? 'Calidad';
$feature3_description = $attributes['feature3Description'] ?? 'Utilizamos materiales de primera calidad y técnicas profesionales';

$feature4_icon = $attributes['feature4Icon'] ?? 'fas fa-users';
$feature4_title = $attributes['feature4Title'] ?? 'Profesionalismo';
$feature4_description = $attributes['feature4Description'] ?? 'Equipo experimentado y certificado en reformas y construcción';

$testimonial1_name = $attributes['testimonial1Name'] ?? 'María González';
$testimonial1_text = $attributes['testimonial1Text'] ?? 'Excelente trabajo en la reforma de mi cocina. Muy profesionales y puntuales.';
$testimonial1_rating = $attributes['testimonial1Rating'] ?? 5;

$testimonial2_name = $attributes['testimonial2Name'] ?? 'Carlos López';
$testimonial2_text = $attributes['testimonial2Text'] ?? 'Reformaron mi baño completamente. El resultado superó mis expectativas.';
$testimonial2_rating = $attributes['testimonial2Rating'] ?? 5;

// Función para renderizar estrellas
function render_stars($rating) {
    $stars_html = '';
    for ($i = 1; $i <= 5; $i++) {
        $class = $i <= $rating ? 'star filled' : 'star';
        $stars_html .= '<span class="' . $class . '">★</span>';
    }
    return $stars_html;
}
?>

<section class="valor-anadido-nosotros-block">
    <div class="container">
        <!-- Header Section -->
        <div class="valor-anadido-header">
            <p class="valor-anadido-subtitle"><?php echo esc_html($section_subtitle); ?></p>
            <h2 class="valor-anadido-title"><?php echo esc_html($section_title); ?></h2>
        </div>

        <!-- Features Grid -->
        <div class="valor-anadido-features">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="<?php echo esc_attr($feature1_icon); ?>"></i>
                </div>
                <h3 class="feature-title"><?php echo esc_html($feature1_title); ?></h3>
                <p class="feature-description"><?php echo esc_html($feature1_description); ?></p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="<?php echo esc_attr($feature2_icon); ?>"></i>
                </div>
                <h3 class="feature-title"><?php echo esc_html($feature2_title); ?></h3>
                <p class="feature-description"><?php echo esc_html($feature2_description); ?></p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="<?php echo esc_attr($feature3_icon); ?>"></i>
                </div>
                <h3 class="feature-title"><?php echo esc_html($feature3_title); ?></h3>
                <p class="feature-description"><?php echo esc_html($feature3_description); ?></p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="<?php echo esc_attr($feature4_icon); ?>"></i>
                </div>
                <h3 class="feature-title"><?php echo esc_html($feature4_title); ?></h3>
                <p class="feature-description"><?php echo esc_html($feature4_description); ?></p>
            </div>
        </div>

        <!-- Testimonials Section -->
        <div class="valor-anadido-testimonials">
            <div class="testimonial-card">
                <div class="testimonial-rating">
                    <?php echo render_stars($testimonial1_rating); ?>
                </div>
                <p class="testimonial-text"><?php echo esc_html($testimonial1_text); ?></p>
                <p class="testimonial-name"><?php echo esc_html($testimonial1_name); ?></p>
            </div>

            <div class="testimonial-card">
                <div class="testimonial-rating">
                    <?php echo render_stars($testimonial2_rating); ?>
                </div>
                <p class="testimonial-text"><?php echo esc_html($testimonial2_text); ?></p>
                <p class="testimonial-name"><?php echo esc_html($testimonial2_name); ?></p>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="valor-anadido-decorations">
            <div class="decoration-shape shape-1"></div>
            <div class="decoration-shape shape-2"></div>
            <div class="decoration-shape shape-3"></div>
        </div>
    </div>
</section>
