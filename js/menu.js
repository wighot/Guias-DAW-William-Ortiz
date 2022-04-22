window.addEventListener('DOMContentLoaded', event => {
    // función de reducción de la barra de navegación
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
   // Para reducir la barra de navegación cuando se desplaza la página
    document.addEventListener('scroll', navbarShrink);
});
