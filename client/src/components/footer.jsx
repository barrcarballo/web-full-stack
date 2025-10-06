import '../styles/stylesheet.css';
import { Link } from 'react-router-dom';


function Footer() {
  return(
    <footer className="footer">
        <div className="footer-container">
          <div className="footer-col footer-brand">
            <img src="/images/logo 2.svg" alt="Hermanos Jota" className="footer-logo" />
            <p className="footer-quote">
              “Nuestro compromiso con el medio ambiente y las futuras generaciones guía cada decisión en nuestro proceso creativo y productivo.”
            </p>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contáctanos</h4>
            <p><strong>Hermanos Jota — Casa Taller</strong></p>
            <p>Av. San Juan 2847 - Barrio de San Cristóbal<br />CABA</p>
            <p><strong>Horarios:</strong><br />Lunes a Viernes: 10:00 - 19:00<br />Sábados: 10:00 - 14:00</p>
            <p><img src="/images/WhatsappLogo.svg" alt="Whatsapp" className="footer-icon" /> +54 11 4567-8900</p>
            <p><strong>Ventas</strong><br />ventas@hermanosjota.com.ar</p>
            <p><strong>Email general</strong><br />info@hermanosjota.com.ar</p>
          </div>

          <div className="footer-col">
            <h4>Síguenos</h4>
            <a href=""><img src="/images/InstagramLogo.svg" alt="Instagram" className="footer-icon" /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 <strong>Hermanos Jota</strong>. Todos los derechos reservados.</p>
        </div>
    </footer>

  );
}

export default Footer;