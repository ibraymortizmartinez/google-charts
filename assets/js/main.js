// Variables Globales de Estado
let chart;
let isLive = false;
let intervaloLive = null;
let datosActuales = []; 

google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(inicializarDashboard);

function inicializarDashboard() {
  chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

  // Configuración de Slider
  const slider = document.getElementById('rango-datos');
  const badgeSlider = document.getElementById('valor-rango');
  slider.max = datosBase.length;
  slider.value = datosBase.length;
  badgeSlider.innerText = slider.value;

  slider.addEventListener('input', function() {
    badgeSlider.innerText = this.value;

    // PROTOCOLO DE SEGURIDAD: 
    // Si el usuario intenta cambiar el volumen manualmente, 
    // detenemos el Live Feed para evitar conflictos de datos.
    if (isLive) {
        console.log("SISTEMA: Interrupción manual detectada. Desactivando Live Feed...");
        toggleLiveFeed(); // Esta función ya se encarga de limpiar el intervalo y el botón
    }

    filtrarYRenderizar(this.value);
});

  // Eventos de Botones
  document.getElementById('btn-live').addEventListener('click', toggleLiveFeed);
  document.getElementById('btn-extraer').addEventListener('click', descargarCSV);

  filtrarYRenderizar(slider.value);
}

function actualizarHUD(arregloDatos) {
  if (arregloDatos.length === 0) return;
  let sumaMotivacion = arregloDatos.reduce((acc, f) => acc + f[1], 0);
  let sumaEnergia = arregloDatos.reduce((acc, f) => acc + f[2], 0);

  const promMot = (sumaMotivacion / arregloDatos.length).toFixed(1);
  const promEne = (sumaEnergia / arregloDatos.length).toFixed(1);

  document.getElementById('hud-mot').innerText = promMot;
  document.getElementById('hud-ene').innerText = promEne;

  const hudEstado = document.getElementById('hud-estado');
  const esOptimo = promMot >= 5 && promEne >= 5;
  hudEstado.innerText = esOptimo ? 'ÓPTIMO' : 'FLUCTUANDO';
  hudEstado.style.color = esOptimo ? '#00f5d4' : '#ff9f1c';

if (promMot < 5 || promEne < 5) {
    // Alerta visual en la pestaña: Parpadea entre un círculo naranja y un rayo
    FaviconManager.setAlert('🟠', '⚡', 800); 
    hudEstado.innerText = 'FLUCTUANDO';
} else {
    // Estado normal: Círculo cian estable
    FaviconManager.setByEmoji('🔵');
    hudEstado.innerText = 'ÓPTIMO';
}

}

function toggleLiveFeed() {
  const btnLive = document.getElementById('btn-live');
  isLive = !isLive;

  if (isLive) {
    btnLive.innerHTML = '⏸ DETENER LIVE';
    btnLive.classList.add('btn-activo');
    FaviconManager.setByUrl('assets/img/favicon-live.png'); 
    
    intervaloLive = setInterval(() => {
      mutarDatosParaLiveFeed();
      dibujarGrafica(datosActuales);
    }, 2000);
  } else {
    btnLive.innerHTML = '▶ LIVE FEED';
    btnLive.classList.remove('btn-activo');
    clearInterval(intervaloLive);
    FaviconManager.setByUrl('assets/img/favicon-steady.png');
    filtrarYRenderizar(document.getElementById('rango-datos').value);
  }
}

function descargarCSV() {
  let contenidoCSV = "data:text/csv;charset=utf-8,Hora,Motivacion,Energia\r\n";
  datosActuales.forEach(fila => {
    contenidoCSV += `${fila[0].f},${fila[1].toFixed(2)},${fila[2].toFixed(2)}\r\n`;
  });
  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(contenidoCSV));
  link.setAttribute("download", "registro_neural.csv");
  link.click();
}