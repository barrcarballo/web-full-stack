import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/carrito.css'; 

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
      <div className='carritoVacio'>
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos" className="verProductos">Ver Productos</Link>
      </div>
    );
  }

  return (
    <div className="contenedorProductos">
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
            <div className='cadaProducto'>
              <img 
                src={item.imagenURL || `/images/${item.nombre}.png`} 
                alt={item.nombre} 
              />
              <div>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
              </div>
            </div>
            
            <button 
              onClick={() => eliminarDelCarrito(item._id)}
              className='botonEliminarProducto'
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="carritoResumen">
        <h2>Total a Pagar: ${total}</h2>
        
        <div className='contenedorCarritoResumen'>
            <button 
                onClick={limpiarCarrito}
                className='botonResumenVaciar'
            >
                Vaciar Carrito
            </button>

            <button 
                onClick={handleFinalizarCompra}
                className="botonResumenFinalizar" 
            >
                Finalizar Compra
            </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
