<?php
if (!defined('ABSPATH')) {
    exit;
}

// Get current post data
global $post;
if (!$post) {
    return;
}

// Extract attributes
$show_featured_image = $attributes['showFeaturedImage'] ?? true;
$show_title = $attributes['showTitle'] ?? true;
$show_meta = $attributes['showMeta'] ?? true;
$show_date = $attributes['showDate'] ?? true;
$show_author = $attributes['showAuthor'] ?? true;
$show_category = $attributes['showCategory'] ?? true;
$show_tags = $attributes['showTags'] ?? true;
$show_social_share = $attributes['showSocialShare'] ?? true;
$share_title = $attributes['shareTitle'] ?? __('Comparte este artículo', 'carpentry-blocks');
$background_color = $attributes['backgroundColor'] ?? '#ffffff';
$text_color = $attributes['textColor'] ?? '#333333';
$accent_color = $attributes['accentColor'] ?? '#a17a66';
$show_navigation = $attributes['showNavigation'] ?? true;
$navigation_text = $attributes['navigationText'] ?? __('Más artículos', 'carpentry-blocks');
$prev_text = $attributes['prevText'] ?? __('Anterior', 'carpentry-blocks');
$next_text = $attributes['nextText'] ?? __('Siguiente', 'carpentry-blocks');

// Get post data
$post_title = get_the_title();
$post_content = get_the_content();
$post_date = get_the_date('d \d\e F \d\e Y');
$post_author = get_the_author();
$post_categories = get_the_category();
$post_tags = get_the_tags();
$featured_image_url = get_the_post_thumbnail_url($post->ID, 'large');
$post_url = get_permalink();

// Get navigation
$prev_post = get_previous_post();
$next_post = get_next_post();
?>

<div class="blog-single-container">
    <div class="container">
        <div class="row">
            <!-- Contenido principal -->
            <div class="col-lg-8 col-md-7">
                <div class="blog-content">
                    <article class="blog-post">
                        <!-- Imagen destacada -->
                        <?php if ($show_featured_image && $featured_image_url): ?>
                            <div class="blog-hero-image">
                                <img src="<?php echo esc_url($featured_image_url); ?>" alt="<?php echo esc_attr($post_title); ?>" class="img-fluid">
                            </div>
                        <?php endif; ?>

                        <div class="blog-post-details">
                            <!-- Meta información -->
                            <?php if ($show_meta): ?>
                                <div class="blog-post-meta">
                                    <?php if ($show_date): ?>
                                        <div class="meta-item">
                                            <i class="fas fa-calendar"></i>
                                            <span><?php echo esc_html($post_date); ?></span>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <?php if ($show_author): ?>
                                        <div class="meta-item">
                                            <i class="fas fa-user"></i>
                                            <span>Por <?php echo esc_html($post_author); ?></span>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <?php if ($show_category && $post_categories): ?>
                                        <div class="meta-item">
                                            <i class="fas fa-folder"></i>
                                            <span>
                                                <?php
                                                $category_names = array();
                                                foreach ($post_categories as $category) {
                                                    $category_names[] = $category->name;
                                                }
                                                echo esc_html(implode(', ', $category_names));
                                                ?>
                                            </span>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>

                            <!-- Título -->
                            <?php if ($show_title): ?>
                                <h1 class="blog-post-title"><?php echo esc_html($post_title); ?></h1>
                            <?php endif; ?>

                            <!-- Contenido -->
                            <div class="blog-post-content">
                                <?php echo wp_kses_post($post_content); ?>
                            </div>

                            <!-- Tags -->
                            <?php if ($show_tags && $post_tags): ?>
                                <div class="blog-post-tags">
                                    <h4>Etiquetas:</h4>
                                    <div class="tags-list">
                                        <?php foreach ($post_tags as $tag): ?>
                                            <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" class="tag-item">
                                                <?php echo esc_html($tag->name); ?>
                                            </a>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>

                        <!-- Sección de comentarios -->
                        <?php if (comments_open() || get_comments_number()): ?>
                            <div class="blog-comments-section">
                                <h4>Comentarios</h4>
                                <?php comments_template(); ?>
                            </div>
                        <?php endif; ?>

                        <!-- CTA -->
                        <?php if ($show_social_share): ?>
                            <div class="blog-cta">
                                <h4><?php echo esc_html($share_title); ?></h4>
                                <p>Compártela con tus amigos o déjanos un comentario con tu opinión</p>
                                <div class="social-share">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode($post_url); ?>" target="_blank" class="btn btn-social btn-facebook">
                                        <i class="fab fa-facebook-f"></i> Compartir
                                    </a>
                                    <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode($post_url); ?>&text=<?php echo urlencode($post_title); ?>" target="_blank" class="btn btn-social btn-twitter">
                                        <i class="fab fa-twitter"></i> Tweetear
                                    </a>
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode($post_url); ?>" target="_blank" class="btn btn-social btn-linkedin">
                                        <i class="fab fa-linkedin-in"></i> Compartir
                                    </a>
                                </div>
                            </div>
                        <?php endif; ?>
                    </article>
                </div>
            </div>

            <!-- Sidebar de categorías -->
            <div class="col-lg-4 col-md-5">
                <div class="blog-sidebar">
                    <div class="blog-sidebar-header">
                        Categorías
                    </div>
                    <ul class="categories-list">
                        <?php
                        // Obtener todas las categorías
                        $categories = get_categories(array(
                            'orderby' => 'name',
                            'order' => 'ASC',
                            'hide_empty' => true
                        ));

                        $current_categories = get_the_category();
                        $current_category_ids = array();
                        if (!empty($current_categories)) {
                            foreach ($current_categories as $cat) {
                                $current_category_ids[] = $cat->term_id;
                            }
                        }

                        foreach ($categories as $category):
                            $is_current = in_array($category->term_id, $current_category_ids);
                        ?>
                            <li>
                                <a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"
                                    class="<?php echo $is_current ? 'active' : ''; ?>">
                                    <?php echo esc_html($category->name); ?>
                                    <span class="post-count">(<?php echo $category->count; ?>)</span>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>

                    <!-- Entradas recientes -->
                    <div class="recent-posts-widget">
                        <div class="widget-header">
                            Entradas Recientes
                        </div>
                        <?php
                        $recent_posts = get_posts(array(
                            'numberposts' => 5,
                            'post_status' => 'publish',
                            'exclude' => array(get_the_ID())
                        ));

                        if (!empty($recent_posts)):
                        ?>
                            <ul class="recent-posts-list">
                                <?php foreach ($recent_posts as $recent_post): ?>
                                    <li>
                                        <a href="<?php echo esc_url(get_permalink($recent_post->ID)); ?>">
                                            <?php echo esc_html($recent_post->post_title); ?>
                                        </a>
                                        <span class="recent-post-date">
                                            <?php echo get_the_date('d M Y', $recent_post->ID); ?>
                                        </span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
