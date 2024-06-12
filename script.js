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

    // Obtener las dimensiones originales
    const carnetContainer = document.getElementById('carnetContainer');
    const originalWidth = carnetContainer.offsetWidth;
    const originalHeight = carnetContainer.offsetHeight;

    // Ajustar el tamaño del contenedor del carnet
    carnetContainer.style.width = `${originalWidth * scale}px`;
    carnetContainer.style.height = `${originalHeight * scale}px`;

    // Generar y descargar la imagen del carnet
    html2canvas(carnetContainer, { scale }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'carnet.png';
        link.click();

        // Restaurar el tamaño original del contenedor del carnet
        carnetContainer.style.width = `${originalWidth}px`;
        carnetContainer.style.height = `${originalHeight}px`;
    });
});

