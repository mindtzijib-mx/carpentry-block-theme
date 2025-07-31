<?php
if (!defined('ABSPATH')) {
    exit;
}

// Extract attributes
$section_title = $attributes['sectionTitle'] ?? __('Nuestros Servicios', 'carpentry-blocks');
$section_subtitle = $attributes['sectionSubtitle'] ?? __('Servicios profesionales de carpintería y reformas', 'carpentry-blocks');
$show_title = $attributes['showTitle'] ?? true;
$show_subtitle = $attributes['showSubtitle'] ?? true;
$posts_per_page = $attributes['postsPerPage'] ?? 6;
$columns = $attributes['columns'] ?? 3;
$card_style = $attributes['cardStyle'] ?? 'modern';
$show_excerpt = $attributes['showExcerpt'] ?? true;
$show_read_more = $attributes['showReadMore'] ?? true;
$read_more_text = $attributes['readMoreText'] ?? __('Ver Detalles', 'carpentry-blocks');
$show_pagination = $attributes['showPagination'] ?? true;
$background_color = $attributes['backgroundColor'] ?? '#ffffff';
$text_color = $attributes['textColor'] ?? '#333333';
$accent_color = $attributes['accentColor'] ?? '#a17a66';
$order_by = $attributes['orderBy'] ?? 'menu_order';
$order = $attributes['order'] ?? 'ASC';

// Get current page for pagination
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

// Query services
$args = array(
    'post_type'      => 'servicios',
    'posts_per_page' => $posts_per_page,
    'paged'          => $paged,
    'orderby'        => $order_by,
    'order'          => $order,
    'post_status'    => 'publish',
    'meta_query'     => array(
        'relation' => 'OR',
        array(
            'key'     => '_thumbnail_id',
            'compare' => 'EXISTS'
        ),
        array(
            'key'     => '_thumbnail_id',
            'compare' => 'NOT EXISTS'
        )
    )
);

$services_query = new WP_Query($args);
?>

<main id="main" class="site-main">
    <article class="servicios-archive">
        <div class="entry-content">
            <!-- Dynamic Services from WordPress -->
            <?php if ($services_query->have_posts()): ?>
                <section class="servicios-dinamicos">
                    <div class="container">
                        <div class="servicios-grid">
                            <?php while ($services_query->have_posts()): $services_query->the_post(); ?>
                                <div class="servicio-card">
                                    <div class="servicio-image">
                                        <?php if (has_post_thumbnail()): ?>
                                            <?php the_post_thumbnail('large', array('alt' => get_the_title())); ?>
                                        <?php else: ?>
                                            <img src="<?php echo get_template_directory_uri(); ?>/images/Proyecto-nuevo-64-1024x853.jpg" alt="<?php the_title(); ?>">
                                        <?php endif; ?>
                                        <div class="servicio-icon">
                                            <i class="fas fa-tools"></i>
                                        </div>
                                    </div>
                                    <div class="servicio-content">
                                        <h3 class="servicio-title"><?php the_title(); ?></h3>
                                        <p class="servicio-description">
                                            <?php
                                            if (has_excerpt()) {
                                                echo wp_trim_words(get_the_excerpt(), 20, '...');
                                            } else {
                                                echo wp_trim_words(get_the_content(), 20, '...');
                                            }
                                            ?>
                                        </p>
                                        <a href="<?php the_permalink(); ?>" class="servicio-link">
                                            Ver Detalles <i class="fas fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            <?php endwhile; ?>
                        </div>

                        <!-- Paginación -->
                        <?php if ($show_pagination && $services_query->max_num_pages > 1): ?>
                        <div class="servicios-pagination">
                            <?php
                            $pagination_args = array(
                                'total'        => $services_query->max_num_pages,
                                'current'      => $paged,
                                'format'       => '?paged=%#%',
                                'show_all'     => false,
                                'end_size'     => 1,
                                'mid_size'     => 2,
                                'prev_next'    => true,
                                'prev_text'    => '<i class="fas fa-chevron-left"></i> Anterior',
                                'next_text'    => 'Siguiente <i class="fas fa-chevron-right"></i>',
                                'type'         => 'plain',
                                'add_args'     => false,
                                'add_fragment' => '',
                            );
                            
                            echo paginate_links($pagination_args);
                            ?>
                        </div>
                        <?php endif; ?>
                    </div>
                </section>
            <?php else: ?>
                <section class="servicios-dinamicos">
                    <div class="container">
                        <div class="servicios-grid">
                            <div class="no-services">
                                <h3>No hay servicios disponibles</h3>
                                <p>Pronto añadiremos nuevos servicios. ¡Vuelve a visitarnos!</p>
                            </div>
                        </div>
                    </div>
                </section>
            <?php endif; ?>
        </div>
    </article>
</main>

<?php
// Reset post data
wp_reset_postdata();
?>
