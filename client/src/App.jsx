import React from 'react';
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
import Carrito from './pages/carrito.jsx';
import Perfil from './pages/profile.jsx';

// Auth
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider, useCart } from './context/CartContext.jsx';
import ProtectedRoute from './components/protectedComponent.jsx';

function AppContent() {
  const location = useLocation();
  const { cantidad } = useCart();

  // Rutas donde NO se mostrará Header y Footer
  const rutasSinLayout = ['/login', '/registro'];
  const mostrarLayout = !rutasSinLayout.includes(location.pathname);


  return (
    <>
      {mostrarLayout && <Header cantidadCarrito={cantidad} />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route
            path="/producto/:id"
            element={<DetallesProducto />}
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />

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
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
