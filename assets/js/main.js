google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Hora del dia');
  data.addColumn('number', 'Niveles de Motivacion');
  data.addColumn('number', 'Niveles de Energia');

  data.addRows([
    [{ v: [8, 0, 0], f: '8:00 am' }, 1, 0.25],
    [{ v: [8, 30, 0], f: '8:30 am' }, 1.5, 0.3],
    [{ v: [9, 0, 0], f: '9:00 am' }, 2, 0.4],
    [{ v: [9, 30, 0], f: '9:30 am' }, 2.5, 0.5],
    [{ v: [10, 0, 0], f: '10:00 am' }, 3, 0.7],
    [{ v: [10, 30, 0], f: '10:30 am' }, 3.5, 0.9],
    [{ v: [11, 0, 0], f: '11:00 am' }, 4, 1.2],
    [{ v: [11, 30, 0], f: '11:30 am' }, 4.5, 1.5],
    [{ v: [12, 0, 0], f: '12:00 pm' }, 5, 1.9],
    [{ v: [12, 30, 0], f: '12:30 pm' }, 5.5, 2.4],
    [{ v: [13, 0, 0], f: '1:00 pm' }, 6, 3.0],
    [{ v: [13, 30, 0], f: '1:30 pm' }, 6.5, 3.7],
    [{ v: [14, 0, 0], f: '2:00 pm' }, 7, 4.5],
    [{ v: [14, 30, 0], f: '2:30 pm' }, 7.5, 5.4],
    [{ v: [15, 0, 0], f: '3:00 pm' }, 8, 6.4],
    [{ v: [15, 30, 0], f: '3:30 pm' }, 8.5, 7.5],
    [{ v: [16, 0, 0], f: '4:00 pm' }, 9, 8.7],
    [{ v: [16, 30, 0], f: '4:30 pm' }, 9.5, 9.5],
    [{ v: [17, 0, 0], f: '5:00 pm' }, 9.8, 9.8],
    [{ v: [17, 30, 0], f: '5:30 pm' }, 10, 10]
  ]);

  var options = {
    // ELIMINAMOS el 'title' de aquí porque lo pusimos en el HTML

    colors: ['#4285F4', '#FF5252'],

    animation: {
      startup: true,
      duration: 1000,
      easing: 'out'
    },

    legend: {
      position: 'top',
      alignment: 'center',
      textStyle: { fontName: 'Arial', fontSize: 13, color: '#333' } // Formato para la leyenda
    },
    chartArea: { width: '85%', height: '70%' },

    bar: { groupWidth: '75%' },

    trendlines: {
      0: { type: 'linear', lineWidth: 4, opacity: 0.7, color: '#174EA6' },
      1: { type: 'exponential', lineWidth: 4, opacity: 0.7, color: '#B31412' }
    },

    hAxis: {
      title: 'Hora del Día',
      // NUEVO: Formato del texto del título del eje X
      titleTextStyle: {
        fontName: 'Arial',
        fontSize: 14,
        bold: true,
        italic: false, // Quita la cursiva por defecto
        color: '#ff0000'
      },
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [18, 0, 0]
      },
      textStyle: { fontName: 'Arial', fontSize: 11, color: '#666' }, // Formato de las horas
      gridlines: { color: 'transparent' }
    },

    vAxis: {
      title: 'Rating (escala de 1-10)',
      // NUEVO: Formato del texto del título del eje Y
      titleTextStyle: {
        fontName: 'Arial',
        fontSize: 14,
        bold: true,
        italic: false, // Quita la cursiva por defecto
        color: '#ff0000'
      },
      viewWindow: { min: 0, max: 10 },
      textStyle: { fontName: 'Arial', fontSize: 11, color: '#0000006b' }, // Formato de los números (0-10)
      gridlines: { color: '#222221' }
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}