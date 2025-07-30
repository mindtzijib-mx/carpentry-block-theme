<?php
/**
 * CTA Casa de Sueños Block Template
 */

$background_image = !empty($attributes['backgroundImage']) ? esc_url($attributes['backgroundImage']) : '';
$background_image_alt = !empty($attributes['backgroundImageAlt']) ? esc_attr($attributes['backgroundImageAlt']) : 'Casa de sueños';
$main_text = !empty($attributes['mainText']) ? wp_kses_post($attributes['mainText']) : 'Hacemos de tu casa, la casa de tus sueños';
$button_text = !empty($attributes['buttonText']) ? esc_html($attributes['buttonText']) : 'Contactanos';
$button_url = !empty($attributes['buttonUrl']) ? esc_url($attributes['buttonUrl']) : '/contacto';
$overlay_opacity = isset($attributes['overlayOpacity']) ? floatval($attributes['overlayOpacity']) : 0.6;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'cta-casa-suenos-block'
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <div 
        class="cta-casa-suenos-content"
        <?php if ($background_image): ?>
            style="background-image: url(<?php echo $background_image; ?>); --overlay-opacity: <?php echo $overlay_opacity; ?>;"
        <?php else: ?>
            style="--overlay-opacity: <?php echo $overlay_opacity; ?>;"
        <?php endif; ?>
    >
        <div class="cta-casa-suenos-overlay"></div>
        <div class="container">
            <div class="cta-casa-suenos-inner">
                <h2 class="cta-casa-suenos-title">
                    <?php echo $main_text; ?>
                </h2>
                <div class="cta-casa-suenos-button-wrapper">
                    <a href="<?php echo $button_url; ?>" class="btn btn-primary cta-casa-suenos-button">
                        <?php echo $button_text; ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
