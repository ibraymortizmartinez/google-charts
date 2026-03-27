// =========================================
// ASSETS/JS/FAVICON.JS - MÓDULO DE IDENTIDAD NEURAL
// =========================================

const FaviconManager = {
    intervaloAlerta: null,

    // 1. Cambia el favicon usando una ruta de imagen (PNG/ICO)
    setByUrl: function(url) {
        this.detenerAlerta(); // Detiene cualquier parpadeo previo
        const link = document.getElementById('dynamic-favicon') || this.createLink();
        link.href = url;
    },

    // 2. Genera un favicon con Emoji (Look Cyberpunk inmediato)
    setByEmoji: function(emoji) {
        this.detenerAlerta();
        this._renderEmoji(emoji);
    },

    // 3. SISTEMA DE ALERTA: Hace que el favicon parpadee entre dos estados
    // Úsalo cuando el "Estado de Red" sea FLUCTUANDO
    setAlert: function(emojiA, emojiB, velocidad = 1000) {
        this.detenerAlerta();
        let mostrandoA = true;
        
        this._renderEmoji(emojiA);
        
        this.intervaloAlerta = setInterval(() => {
            this._renderEmoji(mostrandoA ? emojiB : emojiA);
            mostrandoA = !mostrandoA;
        }, velocidad);
    },

    // 4. Detiene cualquier animación activa en la pestaña
    detenerAlerta: function() {
        if (this.intervaloAlerta) {
            clearInterval(this.intervaloAlerta);
            this.intervaloAlerta = null;
        }
    },

    // --- MÉTODOS PRIVADOS (Uso interno) ---

    _renderEmoji: function(emoji) {
        const canvas = document.createElement('canvas');
        canvas.height = 32;
        canvas.width = 32;
        const ctx = canvas.getContext('2d');
        
        // Ajuste de fuente para que se vea bien en la pestaña
        ctx.font = '26px serif'; 
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(emoji, 16, 18);

        const link = document.getElementById('dynamic-favicon') || this.createLink();
        link.href = canvas.toDataURL();
    },

    createLink: function() {
        const newLink = document.createElement('link');
        newLink.id = 'dynamic-favicon';
        newLink.rel = 'icon';
        document.head.appendChild(newLink);
        return newLink;
    }
};