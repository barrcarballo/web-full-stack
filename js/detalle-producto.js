// detalle-producto.js
document.addEventListener("DOMContentLoaded", () => {
  // Obtener el ID del producto desde la URL (?id=3)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const contenedorDetalle = document.getElementById("producto-detalle");

  if (!productId) {
    contenedorDetalle.innerHTML = "<p>No se especificó ningún producto.</p>";
    return;
  }

  contenedorDetalle.innerHTML = "<p style='text-align:center;'>Cargando producto...</p>";

  // ✅ URL dinámica según dónde se ejecute
  // (1) LOCAL → usa tu servidor Express en localhost:4000
  // (2) VERCEL → usa tu backend subido (Render o Railway)
  const API_BASE_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
      ? "http://localhost:4000"
      : "https://hermanos-jota-api.onrender.com"; // <-- cambiá esto por tu URL real de Render

  // 🔹 Petición al backend Express
  fetch(`${API_BASE_URL}/api/productos/${productId}`)
    .then((response) => {
      if (!response.ok) throw new Error("No se pudo cargar el producto");
      return response.json();
    })
    .then((producto) => {
      const html = `
        <div class="detalle-container">
          <h2 class="detalle-titulo">${producto.nombre}</h2>
          <div class="detalle-cuerpo">
            <div class="detalle-imagen">
              <img src="sources/${producto.nombre}.png" alt="${producto.nombre}">
            </div>
            <div class="detalle-info">
              <p class="brand-essence">
                En Hermanos Jota, creemos que un mueble es más que su función:
                es una pieza de arte que vive y crece contigo.
              </p>
              <p>${producto.descripcion}</p>
              <div class="specs-section">
                <h3>La Esencia en Cada Detalle</h3>
                <ul class="especificaciones">
                  ${Object.keys(producto)
                    .filter((key) => !["id", "nombre", "descripcion"].includes(key))
                    .map(
                      (key) =>
                        `<li><strong>${
                          key.charAt(0).toUpperCase() + key.slice(1)
                        }:</strong> ${producto[key]}</li>`
