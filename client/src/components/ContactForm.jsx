import { useState } from "react";
import "../styles/contacto.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrores({
      ...errores,
      [name]: "",
    });
  };

  const validar = () => {
    let valido = true;
    const nuevosErrores = {};

    if (formData.nombre.trim().length < 3) {
      nuevosErrores.nombre = "El nombre debe tener al menos 3 caracteres.";
      valido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      nuevosErrores.email = "Ingresá un correo válido.";
      valido = false;
    }

    if (formData.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
      valido = false;
    }

    setErrores(nuevosErrores);
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log("Datos del formulario:", formData);
      setExito("Mensaje enviado con éxito ✅");
      setFormData({ nombre: "", email: "", mensaje: "" });
      setErrores({});
    } else {
      setExito("");
    }
  };

  return (
    <main>
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Contacto</h1>
          <p>Dejanos tu consulta y te responderemos lo antes posible.</p>
        </div>
      </div>

      <section className="descripcion-produ">
        <h2>Formulario de consultas</h2>

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            {errores.nombre && <span className="error">{errores.nombre}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errores.email && <span className="error">{errores.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="6"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            {errores.mensaje && <span className="error">{errores.mensaje}</span>}
          </div>

          <div className="form-group">
            <button type="submit">Enviar Mensaje</button>
          </div>
        </form>

        {exito && <p className="success">{exito}</p>}
      </section>
    </main>
  );
}

export default ContactForm;
