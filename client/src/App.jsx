import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx'
import Productos from './pages/productos.jsx'
import DetallesProducto from './pages/detallesProducto.jsx'
import Contacto from './pages/contacto.jsx'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import CrearProducto from './pages/crearProducto.jsx';

function App() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
  setCarrito(carritoGuardado);
  }, []);

  useEffect(() => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const agregarAlCarrito = (producto) => {
  setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };  

  return (
  <Router>
      <Header cantidadCarrito={carrito.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetallesProducto agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin/crear-producto" element={<CrearProducto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
