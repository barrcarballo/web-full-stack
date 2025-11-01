import { useEffect, useState } from "react";
import "../styles/detalles-catalogo.css";


function ProductDetails({ productId, agregarAlCarrito }) {
  const [producto, setProducto] = useState(null);
  const [Cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/productos/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el producto");
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [productId]);

  if (Cargando) return <p className="status">Cargando producto...</p>;
  if (error) return <p className="status error">Error: {error}</p>;
  if (!producto) return <p className="status">Producto no encontrado</p>;

  return (
    <div className="producto-detalle">
      <div className="detalle-container">
        <h2 className="detalle-titulo">{producto.nombre}</h2>
        <div className="detalle-cuerpo">
          <div className="detalle-imagen">
            <img src={`/images/${producto.nombre}.png`} alt={producto.nombre} className="detalle-img" />
          </div>
          <div className="detalle-info" >
            <p className="brand-essence">En Hermanos Jota, creemos que un mueble es más que su función. Es una pieza de arte que vive y crece contigo.</p>
            <p>{producto.descripcion}</p>
            <div className="specs-section">
                <h3>La Esencia en Cada Detalle</h3>
                <ul className="especificaciones">
                  {Object.keys(producto)
                    .filter(key => key !== 'id' && key !== 'nombre' && key !== 'descripcion')
                    .map(key => (
                      <li key={key}>
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {producto[key]}
                      </li>
                    ))
                  }
                </ul>
                <div>
                  <button id="agregar-carrito" className="boton-carrito btn-carrito" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                  <p className="cta-legado">Esto no es solo una compra, es una inversión en tu legado. Una historia que envejece con gracia.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
