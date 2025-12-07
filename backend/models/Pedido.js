const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      nombre: String, 
      cantidad: {
        type: Number,
        default: 1
      },
      precio: Number 
    }
  ],
  total: {
    type: Number,
    required: true
  },
  estado: {
    type: String,
    default: 'pendiente', 
    enum: ['pendiente', 'enviado', 'entregado']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pedido', pedidoSchema);
