import '../styles/stylesheet.css';
/* import { Link } from "react-router-dom"; */
//Falta importar el script con las rutas de las imagenes y enlaces.

function Header({cantidadCarrito}) {
  return(
    <header>
      <nav>
        <div className="nav-left">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="nav-right">
          <a href="">Home</a>
          <a href="">Productos</a>
          <a href="">Nosotros</a>
          <a href="">Contacto</a>
          <a href="" className="cart">
            
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/carrito" className="cart">  
          (ESTO DE ARRIBA CREO QUE HABRIA QUE CAMBIARLO POR LO DE LOS LINKS QUE TENIAMOS ANTES POR LO DE ROUTES)
          
          
            <img src="images/Carrito.svg" alt="carrito" />
            <span id="contador">{cantidadCarrito}</span>
          </a>
          </Link>
        </div>
      </nav>
  </header>
  );
};

export default Header;
