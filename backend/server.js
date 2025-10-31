const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

require('dotenv').config();
const DB_URI = process.env.DATABASE_URL;
const PORT = process.env.PORT || 4000;
 
mongoose.connect(DB_URI)
  .then(() => console.log('¡Conexión exitosa a MongoDB!'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

const logger = require('./scripts/logger');
const productosRoutes = require('./routes/productosRoutes');

app.use(cors());
app.use(logger);
app.use(express.json());
 
app.use('/api/productos', productosRoutes);
 
//Middleware para rutas no encontradas(404)
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  
  console.error(err.message, err.stack);
  
  res.status(statusCode).json({
    message: err.message || 'Ha ocurrido un error en el servidor.',
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});