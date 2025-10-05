document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const producto = productos.find(p => p.id == productId);

    const contenedorDetalle = document.getElementById("producto-detalle");

    if (producto) {
        const htmlProducto = `
            <div class="detalle-container">
                <h2 class="detalle-titulo">${producto.nombre}</h2>
                <div class="detalle-cuerpo">
                    <div class="detalle-imagen">
                        <img src="sources/${producto.nombre}.png" alt="${producto.nombre}">
                    </div>
                    <div class="detalle-info">
                        <p class="brand-essence">En Hermanos Jota, creemos que un mueble es más que su función. Es una pieza de arte que vive y crece contigo.</p>
                        <p>${producto.descripcion}</p>
                        <div class="specs-section">
                            <h3>La Esencia en Cada Detalle</h3>
                            <ul class="especificaciones">
                                ${Object.keys(producto).filter(key => key !== 'id' && key !== 'nombre' && key !== 'descripcion').map(key => `
                                    <li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${producto[key]}</li>
                                `).join('')}
                            </ul>
                        </div>
                        <button id="agregar-carrito" class="boton-carrito">Agregar al carrito</button>
                        <p class="cta-legado">Esto no es solo una compra, es una inversión en tu legado. Una historia que envejece con gracia.</p>
                    </div>
                </div>
            </div>
        `;
        contenedorDetalle.innerHTML = htmlProducto;
        
        const botonCarrito = document.getElementById("agregar-carrito");
        botonCarrito.addEventListener("click", () => {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`${producto.nombre} ha sido agregado al carrito.`);
        });

    } else {
        contenedorDetalle.innerHTML = "<p>Producto no encontrado.</p>";
    }
});
