# Footer Dynamic Services Menu

## Descripción

El menú de servicios en el footer ahora se genera automáticamente desde el custom post type `servicios`. Cuando se añade, modifica o elimina un servicio, el menú del footer se actualiza dinámicamente.

## Funcionamiento

### Función Principal

- `carpentry_get_footer_services_menu()` - Maneja el menú de servicios del footer
- Primero intenta mostrar un menú de WordPress personalizado desde la ubicación `footer-services`
- Si no existe ese menú, usa la función de fallback

### Función de Fallback Actualizada

- `carpentry_footer_services_fallback()` - Ahora genera el menú dinámicamente
- Consulta todos los servicios publicados del CPT `servicios`
- Ordena los servicios alfabéticamente por título
- Si no hay servicios dinámicos, muestra servicios estáticos como respaldo

### Patrón de Implementación

```php
// Query dynamic services from custom post type
$services_query = new WP_Query([
    'post_type' => 'servicios',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'title',
    'order' => 'ASC'
]);

if ($services_query->have_posts()) {
    // Display dynamic services
    while ($services_query->have_posts()) {
        $services_query->the_post();
        $service_title = get_the_title();
        $service_url = get_permalink();
        echo '<li><a href="' . esc_url($service_url) . '">' . esc_html($service_title) . '</a></li>';
    }
    wp_reset_postdata();
} else {
    // Fallback to static services
    // ... servicios estáticos
}
```

## Uso

### Para el Administrador

1. Ve a **Servicios** en el panel de administración de WordPress
2. Añade, edita o elimina servicios según sea necesario
3. Los cambios se reflejarán automáticamente en el menú del footer

### Para el Desarrollador

- El menú sigue siendo personalizable desde **Apariencia > Menús**
- Crear un menú personalizado en la ubicación `footer-services` sobrescribirá el menú dinámico
- La función de fallback garantiza que siempre haya contenido en el footer

## Ventajas

1. **Automático**: No requiere mantenimiento manual del menú
2. **Consistente**: Mantiene sincronizados los servicios entre todas las secciones del sitio
3. **Flexible**: Permite personalización manual si es necesario
4. **Respaldo**: Incluye servicios estáticos como fallback

## Archivos Modificados

- `functions.php` - Función `carpentry_footer_services_fallback()` actualizada
- Los archivos del bloque footer permanecen inalterados

## Comportamiento

- **Con servicios dinámicos**: Muestra todos los servicios publicados ordenados alfabéticamente
- **Sin servicios dinámicos**: Muestra lista estática de servicios predefinidos
- **Con menú personalizado**: Usa el menú de WordPress personalizado (si existe)
