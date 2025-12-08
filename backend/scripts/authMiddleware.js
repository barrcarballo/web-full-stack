const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
 
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
 
  // 1. Verificamos que el encabezado y el token existan
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; // Extraemos el token
 
    try {
      // 2. Verificamos el token
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
      
      // 3. Buscamos el usuario en la base de datos
      const usuario = await Usuario.findById(decodedPayload.id || decodedPayload._id);
      
      if (!usuario) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }
      
      // 4. Guardamos el usuario completo en req.user
      req.user = usuario;
      next();
      
    } catch (err) {
      // Si el token no es válido (expirado, manipulado)
      return res.status(403).json({ message: 'Token inválido o expirado' });
    }
  } else {
    // Si no hay token, no hay acceso
    res.status(401).json({ message: 'No estás autenticado' });
  }
};
 
module.exports = verifyToken;