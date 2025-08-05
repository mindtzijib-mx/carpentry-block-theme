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
    
    // Enqueue editor styles
    add_editor_style('editor-style.css');
    
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
    
    // Enqueue compiled SCSS styles (style-index.css)
    wp_enqueue_style(
        'carpentry-blocks-style-index',
        get_template_directory_uri() . '/build/style-index.css',
        array(),
        wp_get_theme()->get('Version')
    );
    
    // Enqueue theme styles (fallback)
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
    // Note: Google Fonts are now loaded via editor-style.css
    // This ensures better integration with Gutenberg editor
    
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
        register_block_type_from_metadata(__DIR__ . '/build/button');
        register_block_type_from_metadata(__DIR__ . '/build/header');
        register_block_type_from_metadata(__DIR__ . '/build/footer');
        register_block_type_from_metadata(__DIR__ . '/build/hero');
        register_block_type_from_metadata(__DIR__ . '/build/about');
        register_block_type_from_metadata(__DIR__ . '/build/services-projects');
        register_block_type_from_metadata(__DIR__ . '/build/added-value');
        register_block_type_from_metadata(__DIR__ . '/build/how-we-work');
        register_block_type_from_metadata(__DIR__ . '/build/request-quote');
        register_block_type_from_metadata(__DIR__ . '/build/professional-experts');
        register_block_type_from_metadata(__DIR__ . '/build/cta-casa-suenos');
        register_block_type_from_metadata(__DIR__ . '/build/valor-anadido-nosotros');
        register_block_type_from_metadata(__DIR__ . '/build/contact-section');
        register_block_type_from_metadata(__DIR__ . '/build/google-maps');
        register_block_type_from_metadata(__DIR__ . '/build/blog-posts-grid');
        register_block_type_from_metadata(__DIR__ . '/build/blog-post-single');
        register_block_type_from_metadata(__DIR__ . '/build/services-grid');
        register_block_type_from_metadata(__DIR__ . '/build/service-single');
    }
}
add_action('init', 'carpentry_blocks_register_blocks');

/**
 * Customize register - Add custom fields for header data
 */
