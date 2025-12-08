const express = require('express');
const router = express.Router();

const Producto = require('../models/Producto');

// Método HTTP: POST
router.post('/', async (req, res, next) => {
  try {
    const datosNuevoProducto = req.body;
    console.log('Datos recibidos para crear producto:', datosNuevoProducto);
 
    const nuevoProducto= new Producto(datosNuevoProducto);
    const productoGuardado = await nuevoProducto.save();

    res.status(201).json({
      mensaje: 'Producto creado con éxito',
      usuario: productoGuardado
    });
 
  } catch (error) {
    console.error('Error al crear producto:', error.message);
    error.status = 400;
    next(error);
  }
});
 
// Método HTTP: GET
router.get('/', async (req, res, next) => {
  try {
      const productos = await Producto.find({});
 
      res.status(200).json(productos);
 
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    next(error); // Pasa el error al middleware de errores
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const productoId = req.params.id;
    console.log('Buscando producto con ID:', productoId);
 
    const producto = await Producto.findById(productoId);
 
    if (!producto) {
      const error = new Error('Producto no encontrado');
      error.status = 404;
      return next(error);
    }
 
    res.status(200).json(producto);
 
  } catch (error) {
    console.error('Error al buscar producto por ID:', error.message);
    error.status = 400;
    next(error);
  }
});

// Método HTTP: PUT
router.put('/:id', async (req, res, next) => {
  try {
    const productoId = req.params.id;
    const datosActualizados = req.body;
    console.log(`Actualizando producto con ID ${productoId} con datos:`, datosActualizados);
 
    // Argumentos: (id, { $set: datosAActualizar }, opciones)
    // new: true -> devuelve el documento modificado (por defecto devuelve el original)
    // runValidators: true -> ejecuta las validaciones del esquema antes de actualizar
    const productoActualizado = await Producto.findByIdAndUpdate(
      productoId,
      datosActualizados, // Mongoose automáticamente usa $set para los campos provistos
      { new: true, runValidators: true } // Opciones importantes
    );
 
    if (!productoActualizado) {
      const error = new Error('Producto no encontrado para actualizar');
      error.status = 404;
      return next(error);
    }
 
    res.status(200).json({
      mensaje: 'Producto actualizado con éxito',
      usuario: productoActualizado
    });
 
  } catch (error) {
    console.error('Error al actualizar proyecto:', error.message);
    error.status = 400;
    next(error);
  }
});


// Método HTTP: DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const productoId = req.params.id;
    console.log('Eliminando producto con ID:', productoId);
 
    const productoEliminado = await Producto.findByIdAndDelete(productoId);
 
    if (!productoEliminado) {
      const error = new Error('Producto no encontrado para eliminar');
      error.status = 404;
      return next(error);
    }
 
    res.status(200).json({
      mensaje: 'Producto eliminado con éxito',
      usuario: productoEliminado
    });
 
  } catch (error) {
    console.error('Error al eliminar producto:', error.message);
    error.status = 400;
    next(error);
  }
});

module.exports = router;