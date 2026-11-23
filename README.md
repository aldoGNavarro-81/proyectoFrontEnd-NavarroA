# Don Boston Petstore 🐾

Este es mi proyecto para el curso de Front-End JavaScript. Armé un sitio web multipágina para una petshop llamada **Don Boston Petstore**, donde se muestran productos generados dinámicamente, un carrito de compras persistente, personalización de preferencias de usuario, opiniones de clientes y un formulario para enviar consultas.

---

## 📌 De qué trata el proyecto

La idea fue evolucionar una landing page estática hacia una web interactiva que sirva para:
- Mostrar un catálogo de productos destacados (alimento, juguetes, accesorios) generado dinámicamente desde JavaScript.
- Agregar productos a un carrito de compras con contador en tiempo real y cálculo de totales en una página dedicada (`carrito.html`).
- Guardar preferencias del usuario (nombre y color de fondo) para que se mantengan al recargar o navegar por el sitio.
- Mostrar reseñas de clientes y una sección de preguntas frecuentes.
- Permitir que nos manden mensajes mediante un formulario de contacto y un botón flotante de WhatsApp.

---

## 🛠️ Lo que usé para armarlo

- **HTML5:** Estructura multipágina (`index.html` y `carrito.html`) usando etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` y `<aside>`.
- **CSS3:**
  - **Variables CSS:** Para mantener una paleta de colores y sombras consistente en todo el proyecto.
  - **Flexbox:** En la barra de navegación, las tarjetas de productos y el resumen del carrito.
  - **CSS Grid:** En los beneficios, las reseñas de clientes y los formularios.
  - **Media Queries:** Breakpoints para adaptar el diseño a celulares, tablets y computadoras.
- **JavaScript (`index.js`):**
  - **Renderizado dinámico:** Generación de las tarjetas de productos en el DOM a partir de un arreglo de objetos.
  - **Eventos del DOM:** Captura de `click` en los botones de compra/eliminación y `submit` con `preventDefault()` en el formulario de preferencias.
  - **LocalStorage:** Persistencia de los productos agregados al carrito, el contador del menú, el nombre del usuario y el color de fondo elegido.
- **FontAwesome:** Para los íconos de redes sociales, carrito y WhatsApp.
- **Google Fonts:** Tipografía Poppins.
- **Formspree:** Para que el formulario de contacto envíe los correos sin necesidad de programar un backend.

---

## 📂 Estructura del proyecto

```text
proyectoFrontEnd-NavarroA/
├── imagenes/           # Imágenes de portada y productos
├── video/              # Video institucional
├── index.html          # Página principal (catálogo, reseñas, contacto y preferencias)
├── carrito.html        # Página del carrito de compras y resumen de total
├── styles.css          # Estilos propios y diseño responsive
├── script.js            # Lógica de catálogo dinámico, carrito y LocalStorage
├── subtitulo.vtt       # Subtítulos del video
└── README.md           # Documentación del proyecto
📩 Cómo configuré Formspree
Para que el formulario funcione sin necesidad de programar un servidor propio, usé Formspree:

Me creé una cuenta en Formspree.io.

Creé un formulario nuevo y obtuve un endpoint (una URL).

En la etiqueta <form> puse el atributo action apuntando a esa URL con el método POST:
<form action="[https://formspree.io/f/mjyvbwwj](https://formspree.io/f/mjyvbwwj)" method="POST">