// =========================================
// ASSETS/JS/OPCIONES.JS - PROTOCOLO SOLAR INDUSTRIAL
// =========================================

export class OpcionesGrafico {
  constructor() {
    this.configuracion = {
      // 1. FUNDAMENTAL: Fondo transparente para que se vea el CSS
      backgroundColor: 'transparent', 
      
      // 2. Colores de las barras principales (Naranja Vibrante y Cian Cool)
      colors: ['#ff9f1c', '#00f5d4'], 
      
      animation: { startup: true, duration: 1000, easing: 'out' },
      
      // 3. Leyenda superior en blanco con fuente retro
      legend: {
        position: 'top', alignment: 'center',
        textStyle: { fontName: 'Share Tech Mono', fontSize: 13, color: '#ffffff' }
      },
      
      chartArea: { width: '85%', height: '70%' },
      bar: { groupWidth: '75%' },
      
      // 4. Líneas de tendencia brillantes
      trendlines: {
        0: { type: 'linear', lineWidth: 4, opacity: 0.9, color: '#ffc16e' }, // Naranja pálido brillante
        1: { type: 'exponential', lineWidth: 4, opacity: 0.9, color: '#5efff3' } // Cian pálido brillante
      },
      
      // 5. Eje Horizontal (X)
      hAxis: {
        title: 'HORA DEL DÍA',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#ff9f1c' }, // Título Naranja
        format: 'h:mm a',
        viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#00f5d4' }, // Texto Cian
        gridlines: { color: 'transparent' }
      },
      
      // 6. Eje Vertical (Y)
      vAxis: {
        title: 'RATING (ESCALA 1-10)',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#ff9f1c' }, // Título Naranja
        viewWindow: { min: 0, max: 10 },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#00f5d4' }, // Texto Cian
        gridlines: { color: 'rgba(0, 245, 212, 0.15)' } // Líneas guía sutiles en cian transparente
      },

      // Aseguramos que el tooltip use HTML para poder aplicarle nuestro CSS
      tooltip: { isHtml: true }
    };
  }

  obtenerConfiguracion() {
    return this.configuracion;
  }
}