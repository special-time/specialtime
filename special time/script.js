document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de las pestañas del menú
    const tabButtons = document.querySelectorAll('.tab-btn');
    const categoriaMenus = document.querySelectorAll('.categoria-menu');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Ocultar todas las categorías
            categoriaMenus.forEach(menu => menu.classList.remove('active'));
            
            // Mostrar la categoría correspondiente
            const categoryId = button.getAttribute('data-category') + '-cat';
            const targetMenu = document.getElementById(categoryId);
            document.getElementById(categoryId).classList.add('active');
            if (targetMenu) {
                targetMenu.classList.add('active');
                }
        });
    });

    // Efecto al añadir productos
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.parentElement.querySelector('h4').textContent;
            
            // Crear efecto visual
            this.textContent = '✓ Añadido';
            this.style.backgroundColor = '#4CAF50';
            
            // Resetear después de 2 segundos
            setTimeout(() => {
                this.textContent = 'Añadir';
                this.style.backgroundColor = '';
            }, 2000);
            
            // Aquí podrías agregar lógica para un carrito de compras
            console.log(`Producto añadido: ${itemName}`);
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('formulario-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = '✓ Mensaje Enviado';
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = 'Enviar Mensaje';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de carga inicial
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});