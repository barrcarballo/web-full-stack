let contador = 0;
const contadorElemento = document.getElementById("contador");
const botones = document.querySelectorAll(".btn-carrito");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
  });
});
