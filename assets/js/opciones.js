// Opciones.js

export class OpcionesGrafico {
  constructor() {
    this.configuracion = {
      // 1. FUNDAMENTAL: Fondo transparente para que se vea el fondo de tu CSS
      backgroundColor: 'transparent', 
      
      // 2. Colores de las barras principales (Cyan Neón y Magenta Neón)
      colors: ['#0ff', '#f0f'], 
      
      animation: { startup: true, duration: 1000, easing: 'out' },
      
      // 3. Leyenda superior en blanco y con fuente retro
      legend: {
        position: 'top', alignment: 'center',
        textStyle: { fontName: 'Share Tech Mono', fontSize: 13, color: '#ffffff' }
      },
      
      chartArea: { width: '85%', height: '70%' },
      bar: { groupWidth: '75%' },
      
      // 4. Líneas de tendencia brillantes
      trendlines: {
        0: { type: 'linear', lineWidth: 4, opacity: 0.9, color: '#00cccc' }, // Cyan un poco más oscuro
        1: { type: 'exponential', lineWidth: 4, opacity: 0.9, color: '#cc00cc' } // Magenta un poco más oscuro
      },
      
      // 5. Eje Horizontal (X)
      hAxis: {
        title: 'HORA DEL DÍA',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#f0f' },
        format: 'h:mm a',
        viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#0ff' }, // Textos en Cyan
        gridlines: { color: 'transparent' }
      },
      
      // 6. Eje Vertical (Y)
      vAxis: {
        title: 'RATING (ESCALA 1-10)',
        titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, italic: false, color: '#f0f' },
        viewWindow: { min: 0, max: 10 },
        textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#0ff' }, // Textos en Cyan
        gridlines: { color: 'rgba(0, 255, 255, 0.15)' } // Líneas guía sutiles en cyan transparente
      }
    };
  }

  obtenerConfiguracion() {
    return this.configuracion;
  }
}