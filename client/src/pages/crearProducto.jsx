import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contacto.css";

function CrearProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagenUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al crear producto");

      alert("Producto creado ✅");
      navigate("/productos");
    } catch (error) {
      alert("Hubo un error ❌");
      console.error(error);
    }
  };

  return (
    <div className="formulario">
      <h2>Crear Nuevo Producto</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripción">Descripción:</label>
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            name="precio"
            type="number"
            placeholder="Precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">Carga la imagen:</label>
          <input
            name="imagenUrl"
            type="text"
            placeholder="URL de imagen"
            value={formData.imagenUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Crear Producto</button>
        </div>
      </form>
    </div>
  );
}

export default CrearProducto;
