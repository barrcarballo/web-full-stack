import { useState, useEffect } from "react";
import ProductCard from "./productCard";
import '../styles/catalogo.css';
import '../styles/stylesheet.css';
import { Link } from 'react-router-dom'; // 


function ProductList() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      setCargando(true);
      setError(null);
      
      try {
        const respuesta = await fetch("https://web-full-stack-ebmo.onrender.com/api/productos");
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
 
    obtenerProductos();
  }, []);

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
          {cargando && <p>Cargando...</p>}
          {error && <p>{error}</p>}
          {!cargando && !error && productos.length === 0 && <p>No hay productos</p>}
          {!cargando && !error && productos.map((producto) => (
            <ProductCard
              key={producto._id} // 👈 importante
              id={producto._id}
              nombre={producto.nombre}
              urlImagen={`images/${producto.nombre}.png`}
            />
          ))}
        </section>

          {/* BOTÓN DE CREAR PRODUCTO */}
          <Link to="/admin/crear-producto" className="btn-crear-producto">
          Crear producto
          </Link>

      </main>
    </>
  );
}

export default ProductList;
