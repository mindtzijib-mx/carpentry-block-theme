<?php
/**
 * Valor Añadido Nosotros Block Template
 */

// Obtener atributos con valores por defecto
$background_image = !empty($attributes['backgroundImage']) ? esc_url($attributes['backgroundImage']) : get_template_directory_uri() . '/images/Proyecto-nuevo-66-1024x853.jpg';

// Lado izquierdo - Compromiso
$left_subtitle = !empty($attributes['leftSubtitle']) ? esc_html($attributes['leftSubtitle']) : 'NUESTRO ENFOQUE';
$left_title = !empty($attributes['leftTitle']) ? esc_html($attributes['leftTitle']) : 'Máximo Compromiso Con Nuestros Clientes';

$progress1_title = !empty($attributes['progress1Title']) ? esc_html($attributes['progress1Title']) : 'Calidad de nuestros servicios';
$progress1_value = !empty($attributes['progress1Value']) ? intval($attributes['progress1Value']) : 100;

$progress2_title = !empty($attributes['progress2Title']) ? esc_html($attributes['progress2Title']) : 'Soluciones a medida';
$progress2_value = !empty($attributes['progress2Value']) ? intval($attributes['progress2Value']) : 100;

// Lado derecho - Diferencia
$right_subtitle = !empty($attributes['rightSubtitle']) ? esc_html($attributes['rightSubtitle']) : 'VALOR AÑADIDO';
$right_title = !empty($attributes['rightTitle']) ? esc_html($attributes['rightTitle']) : 'Lo Que Marca Nuestra Diferencia';
$right_description = !empty($attributes['rightDescription']) ? esc_html($attributes['rightDescription']) : 'Nuestra dedicación y atención al detalle nos distinguen en cada proyecto que realizamos.';

// Características
$feature1_icon = !empty($attributes['feature1Icon']) ? esc_attr($attributes['feature1Icon']) : 'fas fa-user-tie';
$feature1_title = !empty($attributes['feature1Title']) ? esc_html($attributes['feature1Title']) : 'Profesionales Expertos';
$feature1_text = !empty($attributes['feature1Text']) ? esc_html($attributes['feature1Text']) : 'Equipo de profesionales altamente capacitados y experimentados en el campo de las reformas.';

$feature2_icon = !empty($attributes['feature2Icon']) ? esc_attr($attributes['feature2Icon']) : 'fas fa-home';
$feature2_title = !empty($attributes['feature2Title']) ? esc_html($attributes['feature2Title']) : 'Soluciones a medida';
$feature2_text = !empty($attributes['feature2Text']) ? esc_html($attributes['feature2Text']) : 'Nuestro objetivo es entender completamente tus deseos y expectativas para poder ofrecerte soluciones a medida.';

$feature3_icon = !empty($attributes['feature3Icon']) ? esc_attr($attributes['feature3Icon']) : 'fas fa-heart';
$feature3_title = !empty($attributes['feature3Title']) ? esc_html($attributes['feature3Title']) : 'Satisfacción de nuestros clientes';
$feature3_text = !empty($attributes['feature3Text']) ? esc_html($attributes['feature3Text']) : 'Nos aseguraremos de que cada detalle sea tenido en cuenta y de que se cumplan todas tus exigencias durante el proceso de reforma.';

$feature4_icon = !empty($attributes['feature4Icon']) ? esc_attr($attributes['feature4Icon']) : 'fas fa-star';
$feature4_title = !empty($attributes['feature4Title']) ? esc_html($attributes['feature4Title']) : 'Máxima Calidad';
$feature4_text = !empty($attributes['feature4Text']) ? esc_html($attributes['feature4Text']) : 'Estamos aquí para hacer realidad tus sueños y transformar tu espacio en algo que supere tus expectativas.';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'valor-anadido-section py-5',
    'style' => 'background-image: url(' . $background_image . ');'
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container position-relative">
        <div class="row">
            <!-- Lado Izquierdo - Directo sobre el fondo -->
            <div class="col-lg-5 mb-4 mb-lg-0">
                <div class="compromiso-content">
                    <div class="section-subtitle text-uppercase mb-2">
                        <span><?php echo $left_subtitle; ?></span>
                    </div>
                    <h3 class="section-title mb-4"><?php echo $left_title; ?></h3>

                    <!-- Barras de progreso -->
                    <div class="progress-bars">
                        <div class="progress-item">
                            <div class="progress-header d-flex justify-content-between">
                                <span class="progress-title"><?php echo $progress1_title; ?></span>
                                <span class="progress-value"><?php echo $progress1_value; ?>%</span>
                            </div>
                            <div class="progress-bar-custom">
                                <div class="progress-fill" style="width: <?php echo $progress1_value; ?>%;"></div>
                            </div>
                        </div>

                        <div class="progress-item">
                            <div class="progress-header d-flex justify-content-between">
                                <span class="progress-title"><?php echo $progress2_title; ?></span>
                                <span class="progress-value"><?php echo $progress2_value; ?>%</span>
                            </div>
                            <div class="progress-bar-custom">
                                <div class="progress-fill" style="width: <?php echo $progress2_value; ?>%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lado Derecho - Caja blanca -->
            <div class="col-lg-7 d-flex align-items-start">
                <div class="diferencia-content bg-white p-5 rounded-3 shadow w-100 mt-0 mt-lg-n180">
                    <div class="section-subtitle text-uppercase mb-2">
                        <span><?php echo $right_subtitle; ?></span>
                    </div>
                    <h3 class="section-title mb-3"><?php echo $right_title; ?></h3>
                    <p class="section-description mb-4"><?php echo $right_description; ?></p>

                    <!-- Características en grid 2x2 -->
                    <div class="caracteristicas-grid">
                        <div class="caracteristica-item">
                            <div class="caracteristica-icon">
                                <i class="<?php echo $feature1_icon; ?>"></i>
                            </div>
                            <div class="caracteristica-content">
                                <h5 class="caracteristica-title"><?php echo $feature1_title; ?></h5>
                                <p class="caracteristica-text"><?php echo $feature1_text; ?></p>
                            </div>
                        </div>

                        <div class="caracteristica-item">
                            <div class="caracteristica-icon">
                                <i class="<?php echo $feature2_icon; ?>"></i>
                            </div>
                            <div class="caracteristica-content">
                                <h5 class="caracteristica-title"><?php echo $feature2_title; ?></h5>
                                <p class="caracteristica-text"><?php echo $feature2_text; ?></p>
                            </div>
                        </div>

                        <div class="caracteristica-item">
                            <div class="caracteristica-icon">
                                <i class="<?php echo $feature3_icon; ?>"></i>
                            </div>
                            <div class="caracteristica-content">
                                <h5 class="caracteristica-title"><?php echo $feature3_title; ?></h5>
                                <p class="caracteristica-text"><?php echo $feature3_text; ?></p>
                            </div>
                        </div>

                        <div class="caracteristica-item">
                            <div class="caracteristica-icon">
                                <i class="<?php echo $feature4_icon; ?>"></i>
                            </div>
                            <div class="caracteristica-content">
                                <h5 class="caracteristica-title"><?php echo $feature4_title; ?></h5>
                                <p class="caracteristica-text"><?php echo $feature4_text; ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
