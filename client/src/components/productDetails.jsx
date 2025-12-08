import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/detalles-catalogo.css";

function ProductDetails() {
  const { id } = useParams(); 
  const productId = id;
  const [producto, setProducto] = useState(null);
  const [Cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); //  usamos navigate para volver al catálogo

  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    if (!productId) return;

    fetch(`https://web-full-stack-ebmo.onrender.com/api/productos/${productId}`)
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

  // Función eliminar producto
  const handleDelete = async () => {
    const confirmar = window.confirm(`¿Seguro que deseas eliminar "${producto.nombre}"?`);

    if (!confirmar) return;

    try {
      const res = await fetch(`https://web-full-stack-ebmo.onrender.com/api/productos/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al eliminar el producto");

      alert("Producto eliminado exitosamente ✅");

      // Redirigimos al catálogo
      navigate("/productos");
    } catch (err) {
      alert("No se pudo eliminar ❌ " + err.message);
    }
  };

  if (Cargando) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>No se encontró el producto</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-producto">

        <div className="detalle-header">
          <button 
            className="btn-volver-catalogo"
            onClick={() => navigate('/productos')}
          >
            Volver
          </button>
          <h2 className="detalle-titulo">{producto.nombre}</h2>
        </div>

        <div className="detalle-cuerpo">
          <div className="detalle-imagen">
            <img
              src={`/images/${producto.nombre}.png`}
              alt={producto.nombre}
              className="detalle-img"
            />
          </div>

          <div className="detalle-info">
            <p className="brand-essence">
              En Hermanos Jota, creemos que un mueble es más que su función. Es
              una pieza de arte que vive y crece contigo.
            </p>

            <p>{producto.descripcion}</p>

            <div className="specs-section">
              <h3>La Esencia en Cada Detalle</h3>
              <ul className="especificaciones">
                {Object.keys(producto)
                  .filter(
                    (key) =>
                      key !== "id" &&
                      key !== "_id" &&
                      key !== "nombre" &&
                      key !== "descripcion" &&
                      key !== "Stock" &&
                      key !== "imagenUrl"
                  )
                  .map((key) => (
                    <li key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                      {producto[key]}
                    </li>
                  ))}
              </ul>

              <p className="cta-legado">
                Esto no es solo una compra, es una inversión en tu legado.
                Una historia que envejece con gracia.
              </p>

              <div className="botones">
                <button
                  id="agregar-carrito"
                  className="boton-carrito btn-carrito"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>

                {/*BOTÓN ELIMINAR */}
                <button className="btn-eliminar-producto"
                  onClick={handleDelete}
                >
                  Eliminar Producto
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
