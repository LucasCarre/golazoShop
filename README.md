🛒 Golazo Shop

Tienda online de camisetas deportivas — Proyecto Final React

Golazo Shop es una aplicación web desarrollada en React que permite visualizar productos, filtrar por categorías, gestionar un carrito de compras y finalizar una orden almacenada en Firebase Firestore.

Este proyecto fue realizado como entrega final del curso de React.

🚀 Tecnologías utilizadas

React.js

Vite

React Router

React Bootstrap

Firebase / Firestore

Context API

JavaScript (ES6+)

Bootstrap Icons

📦 Funcionalidades principales
🧭 Navegación

Barra de navegación con lista dinámica de categorías obtenidas desde Firestore.

Enlaces a:

Inicio

Categorías

Carrito

🛍️ Productos

Lista de productos traídos desde Firestore.

Vista de detalle de cada producto.

Filtrado por categorías.

🛒 Carrito de compras

Agregar productos al carrito.

Modificar cantidades.

Eliminar productos individualmente.

Vaciar carrito completo.

Cálculo automático del total.

Persistencia en localStorage.

🧾 Finalización de compra (Checkout)

Formulario para datos del comprador.

Generación de orden con:

Datos del cliente,

Productos comprados,

Total,

Fecha (serverTimestamp()).

Envío de la orden a Firestore.

📁 Estructura del proyecto
src/
  components/
    NavBar/
    ItemListContainer/
    ItemDetailContainer/
    Checkout/
    Cart/
    CartWidget/
  context/
    CartContext.jsx
  firebase/
    config.js
    db.js
  App.jsx
  main.jsx

🔥 Firebase

El proyecto utiliza Firestore para:

Obtener productos

Obtener categorías

Filtrar productos por categoría

Obtener un producto individual

Crear órdenes de compra

Asegurate de tener configurados en tu Firestore:

Colección: products

Colección: categories

Colección: orders

Y habilitar reglas de lectura/escritura para desarrollo:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

▶️ Cómo ejecutar el proyecto
1️⃣ Instalar dependencias
npm install

2️⃣ Ejecutar en modo desarrollo
npm run dev

3️⃣ Abrir en el navegador

Vite mostrará una URL similar a:

http://localhost:5173/

📸 Capturas del proyecto

(Opcional — agregá imágenes si querés)

👨‍💻 Autor

Lucas Carré
Proyecto final del curso React JS — Coderhouse
2025