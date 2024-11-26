document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Menu Hambúrguer
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Carrossel
    setInterval(() => {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }, 4000);
});
