# Carpentry Block Theme - AI Coding Guidelines

## Project Architecture

This is a **WordPress Full Site Editing (FSE) block theme** for ServiLucas carpentry services. The theme follows a modern block-first architecture with custom blocks, SCSS compilation, and PHP server-side rendering.

### Block Development Pattern

**All custom blocks follow this structure:**

- `src/{block-name}/` - Source files (JS, block.json, render.php)
- `build/{block-name}/` - Compiled output (@wordpress/scripts)
- Block namespace: `carpentry/*` (e.g., `carpentry/hero`, `carpentry/services-grid`)

**Key files per block:**

- `block.json` - Block metadata and attributes (API version 3)
- `index.js` - Registers block with `save: () => null` (PHP rendering)
- `edit.js` - Block editor component
- `render.php` - Server-side rendering template

**Block registration in `functions.php`:**

```php
register_block_type_from_metadata(__DIR__ . '/build/block-name');
```

### Build System & Development Workflow

**Primary commands:**

- `npm run dev:all` - Starts both JS and SCSS watch modes concurrently
- `npm run build:all` - Production build (JS + SCSS compilation)
- `npm run start` - WordPress scripts development mode
- `npm run build:sass` - Compiles SCSS to `build/style-index.css`

**SCSS Architecture:**

- Main entry: `scss/style.scss`
- Block styles: `scss/blocks/_block-name.scss`
- Compiled to: `build/style-index.css` (enqueued in frontend)

### Custom Post Types & Templates

**Custom post type:** `servicios` (Services)

- Archive template: `archive-servicios.html`
- Single template: `single-servicios.html`
- Shows in REST API, has custom fields support
- **Dynamic form integration:** Contact forms automatically load services from this CPT

**Template hierarchy (in `templates/`):**

- `front-page.html` - Homepage
- `page-{slug}.html` - Custom page templates
- All templates use custom blocks for layout

### Dynamic Services Integration

**Contact forms with dynamic services:** Both `carpentry/request-quote` and `carpentry/contact-section` blocks automatically populate service options from the `servicios` custom post type.

**Implementation pattern:**

```php
// In render.php
$services_query = new WP_Query([
    'post_type' => 'servicios',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'title',
    'order' => 'ASC'
]);
// Build service_options array with fallback to static options
```

**Editor integration:**

```javascript
// In edit.js
const services = useSelect((select) => {
  const { getEntityRecords } = select("core");
  return getEntityRecords("postType", "servicios", {
    per_page: -1,
    status: "publish",
  });
}, []);
```

### Global Settings Integration

**Contact data from Customizer:** Blocks like `carpentry/about` automatically use global contact settings from WordPress Customizer while allowing block-level overrides.

**Available global settings:**

- `carpentry_company_email` - Company email address
- `carpentry_company_phone` - Display phone number
- `carpentry_company_phone_link` - Phone link (no spaces)
- `carpentry_company_address` - Company address

**Implementation pattern:**

```php
// In render.php - Get global settings with fallbacks
$global_email = get_theme_mod('carpentry_company_email', 'info@reformasservilucas.com');
$global_phone = get_theme_mod('carpentry_company_phone', '910 05 37 00');

// Use global but allow block override
$emailAddress = !empty($attributes['emailAddress']) ? $attributes['emailAddress'] : $global_email;
```

**Editor integration:**

```javascript
// Show global settings in editor with visual indicators
const globalSettings = useSelect((select) => {
  const { getEntityRecord } = select("core");
  const siteData = getEntityRecord("root", "site");
  return {
    globalEmail: siteData?.carpentry_company_email || "default@email.com",
  };
}, []);
```

### Content Architecture

**Theme settings in `theme.json`:**

- Content width: 1200px, Wide: 1400px
- Custom font sizes, spacing units, color palette
- Block categories: `carpentry-blocks`

**Block rendering pattern:**

- Attributes extracted with fallbacks: `$title = $attributes['title'] ?? 'Default';`
- Wrapper attributes: `get_block_wrapper_attributes(['class' => 'custom-class'])`
- Content sanitization: `wp_kses_post()` for HTML, `esc_html()` for text

### Styling Conventions

**CSS class naming:**

- Block containers: `.block-name-section`
- BEM methodology for components: `.hero-content`, `.hero-title`
- Responsive utilities follow Bootstrap-like grid system

**SCSS imports order:**

1. Utils (variables, mixins)
2. Base (reset, typography)
3. Layout (grid, navigation)
4. Components (buttons, forms, cards)
5. Block-specific styles

### Asset Management

**Image handling:**

- Static assets in `images/` directory
- Fallback images using `get_template_directory_uri()`
- Background images via inline styles in render.php

**Script enqueueing:**

- Frontend scripts: `assets/js/header.js`, `assets/js/footer.js`
- Editor styles: `editor-style.css`
- External CDN: Font Awesome 6.4.0, Google Fonts

### Development Guidelines

**When adding new blocks:**

1. Create `src/{block-name}/` directory
2. Add block registration to `functions.php`
3. Create corresponding SCSS file in `scss/blocks/`
4. Import SCSS in main `style.scss`
5. Run `npm run build:all` to compile

**Block attribute patterns:**

- Use string types with default values for editable content
- Boolean attributes for toggles
- URL attributes for links and images
- Array attributes for repeatable content

**PHP rendering best practices:**

- Always use fallback values for attributes
- Sanitize output appropriately
- Use `get_block_wrapper_attributes()` for proper block support
- Include responsive classes and proper semantic HTML
