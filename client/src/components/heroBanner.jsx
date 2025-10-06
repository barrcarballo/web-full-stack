import React from 'react';
import '../styles/stylesheet.css';
import { Link } from 'react-router-dom';

function heroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>“Piezas que cuentan historias, creadas para acompañar las tuyas”</h1>
        <Link to="/productos" className="btn-hero">Conocé nuestra colección</Link>
      </div>
    </div>
  );
}

export default heroBanner;