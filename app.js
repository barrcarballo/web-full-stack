document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedorTarjetas");
    if (!contenedor) return;

    /*
    Estructura de las tarjetas:
    <section class="contenedorTarjetas" id="contenedorTarjetas" >
        <a class="tarjeta">
            <div class="tarjetaImagen">
                <img src="" alt="">
            </div>
            <div class="tarjetaTitulo">
                <p></p>
            </div>
        </a> 
    </section>
    */

    productos.forEach(p => {
        const enlace = document.createElement("a");
        enlace.classList.add("tarjeta");
        enlace.href = "#"; //enlace a detalles del producto.

        const divImagen = document.createElement("div");
        divImagen.classList.add("tarjetaImagen");

        const img = document.createElement("img");
        img.src = `sources/${p.nombre}.png`;
        img.alt = p.nombre;

        divImagen.appendChild(img);

        const divTitulo = document.createElement("div");
        divTitulo.classList.add("tarjetaTitulo");

        const titulo = document.createElement("p");
        titulo.textContent = p.nombre;

        divTitulo.appendChild(titulo);

        enlace.appendChild(divImagen);
        enlace.appendChild(divTitulo);

        contenedor.appendChild(enlace);
    });
});