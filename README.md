# Proyecto Full Stack (Sprint 5 y 6)

Proyecto Full Stack desarrollado por **Grupo 5 - Antecedentes Penales**

## Integrantes
- **Bárbara Victoria Carballo**  
- **Macarena Jazmín Calderón**  
- **Agustín Francisco Martínez**  
- **Agustín Andrada Berenguer**

---

## Sitios Desplegados

- **Frontend (Vercel):** https://hermanos-jota-eight.vercel.app/
- **Backend (Render):** https://web-full-stack-ebmo.onrender.com

---

##  Descripción del Proyecto

**Hermanos Jota** es una aplicación web para una mueblería artesanal que permite a los usuarios:
- Explorar un catálogo de productos.  
- Ver detalles de cada mueble.  
- Agregar productos al carrito de compras.  
- Contactar con la tienda.  

El sitio fue desarrollado con una arquitectura **MERN Stack (MongoDB, Express, React, Node.js)**.

---

## Tecnologías Utilizadas

### **Frontend**
- React  
- React Router DOM  
- Vite  
- CSS puro  

### **Backend**
- Node.js  
- Express  
- Mongoose  
- MongoDB Atlas  

---

## Instrucciones para correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/barrcarballo/web-full-stack.git
cd web-full-stack
```

---

### 2. Configurar las variables de entorno

En la carpeta **backend**, crear un archivo `.env` con el siguiente contenido:

```env
PORT=4000
DATABASE_URL=mongodb+srv://agusmartinez:hermanosJota@cluster0.ckbz2km.mongodb.net/muebleria?retryWrites=true&w=majority
```

> ⚠️ **Importante:**  
> No compartas esta cadena de conexión públicamente en producción.  
> Se recomienda usar un usuario de solo lectura o variables seguras en Render.

---

### 3. Instalar dependencias

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
En otra terminal:
```bash
cd frontend
npm install
npm run dev
```

---

### 4. Acceder al sitio localmente

- **Frontend:** [http://localhost:5173](http://localhost:5173)  
- **Backend API:** [http://localhost:4000/api/productos](http://localhost:4000/api/productos)

---

## Endpoints principales del backend

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/productos` | Lista todos los productos |
| `GET` | `/api/productos/:id` | Muestra un producto específico |
| `POST` | `/api/productos` | Crea un nuevo producto |
| `PUT` | `/api/productos/:id` | Actualiza un producto |
| `DELETE` | `/api/productos/:id` | Elimina un producto |
