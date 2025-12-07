import '../styles/stylesheet.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

function Header({ cantidadCarrito }) {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handlePerfilClick = (e) => {
    e.stopPropagation(); 
    setIsDropdownOpen(false);
    navigate('/perfil');
  };

  const handleLogoutClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(false);
    logout(); 
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <img src="/images/logo.svg" alt="logo" />
        </div>

        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>

          <Link to="/carrito" className="cart">
            <img src="/images/Carrito.svg" alt="carrito" />
            <span id="contador">{cantidadCarrito}</span>
          </Link>

          {/* Perfil */}
          <div className="profile-wrapper" onClick={handleProfileClick}>
            <img src="/images/profile.svg" alt="profile" className="profile-icon" />

            {isAuthenticated && (
              <span className="profile-name">
                {user?.username || user?.email || 'Usuario'}
              </span>
            )}

            {isAuthenticated && isDropdownOpen && (
              <div
                className="profile-dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="profile-dropdown-item"
                  onClick={handlePerfilClick}
                >
                  Mi perfil
                </button>

                <button
                  className="profile-dropdown-item"
                  onClick={handleLogoutClick}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
