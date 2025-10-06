<!-- # Hermanos Jota - Página Web

## Integrantes
- Bárbara Victoria Carballo - Home.
- Macarena Jazmín Calderón - Detalle de producto.
- Agustín Francisco Martinez - Productos.
- Fabrizzio Conterno - Contacto y carrito.
- Agustín Andrada Berenguer - Contacto y validación.

## Descripción del Proyecto
Hermanos Jota es una página web interactiva que permite explorar los productos de la marca y simular la experiencia de compra.  

Entre las funcionalidades implementadas se incluyen:

- **Manipulación del DOM:** actualización dinámica de rutas de imágenes, enlaces y contenido de las cards y footer.  
- **Carrito simulado:** permite agregar productos.
- **Validación del lado del cliente:** formularios de contacto y compras validados antes de ser enviados.  
- **Hero dinámico:** botones y enlaces que se actualizan mediante JavaScript.  
- **Cards de productos interactivas:** imágenes y enlaces manipulados dinámicamente para facilitar el mantenimiento.  
- **Footer actualizado dinámicamente:** enlaces, redes y contacto gestionados mediante DOM.  
- **Diseño responsive / Mobile-first:** el sitio se adapta a distintos tamaños de pantalla para mejorar la experiencia de usuario.  

## Tecnologías Utilizadas
- HTML  
- CSS  
- JavaScript -->

# Proyecto Full Stack (Sprint 3 y 4)

### Integrantes
- Bárbara Victoria Carballo  
- Macarena Jazmín Calderón  
- Agustín Francisco Martinez  
- Agustín Andrada Berenguer  


## Descripción

Hermanos Jota es una página web interactiva que permite explorar los productos de la marca y simular la experiencia de compra.  

Entre las funcionalidades implementadas se incluyen:
- Ver un catálogo de productos.  
- Explorar detalles de cada producto.  
- Añadir productos a un carrito.  
- Completar un formulario de contacto.  

## Tecnologías

- **Backend:** Node.js + Express  
- **Frontend:** React (SPA) + Vite  

Monorepo con dos carpetas principales:
/backend → API REST
/client → Frontend React


## Instalación y ejecución

**1️⃣ Instalar dependencias**

git clone https://github.com/barrcarballo/web-full-stack.git
cd web-full-stack

**2️⃣ Instalar dependencias**

Backend:
cd backend
npm install


Frontend:
cd ../client
npm install


**3️⃣ Iniciar servidores**

Backend:
cd backend
npm start

URL: http://localhost:5000

Frontend:
cd ../client
npm run dev

URL: http://localhost:5173


## Arquitectura
**Backend**
Express con rutas modulares (express.Router).

Middleware de logging y manejo de errores.

Datos de productos en archivo local .js.

**Frontend**
Componentes reutilizables: <Navbar>, <ProductList>, <ProductCard>, <ProductDetail>, <ContactForm>.

Estado con useState, renderizado condicional para vistas y carrito.

Fetch al backend para obtener productos.

Decisión clave: separar frontend y backend para mantener el proyecto modular y escalable.


## Objetivos de Aprendizaje

Construir servidor web y API REST con Node.js y Express.

Organizar rutas y middlewares en Express.

Reconstruir SPA con React y componentes reutilizables.

Manejar estado, props, eventos, listas dinámicas y renderizado condicional.

Conectar frontend con backend y gestionar estados de carga y error.

