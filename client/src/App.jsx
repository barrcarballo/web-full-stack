// import React, {useState, useEffect} from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './pages/home.jsx'
// import Productos from './pages/productos.jsx'
// import DetallesProducto from './pages/detallesProducto.jsx'
// import Contacto from './pages/contacto.jsx'
// import Header from './components/header.jsx';
// import Footer from './components/footer.jsx';
// import CrearProducto from './pages/crearProducto.jsx';
// import Login from './pages/login.jsx';
// import Registro from './pages/registro.jsx';

// function AppContent() {
//   const location = useLocation();
//   const [carrito, setCarrito] = useState([]);

//   // Rutas donde NO se mostrará Header y Footer
//   const rutasSinLayout = ['/login', '/registro'];
//   const mostrarLayout = !rutasSinLayout.includes(location.pathname);

//   useEffect(() => {
//   const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
//   setCarrito(carritoGuardado);
//   }, []);

//     useEffect(() => {
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   }, [carrito]);
  
//   const agregarAlCarrito = (producto) => {
//   setCarrito((prevCarrito) => [...prevCarrito, producto]);
//   };  

//   return (
//     <>
//       {mostrarLayout && <Header cantidadCarrito={carrito.length} />}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/productos" element={<Productos />} />
//           <Route path="/producto/:id" element={<DetallesProducto agregarAlCarrito={agregarAlCarrito} />} />
//           <Route path="/contacto" element={<Contacto />} />
//           <Route path="/admin/crear-producto" element={<CrearProducto />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/registro" element={<Registro />} />
//         </Routes>
//       </main>
//       {mostrarLayout && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/home.jsx';
import Productos from './pages/productos.jsx';
import DetallesProducto from './pages/detallesProducto.jsx';
import Contacto from './pages/contacto.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import CrearProducto from './pages/crearProducto.jsx';
import Login from './pages/login.jsx';
import Registro from './pages/registro.jsx';

// 🔐 Nuevas páginas protegidas
import Perfil from './pages/profile.jsx';

// Auth
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/protectedComponent.jsx';

function AppContent() {
  const location = useLocation();
  const [carrito, setCarrito] = useState([]);

  // Rutas donde NO se mostrará Header y Footer
  const rutasSinLayout = ['/login', '/registro'];
  const mostrarLayout = !rutasSinLayout.includes(location.pathname);

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
    <>
      {mostrarLayout && <Header cantidadCarrito={carrito.length} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/producto/:id"
            element={<DetallesProducto agregarAlCarrito={agregarAlCarrito} />}
          />
          <Route path="/contacto" element={<Contacto />} />

          {/* Ruta protegida */}
          <Route
            path="/admin/crear-producto"
            element={
              <ProtectedRoute>
                <CrearProducto />
              </ProtectedRoute>
            }
          />

          {/* auth publicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

           {/* Rutas protegidas de usuario */}
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {mostrarLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
