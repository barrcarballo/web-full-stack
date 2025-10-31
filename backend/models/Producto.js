const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({

nombre: {
    type: String,
    required: true,  
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  imagenURL: {
    type: String,
    trim: true
  }
}, {
  timestamps: true 
});
 
const Producto = mongoose.model("Producto", productoSchema);
module.exports = Producto