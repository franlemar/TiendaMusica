document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const iframeWindow = document.getElementById('view-section');
    const activeCategorySpan = document.getElementById('active-category');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Activar ventana
            iframeWindow.style.display = 'block';
            setTimeout(() => { iframeWindow.classList.add('visible'); }, 50);

            // Resaltar botón arriba
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Actualizar título
            updateTitle(this.innerText);

            // Scroll suave
            setTimeout(() => {
                iframeWindow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        });
    });
});

function updateTitle(name) {
    const span = document.getElementById('active-category');
    if(span) {
        span.innerText = name;
        span.style.color = "#ffd633"; // Amarillo categoría
    }
}

function closeWindow() {
    const win = document.getElementById('view-section');
    win.classList.remove('visible');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if (document.fullscreenElement) document.exitFullscreen();
    setTimeout(() => { win.style.display = 'none'; }, 500);
}

function toggleFullScreen() {
    const win = document.getElementById('view-section');
    if (!document.fullscreenElement) {
        if (win.requestFullscreen) win.requestFullscreen();
        else if (win.webkitRequestFullscreen) win.webkitRequestFullscreen();
    } else {
        document.exitFullscreen();
    }
}