// =========================================
// PROTOCOLO DE NOTIFICACIONES (TOAST)
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los enlaces del ecosistema
    const enlacesEcosistema = document.querySelectorAll('#ecosistema-links a');
    const toast = document.getElementById('cyber-toast');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    
    let toastTimeout; // Variable para controlar el tiempo del toast

    enlacesEcosistema.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página salte hacia arriba
            
            const accion = this.getAttribute('data-action');
            mostrarNotificacionCyber(accion);
        });
    });

    function mostrarNotificacionCyber(accion) {
        // Reiniciar la animación y ocultar si ya hay uno visible
        toast.classList.remove('show');
        clearTimeout(toastTimeout);

        // Pequeño retraso para permitir que el CSS reinicie la animación
        setTimeout(() => {
            // Asignar los textos según el botón presionado
            switch(accion) {
                case 'doc':
                    toastTitle.innerHTML = "SISTEMA INFO";
                    toastTitle.style.color = "#ff8c00"; // Naranja estándar
                    toastMessage.innerHTML = "> Accediendo a los archivos de documentación core... Encriptación validada.";
                    break;
                case 'logs':
                    toastTitle.innerHTML = "ALERTA DE SEGURIDAD";
                    toastTitle.style.color = "#ff3333"; // Rojo para alertas
                    toastMessage.innerHTML = "> Descargando logs. Se detectaron 3 intentos de acceso no autorizado.";
                    break;
                case 'root':
                    toastTitle.innerHTML = "ACCESO DENEGADO";
                    toastTitle.style.color = "#ff3333"; // Rojo para error
                    toastMessage.innerHTML = "> ERROR 403: Permisos insuficientes. Se requiere nivel ALPHA para la Terminal Root.";
                    break;
                case 'stats':
                    toastTitle.innerHTML = "MÉTRICAS NEURALES";
                    toastTitle.style.color = "#00e5ff"; // Cian
                    toastMessage.innerHTML = "> Compilando estadísticas... Eficiencia del sistema actual: 98.4%.";
                    break;
            }

            // Mostrar la notificación
            toast.classList.add('show');

            // Ocultarlo automáticamente después de 3 segundos (3000ms)
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

        }, 50); 
    }
});