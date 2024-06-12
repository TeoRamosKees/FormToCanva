// script.js
document.getElementById('carnetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    
    // Asignar los valores al carnet
    document.getElementById('nombreCarnet').textContent = nombre;
    document.getElementById('identificacionCarnet').textContent = identificacion;
    
    // Mostrar el carnet
    document.getElementById('carnetContainer').style.display = 'block';

    // Obtener la escala de la densidad de píxeles
    const scale = window.devicePixelRatio;

    // Ajustar el tamaño del contenedor del carnet
    const carnetElement = document.getElementById('carnet');
    carnetElement.style.width = `${carnetElement.offsetWidth * scale}px`;
    carnetElement.style.height = `${carnetElement.offsetHeight * scale}px`;

    // Generar y descargar la imagen del carnet
    html2canvas(carnetElement, { scale }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'carnet.png';
        link.click();

        // Restaurar el tamaño original del contenedor del carnet
        carnetElement.style.width = '';
        carnetElement.style.height = '';
    });
});

