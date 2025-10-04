import { useState } from "react";
import ProductCard from "./productCard";
import '../styles/catalogo.css';
import '../styles/stylesheet.css';


function Productos() {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    const respuesta = await fetch("http://localhost:4000/api/productos");
    const arrayProductos = await respuesta.json();
    setProductos(arrayProductos);
  };

  return (
    <>
    <main className="contenido">
      <div className = "barraSuperior">
        <p className="titulo">Nuestra colección</p>
          <div className="barraBusqueda">
              <img className="logoBusqueda" src="images/Simbolo busqueda.svg" alt="Simbolo de busqueda" />
              <input className="busqueda" type="text" placeholder="Buscar producto" />
          </div>
      </div>
      <hr className="lineaSeparadora" />
      <section id="contenedorTarjetas">
        {productos.map((producto) => (
          <ProductCard 
            nombre={producto.nombre}
            urlImagen={`images/${producto.nombre}.png`}
          />
        ))}
      </section>

    </main>
      <button onClick={obtenerProductos}>Cargar productos</button>
      </>
  );
}

export default Productos;
