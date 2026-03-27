// App.js

import { DatosGrafico } from './datos.js';
import { OpcionesGrafico } from './opciones.js';

class Graficador {
  constructor(contenedorId, sliderId, textoSliderId) {
    // Guardamos referencias a los elementos del HTML
    this.contenedorId = contenedorId;
    this.slider = document.getElementById(sliderId);
    this.textoSlider = document.getElementById(textoSliderId);

    // Instanciamos nuestras clases
    this.manejadorDatos = new DatosGrafico();
    this.manejadorOpciones = new OpcionesGrafico();
  }

  iniciar() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    
    // Cuando Google Charts esté listo, configuramos el slider y dibujamos
    google.charts.setOnLoadCallback(() => {
      this.configurarEventos();
      this.dibujar(); // Primer dibujo al cargar la página
    });
  }

  configurarEventos() {
    // El evento 'input' se dispara en tiempo real mientras arrastras el control
    this.slider.addEventListener('input', () => {
      // 1. Actualizamos el número rojo en la pantalla
      this.textoSlider.textContent = this.slider.value;
      // 2. Volvemos a dibujar la gráfica con la nueva cantidad
      this.dibujar();
    });
  }

  dibujar() {
    // Convertimos el valor del slider (que es texto) a número entero
    const cantidad = parseInt(this.slider.value, 10);

    // Le pedimos al módulo de datos que genere esa cantidad
    const data = this.manejadorDatos.obtenerDataTable(cantidad);
    const options = this.manejadorOpciones.obtenerConfiguracion();

    const chartDiv = document.getElementById(this.contenedorId);
    const chart = new google.visualization.ColumnChart(chartDiv);
    
    chart.draw(data, options);
  }
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
// Pasamos los 3 IDs que creamos en el HTML
const miAppGrafica = new Graficador('chart_div', 'sliderDatos', 'valorSlider');
miAppGrafica.iniciar();