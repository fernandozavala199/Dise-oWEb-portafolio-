# Portafolio Web Personal e Interactivo

Portafolio web individual, profesional e interactivo desarrollado como proyecto académico con **HTML5 Semántico**, **CSS Custom Properties** (Design System) y **JavaScript ES6+**.

---

## 📋 Tabla de Contenidos
1. [Estructura del Sitio Web](#1-estructura-del-sitio-web)
2. [Uso de HTML5 Semántico](#2-uso-de-html5-semántico)
3. [Sistema de Diseño y CSS](#3-sistema-de-diseño-y-css)
4. [Funcionalidades de JavaScript](#4-funcionalidades-de-javascript)
5. [Instrucciones de Ejecución Local](#5-instrucciones-de-ejecución-local)
6. [Guía de Publicación y Despliegue](#6-guía-de-publicación-y-despliegue)

---

## 1. Estructura del Sitio Web

El sitio consta de 6 secciones principales completamente adaptables (Responsive Design):

1. **Inicio / Presentación (`#inicio`)**: Hero section con avatar del estudiante, saludo, áreas de interés y enlaces principales.
2. **Sobre mí (`#sobre-mi`)**: Biografía profesional, principios de ingeniería, formación universitaria y línea de tiempo académica.
3. **Habilidades (`#habilidades`)**: Tarjetas interactivas clasificadas por Frontend, Backend, Bases de Datos y Herramientas con barras de nivel.
4. **Proyectos destacados (`#proyectos`)**: Grilla de proyectos en tarjetas reutilizables (`Card`) con problema resuelto, tecnologías y ventana emergente de detalles.
5. **Design System / Componentes (`#design-system`)**: Muestra viva y documentada de paleta de colores, tipografías, espaciados y componentes reutilizables.
6. **Contacto (`#contacto`)**: Formulario semántico validado en tiempo real y datos de contacto.

---

## 2. Uso de HTML5 Semántico

Se evitó el uso excesivo de `<div>` aplicando las etiquetas estándar de HTML5:

- `<header>`: Encabezado superior fijo con logo y navegación.
- `<nav>`: Menú principal y navegación por filtros.
- `<main>`: Contenedor principal de contenidos de la página.
- `<section>`: Delimitador de las 6 secciones principales.
- `<article>`: Para biografías, tarjetas de habilidades, proyectos y bloques del Design System.
- `<aside>`: Para la línea de tiempo de trayectoria académica.
- `<figure>` y `<figcaption>`: Encapsulamiento del avatar profesional con descripción accesible.
- `<form>`, `<label>`, `<input>`, `<textarea>`, `<button>`: Estructuración accesible de formularios.
- `<footer>`: Pie de página con enlaces sociales y copyright.

---

## 3. Sistema de Diseño y CSS

El diseño se construyó mediante **CSS Custom Properties (`:root`)** para garantizar mantenibilidad y consistencia visual:

- **Modo Claro y Oscuro**: Alternancia de variables `--color-bg`, `--color-surface`, `--color-text`, etc.
- **Escala Tipográfica**: Basada en las fuentes de Google Fonts *Outfit* (encabezados) e *Inter* (cuerpo).
- **Sistema de Espaciados**: Escala en unidades `rem` desde `--space-xs` (0.5rem) hasta `--space-3xl` (4rem).
- **Responsive Design**: Flexbox, CSS Grid y Media Queries (640px, 768px, 1024px) evitando desbordamientos horizontales.

---

## 4. Funcionalidades de JavaScript

1. **Selector de Tema (Light / Dark)**: Cambia los colores globalmente y guarda la preferencia en `localStorage`.
2. **Menú Hamburguesa Responsive**: Menú desplegable para teléfonos inteligentes con animaciones fluidas y cierre automático.
3. **Filtro de Habilidades y Proyectos**: Filtrado en tiempo real sin recargar la página según la categoría seleccionada.
4. **Modal Interactivo de Proyectos**: Ventana emergente que muestra el problema resuelto y detalles extendidos al hacer clic en "Ver Detalles".
5. **Validación de Formulario en Tiempo Real**: Comprueba sintaxis de correo, longitud de campos y muestra mensajes de error/éxito visuales.
6. **ScrollSpy & Volver Arriba**: Resaltado automático de la sección visible en el nav y botón flotante de retorno fluido al inicio.
7. **Copia de Colores HEX**: Haz clic en los cuadros del Design System para copiar su código HEX al portapapeles con notificación Toast.

---

## 5. Instrucciones de Ejecución Local

Para visualizar el sitio web en tu máquina local:

1. Clona o descarga la carpeta del proyecto `Tarea_1`.
2. Abre el archivo `index.html` directamente en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).
3. O bien, si utilizas VS Code, ejecuta la extensión **Live Server** haciendo clic derecho sobre `index.html` -> *Open with Live Server*.

---

## 6. Guía de Publicación y Despliegue

### Opción A: Despliegue en Netlify Drop (Recomendado - 1 Minuto)
1. Ingresa a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta completa `Tarea_1` en la zona de carga de Netlify Drop.
3. ¡Listo! Obtendrás una URL pública de inmediato (ej. `https://fernando-zavala-portfolio.netlify.app`).

### Opción B: Despliegue en GitHub Pages
1. Crea un repositorio en GitHub llamado `portafolio-web`.
2. Sube todos los archivos del proyecto (`index.html`, `css/`, `js/`, `assets/`, `README.md`).
3. En GitHub, ve a **Settings** -> **Pages**.
4. En **Build and deployment** -> **Branch**, selecciona `main` o `master` y la carpeta `/ (root)`.
5. Haz clic en **Save**. En unos minutos tu sitio estará en línea en `https://tu-usuario.github.io/portafolio-web/`.

---

Desarrollado con sacrificio por **Fernando Zavala**.
