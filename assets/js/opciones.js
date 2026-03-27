// =========================================
// ASSETS/JS/OPCIONES.JS - PROTOCOLO SOLAR INDUSTRIAL
// =========================================

const opcionesEstilo = {
  backgroundColor: 'transparent',
  colors: ['#ff9f1c', '#00f5d4'],
  animation: { duration: 800, easing: 'out' },
  legend: {
    position: 'top', alignment: 'center',
    textStyle: { fontName: 'Share Tech Mono', fontSize: 13, color: '#ffffff' }
  },
  bar: { groupWidth: '75%' },
  trendlines: {
    0: { type: 'linear', lineWidth: 4, opacity: 0.9, color: '#ffc16e' },
    1: { type: 'exponential', lineWidth: 4, opacity: 0.9, color: '#5efff3' }
  },
  hAxis: {
    title: 'Hora del Día',
    titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, color: '#ff9f1c' },
    format: 'h:mm a',
    viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
    textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#00f5d4' },
    gridlines: { color: 'transparent' },
    slantedText: true,
    slantedTextAngle: 45
  },
  vAxis: {
    title: 'Rating (escala 1-10)',
    titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, color: '#ff9f1c' },
    viewWindow: { min: 0, max: 10 },
    textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#00f5d4' },
    gridlines: { color: 'rgba(0, 245, 212, 0.15)' }
  },
  tooltip: { isHtml: true }
};