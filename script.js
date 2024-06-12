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
    
    // Generar y descargar la imagen del carnet
    html2canvas(document.getElementById('carnet')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'carnet.png';
        link.click();
    });
});

