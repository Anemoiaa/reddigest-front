document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".category__swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})


