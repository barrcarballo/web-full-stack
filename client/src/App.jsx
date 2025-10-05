import './App.css'
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx'
import Productos from './pages/productos.jsx'
import DetallesProducto from './pages/detallesProducto.jsx'
import Contacto from './pages/contacto.jsx'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

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
    /*  <Router>
      {/* El header se muestra en todas las páginas */}
      /*<Header cantidadCarrito={carrito.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/detalles/:id"
          element={<DetallesProducto agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* El footer también se muestra en todas */}
      /*<Footer />
    /* </Router> */
    
    
    <>
      <Home />
      {/* <Productos /> */}
      {/* <DetallesProducto /> */}
      {/* <Contacto /> */}
    </>
  )
}

export default App
