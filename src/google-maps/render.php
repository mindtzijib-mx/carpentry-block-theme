<?php
/**
 * Google Maps Block Template
 * Replica exacta de la sección de mapa del tema clásico
 */

// Obtener atributos con valores por defecto
$map_src = !empty($attributes['mapSrc']) ? esc_url($attributes['mapSrc']) : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4567890123456!2d-3.6795!3d40.4165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzU5LjQiTiAzwrA0MCc0Ni4yIlc!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses';
$map_title = !empty($attributes['mapTitle']) ? esc_attr($attributes['mapTitle']) : 'Ubicación de ServiLucas - Calle Teléfrico de las Canteras 4, Madrid';
$map_height = !empty($attributes['mapHeight']) ? intval($attributes['mapHeight']) : 400;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'contact-map-section'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="contact-map-container">
        <iframe
            src="<?php echo $map_src; ?>"
            width="100%"
            height="<?php echo $map_height; ?>"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="<?php echo $map_title; ?>">
        </iframe>
    </div>
</section>
