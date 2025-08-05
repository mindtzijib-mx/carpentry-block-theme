<?php
/**
 * Blog Posts Grid Block Template
 * 
 * @param array $attributes Block attributes
 */

// Extract attributes
$section_title = $attributes['sectionTitle'] ?? 'Últimas Entradas';
$show_title = $attributes['showTitle'] ?? true;
$posts_per_page = $attributes['postsPerPage'] ?? 6;
$columns = $attributes['columns'] ?? 3;
$show_excerpt = $attributes['showExcerpt'] ?? true;
$excerpt_length = $attributes['excerptLength'] ?? 20;
$show_featured_image = $attributes['showFeaturedImage'] ?? true;
$show_date = $attributes['showDate'] ?? true;
$show_author = $attributes['showAuthor'] ?? true;
$show_category = $attributes['showCategory'] ?? true;
$show_read_more = $attributes['showReadMore'] ?? true;
$read_more_text = $attributes['readMoreText'] ?? 'Leer Más';
$date_format = $attributes['dateFormat'] ?? 'd M Y';
$order_by = $attributes['orderBy'] ?? 'date';
$order = $attributes['order'] ?? 'DESC';
$category_filter = $attributes['categoryFilter'] ?? [];
$background_color = $attributes['backgroundColor'] ?? '#ffffff';
$text_color = $attributes['textColor'] ?? '#333333';
$accent_color = $attributes['accentColor'] ?? '#a17a66';
$card_style = $attributes['cardStyle'] ?? 'modern';
$show_pagination = $attributes['showPagination'] ?? true;
$pagination_style = $attributes['paginationStyle'] ?? 'numbers';

// Build block classes
$block_classes = 'blog-posts-grid-block';
if (!empty($attributes['className'])) {
    $block_classes .= ' ' . $attributes['className'];
}

// Get current page for pagination
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

// Build query args
$query_args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => $posts_per_page,
    'paged' => $paged,
    'orderby' => $order_by,
    'order' => $order
);

// Add category filter if specified
if (!empty($category_filter)) {
    $query_args['category__in'] = $category_filter;
}

// Get posts
$blog_query = new WP_Query($query_args);
?>

<section class="<?php echo esc_attr($block_classes); ?> card-style-<?php echo esc_attr($card_style); ?>" 
         style="color: <?php echo esc_attr($text_color); ?>;">
    <div class="container">
        <?php if ($show_title && !empty($section_title)): ?>
            <h2 class="blog-posts-title text-center mb-5" 
                style="color: <?php echo esc_attr($text_color); ?>;">
                <?php echo wp_kses_post($section_title); ?>
            </h2>
        <?php endif; ?>

        <?php if ($blog_query->have_posts()): ?>
            <div class="blog-posts-grid" 
                 style="--columns: <?php echo esc_attr($columns); ?>; --accent-color: <?php echo esc_attr($accent_color); ?>;">
                <?php while ($blog_query->have_posts()): $blog_query->the_post(); ?>
                    <article class="blog-post-card">
                        <?php if ($show_featured_image): ?>
                            <div class="blog-post-image">
                                <?php if (has_post_thumbnail()): ?>
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('large', array('alt' => get_the_title())); ?>
                                    </a>
                                <?php else: ?>
                                    <a href="<?php the_permalink(); ?>">
                                        <div class="placeholder-image">
                                            <i class="fas fa-image"></i>
                                        </div>
                                    </a>
                                <?php endif; ?>
                                
                                <?php if ($show_date): ?>
                                    <div class="blog-post-date" 
                                         style="background-color: <?php echo esc_attr($accent_color); ?>;">
                                        <span class="day"><?php echo get_the_date('d'); ?></span>
                                        <span class="month"><?php echo get_the_date('M'); ?></span>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        
                        <div class="blog-post-content">
                            <?php if ($show_category || $show_author): ?>
                                <div class="blog-post-meta">
                                    <?php if ($show_category): ?>
                                        <?php
                                        $categories = get_the_category();
                                        if (!empty($categories)):
                                        ?>
                                            <span class="blog-category" 
                                                  style="background-color: rgba(<?php echo esc_attr(hexdec(substr($accent_color, 1, 2))); ?>, <?php echo esc_attr(hexdec(substr($accent_color, 3, 2))); ?>, <?php echo esc_attr(hexdec(substr($accent_color, 5, 2))); ?>, 0.1); color: <?php echo esc_attr($accent_color); ?>;">
                                                <?php echo esc_html($categories[0]->name); ?>
                                            </span>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                    
                                    <?php if ($show_author): ?>
                                        <span class="blog-author">
                                            Por <?php the_author(); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                            
                            <h3 class="blog-post-title">
                                <a href="<?php the_permalink(); ?>" 
                                   style="color: <?php echo esc_attr($text_color); ?>;">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            
                            <?php if ($show_excerpt): ?>
                                <p class="blog-post-excerpt">
                                    <?php
                                    if (has_excerpt()) {
                                        echo wp_trim_words(get_the_excerpt(), $excerpt_length, '...');
                                    } else {
                                        echo wp_trim_words(get_the_content(), $excerpt_length, '...');
                                    }
                                    ?>
                                </p>
                            <?php endif; ?>
                            
                            <?php if ($show_read_more): ?>
                                <div class="blog-read-more">
                                    <a href="<?php the_permalink(); ?>" 
                                       class="read-more-link" 
                                       style="color: <?php echo esc_attr($accent_color); ?>;">
                                        <?php echo esc_html($read_more_text); ?>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>

            <?php if ($show_pagination && $blog_query->max_num_pages > 1): ?>
                <div class="blog-pagination-wrapper">
                    <?php
                    $pagination_args = array(
                        'total' => $blog_query->max_num_pages,
                        'current' => $paged,
                        'format' => '?paged=%#%',
                        'show_all' => false,
                        'end_size' => 1,
                        'mid_size' => 2,
                        'prev_next' => ($pagination_style === 'arrows' || $pagination_style === 'both'),
                        'prev_text' => '<i class="fas fa-chevron-left"></i> Anterior',
                        'next_text' => 'Siguiente <i class="fas fa-chevron-right"></i>',
                        'type' => 'array',
                        'class' => 'blog-pagination'
                    );
                    
                    $pagination_links = paginate_links($pagination_args);
                    
                    if ($pagination_links):
                    ?>
                        <nav class="blog-pagination" 
                             style="--accent-color: <?php echo esc_attr($accent_color); ?>;">
                            <ul class="pagination-list">
                                <?php foreach ($pagination_links as $link): ?>
                                    <li><?php echo $link; ?></li>
                                <?php endforeach; ?>
                            </ul>
                        </nav>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

        <?php else: ?>
            <div class="no-posts-found">
                <div class="no-posts-content">
                    <i class="fas fa-file-alt" style="font-size: 3rem; color: <?php echo esc_attr($accent_color); ?>; margin-bottom: 1rem;"></i>
                    <h3 style="color: <?php echo esc_attr($text_color); ?>;">
                        <?php _e('No hay entradas disponibles', 'carpentry-blocks'); ?>
                    </h3>
                    <p style="color: #666;">
                        <?php _e('Aún no se han publicado entradas en el blog.', 'carpentry-blocks'); ?>
                    </p>
                </div>
            </div>
        <?php endif; ?>
        
        <?php wp_reset_postdata(); ?>
    </div>
</section>
