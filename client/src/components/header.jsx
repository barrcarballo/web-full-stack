import '../styles/stylesheet.css';
import { Link } from 'react-router-dom';

function Header({cantidadCarrito}) {
  return(
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
        </div>
      </nav>
  </header>
  );
};

export default Header;
