document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const contenedor = document.getElementById("producto-detalle");

  if (!contenedor) {
    console.error("No se encontró el contenedor #producto-detalle");
    return;
  }

  // ✅ Detectar si estás en local o en Vercel
  const baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:4000"
      : "https://web-full-stack-main-backend.vercel.app"; // ← cambialo si tu backend está en otro dominio o Vercel

  try {
    const response = await fetch(`${baseURL}/api/productos/${productId}`);
    if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

    const producto = await response.json();

    contenedor.innerHTML = `
      <div class="detalle-container">
        <h2 class="detalle-titulo">${producto.nombre}</h2>
        <div class="detalle-cuerpo">
          <div class="detalle-imagen">
            <img src="${producto.imagen}" alt="${producto.nombre}">
          </div>
          <div class="detalle-info">
            <p class="detalle-descripcion">${producto.descripcion}</p>
            <p class="detalle-precio">Precio: $${producto.precio}</p>
            <button class="boton-carrito">Añadir al carrito</button>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    contenedor.innerHTML = `<p style="color:red; text-align:center;">Error: ${error.message}</p>`;
    console.error("Error cargando detalle:", error);
  }
});
