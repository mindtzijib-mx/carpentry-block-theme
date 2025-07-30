<?php
/**
 * Carpentry Block Theme Functions
 * 
 * @package CarpentryBlocks
 * @since 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function carpentry_blocks_setup() {
    // Add theme support for Full Site Editing
    add_theme_support('block-templates');
    
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Add support for editor styles
    add_theme_support('editor-styles');
    
    // Add support for wide alignment
    add_theme_support('align-wide');
    
    // Add support for custom line height
    add_theme_support('custom-line-height');
    
    // Add support for custom units
    add_theme_support('custom-units');
    
    // Add support for custom spacing
    add_theme_support('custom-spacing');
    
    // Add support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add support for automatic feed links
    add_theme_support('automatic-feed-links');
    
    // Add support for HTML5 markup
    add_theme_support('html5', array(
        'comment-list',
        'comment-form', 
        'search-form',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    
    // Add support for title tag
    add_theme_support('title-tag');
    
    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'carpentry-blocks'),
        'footer' => __('Footer Menu', 'carpentry-blocks'),
        'footer-services' => __('Footer Services', 'carpentry-blocks'),
        'footer-legal' => __('Footer Legal', 'carpentry-blocks'),
    ));
    
    // Load theme textdomain
    load_theme_textdomain('carpentry-blocks', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'carpentry_blocks_setup');

/**
 * Enqueue scripts and styles
 */
function carpentry_blocks_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style(
        'carpentry-blocks-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Viga:wght@400&display=swap',
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue Font Awesome
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        array(),
        '6.4.0'
    );
    
    // Enqueue theme styles
    wp_enqueue_style(
        'carpentry-blocks-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue theme scripts
    wp_enqueue_script(
        'carpentry-blocks-script',
        get_template_directory_uri() . '/assets/js/theme.js',
        array('jquery'),
        wp_get_theme()->get('Version'),
        true
    );
    
    // Localize script for AJAX
    wp_localize_script(
        'carpentry-blocks-script',
        'carpentryBlocks',
        array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('carpentry_blocks_nonce'),
            'restUrl' => rest_url('wp/v2/'),
            'restNonce' => wp_create_nonce('wp_rest')
        )
    );
}
add_action('wp_enqueue_scripts', 'carpentry_blocks_scripts');

/**
 * Enqueue editor styles
 */
function carpentry_blocks_editor_styles() {
    // Enqueue Google Fonts for editor
    wp_enqueue_style(
        'carpentry-blocks-editor-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Viga:wght@400&display=swap',
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue Font Awesome for editor
    wp_enqueue_style(
        'font-awesome-editor',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        array(),
        '6.4.0'
    );
}
add_action('enqueue_block_editor_assets', 'carpentry_blocks_editor_styles');

/**
 * Register custom post type: Servicios
 */
function carpentry_blocks_register_servicios_post_type() {
    $labels = array(
        'name'                  => _x('Servicios', 'Post type general name', 'carpentry-blocks'),
        'singular_name'         => _x('Servicio', 'Post type singular name', 'carpentry-blocks'),
        'menu_name'             => _x('Servicios', 'Admin Menu text', 'carpentry-blocks'),
        'name_admin_bar'        => _x('Servicio', 'Add New on Toolbar', 'carpentry-blocks'),
        'add_new'               => __('Añadir Nuevo', 'carpentry-blocks'),
        'add_new_item'          => __('Añadir Nuevo Servicio', 'carpentry-blocks'),
        'new_item'              => __('Nuevo Servicio', 'carpentry-blocks'),
        'edit_item'             => __('Editar Servicio', 'carpentry-blocks'),
        'view_item'             => __('Ver Servicio', 'carpentry-blocks'),
        'all_items'             => __('Todos los Servicios', 'carpentry-blocks'),
        'search_items'          => __('Buscar Servicios', 'carpentry-blocks'),
        'parent_item_colon'     => __('Servicios Padre:', 'carpentry-blocks'),
        'not_found'             => __('No se encontraron servicios.', 'carpentry-blocks'),
        'not_found_in_trash'    => __('No se encontraron servicios en la papelera.', 'carpentry-blocks'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'show_in_rest'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'servicios'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-tools',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'template'           => array(
            array('core/paragraph', array(
                'placeholder' => __('Describe este servicio...', 'carpentry-blocks')
            ))
        ),
        'template_lock'      => false,
    );

    register_post_type('servicios', $args);
}
add_action('init', 'carpentry_blocks_register_servicios_post_type');

/**
 * Register custom blocks
 */
function carpentry_blocks_register_blocks() {
    // Register our custom blocks using metadata
    if (function_exists('register_block_type_from_metadata')) {
        register_block_type_from_metadata(__DIR__ . '/build/header');
        register_block_type_from_metadata(__DIR__ . '/build/footer');
    }
}
add_action('init', 'carpentry_blocks_register_blocks');

/**
 * Register custom block styles
 */
function carpentry_blocks_register_block_styles() {
    // Register button styles
    register_block_style(
        'core/button',
        array(
            'name'  => 'carpentry-primary',
            'label' => __('Primary Button', 'carpentry-blocks'),
        )
    );
    
    register_block_style(
        'core/button',
        array(
            'name'  => 'carpentry-secondary',
            'label' => __('Secondary Button', 'carpentry-blocks'),
        )
    );
    
    register_block_style(
        'core/button',
        array(
            'name'  => 'carpentry-outline',
            'label' => __('Outline Button', 'carpentry-blocks'),
        )
    );
}
add_action('init', 'carpentry_blocks_register_block_styles');

/**
 * Register block patterns
 */
function carpentry_blocks_register_block_patterns() {
    // Register pattern category
    register_block_pattern_category(
        'carpentry-blocks',
        array('label' => __('Carpentry Blocks', 'carpentry-blocks'))
    );
}
add_action('init', 'carpentry_blocks_register_block_patterns');

/**
 * Enqueue frontend scripts and styles
 */
function carpentry_blocks_frontend_scripts() {
    // Enqueue header functionality
    wp_enqueue_script(
        'carpentry-header-js',
        get_template_directory_uri() . '/assets/js/header.js',
        array(),
        filemtime(get_template_directory() . '/assets/js/header.js'),
        true
    );

    // Enqueue footer functionality
    wp_enqueue_script(
        'carpentry-footer-js',
        get_template_directory_uri() . '/assets/js/footer.js',
        array(),
        filemtime(get_template_directory() . '/assets/js/footer.js'),
        true
    );

    // Add Font Awesome for icons
    wp_enqueue_style(
        'font-awesome',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
        array(),
        '6.0.0'
    );

    // Add Google Fonts
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Viga:wght@400&display=swap',
        array(),
        null
    );
}
add_action('wp_enqueue_scripts', 'carpentry_blocks_frontend_scripts');

