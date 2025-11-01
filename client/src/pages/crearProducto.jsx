import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearProducto() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagenUrl: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
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
    <div className="form-container">
      <h2>Crear Nuevo Producto</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
        />

        <input
          name="precio"
          type="number"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />

        <input
          name="imagenUrl"
          type="text"
          placeholder="URL de imagen"
          value={formData.imagenUrl}
          onChange={handleChange}
        />

        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;