function carpentry_blocks_customize_register($wp_customize) {
    // Add Company Information Section
    $wp_customize->add_section('carpentry_company_info', array(
        'title'    => __('Información de la Empresa', 'carpentry-blocks'),
        'priority' => 30,
    ));

    // Company Address
    $wp_customize->add_setting('carpentry_company_address', array(
        'default'           => 'Calle Teleférico de las Canteras 4, bajo A, 28052 Madrid',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('carpentry_company_address', array(
        'label'   => __('Dirección de la Empresa', 'carpentry-blocks'),
        'section' => 'carpentry_company_info',
        'type'    => 'text',
    ));

    // Company Email
    $wp_customize->add_setting('carpentry_company_email', array(
        'default'           => 'info@reformasservilucas.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('carpentry_company_email', array(
        'label'   => __('Email de la Empresa', 'carpentry-blocks'),
        'section' => 'carpentry_company_info',
        'type'    => 'email',
    ));

    // Company Phone
    $wp_customize->add_setting('carpentry_company_phone', array(
        'default'           => '910 05 37 00',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('carpentry_company_phone', array(
        'label'   => __('Teléfono de la Empresa', 'carpentry-blocks'),
        'section' => 'carpentry_company_info',
        'type'    => 'text',
    ));

    // Company Phone Link (without spaces for tel: link)
    $wp_customize->add_setting('carpentry_company_phone_link', array(
        'default'           => '910053700',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('carpentry_company_phone_link', array(
        'label'       => __('Teléfono para Enlace (sin espacios)', 'carpentry-blocks'),
        'description' => __('Ej: 910053700 - Se usa para el enlace tel:', 'carpentry-blocks'),
        'section'     => 'carpentry_company_info',
        'type'        => 'text',
    ));

    // Social Media Section
    $wp_customize->add_section('carpentry_social_media', array(
        'title'    => __('Redes Sociales', 'carpentry-blocks'),
        'priority' => 31,
    ));

    // Instagram URL
    $wp_customize->add_setting('carpentry_instagram_url', array(
        'default'           => 'https://www.instagram.com/reformas.servilucas/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('carpentry_instagram_url', array(
        'label'   => __('URL de Instagram', 'carpentry-blocks'),
        'section' => 'carpentry_social_media',
        'type'    => 'url',
    ));

    // LinkedIn URL
    $wp_customize->add_setting('carpentry_linkedin_url', array(
        'default'           => 'https://www.linkedin.com/company/reformas-servilucas-s-l/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('carpentry_linkedin_url', array(
        'label'   => __('URL de LinkedIn', 'carpentry-blocks'),
        'section' => 'carpentry_social_media',
        'type'    => 'url',
    ));

    // Facebook URL (optional)
    $wp_customize->add_setting('carpentry_facebook_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('carpentry_facebook_url', array(
        'label'   => __('URL de Facebook (opcional)', 'carpentry-blocks'),
        'section' => 'carpentry_social_media',
        'type'    => 'url',
    ));

    // Twitter URL (optional)
    $wp_customize->add_setting('carpentry_twitter_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('carpentry_twitter_url', array(
        'label'   => __('URL de Twitter (opcional)', 'carpentry-blocks'),
        'section' => 'carpentry_social_media',
        'type'    => 'url',
    ));

    // YouTube URL (optional)
    $wp_customize->add_setting('carpentry_youtube_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('carpentry_youtube_url', array(
        'label'   => __('URL de YouTube (opcional)', 'carpentry-blocks'),
        'section' => 'carpentry_social_media',
        'type'    => 'url',
    ));
}
add_action('customize_register', 'carpentry_blocks_customize_register');

/**
 * Helper functions to get company information
 */
function carpentry_get_company_address() {
    return get_theme_mod('carpentry_company_address', 'Calle Teleférico de las Canteras 4, bajo A, 28052 Madrid');
}

function carpentry_get_company_email() {
    return get_theme_mod('carpentry_company_email', 'info@reformasservilucas.com');
}

function carpentry_get_company_phone() {
    return get_theme_mod('carpentry_company_phone', '910 05 37 00');
}

function carpentry_get_company_phone_link() {
    return get_theme_mod('carpentry_company_phone_link', '910053700');
}

function carpentry_get_social_media_links() {
    return array(
        'instagram' => get_theme_mod('carpentry_instagram_url', 'https://www.instagram.com/reformas.servilucas/'),
        'linkedin'  => get_theme_mod('carpentry_linkedin_url', 'https://www.linkedin.com/company/reformas-servilucas-s-l/'),
        'facebook'  => get_theme_mod('carpentry_facebook_url', ''),
        'twitter'   => get_theme_mod('carpentry_twitter_url', ''),
        'youtube'   => get_theme_mod('carpentry_youtube_url', ''),
    );
}

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
    // Enqueue compiled assets bundle (includes header, footer, and services-projects-slider)
    wp_enqueue_script(
        'carpentry-assets-bundle',
        get_template_directory_uri() . '/build/index.js',
        array(),
        filemtime(get_template_directory() . '/build/index.js'),
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
    // Query dynamic services from custom post type
    $services_query = new WP_Query([
        'post_type' => 'servicios',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'title',
        'order' => 'ASC'
    ]);
    
    echo '<ul class="footer-menu">';
    
    if ($services_query->have_posts()) {
        // Display dynamic services from CPT
        while ($services_query->have_posts()) {
            $services_query->the_post();
            $service_title = get_the_title();
            $service_url = get_permalink();
            echo '<li><a href="' . esc_url($service_url) . '">' . esc_html($service_title) . '</a></li>';
        }
        wp_reset_postdata();
    } else {
        // Fallback to static services if no dynamic services exist
        echo '<li><a href="' . home_url('/service/reformas') . '">Reformas</a></li>';
        echo '<li><a href="' . home_url('/service/tabiqueria') . '">Tabiquería</a></li>';
        echo '<li><a href="' . home_url('/service/electricidad') . '">Electricidad</a></li>';
        echo '<li><a href="' . home_url('/service/fontaneria') . '">Fontanería</a></li>';
        echo '<li><a href="' . home_url('/service/pintura') . '">Pintura</a></li>';
        echo '<li><a href="' . home_url('/service/albanileria') . '">Albañilería</a></li>';
    }
    
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

/**
 * Handle contact form AJAX submission
 */
function carpentry_handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['contact_nonce'], 'carpentry_contact_form')) {
        wp_die('Security check failed');
    }
    
    // Sanitize and validate input
    $nombre = sanitize_text_field($_POST['nombre']);
    $email = sanitize_email($_POST['email']);
    $telefono = sanitize_text_field($_POST['telefono']);
    $servicio = sanitize_text_field($_POST['servicio']);
    $mensaje = sanitize_textarea_field($_POST['mensaje']);
    
    // Basic validation
    $errors = array();
    
    if (empty($nombre)) {
        $errors[] = 'El nombre es obligatorio';
    }
    
    if (empty($email) || !is_email($email)) {
        $errors[] = 'Email válido es obligatorio';
    }
    
    if (empty($telefono)) {
        $errors[] = 'El teléfono es obligatorio';
    }
    
    if (empty($mensaje)) {
        $errors[] = 'El mensaje es obligatorio';
    }
    
    if (!empty($errors)) {
        wp_send_json_error(implode(', ', $errors));
    }
    
    // Prepare email content
    $to = get_option('admin_email');
    $subject = 'Nuevo mensaje de contacto - ' . get_bloginfo('name');
    
    $email_message = "Has recibido un nuevo mensaje de contacto:\n\n";
    $email_message .= "Nombre: {$nombre}\n";
    $email_message .= "Email: {$email}\n";
    $email_message .= "Teléfono: {$telefono}\n";
    
    if (!empty($servicio)) {
        $email_message .= "Servicio: {$servicio}\n";
    }
    
    $email_message .= "\nMensaje:\n{$mensaje}\n\n";
    $email_message .= "---\n";
    $email_message .= "Enviado desde: " . home_url();
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
        'Reply-To: ' . $nombre . ' <' . $email . '>'
    );
    
    // Send email
    $sent = wp_mail($to, $subject, $email_message, $headers);
    
    if ($sent) {
        wp_send_json_success('Mensaje enviado correctamente');
    } else {
        wp_send_json_error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
}

// Hook for logged in and non-logged in users
add_action('wp_ajax_carpentry_contact_form', 'carpentry_handle_contact_form');
add_action('wp_ajax_nopriv_carpentry_contact_form', 'carpentry_handle_contact_form');

/**
 * Create sample services on theme activation
 */
function carpentry_create_sample_services() {
    // Check if services already exist
    $existing_services = get_posts([
        'post_type' => 'servicios',
        'post_status' => 'publish',
        'numberposts' => 1
    ]);

    // If no services exist, create sample ones
    if (empty($existing_services)) {
        $sample_services = [
            [
                'title' => 'Reformas Integrales',
                'content' => 'Realizamos reformas completas de viviendas, oficinas y locales comerciales con la máxima calidad y profesionalidad.',
                'excerpt' => 'Reformas completas con calidad profesional'
            ],
            [
                'title' => 'Carpintería a Medida',
                'content' => 'Diseñamos y fabricamos muebles y elementos de carpintería personalizados según tus necesidades específicas.',
                'excerpt' => 'Muebles y carpintería personalizada'
            ],
            [
                'title' => 'Instalaciones Eléctricas',
                'content' => 'Servicios completos de instalación y mantenimiento eléctrico con certificación y garantía.',
                'excerpt' => 'Instalaciones eléctricas certificadas'
            ],
            [
                'title' => 'Fontanería y Sanitarios',
                'content' => 'Instalación, reparación y mantenimiento de sistemas de fontanería y equipos sanitarios.',
                'excerpt' => 'Servicios completos de fontanería'
            ],
            [
                'title' => 'Pintura y Decoración',
                'content' => 'Trabajos de pintura interior y exterior, decoración y acabados con materiales de primera calidad.',
                'excerpt' => 'Pintura y decoración profesional'
            ]
        ];

        foreach ($sample_services as $service) {
            wp_insert_post([
                'post_title' => $service['title'],
                'post_content' => $service['content'],
                'post_excerpt' => $service['excerpt'],
                'post_status' => 'publish',
                'post_type' => 'servicios',
                'post_author' => 1
            ]);
        }
    }
}

// Run on theme activation
add_action('after_switch_theme', 'carpentry_create_sample_services');

