// Configuración de Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});
