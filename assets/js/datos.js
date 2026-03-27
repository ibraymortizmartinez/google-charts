// Datos.js

export class DatosGrafico {
  
  obtenerDataTable(cantidadRegistros) {
    const data = new google.visualization.DataTable();
    data.addColumn('timeofday', 'Hora del dia');
    data.addColumn('number', 'Niveles de Motivacion');
    data.addColumn('number', 'Niveles de Energia');

    let hora = 8;   // Empezamos a las 8:00 am
    let minuto = 0;

    // Bucle que se repite según el valor del slider
    for (let i = 0; i < cantidadRegistros; i++) {
      
      // 1. Damos formato visual a la hora (ej. "8:30 am")
      const ampm = hora >= 12 ? 'pm' : 'am';
      const horaVisual = hora > 12 ? hora - 12 : hora;
      const minutoVisual = minuto === 0 ? '00' : '30';
      const textoHora = `${horaVisual}:${minutoVisual} ${ampm}`;

      // 2. Generamos números aleatorios entre 0.0 y 10.0
      // Math.random() genera decimales. Multiplicamos y redondeamos para tener 1 decimal.
      const motivacionAleatoria = Math.round(Math.random() * 100) / 10;
      const energiaAleatoria = Math.round(Math.random() * 100) / 10;

      // 3. Agregamos la fila a la tabla
      data.addRow([
        { v: [hora, minuto, 0], f: textoHora }, 
        motivacionAleatoria, 
        energiaAleatoria
      ]);

      // 4. Sumamos 30 minutos para la siguiente vuelta del bucle
      minuto += 30;
      if (minuto === 60) {
        minuto = 0;
        hora += 1;
      }
    }

    return data;
  }
}