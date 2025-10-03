const express = require('express');
const router = express.Router();
const productos = require('../scripts/productos.js');
  
// GET /api/productos/ 
router.get('/', (req, res) => {
  res.json(productos);
});
 
// GET /api/productos/:id
router.get('/:id', (req, res, next) => {
  const producto = productos.find(u => u.id === parseInt(req.params.id));
  if (!producto) {
    // Si encuentra el producto, la negacion convierte el objeto a false.
    // Si no lo encuentra, producto es undefined y !producto lo convierte en true.
    const error = new Error('Producto no encontrado');
    error.status = 404;
    return next(error);
  }
  res.json(producto);
});

// POST /api/productos/
router.post('/', (req, res) => {
    const nuevoProducto = req.body
    res.status(201).json({ 
      message: 'Producto creado',
      producto: nuevoProducto
    });
});

module.exports = router;