import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí conectarás con tu backend JWT
    console.log('Login:', { email, password })
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
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <div className="password-input">
              <input
                type="password"
                placeholder="Introduce tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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