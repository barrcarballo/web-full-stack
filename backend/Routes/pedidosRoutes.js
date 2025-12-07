const express = require('express');
const router = express.Router();
const Pedido = require('../Models/Pedido');
const verifyToken = require('../Scripts/authMiddleware'); 

router.post('/', verifyToken, async (req, res) => {
  try {
    const { productos, total } = req.body;

    const usuarioId = req.user._id; 

    if (!productos || productos.length === 0) {
      return res.status(400).json({ message: 'No hay productos en el carrito' });
    }

    const nuevoPedido = new Pedido({
      usuario: usuarioId,
      productos,
      total
    });

    const pedidoGuardado = await nuevoPedido.save();

    res.status(201).json({ 
      message: 'Pedido realizado con éxito', 
      pedido: pedidoGuardado 
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al procesar el pedido' });
  }
});

module.exports = router;
