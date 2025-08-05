# 📧 Formularios de Contacto - Carpentry Block Theme

Los formularios de contacto del tema ya están **completamente funcionales** y listos para usar. Esta documentación explica cómo funcionan y cómo probarlos.

## 🚀 Formularios Disponibles

### 1. **Block Request Quote** (`carpentry/request-quote`)

- **Ubicación**: Se puede agregar en cualquier página/post
- **Campos**: Nombre, Email, Teléfono, Servicio, Mensaje, Política de Privacidad
- **Características**: Incluye testimoniales y estadísticas en el lateral

### 2. **Block Contact Section** (`carpentry/contact-section`)

- **Ubicación**: Principalmente en la página de contacto
- **Campos**: Nombre, Email, Teléfono, Servicio, Mensaje, Política de Privacidad
- **Características**: Incluye información de contacto integrada (dirección, teléfono, email, redes sociales)

## ⚡ Funcionalidades Implementadas

### ✅ **Envío AJAX**

- Los formularios se envían sin recargar la página
- Feedback inmediato al usuario (loading state, mensajes de éxito/error)
- Manejo de errores de conexión

### ✅ **Validación en Tiempo Real**

- **Campos obligatorios**: Nombre, Email, Teléfono, Mensaje
- **Validación de email**: Formato correcto
- **Validación de teléfono**: Formatos españoles flexibles
- **Feedback visual**: Campos se marcan en verde (válido) o rojo (error)

### ✅ **Seguridad**

- **Nonces de WordPress**: Protección contra CSRF
- **Sanitización de datos**: Todos los campos se limpian en el servidor
- **Validación del servidor**: Doble validación (cliente + servidor)

### ✅ **Servicios Dinámicos**

- **Carga automática**: Los servicios se cargan del Custom Post Type `servicios`
- **Fallback**: Si no hay servicios, usa opciones predeterminadas
- **Integración editor**: Los servicios aparecen en el editor de bloques

### ✅ **Configuración Global**

- **Customizer**: Datos de contacto globales (email, teléfono, dirección)
- **Override por bloque**: Cada bloque puede sobrescribir los datos globales
- **Redes sociales**: Instagram y LinkedIn configurables

## 📧 Envío de Emails

### **Configuración Automática**

- **Destinatario**: Se envía al email del administrador (`get_option('admin_email')`)
- **Remitente**: Nombre del sitio web
- **Reply-To**: Email del usuario que envía el formulario
- **Asunto**: "Nuevo mensaje de contacto - [Nombre del sitio]"

### **Contenido del Email**

```
Has recibido un nuevo mensaje de contacto:

Nombre: [Nombre del usuario]
Email: [Email del usuario]
Teléfono: [Teléfono del usuario]
Servicio: [Servicio seleccionado] (si se seleccionó)

Mensaje:
[Mensaje del usuario]

---
Enviado desde: [URL del sitio]
```

## 🎨 Estilos y UX

### **Estados Visuales**

- **Loading**: Botón se desactiva y muestra "Enviando..."
- **Éxito**: Mensaje verde, formulario se resetea, mensaje desaparece en 5s
- **Error**: Mensaje rojo permanente hasta nuevo envío
- **Validación**: Campos con borde verde/rojo según validez

### **Responsive Design**

- **Mobile-first**: Formularios optimizados para móviles
- **Grid system**: Usa Bootstrap-like classes para layout
- **Touch-friendly**: Botones y campos de tamaño adecuado

## 🧪 Cómo Probar los Formularios

### **1. Preparación**

```bash
# 1. Verificar que los assets estén compilados
npm run build:all

# 2. Verificar que el email del admin esté configurado
# WordPress Admin → Ajustes → General → Dirección de correo electrónico
```

### **2. Agregar Formularios**

- **Página de contacto**: Usar block `carpentry/contact-section`
- **Otras páginas**: Usar block `carpentry/request-quote`
- **Editor de bloques**: Buscar "Carpentry" en la categoría de bloques

### **3. Configurar Servicios** (Opcional)

```php
// Los servicios se cargan automáticamente del CPT 'servicios'
// Si no hay servicios, usa valores por defecto:
- Carpintería General
- Reformas Integrales
- Mantenimiento
- Acabados
- Otro
```

### **4. Configurar Datos Globales** (Opcional)

- **WordPress Admin → Personalizar → Información de la Empresa**
- **Email**: `carpentry_company_email`
- **Teléfono**: `carpentry_company_phone` + `carpentry_company_phone_link`
- **Dirección**: `carpentry_company_address`
- **Redes sociales**: Instagram y LinkedIn URLs

### **5. Probar Funcionalidad**

1. **Rellenar formulario** con datos válidos
2. **Enviar** y verificar mensaje de éxito
3. **Revisar email** en la bandeja del administrador
4. **Probar validación** con datos inválidos
5. **Probar responsive** en diferentes dispositivos

## 🔧 Archivos Técnicos

### **Frontend**

- **JavaScript**: `src/assets/contact-forms.js` → Compilado en `build/index.js`
- **CSS**: `scss/components/_forms.scss` → Compilado en `build/style-index.css`

### **Backend**

- **Handler**: `functions.php` → `carpentry_handle_contact_form()`
- **AJAX Hooks**: `wp_ajax_carpentry_contact_form` + `wp_ajax_nopriv_carpentry_contact_form`
- **Render**: `src/request-quote/render.php` + `src/contact-section/render.php`

### **Build Process**

```bash
npm run build:all  # Compila JavaScript + SCSS
npm run dev:all    # Modo desarrollo con watch
```

## 🎯 Personalización

### **Cambiar Destinatario del Email**

```php
// En functions.php, línea ~626
$to = get_option('admin_email');
// Cambiar por:
$to = 'tu-email@empresa.com';
```

### **Personalizar Mensajes**

```php
// Éxito
wp_send_json_success('Tu mensaje personalizado de éxito');

// Error
wp_send_json_error('Tu mensaje personalizado de error');
```

### **Agregar Campos Extra**

1. **Modificar render.php**: Agregar campos HTML
2. **Actualizar contact-forms.js**: Incluir en FormData
3. **Modificar handler**: Procesar nuevos campos
4. **Recompilar**: `npm run build:all`

## 🎉 ¡Todo Listo!

Los formularios están **100% funcionales** y listos para producción. Solo necesitas:

1. Configurar el email del administrador
2. Opcional: Configurar datos de empresa en Customizer
3. Agregar los blocks a tus páginas

¡Los usuarios ya pueden contactarte! 📞✉️
