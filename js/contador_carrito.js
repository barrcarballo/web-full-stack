const contadorElemento = document.getElementById("contador");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let contador = carrito.length;

if (contadorElemento) contadorElemento.textContent = contador;

function actualizarContador(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    contador = carrito.length;
    if (contadorElemento) contadorElemento.textContent = contador; 
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-carrito")) {
        const productoData = e.target.dataset.producto;
        let producto = productoData ? JSON.parse(productoData) : { nombre: "Producto" };

        actualizarContador(producto);


    }
});
