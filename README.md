# 🌐 NEURAL_CORE V.2 - Sistema de Monitoreo Neural

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![UI/UX](https://img.shields.io/badge/UI/UX-Cyberpunk-00e5ff?style=for-the-badge)

Un dashboard analítico altamente inmersivo diseñado con una estética **Cyberpunk / Sci-Fi**. Este proyecto simula un "Sistema de Monitoreo Neural" de grado militar, ofreciendo visualización de datos en tiempo real, notificaciones asíncronas tipo terminal y una interfaz de usuario basada en contrastes neón (Cian y Naranja).

Desarrollado completamente con **Vanilla JavaScript** y **CSS Grid puro**, demostrando dominio sobre el DOM y la modularidad del código sin depender de frameworks pesados.

---

## ✨ Características Principales

- 📊 **Visualización de Datos Dinámica:** Integración de gráficos que simulan la fluctuación de métricas biométricas (Niveles de Motivación y Energía) en tiempo real.
- 🔔 **Sistema de Notificaciones (Toast):** Alertas flotantes personalizadas creadas desde cero que reaccionan a la interacción del usuario con animaciones de expiración.
- 🎨 **Diseño Neón Inmersivo:** Uso avanzado de `box-shadow`, `text-shadow` y variables de color para recrear el brillo de pantallas CRT y terminales de hackers.
- 📐 **Arquitectura CSS Grid:** Layout responsivo construido con CSS moderno (`display: grid` y `flexbox`), asegurando adaptabilidad en múltiples dispositivos sin usar Bootstrap.
- 🧩 **JavaScript Modular:** Lógica separada en múltiples archivos (`notificacion.js`, `graficacion.js`, `datos.js`) para mantener un entorno de desarrollo limpio y escalable.

---

## 🛠️ Stack Tecnológico

* **Frontend:** HTML5 Semántico.
* **Estilos:** CSS3 (Animaciones Keyframes, CSS Grid, Flexbox, Custom Properties).
* **Lógica:** JavaScript (ES6+, Manipulación del DOM, Event Listeners, Timers).
* **Iconografía:** Font Awesome 6.

---

## 📂 Estructura del Proyecto

El código está organizado bajo principios de modularidad y separación de responsabilidades:

```text
📦 cyberpunk-dashboard
 ┣ 📂 assets
 ┃ ┣ 📂 css
 ┃ ┃ ┗ 📜 styles.css          # Estilos globales, variables y animaciones
 ┃ ┣ 📂 img                   # Recursos gráficos
 ┃ ┗ 📂 js
 ┃   ┣ 📜 datos.js            # Simulación de carga/estructuración de datos
 ┃   ┣ 📜 favicon.js          # Control dinámico del icono de la pestaña
 ┃   ┣ 📜 graficacion.js      # Lógica de renderizado de los gráficos
 ┃   ┣ 📜 main.js             # Inicialización y controladores principales
 ┃   ┣ 📜 notificacion.js     # Sistema autónomo de alertas (Toast)
 ┃   ┗ 📜 opciones.js         # Configuración del usuario o del sistema
 ┗ 📜 index.html              # Estructura principal de la interfaz