<?php
/**
 * Hero Block Render Template
 */

$title = $attributes['title'] ?? 'Expertos <br>en Reformas';
$description = $attributes['description'] ?? 'Nos enfocamos en entender las necesidades y deseos de nuestros clientes para ofrecerles resultados que superen sus expectativas.';
$backgroundImage = $attributes['backgroundImage'] ?? '';
$buttonText = $attributes['buttonText'] ?? 'Ver más';
$buttonUrl = $attributes['buttonUrl'] ?? '#servicios';

// Fallback image if no background is set
if (empty($backgroundImage)) {
    $backgroundImage = get_template_directory_uri() . '/images/Proyecto-nuevo-49-qu1he63ihbsvs7fnsi8hak5s5lnm5mttx2t42kzyg0.jpg';
}

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'hero-section hero-expertos',
    'style' => 'background-image: url(' . esc_url($backgroundImage) . ');'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="row align-items-center hero-row">
            <div class="col-lg-6">
                <div class="hero-content">
                    <h1 class="hero-title hero-expertos-title">
                        <?php echo wp_kses_post($title); ?>
                    </h1>
                    <p class="hero-description hero-expertos-description">
                        <?php echo wp_kses_post($description); ?>
                    </p>
                    <div class="hero-buttons">
                        <a href="<?php echo esc_url($buttonUrl); ?>" class="btn-hero-modern">
                            <?php echo esc_html($buttonText); ?>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <!-- La imagen de fondo ya cubre toda la sección -->
            </div>
        </div>
    </div>
</section>
