import React, { useEffect, useState } from "react";
import Card from "./card";

function CardsContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const destacados = [
    "Sofá Patagonia",
    "Biblioteca Recoleta",
    "Butaca Mendoza",
    "Escritorio Costa",
  ];

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await fetch("http://localhost:4000/api/productos");
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
        const data = await respuesta.json();
        setProductos(data);
      } catch (err) {
        console.error("Error al cargar productos destacados:", err);
        setError("Error al cargar productos destacados");
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const productosDestacados = productos.filter((producto) =>
    destacados.includes(producto.nombre)
  );

  if (loading) return <p>Cargando productos destacados...</p>;
  if (error) return <p>Error al cargar destacados: {error}</p>;

  return (
    <div className="cards-container">
      {productosDestacados.length === 0 && (
        <p>No se encontraron productos destacados.</p>
      )}
      {productosDestacados.map((producto) => (
        <Card
          key={producto._id}
          id={producto._id}
          nombre={producto.nombre}
          urlImagen={`/images/${producto.nombre}.png`}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
