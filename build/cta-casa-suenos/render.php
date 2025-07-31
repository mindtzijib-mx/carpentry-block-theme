<?php
/**
 * CTA Casa de Sueños Block Template
 */

$title = !empty($attributes['title']) ? esc_html($attributes['title']) : '¿Quieres tener la casa de tus sueños?';
$description = !empty($attributes['description']) ? esc_html($attributes['description']) : 'No dudes en ponerte en contacto con nosotros.';
$button_text = !empty($attributes['buttonText']) ? esc_html($attributes['buttonText']) : 'Contacta';
$button_url = !empty($attributes['buttonUrl']) ? esc_url($attributes['buttonUrl']) : home_url('/contacto');
$image_url = !empty($attributes['image']['url']) ? esc_url($attributes['image']['url']) : get_template_directory_uri() . '/images/Proyecto-nuevo-65-1024x853.jpg';
$image_alt = !empty($attributes['image']['alt']) ? esc_attr($attributes['image']['alt']) : 'Cocina moderna reformada';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'cta-casa-suenos'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4">
                <div class="cta-image">
                    <img src="<?php echo $image_url; ?>"
                        alt="<?php echo $image_alt; ?>"
                        class="img-fluid">
                </div>
            </div>
            <div class="col-lg-5">
                <div class="cta-content">
                    <h5 class="cta-title"><?php echo $title; ?></h5>
                    <p class="cta-description"><?php echo $description; ?></p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="cta-button-wrapper">
                    <a href="<?php echo $button_url; ?>" class="btn btn-primary"><?php echo $button_text; ?></a>
                </div>
            </div>
        </div>
    </div>
</section>
