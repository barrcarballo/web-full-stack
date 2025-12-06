import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/registro.css'

function Registro() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    try {
    const response = await fetch("http://localhost:4000/api/usuarios/registro", { // Apunta a tu endpoint de backend
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // formData contiene { username, email, password }
    });
 
    if (!response.ok) {
      // Manejar errores del servidor (ej: usuario ya existe)
      const errorData = await response.json();
      throw new Error(errorData.message);
    }
 
    const data = await response.json();
    alert(`¡Registro exitoso para ${data.username}!`);
 
  } catch (error) {
    alert(`Error en el registro: ${error.message}`);
  }

/*     // Aquí conectarás con tu backend JWT
    console.log('Registro:', formData) */
  }

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="furniture-image">
          <img src="/abuelo-de-tiro-medio-jugando-con-nino.jpg" alt="" />
        </div>
      </div>

      <div className="register-right">
        <div className="register-form">
          <h1 className='tituloRegistro'>Crea tu cuenta</h1>
          <p className="subtitle">
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                name="username"
                placeholder="Introduce tu nombre completo"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <div className="password-input">
                <input
                  type="password"
                  name="password"
                  placeholder="Introduce tu contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Confirmar contraseña</label>
              <div className="password-input">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Vuelve a introducir tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="register-btn">
              Crear cuenta
            </button>
          </form>

          <div className="login-link">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro