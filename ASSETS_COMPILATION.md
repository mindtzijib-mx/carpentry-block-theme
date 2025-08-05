# Assets Compilation Setup

## Overview

Los archivos JavaScript de assets ahora están organizados en `src/assets/` y se compilan automáticamente a `build/assets/index.js` usando WordPress Scripts.

## Structure

```
src/assets/
├── index.js                    # Entry point principal
├── header.js                   # Funcionalidad del header
├── footer.js                   # Funcionalidad del footer
└── services-projects-slider.js # Slider de servicios/proyectos
```

## Compilation

Los archivos se compilan a:

```
build/assets/
├── index.js          # Bundle compilado y minificado
└── index.asset.php   # Metadata de dependencias
```

## Commands

### Development

```bash
# Compilar assets una vez
npm run build:assets

# Watch mode para assets
npm run watch:assets

# Development completo (bloques + SCSS + assets)
npm run dev:all
```

### Production

```bash
# Build completo para producción
npm run build:all

# Solo build de assets
npm run build:assets
```

## Integration

El archivo compilado se carga automáticamente en WordPress a través de `functions.php`:

```php
wp_enqueue_script(
    'carpentry-assets-bundle',
    get_template_directory_uri() . '/build/assets/index.js',
    array(),
    filemtime(get_template_directory() . '/build/assets/index.js'),
    true
);
```

## Notes

- Los archivos originales en `assets/js/` se mantienen como backup
- El bundle incluye toda la funcionalidad de header, footer y slider
- Se usa webpack para la minificación y optimización automática
- El modo development genera sourcemaps para debugging
