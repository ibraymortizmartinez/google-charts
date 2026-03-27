function dibujarGrafica(arregloDatos) {
  var data = new google.visualization.DataTable();
  data.addColumn('timeofday', 'Hora del dia');
  data.addColumn('number', 'Niveles de Motivacion');
  data.addColumn('number', 'Niveles de Energia');
  
  data.addRows(arregloDatos);
  chart.draw(data, opcionesEstilo);
  actualizarHUD(arregloDatos);
}

function filtrarYRenderizar(cantidad) {
  datosActuales = JSON.parse(JSON.stringify(datosBase.slice(0, cantidad)));
  
  if(datosActuales.length > 0) {
     let ultimaFila = datosActuales[datosActuales.length - 1][0].v;
     let ultimaHora = ultimaFila[0];
     let ultimoMin = ultimaFila[1] === 30 ? 0 : 30;
     if (ultimaFila[1] === 30) ultimaHora++;

     opcionesEstilo.hAxis.viewWindow.max = [ultimaHora, ultimoMin, 0];
  }
  dibujarGrafica(datosActuales);
}

function mutarDatosParaLiveFeed() {
  datosActuales = datosActuales.map((fila, index) => {
    let nuevaFila = [...fila];
    let ruidoMotivacion = (Math.random() * 1.6) - 0.8; 
    let ruidoEnergia = (Math.random() * 1.6) - 0.8;

    nuevaFila[1] = Math.max(0, Math.min(10, datosBase[index][1] + ruidoMotivacion));
    nuevaFila[2] = Math.max(0, Math.min(10, datosBase[index][2] + ruidoEnergia));
    return nuevaFila;
  });
}