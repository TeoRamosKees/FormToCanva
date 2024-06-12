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
    
    // Ajustar letra paralelo al carnet #nombreCarnet, #identificacionCarnet
    const nombreCarnet = document.getElementById('nombreCarnet');
    const identificacionCarnet = document.getElementById('identificacionCarnet');

    // Obtener la escala de la densidad de píxeles
    const scale = window.devicePixelRatio;

    // Ajustar el tamaño del contenedor del carnet
    const carnetElement = document.getElementById('carnet');
    const originalWidth = carnetElement.offsetWidth;
    const originalHeight = carnetElement.offsetHeight;

    carnetElement.style.width = `${originalWidth * scale}px`;
    carnetElement.style.height = `${originalHeight * scale}px`;
    nombreCarnet.style.fontSize = `${100 * scale}%`;
    identificacionCarnet.style.fontSize = `${100 * scale}%`;


    // Generar y descargar la imagen del carnet
    html2canvas(carnetElement, { scale }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'carnet.png';
        link.click();

        // Restaurar el tamaño original del contenedor del carnet
        carnetElement.style.width = `${originalWidth}px`;
        carnetElement.style.height = `${originalHeight}px`;
    });
});

