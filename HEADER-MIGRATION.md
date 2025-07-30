# Migración del Header - Tema Clásico a Block Theme

## Resumen de la Migración

Se ha migrado exitosamente el header del tema clásico `carpentry-theme` al tema moderno `carpentry-block-theme`, manteniendo el diseño y funcionalidad originales.

## Archivos Modificados/Creados

### 1. Componente Header Block

- **`src/header/render.php`** - Template PHP del header con la estructura HTML completa
- **`src/header/edit.js`** - Vista de edición en Gutenberg con preview realista
- **`src/header/index.js`** - Registro del bloque
- **`src/header/block.json`** - Configuración del bloque

### 2. Estilos SCSS

- **`scss/blocks/_header.scss`** - Estilos completamente migrados del tema clásico
- **`scss/utils/_variables.scss`** - Variables de color actualizadas para coincidir con el tema original

### 3. Funcionalidad JavaScript

- **`assets/js/header.js`** - JavaScript para menú móvil, modal de búsqueda e interacciones

### 4. Configuración del Tema

- **`functions.php`** - Funciones para registrar bloques, cargar scripts y menús
- **`parts/header.html`** - Template part que llama al bloque personalizado

## Características Migradas

### Diseño Visual

✅ **Header superior** con logo, información de contacto y redes sociales
✅ **Header inferior** con navegación integrada con fondo secundario
✅ **Botón de teléfono** con diseño personalizado y esquinas redondeadas
✅ **Colores y tipografías** exactamente iguales al tema clásico
✅ **Espaciados y dimensiones** idénticos

### Funcionalidad

✅ **Menú móvil** con toggle hamburguesa
✅ **Modal de búsqueda** con overlay y funcionalidad ESC
✅ **Navegación responsiva** con breakpoints correctos
✅ **Font Awesome** y Google Fonts cargados
✅ **Funciones de WordPress** (wp_nav_menu, custom_logo, etc.)

### Estructura Técnica

✅ **Bloque personalizado** registrado correctamente
✅ **Full Site Editing** compatible
✅ **SCSS compilado** a CSS optimizado
✅ **JavaScript compilado** con wp-scripts
✅ **Assets optimizados** con versionado

## Colores del Tema

```scss
$primary-color: #a17a66     // Color principal (marrón carpintería)
$primary-dark: #8b6854      // Versión oscura del principal
$secondary-color: #3b3430   // Color secundario (fondo navegación)
$white: #fff                // Blanco
$gray-medium: #666          // Gris medio (textos)
```

## Estructura HTML

```html
<header class="site-header-container">
  <div class="site-header">
    <!-- Header Top: Logo + Contacto + Redes -->
    <div class="site-header-top">...</div>

    <!-- Header Bottom: Navegación + Teléfono -->
    <div class="site-header-bottom">...</div>
  </div>
</header>
```

## Uso del Bloque

El header se incluye automáticamente usando:

```html
<!-- wp:carpentry/header /-->
```

## Responsive Design

- **Desktop (≥992px)**: Layout completo con todos los elementos
- **Tablet (768px-991px)**: Oculta información de contacto y redes
- **Mobile (<768px)**: Menú hamburguesa y layout simplificado

## Próximos Pasos

1. Probar el header en diferentes dispositivos
2. Verificar la funcionalidad del menú en WordPress
3. Configurar el menú principal en WordPress Admin
4. Ajustar cualquier detalle visual si es necesario

## Compatibilidad

- WordPress 6.0+
- PHP 8.0+
- Navegadores modernos
- Full Site Editing habilitado
