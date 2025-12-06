import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.css'

function Login() {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
    const response = await fetch("http://localhost:4000/api/usuarios/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // formData contiene { email, password }
    });
 
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
 
    // ¡Éxito! Aquí recibimos el token desde el backend.
    console.log('Login exitoso, token:', data.token);
    
    // El siguiente paso es guardar este token en el cliente.
 
  } catch (error) {
    alert(`Error en el login: ${error.message}`);
  }

/*     // Aquí conectarás con tu backend JWT
    console.log('Login:', { email, password }) */
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/images/logo.svg" className="logo" alt="logo" />
        <h1 className='tituloLogin' >Bienvenido</h1>
        
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="login-btn">
            Iniciar Sesión
          </button>
        </form>

        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
        
        <div className="register-link">
          ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
        </div>
      </div>
    </div>
  )
}

export default Login