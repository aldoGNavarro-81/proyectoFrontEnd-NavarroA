
// DATOS: ARREGLO DE OBJETOS DE PRODUCTOS
const productos = [
  {
    id: 1,
    nombre: "Alimento Balanceado Premium (15kg)",
    descripcion: "Nutrición completa e ingredientes naturales para perros adultos de todas las razas.",
    precio: 24500,
    imagen: "./imagenes/alimento-perro.jpg"
  },
  {
    id: 2,
    nombre: "Rascador interactivo para Gatos",
    descripcion: "Ideal para mantener sus uñas sanas y brindarle horas de entretenimiento.",
    precio: 8200,
    imagen: "./imagenes/rascador-gato.jpg"
  },
  {
    id: 3,
    nombre: "Arnés Ergonómico Regulable",
    descripcion: "Diseño acolchado y seguro, diseñado para paseos cómodos sin tirones.",
    precio: 5900,
    imagen: "./imagenes/arnes-perro.jpg"
  }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("DOMContentLoaded", function () {
  aplicarPreferencias();
  actualizarContador();
  renderizarProductos();
  renderizarCarrito();
});

// 1. PREFERENCIAS DE USUARIO (LOCALSTORAGE)
const formPreferencias = document.getElementById("form-preferencias");

if (formPreferencias) {
  formPreferencias.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre-usuario").value.trim();
    const color = document.getElementById("color-fondo").value;

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("colorFondo", color);

    aplicarPreferencias();
  });
}

function aplicarPreferencias() {
  const nombre = localStorage.getItem("nombreUsuario");
  const color = localStorage.getItem("colorFondo");
  const saludoElemento = document.getElementById("saludo-usuario");

  if (nombre && saludoElemento) {
    saludoElemento.textContent = `¡Bienvenido/a nuevamente, ${nombre}!`;
    const inputNombre = document.getElementById("nombre-usuario");
    if (inputNombre) inputNombre.value = nombre;
  }

  if (color) {
    document.body.style.backgroundColor = color;
    const selectColor = document.getElementById("color-fondo");
    if (selectColor) selectColor.value = color;
  }
}

// 2. RENDERIZADO DINÁMICO DEL CATÁLOGO
function renderizarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      <h3 class="product-title">${producto.nombre}</h3>
      <p class="product-description">${producto.descripcion}</p>
      <p class="product-price">$${producto.precio.toLocaleString("es-AR")}</p>
      <button class="btn-buy" type="button" data-id="${producto.id}">
        <i class="fa-solid fa-cart-shopping"></i> Agregar al carrito
      </button>
    `;

    contenedor.appendChild(card);
  });

  document.querySelectorAll(".btn-buy").forEach((boton) => {
    boton.addEventListener("click", function () {
      const idProducto = Number(this.dataset.id);
      agregarAlCarrito(idProducto);
    });
  });
}

// 3. LÓGICA DEL CARRITO Y PERSISTENCIA
function agregarAlCarrito(id) {
  const productoEncontrado = productos.find((p) => p.id === id);
  if (!productoEncontrado) return;

  const itemEnCarrito = carrito.find((item) => item.id === id);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad++;
  } else {
    carrito.push({ ...productoEncontrado, cantidad: 1 });
  }

  guardarCarrito();
  actualizarContador();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarContador() {
  const contador = document.getElementById("contador-productos");
  if (!contador) return;

  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = totalUnidades;
}

// 4. VISTA DE CARRITO (carrito.html)
function renderizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total-carrito");
  if (!listaCarrito || !totalElemento) return;

  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío. ¡Volvé a productos para agregar artículos!</p>";
    totalElemento.textContent = "0";
    return;
  }

  let totalGeneral = 0;

  carrito.forEach((item) => {
    const subtotal = item.precio * item.cantidad;
    totalGeneral += subtotal;

    const fila = document.createElement("article");
    fila.classList.add("item-carrito");
    fila.innerHTML = `
      <div class="item-carrito-info">
        <h3>${item.nombre}</h3>
        <p>Precio unitario: $${item.precio.toLocaleString("es-AR")} | Cantidad: ${item.cantidad}</p>
        <p><strong>Subtotal: $${subtotal.toLocaleString("es-AR")}</strong></p>
      </div>
      <button type="button" class="btn-eliminar" data-id="${item.id}">
        <i class="fa-solid fa-trash"></i> Eliminar
      </button>
    `;
    listaCarrito.appendChild(fila);
  });

  totalElemento.textContent = totalGeneral.toLocaleString("es-AR");

  document.querySelectorAll(".btn-eliminar").forEach((boton) => {
    boton.addEventListener("click", function () {
      const id = Number(this.dataset.id);
      carrito = carrito.filter((item) => item.id !== id);
      guardarCarrito();
      actualizarContador();
      renderizarCarrito();
    });
  });
}

const btnVaciar = document.getElementById("btn-vaciar");
if (btnVaciar) {
  btnVaciar.addEventListener("click", function () {
    carrito = [];
    guardarCarrito();
    actualizarContador();
    renderizarCarrito();
  });
}

const btnFinalizar = document.getElementById("btn-finalizar");
if (btnFinalizar) {
  btnFinalizar.addEventListener("click", function () {
    if (carrito.length === 0) return;
    alert("¡Gracias por tu compra en Don Boston Petstore!");
    carrito = [];
    guardarCarrito();
    actualizarContador();
    renderizarCarrito();
  });
}
