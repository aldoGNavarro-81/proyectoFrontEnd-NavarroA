# Don Boston Petstore 🐾

Este es mi proyecto para el curso de Desarrollo Web. Armé una página web para una petshop llamada **Don Boston Petstore**, donde se muestran productos, opiniones de clientes y un formulario para enviar consultas.

---

## 📌 De qué trata la página

La idea era hacer una landing page sencilla pero completa que sirva para:
- Mostrar productos destacados (alimento, juguetes, accesorios).
- Mostrar reseñas de clientes para dar confianza.
- Permitir que nos manden mensajes mediante un formulario de contacto y un botón flotante de WhatsApp.
- Responder dudas comunes en una sección de preguntas frecuentes.

---

## 🛠️ Lo que usé para armarla

- **HTML5:** Usé etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` y `<aside>`.
- **CSS3:**
  - **Flexbox:** Lo usé en el menú de arriba y en la sección de productos para que las cards se acomoden solas.
  - **CSS Grid:** Lo usé para las reseñas de los clientes y en los campos del formulario.
  - **Media Queries:** Agregué breakpoints para que se vea bien en celulares y tablets.
  - **Efectos:** Hover en los botones y cards, transiciones suaves y estados de enfoque.
- **FontAwesome:** Para los íconos de las redes, carrito, WhatsApp, etc.
- **Google Fonts:** Usé la fuente Poppins.
- **Formspree:** Para que el formulario de contacto mande los mails de verdad.

---

## 📩 Cómo configuré Formspree

Para que el formulario funcione sin necesidad de programar un servidor propio, usé **Formspree**:

1. Me creé una cuenta en [Formspree.io](https://formspree.io).
2. Creé un formulario nuevo y me dio un endpoint (una URL).
3. En la etiqueta `<form>` puse el atributo `action` apuntando a esa URL con el método `POST`:

```html
<form action="[https://formspree.io/f/mjyvbwwj](https://formspree.io/f/mjyvbwwj)" method="POST">