// =========================================
// ASSETS/JS/OPCIONES.JS - ESTILO ARCADE
// =========================================

export class OpcionesGrafico {
  constructor() {
    this.configuracion = {
      // 1. FUNDAMENTAL: Fondo transparente para que se vea el CSS
      backgroundColor: 'transparent', 
      
      // 2. Colores de las barras principales (Azul Claro y Amarillo Neón)
      colors: ['#0cf', '#ff0'], 
      
      animation: { startup: true, duration: 1000, easing: 'out' },
      
      // 3. Leyenda superior en blanco/amarillo brillante
      legend: {
        position: 'top', alignment: 'center',
        textStyle: { fontName: 'Share Tech Mono', fontSize: 13, color: '#ff0' } // Amarillo
      },
      
      chartArea: { width: '85%', height: '70%' },
      bar: { groupWidth: '75%' },
      
      // 4. Líneas de tendencia brillantes (Cyan y Amarillo)
      trendlines: {
        0: { type: 'linear', lineWidth: 4, opacity: 0.9, color: '#0cf' }, // Cyan
        1: { type: 'exponential', lineWidth: 4, opacity: 0.9, color: '#ff0' } // Amarillo
      },
      
      // 5. Eje Horizontal (X) brillando en AZUL
      hAxis: {
        title: 'HORA DEL DÍA',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#ff0' }, // Amarillo
        format: 'h:mm a',
        viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#0cf' }, // Texto Cyan/Azul
        gridlines: { color: 'transparent' }
      },
      
      // 6. Eje Vertical (Y) brillando en AZUL
      vAxis: {
        title: 'RATING (ESCALA 1-10)',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#ff0' }, // Amarillo
        viewWindow: { min: 0, max: 10 },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#0cf' }, // Texto Cyan/Azul
        gridlines: { color: 'rgba(0, 204, 255, 0.15)' } // Líneas guía sutiles en cyan transparente
      },

      // Aseguramos que el tooltip use HTML para aplicar nuestro CSS
      tooltip: { isHtml: true }
    };
  }

  obtenerConfiguracion() {
    return this.configuracion;
  }
}