/**
 * Register navigation menus
 */
function carpentry_blocks_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'carpentry-blocks'),
        'footer' => __('Footer Menu', 'carpentry-blocks'),
        'footer-menu' => __('Footer Main Menu', 'carpentry-blocks'),
        'footer-services' => __('Footer Services Menu', 'carpentry-blocks'),
        'footer-legal' => __('Footer Legal Menu', 'carpentry-blocks'),
    ));
}
add_action('after_setup_theme', 'carpentry_blocks_register_menus');

/**
 * Get navigation menu fallback
 */
function carpentry_get_nav_menu() {
    $menu = wp_nav_menu(array(
        'theme_location' => 'primary',
        'menu_id'        => 'primary-menu',
        'container'      => false,
        'items_wrap'     => '<ul id="%1$s" class="menu">%3$s</ul>',
        'echo'           => false,
        'fallback_cb'    => function() {
            return '<ul class="menu">
                        <li><a href="' . esc_url(home_url('/')) . '">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>';
        }
    ));
    
    return $menu;
}

/**
 * Footer menu functions
 */
function carpentry_get_footer_menu()
{
    return wp_nav_menu(array(
        'theme_location' => 'footer-menu',
        'menu_class'     => 'footer-menu',
        'container'      => false,
        'fallback_cb'    => 'carpentry_footer_menu_fallback',
        'echo'           => false
    ));
}

function carpentry_get_footer_services_menu()
{
    return wp_nav_menu(array(
        'theme_location' => 'footer-services',
        'menu_class'     => 'footer-menu',
        'container'      => false,
        'fallback_cb'    => 'carpentry_footer_services_fallback',
        'echo'           => false
    ));
}

function carpentry_get_footer_legal_menu()
{
    return wp_nav_menu(array(
        'theme_location' => 'footer-legal',
        'menu_class'     => 'footer-menu',
        'container'      => false,
        'fallback_cb'    => 'carpentry_footer_legal_fallback',
        'echo'           => false
    ));
}

/**
 * Footer menu fallbacks
 */
function carpentry_footer_menu_fallback()
{
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . home_url('/') . '">Home</a></li>';
    echo '<li><a href="' . home_url('/nosotros') . '">Nosotros</a></li>';
    echo '<li><a href="' . home_url('/servicios') . '">Servicios</a></li>';
    echo '<li><a href="' . home_url('/contacto') . '">Contacto</a></li>';
    echo '</ul>';
}

function carpentry_footer_services_fallback()
{
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . home_url('/service/reformas') . '">Reformas</a></li>';
    echo '<li><a href="' . home_url('/service/tabiqueria') . '">Tabiquería</a></li>';
    echo '<li><a href="' . home_url('/service/electricidad') . '">Electricidad</a></li>';
    echo '<li><a href="' . home_url('/service/fontaneria') . '">Fontanería</a></li>';
    echo '<li><a href="' . home_url('/service/pintura') . '">Pintura</a></li>';
    echo '<li><a href="' . home_url('/service/albanileria') . '">Albañilería</a></li>';
    echo '</ul>';
}

function carpentry_footer_legal_fallback()
{
    echo '<ul class="footer-menu">';
    echo '<li><a href="' . home_url('/politica-privacidad') . '">Política de privacidad</a></li>';
    echo '<li><a href="' . home_url('/aviso-legal') . '">Aviso Legal</a></li>';
    echo '<li><a href="' . home_url('/politica-de-cookies') . '">Política de cookies</a></li>';
    echo '<li><a href="' . home_url('/declaracion-de-accesibilidad') . '">Declaración de Accesibilidad</a></li>';
    echo '</ul>';
}

