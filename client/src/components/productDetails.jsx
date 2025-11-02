import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles/detalles-catalogo.css";
import { apiDelete } from "../services/api";

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [eliminando, setEliminando] = useState(false);
  const [errorEliminar, setErrorEliminar] = useState("");

  useEffect(() => {
    if (!productId) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/productos/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error cargando el producto");
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

  async function handleDelete() {
    if (!producto?._id) return;

    const confirmar = window.confirm(
      `¿Seguro que deseas eliminar "${producto.nombre}"?`
    );

    if (!confirmar) return;

    try {
      setEliminando(true);
      await apiDelete(`/api/productos/${producto._id}`);
      navigate("/productos", { replace: true });
    } catch (err) {
      setErrorEliminar("No se pudo eliminar el producto");
      setEliminando(false);
    }
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!producto) return <p>No existe el producto</p>;

  return (
    <div className="product-details-container">
      <Link to="/productos" className="volver-link">← Volver</Link>

      <h1>{producto.nombre}</h1>

      {producto.imagenUrl && (
        <img
          src={producto.imagenUrl}
          alt={producto.nombre}
          className="product-image"
        />
      )}

      <p><strong>Precio:</strong> ${producto.precio}</p>
      <p><strong>Stock:</strong> {producto.stock}</p>
      <p>{producto.descripcion}</p>

      <button
        onClick={handleDelete}
        disabled={eliminando}
        className="btn-eliminar"
        style={{
          marginTop: 16,
          padding: "10px 16px",
          border: "1px solid #c00",
          background: "#ffd6d6",
          color: "#c00",
          borderRadius: "5px",
          cursor: eliminando ? "not-allowed" : "pointer"
        }}
      >
        {eliminando ? "Eliminando..." : "Eliminar Producto"}
      </button>

      {errorEliminar && (
        <p className="error">{errorEliminar}</p>
      )}
    </div>
  );
}
