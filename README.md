Markdown
# 🐾 Don Boston Petstore

Proyecto web desarrollado para el curso de **Desarrollo Web Front End**. Un sitio moderno, adaptable y funcional enfocado en la comercialización de alimentos, accesorios y juguetes para mascotas.

---

## 📌 Propósito de la Página

**Don Boston Petstore** es una plataforma pensada para brindar una experiencia de usuario (UX) ágil e intuitiva. Su objetivo principal es:
- Presentar el catálogo de productos destacados mediante tarjetas interactivas.
- Generar confianza a través de reseñas reales de clientes presentadas en una grilla responsiva.
- Facilitar el contacto directo entre los usuarios y la tienda mediante un formulario funcional conectado a correo y un botón flotante directo a WhatsApp.
- Proveer información clara sobre la logística, pagos y preguntas frecuentes del servicio.

---

## 🛠️ Tecnologías Utilizadas y Técnicas Aplicadas

- **HTML5 Semántico:** Uso de etiquetas estructuradas (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`) e integración de accesibilidad (`aria-label`, `loading="lazy"`).
- **CSS Grid & Flexbox:**
  - **Flexbox:** Aplicado en la navegación y en la disposición de los productos del catálogo (`product-grid`).
  - **CSS Grid:** Implementado en la sección `.reseñas` con `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` para un diseño dinámico y adaptable.
- **Media Queries:** Adaptación responsiva completa a dispositivos móviles (`< 768px` y `< 480px`), convirtiendo el diseño a una sola columna y optimizando espaciados.
- **Interacciones y Pseudoclases:** Efectos dinámicos en tarjetas con `:hover`, diferenciación con `:nth-child()`, feedback visual en campos de formulario con `:focus`, y resaltado al navegar con teclado vía `:focus-visible`.

---

## 📩 Configuración y Utilidad de Formspree

### ¿Qué es Formspree y por qué es útil?
Formspree es un servicio web de backend que permite recibir los envíos de formularios HTML de forma directa en nuestra cuenta de correo electrónico, sin necesidad de programar un servidor propio (Node.js, PHP, etc.).

Es especialmente útil en desarrollos **Front End** porque:
- Permite hacer funcionales los formularios directamente desde HTML puro.
- Maneja la validación de envío y ofrece protección básica contra spam.
- Evita desplegar una base de datos o servidor backend para probar el envío de emails.

### Pasos de Configuración:
1. Registrarse en [Formspree.io](https://formspree.io).
2. Crear un nuevo formulario (*New Form*) en el panel y asignarle un nombre.
3. Copiar el enlace provisto por el panel (por ejemplo, `https://formspree.io/f/mjyvbwwj`).
4. Configurar en el HTML del formulario las propiedades `action` y `method`:
   ```html
   <form action="[https://formspree.io/f/mjyvbwwj](https://formspree.io/f/mjyvbwwj)" method="POST">