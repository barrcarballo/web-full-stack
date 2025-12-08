import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext"; 

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const { token, isAuthenticated } = useAuth(); 


  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {

      return [...prev, { ...producto, cantidad: 1 }]; 
    });
    alert("Producto agregado al carrito 🛒");
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((prev) => prev.filter((item) => item._id !== productoId));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0);
  };

  // FUNCION DE COMPRA 
  const finalizarCompra = async () => {
    if (!isAuthenticated) {
      alert("Debes iniciar sesión para comprar");
      return false; 
    }

    try {
      const response = await fetch("https://web-full-stack-ebmo.onrender.com/api/pedidos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({
          productos: carrito.map(p => ({
            producto: p._id,
            nombre: p.nombre,
            cantidad: 1, 
            precio: p.precio
          })),
          total: calcularTotal()
        })
      });

      if (!response.ok) throw new Error("Error al crear el pedido");

      /* const data = await response.json(); */
      alert("¡Compra exitosa! 🎉 Tu pedido ha sido registrado.");
      limpiarCarrito(); 
      return true;

    } catch (error) {
      console.error(error);
      alert("Hubo un problema al procesar tu compra.");
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        limpiarCarrito,
        calcularTotal,
        finalizarCompra, 
        cantidad: carrito.length
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}