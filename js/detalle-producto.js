// detalle-producto.js
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el ID del producto desde la URL (por ejemplo: ?id=3)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const contenedorDetalle = document.getElementById("producto-detalle");

  if (!productId) {
    contenedorDetalle.innerHTML = "<p>No se especificó ningún producto.</p>";
    return;
  }

  // Mensaje mientras carga
  contenedorDetalle.innerHTML = "<p style='text-align:center;'>Cargando producto...</p>";

  // 💡 URL dinámica del backend
  // Si subís tu backend a Render o Railway, cambiá esta variable:
  const API_BASE_URL = "https://hermanos-jota-api.onrender.com"; // <-- tu URL online del backend
  // Mientras tanto, para pruebas locales:
  // const API_BASE_URL = "http://localhost:4000";

  // Petición al backend para obtener el producto
  fetch(`${API_BASE_URL}/api/productos/${productId}`)
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el producto");
      return response.json();
    })
    .then((producto) => {
      const htmlProducto = `
        <div class="detalle-container">
          <h2 class="detalle-titulo">${producto.nombre}</h2>

          <div class="detalle-cuerpo">
            <div class="detalle-imagen">
              <img src="sources/${producto.nombre}.png" alt="${producto.nombre}">
            </div>

            <div class="detalle-info">
              <p class="brand-essence">
                En Hermanos Jota, creemos que un mueble es más que su función.
                Es una pieza de arte que vive y crece contigo.
              </p>

              <p>${producto.descripcion}</p>

              <div class="specs-section">
                <h3>La Esencia en Cada Detalle</h3>
                <ul class="especificaciones">
                  ${Object.keys(producto)
                    .filter((key) => !["id", "nombre", "descripcion"].includes(key))
                    .map(
                      (key) => `
                        <li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${producto[key]}</li>
                      `
                    )
                    .join("")}
                </ul>
              </div>

              <button id="agregar-carrito" class="boton-carrito">Agregar al carrito</button>
              <p class="cta-legado">
                Esto no es solo una compra, es una inversión en tu legado. 
              </p>
            </div>
          </div>
        </div>
      `;

      contenedorDetalle.innerHTML = htmlProducto;

      // Evento para el carrito
      const botonCarrito = document.getElementById("agregar-carrito");
      botonCarrito.addEventListener("click", () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${producto.nombre} fue agregado al carrito 🛒`);
      });
    })
    .catch((error) => {
      console.error(error);
      contenedorDetalle.innerHTML = `<p style="color:red;text-align:center;">Error: ${error.message}</p>`;
    });
});

