# Proyecto Full Stack (Sprint 7 y 8)

Este proyecto forma parte del desarrollo final de una **aplicación Full Stack** realizado por el **Grupo 5** en el marco de la **Formación Full Stack Developer del Instituto Tecnlógico de Buenos Aires (ITBA)**

## Integrantes
- **Carballo, Bárbara Victoria.**  
- **Calderón, Macarena Jazmín.**  
- **Martínez, Agustín Francisco.**  
- **Berenguer, Agustín Andrada.**

---

## Sitios Desplegados

- **Frontend (Vercel):** https://hermanos-jota-eight.vercel.app/
- **Backend (Render):** https://web-full-stack-ebmo.onrender.com

---

##  Descripción del Proyecto

**Hermanos Jota** es una aplicación web creada para una mueblería artesanal, que permite a los usuarios realizar un recorrido completo desde la exploración del catálogo hasta la compra final. Entre sus funcionalidades principales se encuentran:
- Navegación del catálogo de productos.
- Visualización del detalle de cada mueble.
- Gestión del carrito de compras.
- Registro y autenticación de usuarios.
- Acceso a rutas protegidas (perfil, pedidos).
- Creación y gestión de pedidos autenticados.

El proyecto fue desarrollado utilizando la arquitectura **MERN Stack (MongoDB, Express, React, Node.js)**, aplicando un enfoque modular, escalable y orientado a buenas prácticas.

En este sprint final se implementaron:
- Autenticación segura mediante **JWT**.
- Manejo global del estado utilizando **React Context API**.
- Ciclo de vida completo del usuario con persistencia de sesión.
- Despliegue completo del backend en **Render**, del frontend en **Vercel**, y la base de datos en **MongoDB Atlas**.

---

## Tecnologías Utilizadas

### **Frontend**
- React + Vite 
- React Router DOM  
- Context API (Auth + Cart) 
- Fetch API
- CSS puro  

### **Backend**
- Node.js  
- Express  
- Mongoose  
- MongoDB Atlas
- bcrypt
- JSON Web Token (JWT)

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
JWT_SECRET=ESTA_ES_MI_CLAVE_SUPER_SECRETA_Y_LARGA_12345
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

## Arquitectura del Proyecto

### Estructura General
El proyecto sigue una arquitectura **cliente-servidor** con separación clara entre **frontend** y **backend**:

```bash
web-full-stack/
├── client/          # Aplicación React (Frontend)
├── backend/         # API REST con Express (Backend)
└── README.md
```

### Frontend
Estructura de carpetas:

```bash
client/
├── public/
│   └── images/              # Imágenes estáticas (productos, logos, íconos)
├── src/
│   ├── components/          # Componentes reutilizables
│   ├── context/             # Contextos globales (Auth, Cart)
│   ├── data/                # Datos estáticos
│   ├── pages/               # Páginas/Vistas principales
│   ├── styles/              # Archivos CSS
│   ├── App.jsx              # Configuración de rutas
│   └── main.jsx             # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

### Backend
Estructura de carpetas:

```bash
backend/
├── models/                  # Modelos de Mongoose
│   ├── Usuario.js
│   ├── Producto.js
│   └── Pedido.js
├── routes/                  # Rutas de la API
│   ├── usuariosRoutes.js
│   ├── productosRoutes.js
│   └── pedidosRoutes.js
├── scripts/                 # Utilidades y middleware
│   ├── authMiddleware.js    # Verificación de JWT
│   ├── logger.js            # Logger de peticiones
│   └── productos.js         # Datos de ejemplo
├── public/
│   └── images/              # Imágenes servidas estáticamente
├── .env                     # Variables de entorno
├── server.js                # Punto de entrada
└── package.json
```
---

## Endpoints principales del backend

### Productos

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/productos` | Lista todos los productos |
| `GET` | `/api/productos/:id` | Muestra un producto específico |
| `POST` | `/api/productos` | Crea un nuevo producto |
| `PUT` | `/api/productos/:id` | Actualiza un producto |
| `DELETE` | `/api/productos/:id` | Elimina un producto |

### Usuarios
| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/api/usuarios` | Listar usuarios (sin passwords) |
| `POST` | `/api/usuarios/registro` | Registrar nuevo usuario |
| `POST` | `/api/usuarios/login` | Iniciar sesión (devuelve JWT) |

### Pedidos
| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/pedidos` | Crear pedido |