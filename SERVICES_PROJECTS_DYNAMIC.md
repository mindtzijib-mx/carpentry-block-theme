# Services Projects Block - Dynamic Services Implementation

## Descripción

El bloque `services-projects` ahora soporta servicios dinámicos que se obtienen automáticamente del custom post type `servicios`. La sección de servicios se actualiza automáticamente cuando se añaden, modifican o eliminan servicios.

## Cambios Implementados

### 1. Archivo `block.json`

- **Añadido**: Atributo `useDynamicServices` (boolean, default: true)

### 2. Archivo `render.php`

- **Modificado**: Lógica de servicios para usar servicios dinámicos o estáticos
- **Añadido**: Query a la CPT `servicios` con hasta 8 servicios
- **Mejorado**: Fallback inteligente a servicios estáticos
- **Añadido**: Enlaces clicables en las flechas de servicios dinámicos

### 3. Archivo `edit.js`

- **Añadido**: Hook `useSelect` para obtener servicios desde WordPress API
- **Añadido**: Control toggle para activar/desactivar servicios dinámicos
- **Añadido**: Notices informativos sobre el estado de servicios dinámicos
- **Modificado**: Renderizado condicional de servicios en el editor
- **Mejorado**: Los paneles de configuración de servicios estáticos solo aparecen cuando se desactivan los dinámicos

## Nuevas Características

### Control de Servicios Dinámicos

- **Toggle switch**: "Usar servicios dinámicos" en la configuración del bloque
- **Notices informativos**:
  - Success: Muestra cuántos servicios dinámicos se encontraron
  - Warning: Alerta cuando no hay servicios publicados

### Servicios Dinámicos

- **Fuente**: Custom post type `servicios`
- **Límite**: Hasta 8 servicios (ideal para slider)
- **Orden**: Por `menu_order` (personalizable desde admin)
- **Campos utilizados**:
  - Título del servicio
  - Excerpt (descripción corta)
  - Meta field `service_icon` para el icono
  - Permalink para el enlace

### Fallback Inteligente

1. **Con toggle activado + servicios disponibles**: Usa servicios dinámicos
2. **Con toggle activado + sin servicios**: Usa servicios estáticos como respaldo
3. **Con toggle desactivado**: Usa servicios estáticos configurables

## Comportamiento del Editor

### Modo Dinámico (useDynamicServices = true)

- Muestra vista previa de servicios reales del CPT
- Oculta paneles de configuración de servicios individuales
- Muestra notices informativos
- Los servicios no son editables directamente en el bloque

### Modo Estático (useDynamicServices = false)

- Muestra los 4 servicios configurables manualmente
- Permite edición completa de título, descripción e icono
- Funciona igual que antes de los cambios

## Configuración de Servicios Dinámicos

### Custom Fields Requeridos

Para que un servicio dinámico funcione correctamente, necesita:

1. **Título**: Automático (post title)
2. **Descripción**: Se usa excerpt, si no existe se toman 25 palabras del contenido
3. **Icono**: Meta field `service_icon` (ej: "fas fa-tools")
4. **URL**: Automática (permalink del servicio)

### Ejemplo de Meta Field

```php
// En el admin del servicio
add_post_meta($service_id, 'service_icon', 'fas fa-wrench');
```

## Ventajas

1. **Automático**: Los servicios se sincronizan automáticamente
2. **Flexible**: Permite alternar entre dinámico y estático
3. **Escalable**: Hasta 8 servicios en el slider
4. **Consistente**: Mantiene el diseño y funcionalidad existente
5. **Backwards Compatible**: Los bloques existentes siguen funcionando
6. **SEO Friendly**: Enlaces reales a páginas individuales de servicios

## Compatibilidad

- ✅ **Bloques existentes**: Siguen funcionando sin cambios
- ✅ **Servicios estáticos**: Disponibles cuando se desactiva el toggle
- ✅ **Diseño responsive**: Mantiene toda la funcionalidad de slider
- ✅ **Estilos**: No requiere cambios de CSS

## Archivos Modificados

1. `src/services-projects/block.json` - Nuevo atributo
2. `src/services-projects/render.php` - Lógica dinámica
3. `src/services-projects/edit.js` - Editor con toggle y vista previa dinámica

El bloque mantiene plena compatibilidad hacia atrás y añade la nueva funcionalidad de manera opcional.
