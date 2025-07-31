# Carpentry Block Theme

Un tema moderno de WordPress con soporte completo para Full Site Editing, diseñado específicamente para servicios profesionales de carpintería y renovación.

## 🚀 Características Principales

- **Full Site Editing (FSE)**: Soporte completo para el editor de sitios de WordPress
- **Bloques Personalizados**: 18+ bloques personalizados para carpintería y servicios
- **Responsive**: Diseño totalmente responsive y optimizado para móviles
- **Gutenberg Ready**: Totalmente compatible con el editor de bloques Gutenberg
- **Plantillas Personalizadas**: Plantillas específicas para servicios, proyectos y páginas
- **Sass/SCSS**: Arquitectura CSS moderna con preprocesador Sass
- **Build Tools**: Configuración moderna con @wordpress/scripts

## 📋 Requisitos

- WordPress 6.0 o superior
- PHP 7.4 o superior
- Node.js 18.0+ (para desarrollo)
- npm 8.0+ (para desarrollo)

## 🛠️ Instalación

### Instalación como Usuario Final

1. Descarga el tema desde GitHub:

   ```bash
   git clone https://github.com/servilucas/carpentry-block-theme.git
   ```

2. Sube la carpeta del tema a `/wp-content/themes/` en tu instalación de WordPress

3. Activa el tema desde el panel de administración de WordPress

### Instalación para Desarrollo

1. Clona el repositorio:

   ```bash
   git clone https://github.com/servilucas/carpentry-block-theme.git
   cd carpentry-block-theme
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el entorno de desarrollo:
   ```bash
   npm run dev:all
   ```

## 🏗️ Scripts de Desarrollo

| Script               | Descripción                            |
| -------------------- | -------------------------------------- |
| `npm run start`      | Inicia el modo desarrollo para JS/JSX  |
| `npm run build`      | Compila para producción (JS/JSX)       |
| `npm run build:sass` | Compila archivos Sass                  |
| `npm run watch:sass` | Observa cambios en archivos Sass       |
| `npm run dev:all`    | Inicia desarrollo completo (JS + Sass) |
| `npm run build:all`  | Compila todo para producción           |
| `npm run lint:css`   | Linter para archivos CSS/Sass          |
| `npm run lint:js`    | Linter para archivos JavaScript        |

## 🧩 Bloques Personalizados

El tema incluye los siguientes bloques personalizados:

### Bloques de Contenido

- **Hero**: Sección principal con imagen de fondo y llamada a la acción
- **About**: Sección "Acerca de" con diseño flexible
- **Services Grid**: Grilla de servicios con iconos y descripciones
- **Services Projects**: Showcase de proyectos realizados
- **Professional Experts**: Sección del equipo profesional

### Bloques de Navegación y Layout

- **Header**: Cabecera personalizada con navegación
- **Footer**: Pie de página con información de contacto
- **Button**: Botones personalizados con estilos únicos

### Bloques de Funcionalidad

- **Contact Section**: Formulario de contacto integrado
- **Request Quote**: Formulario para solicitar presupuestos
- **Google Maps**: Integración con Google Maps
- **CTA Casa Sueños**: Llamada a la acción específica

### Bloques de Blog

- **Blog Posts Grid**: Grilla de posts del blog
- **Blog Post Single**: Layout para posts individuales

### Bloques de Valor Añadido

- **Added Value**: Sección de valor añadido
- **How We Work**: Proceso de trabajo
- **Valor Añadido Nosotros**: Valor diferencial

## 📄 Plantillas Incluidas

- `front-page.html` - Página de inicio
- `page.html` - Páginas generales
- `page-nosotros.html` - Página "Nosotros"
- `page-contacto.html` - Página de contacto
- `page-blog.html` - Página del blog
- `single.html` - Posts individuales
- `single-servicios.html` - Servicios individuales
- `archive-servicios.html` - Archivo de servicios
- `404.html` - Página de error 404
- `index.html` - Plantilla fallback

## 🎨 Estructura de Archivos

```
carpentry-block-theme/
├── assets/js/              # JavaScript compilado
├── build/                  # Archivos compilados de bloques
├── images/                 # Imágenes del tema
├── scss/                   # Archivos Sass/SCSS
│   ├── base/              # Estilos base
│   ├── blocks/            # Estilos de bloques
│   ├── components/        # Componentes reutilizables
│   ├── layout/            # Layout general
│   └── utils/             # Utilidades y mixins
├── src/                   # Código fuente de bloques
├── templates/             # Plantillas HTML del tema
├── functions.php          # Funciones del tema
├── theme.json            # Configuración del tema
├── style.css             # Estilos principales
└── package.json          # Configuración de dependencias
```

## ⚙️ Configuración del Tema

El archivo `theme.json` incluye:

- **Plantillas personalizadas** para diferentes tipos de contenido
- **Partes de plantilla** (header, footer, sidebar)
- **Configuración de colores** y tipografías
- **Espaciado y layout** responsivo
- **Configuración de bloques** personalizados

## 🔧 Desarrollo de Bloques

Para crear un nuevo bloque:

1. Crea una nueva carpeta en `src/nombre-del-bloque/`
2. Añade los archivos necesarios:

   - `index.js` - Registro del bloque
   - `edit.js` - Editor del bloque
   - `save.js` - Frontend del bloque
   - `style.scss` - Estilos del bloque

3. Registra el bloque en `functions.php`

## 🌐 Características de Accesibilidad

- Navegación por teclado
- Estructura semántica HTML5
- Contraste de colores optimizado
- Soporte para lectores de pantalla
- Imágenes con texto alternativo

## 📱 Soporte Responsive

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Sistema flexible de puntos de quiebre
- **Imágenes responsive**: Soporte para imágenes adaptativas
- **Navigation**: Menú de navegación mobile-friendly

## 🔍 SEO y Rendimiento

- Código semántico y limpio
- Optimización de imágenes
- CSS y JavaScript minificados
- Estructura de datos schema.org
- Tiempos de carga optimizados

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crea un Pull Request

## 📝 Estándares de Código

- Seguir las [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- Usar ESLint para JavaScript
- Usar Stylelint para CSS/Sass
- Documentar todas las funciones y bloques

## 🐛 Reportar Bugs

Si encuentras un bug, por favor:

1. Verifica que no haya sido reportado anteriormente
2. Crea un issue detallado con:
   - Descripción del problema
   - Pasos para reproducir
   - Capturas de pantalla (si aplica)
   - Información del entorno (WordPress, PHP, navegador)

## 📋 Roadmap

- [ ] Modo oscuro
- [ ] Más bloques de e-commerce
- [ ] Integración con WooCommerce
- [ ] Sistema de testimonios
- [ ] Galería de proyectos avanzada
- [ ] Integración con redes sociales

## 📄 Licencia

Este tema está licenciado bajo GPL-2.0. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Créditos

- **Desarrollado por**: ServiLucas Team
- **Diseño**: Basado en las necesidades específicas de servicios de carpintería
- **Inspiración**: Comunidad WordPress y mejores prácticas de Full Site Editing

## 📞 Soporte

- **Documentación**: [Wiki del repositorio](../../wiki)
- **Issues**: [GitHub Issues](../../issues)
- **Discusiones**: [GitHub Discussions](../../discussions)

## 🔄 Changelog

### v1.0.0 (2025-01-31)

- Lanzamiento inicial
- 18+ bloques personalizados
- Soporte completo para FSE
- Plantillas responsivas
- Sistema de build moderno

---

⭐ **¿Te gusta este tema? ¡Dale una estrella en GitHub!**
