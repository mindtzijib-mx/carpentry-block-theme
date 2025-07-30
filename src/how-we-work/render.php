<?php
/**
 * How We Work Block Template
 */
?>

<section class="how-we-work-section">
    <div class="container">
        <div class="section-header text-center">
            <div class="section-subtitle">
                <?php echo esc_html($attributes['sectionSubtitle'] ?? 'CÓMO TRABAJAMOS'); ?>
            </div>
            <h2 class="section-title">
                <?php echo esc_html($attributes['sectionTitle'] ?? 'Nuestro proceso de trabajo'); ?>
            </h2>
        </div>

        <div class="work-process-wrapper">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="process-step">
                        <div class="step-icon-wrapper">
                            <div class="step-number">
                                <?php echo esc_html($attributes['step1Number'] ?? '01'); ?>
                            </div>
                            <div class="step-icon">
                                <i class="<?php echo esc_attr($attributes['step1Icon'] ?? 'fas fa-home'); ?>"></i>
                            </div>
                        </div>
                        <div class="step-content">
                            <h3 class="step-title">
                                <?php echo esc_html($attributes['step1Title'] ?? 'Valoramos tu proyecto'); ?>
                            </h3>
                            <p class="step-description">
                                <?php echo esc_html($attributes['step1Description'] ?? 'Recogemos tus necesidades para conocer qué esperas obtener con la reforma.'); ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="process-step">
                        <div class="step-icon-wrapper">
                            <div class="step-number">
                                <?php echo esc_html($attributes['step2Number'] ?? '02'); ?>
                            </div>
                            <div class="step-icon">
                                <i class="<?php echo esc_attr($attributes['step2Icon'] ?? 'fas fa-calendar-alt'); ?>"></i>
                            </div>
                        </div>
                        <div class="step-content">
                            <h3 class="step-title">
                                <?php echo esc_html($attributes['step2Title'] ?? 'Agendamos una visita'); ?>
                            </h3>
                            <p class="step-description">
                                <?php echo esc_html($attributes['step2Description'] ?? 'Acordaremos una visita para conocer a detalle el espacio que deseas transformar.'); ?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="process-step">
                        <div class="step-icon-wrapper">
                            <div class="step-number">
                                <?php echo esc_html($attributes['step3Number'] ?? '03'); ?>
                            </div>
                            <div class="step-icon">
                                <i class="<?php echo esc_attr($attributes['step3Icon'] ?? 'fas fa-file-invoice-dollar'); ?>"></i>
                            </div>
                        </div>
                        <div class="step-content">
                            <h3 class="step-title">
                                <?php echo esc_html($attributes['step3Title'] ?? 'Te ofrecemos un presupuesto'); ?>
                            </h3>
                            <p class="step-description">
                                <?php echo esc_html($attributes['step3Description'] ?? 'Una vez recabada la información, te mandaremos un presupuesto ajustado a tus necesidades.'); ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
