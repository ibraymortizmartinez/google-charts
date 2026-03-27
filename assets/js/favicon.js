// =========================================
// ASSETS/JS/FAVICON.JS - MÓDULO DE IDENTIDAD
// =========================================

const FaviconManager = {
    // Cambia el favicon usando una ruta de imagen
    setByUrl: function(url) {
        const link = document.getElementById('dynamic-favicon') || this.createLink();
        link.href = url;
    },

    // Genera un favicon dinámico con un Emoji (Estilo Sistema Vivo)
    setByEmoji: function(emoji) {
        const canvas = document.createElement('canvas');
        canvas.height = 32;
        canvas.width = 32;
        const ctx = canvas.getContext('2d');
        ctx.font = '28px serif';
        ctx.fillText(emoji, 0, 28);

        const link = document.getElementById('dynamic-favicon') || this.createLink();
        link.href = canvas.toDataURL();
    },

    // Crea el elemento link si no existe en el HTML
    createLink: function() {
        const newLink = document.createElement('link');
        newLink.id = 'dynamic-favicon';
        newLink.rel = 'icon';
        document.head.appendChild(newLink);
        return newLink;
    }
};