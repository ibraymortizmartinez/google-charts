// Opciones.js

export class OpcionesGrafico {
  constructor() {
    this.configuracion = {
      colors: ['#4285F4', '#FF5252'],
      animation: { startup: true, duration: 1000, easing: 'out' },
      legend: {
        position: 'top', alignment: 'center',
        textStyle: { fontName: 'Arial', fontSize: 13, color: '#333' }
      },
      chartArea: { width: '85%', height: '70%' },
      bar: { groupWidth: '75%' },
      trendlines: {
        0: { type: 'linear', lineWidth: 4, opacity: 0.7, color: '#174EA6' },
        1: { type: 'exponential', lineWidth: 4, opacity: 0.7, color: '#B31412' }
      },
      hAxis: {
        title: 'Hora del Día',
        titleTextStyle: { fontName: 'Arial', fontSize: 14, bold: true, italic: false, color: '#ff0000' },
        format: 'h:mm a',
        viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
        textStyle: { fontName: 'Arial', fontSize: 11, color: '#666' },
        gridlines: { color: 'transparent' }
      },
      vAxis: {
        title: 'Rating (escala de 1-10)',
        titleTextStyle: { fontName: 'Arial', fontSize: 14, bold: true, italic: false, color: '#ff0000' },
        viewWindow: { min: 0, max: 10 },
        textStyle: { fontName: 'Arial', fontSize: 11, color: '#0000006b' },
        gridlines: { color: '#222221' }
      }
    };
  }

  obtenerConfiguracion() {
    return this.configuracion;
  }
}