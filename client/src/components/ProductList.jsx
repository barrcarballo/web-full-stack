import { useState } from "react";
import ProductCard from "./productCard";
import '../styles/catalogo.css';
import '../styles/stylesheet.css';


function ProductList() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

 const obtenerProductos = async () => {
    setCargando(true);
    setError(null);
    
    try {
      const respuesta = await fetch("http://localhost:4000/api/productos");
      if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
      const arrayProductos = await respuesta.json();
      setProductos(arrayProductos);
    } catch (err) {
      console.error(err);
      setError("Error al cargar los productos");
    } finally {
      setCargando(false);
    }
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
          {cargando && <p className="mensaje">Cargando...</p>}
          {error && <p className="mensaje error">{error}</p>}
          {!cargando && !error && productos.length === 0 && <p className="mensaje">No hay productos</p>}
          {!cargando && !error && productos.map((producto) => (
            <ProductCard 
              nombre={producto.nombre}
              urlImagen={`images/${producto.nombre}.png`}
            />
          ))}
        </section>

        <button className="botonCarga" onClick={obtenerProductos}>Cargar productos</button>
      </main>
    </>
  );
}

export default ProductList;
