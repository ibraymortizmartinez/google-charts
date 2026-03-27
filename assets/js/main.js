// =========================================
// ASSETS/JS/MAIN.JS - LÓGICA INTEGRADA CYBERPUNK
// =========================================

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(inicializarDashboard);

// Variables Globales
let chart;
let opcionesEstilo;
let isLive = false;
let intervaloLive = null;
let datosActuales = []; 

// Tus datos originales base
const datosBase = [
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
];

function inicializarDashboard() {
  // 1. Configuramos el diseño Naranja Industrial / Cian
  opcionesEstilo = {
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
      gridlines: { color: 'transparent' }
    },
    hAxis: {
      title: 'Hora del Día',
      titleTextStyle: { fontName: 'Share Tech Mono', fontSize: 14, bold: true, color: '#ff9f1c' },
      format: 'h:mm a',
      viewWindow: { min: [7, 30, 0], max: [18, 0, 0] },
      textStyle: { fontName: 'Share Tech Mono', fontSize: 11, color: '#00f5d4' },
      gridlines: { color: 'transparent' },
      
      // --- SOLUCIÓN PARA QUE NO CHOQUEN LAS ETIQUETAS ---
      slantedText: true,        // Activa la inclinación del texto
      slantedTextAngle: 45,     // Grados de inclinación (puedes probar 45 o 90)
      
      // minTextSpacing: 50     // Alternativa: Si no quieres inclinarlas, descomenta esta línea. 
                                // Esto forzará a Google Charts a saltarse algunas horas para dejar 50px de espacio entre cada una.
    },
    tooltip: { isHtml: true }
  };

  chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

  // 2. Configurar Botones
  const btnLive = document.getElementById('btn-live');
  btnLive.addEventListener('click', toggleLiveFeed);

  const btnExtraer = document.getElementById('btn-extraer');
  btnExtraer.addEventListener('click', descargarCSV);

  // 3. Configurar Slider
  const slider = document.getElementById('rango-datos');
  const badgeSlider = document.getElementById('valor-rango');
  
  // Establecer el máximo del slider al número total de datos base
  slider.max = datosBase.length;
  // Inicializamos el slider con el total de datos (para mostrar todos por defecto)
  slider.value = datosBase.length;
  badgeSlider.innerText = slider.value;

  slider.addEventListener('input', function() {
    badgeSlider.innerText = this.value;
    filtrarYRenderizar(this.value);
  });

  // 4. Primera renderizada con los datos base
  filtrarYRenderizar(slider.value);
}

// Nueva función para filtrar los datos fijos según el valor del slider
function filtrarYRenderizar(cantidad) {
    // Tomamos solo la 'cantidad' de datos desde el inicio de datosBase
    datosActuales = JSON.parse(JSON.stringify(datosBase.slice(0, cantidad)));
    
    // Ajustar dinámicamente el max del eje X (viewWindow) para que se vea bien
    if(datosActuales.length > 0) {
       // Tomar el último valor temporal disponible y sumarle un margen
       let ultimaHora = datosActuales[datosActuales.length - 1][0].v[0];
       let ultimoMin = datosActuales[datosActuales.length - 1][0].v[1];
       
       // Agregar 30 min de margen al final
       if(ultimoMin === 30) {
           ultimaHora++;
           ultimoMin = 0;
       } else {
           ultimoMin = 30;
       }
       opcionesEstilo.hAxis.viewWindow.max = [ultimaHora, ultimoMin, 0];
    }

    dibujarGrafica(datosActuales);
}


function dibujarGrafica(arregloDatos) {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Hora del dia');
  data.addColumn('number', 'Niveles de Motivacion');
  data.addColumn('number', 'Niveles de Energia');
  
  data.addRows(arregloDatos);
  chart.draw(data, opcionesEstilo);

  // Actualizar los mini-paneles
  actualizarHUD(arregloDatos);
}

// --- FUNCIONES EXTRA (HUD, LIVE, CSV) ---

function actualizarHUD(arregloDatos) {
  if (arregloDatos.length === 0) return; // Protección por si no hay datos

  let sumaMotivacion = 0;
  let sumaEnergia = 0;

  arregloDatos.forEach(fila => {
    sumaMotivacion += fila[1];
    sumaEnergia += fila[2];
  });

  const promMot = (sumaMotivacion / arregloDatos.length).toFixed(1);
  const promEne = (sumaEnergia / arregloDatos.length).toFixed(1);

  document.getElementById('hud-mot').innerText = promMot;
  document.getElementById('hud-ene').innerText = promEne;

  const hudEstado = document.getElementById('hud-estado');
  if (promMot < 5 || promEne < 5) {
    hudEstado.innerText = 'FLUCTUANDO';
    hudEstado.style.color = '#ff9f1c';
    hudEstado.style.textShadow = '0 0 10px #ff9f1c';
  } else {
    hudEstado.innerText = 'ÓPTIMO';
    hudEstado.style.color = '#00f5d4';
    hudEstado.style.textShadow = '0 0 10px #00f5d4';
  }
}

function toggleLiveFeed() {
  const btnLive = document.getElementById('btn-live');
  isLive = !isLive;
  const slider = document.getElementById('rango-datos');

  if (isLive) {
    btnLive.innerHTML = '⏸ DETENER LIVE';
    btnLive.classList.add('btn-activo');
    
    // Inicia la mutación de datos cada 2 segundos
    intervaloLive = setInterval(() => {
      mutarDatosParaLiveFeed();
      dibujarGrafica(datosActuales);
    }, 2000);
  } else {
    btnLive.innerHTML = '▶ LIVE FEED';
    btnLive.classList.remove('btn-activo');
    clearInterval(intervaloLive);
    
    // Regresa a la normalidad respetando la cantidad seleccionada en el slider
    filtrarYRenderizar(slider.value);
  }
}

function mutarDatosParaLiveFeed() {
  // Modifica ligeramente los valores simulando actividad neuronal en tiempo real
  datosActuales = datosActuales.map((fila, index) => {
    let nuevaFila = [...fila];
    // Variación aleatoria entre -0.8 y +0.8
    let ruidoMotivacion = (Math.random() * 1.6) - 0.8; 
    let ruidoEnergia = (Math.random() * 1.6) - 0.8;

    // Aseguramos que los valores no bajen de 0 ni suban de 10
    // Usamos el valor original como base (limitado a la cantidad actual de datos)
    nuevaFila[1] = Math.max(0, Math.min(10, datosBase[index][1] + ruidoMotivacion));
    nuevaFila[2] = Math.max(0, Math.min(10, datosBase[index][2] + ruidoEnergia));

    return nuevaFila;
  });
}

function descargarCSV() {
  let contenidoCSV = "data:text/csv;charset=utf-8,Hora,Motivacion,Energia\r\n";
  
  datosActuales.forEach(fila => {
    // fila[0].f contiene la hora en texto (ej. "8:00 am")
    let stringFila = `${fila[0].f},${fila[1].toFixed(2)},${fila[2].toFixed(2)}`;
    contenidoCSV += stringFila + "\r\n";
  });

  const encodedUri = encodeURI(contenidoCSV);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "registro_neural.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}