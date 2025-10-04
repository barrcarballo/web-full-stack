import '../styles/stylesheet.css';
//Falta importar el script con las rutas de las imagenes y enlaces.

function Header() {
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
            <img src="images/Carrito.svg" alt="carrito" />
            <span id="contador">0</span>
          </a>
        </div>
      </nav>
  </header>
  );
};

export default Header;