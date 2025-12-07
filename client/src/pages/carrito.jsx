import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/catalogo.css'; 

const Carrito = () => {
  const { carrito, eliminarDelCarrito, limpiarCarrito, calcularTotal, finalizarCompra } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const total = calcularTotal();

  const handleFinalizarCompra = async () => {
    if (!isAuthenticated) {
      alert("Por favor, inicia sesión para realizar el pedido.");
      navigate('/login');
      return;
    }


    const exito = await finalizarCompra();
    if (exito) {
        navigate('/perfil'); 
    }
  };

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos" className="btn-carrito">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1>Tu Carrito de Compras</h1>
      
      <div className="carrito-lista">
        {carrito.map((item, index) => (
          <div key={`${item._id}-${index}`} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            borderBottom: '1px solid #ccc', 
            padding: '10px 0',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img 
                src={item.imagenURL || `/images/${item.nombre}.png`} 
                alt={item.nombre} 
                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
              />
              <div>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
              </div>
            </div>
            
            <button 
              onClick={() => eliminarDelCarrito(item._id)}
              style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '5px' }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="carrito-resumen" style={{ marginTop: '30px', textAlign: 'right' }}>
        <h2>Total a Pagar: ${total}</h2>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <button 
                onClick={limpiarCarrito}
                style={{ backgroundColor: '#666', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Vaciar Carrito
            </button>

            <button 
                onClick={handleFinalizarCompra}
                className="boton-carrito" 
                style={{ fontSize: '1.2rem', padding: '10px 30px' }}
            >
                Finalizar Compra
            </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
