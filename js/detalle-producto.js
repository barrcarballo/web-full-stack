@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap');

:root {
  --colorPrimario: #A0522D;
  --colorSecundario: #87A96B;
  --colorFondo: #F5E6D3;
  --colorDetalles: #D4A437;
  --colorBlanco: #ffffff;
  --colorNegro: #000000;
  --fuentePrimaria: 'Inter', sans-serif;
  --fuenteSecundaria: 'Playfair Display', serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--fuentePrimaria);
  background-color: var(--colorFondo);
  color: var(--colorNegro);
}

/* HEADER */
.header {
  background-color: var(--colorFondo);
  padding: 20px 40px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navRight {
  display: flex;
  align-items: center;
  gap: 25px;
}

.navLink {
  text-decoration: none;
  color: var(--colorNegro);
  font-weight: 400;
  transition: color 0.3s;
}

.navLink:hover {
  color: var(--colorPrimario);
}

/* DETALLE */
.detalle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  padding: 20px;
  max-width: 1200px;
  background-color: var(--colorBlanco);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.detalle-titulo {
  font-family: var(--fuenteSecundaria);
  font-size: 2.5em;
  margin-bottom: 30px;
  color: var(--colorPrimario);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.detalle-cuerpo {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.detalle-imagen img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.detalle-info {
  max-width: 600px;
  text-align: center;
}

.brand-essence {
  font-family: var(--fuenteSecundaria);
  font-style: italic;
  color: #555;
  margin-bottom: 15px;
}

.specs-section {
  margin-top: 25px;
}

.especificaciones {
  list-style: none;
  text-align: left;
  margin-top: 15px;
}

.especificaciones li {
  margin-bottom: 8px;
  line-height: 1.4;
}

.boton-carrito {
  background-color: var(--colorDetalles);
  color: var(--colorBlanco);
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.boton-carrito:hover {
  background-color: #b88d2d;
}

/* FOOTER */
.footer {
  text-align: center;
  background-color: var(--colorPrimario);
  color: var(--colorFondo);
  padding: 20px;
  font-size: 0.9em;
  margin-top: 40px;
}

