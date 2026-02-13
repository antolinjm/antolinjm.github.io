// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Por ahora solo mostramos un mensaje
            // Para que funcione de verdad, necesitarás un backend o servicio como Formspree
            alert('Gracias por tu mensaje. De momento, por favor contáctame directamente por email o LinkedIn.');
            
            // Opcional: limpiar el formulario
            form.reset();
        });
    }

    // Smooth scroll mejorado para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
