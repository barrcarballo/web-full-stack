document.addEventListener("DOMContentLoaded", async () => {
    const contenedor = document.querySelector("#contenedorTarjetas");
    if (!contenedor) return;

    async function obtenerProductos() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (!productos) {
                    reject( "No se encontraron productos.");
                } else if (productos.length === 0) {
                    reject("La lista de productos está vacía.");
                } else {
                    resolve(productos);
                }
            }, 750);
        });
    };

    obtenerProductos();

    try {
        const productosCargados = await obtenerProductos();
        productosCargados.forEach(producto => {
            const enlace = document.createElement("a");
            enlace.classList.add("tarjeta");
            enlace.href = `detalle-producto.html?id=${producto.id}`;
    
            const divImagen = document.createElement("div");
            divImagen.classList.add("tarjetaImagen");
    
            const img = document.createElement("img");
            img.src = `sources/${producto.nombre}.png`; 
            img.alt = producto.nombre;
    
            divImagen.appendChild(img);
    
            const divTitulo = document.createElement("div");
            divTitulo.classList.add("tarjetaTitulo");
    
            const titulo = document.createElement("p");
            titulo.textContent = producto.nombre;
            divTitulo.appendChild(titulo);
    
            enlace.appendChild(divImagen);
            enlace.appendChild(divTitulo);
    
            contenedor.appendChild(enlace);
        });
    }
    catch (error) {
        contenedor.textContent = error;
        console.error(error);
    }
});