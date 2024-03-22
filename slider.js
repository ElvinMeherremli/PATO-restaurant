const mySlider = new Splide('#topSlider', {
    type: 'fade',
    arrows: true,
    autoplay: true,
    interval: 3000,
    rewind: true
})

mySlider.mount()

// Скрываем кнопки переключения слайдов через определенное время
function hideNavigation() {
    var arrows = document.querySelectorAll('.splide__arrow');
    arrows.forEach(function (arrow) {
        arrow.style.opacity = 0; // Прячем кнопки
    });
}

// Показываем кнопки переключения слайдов
function showNavigation() {
    var arrows = document.querySelectorAll('.splide__arrow');
    arrows.forEach(function (arrow) {
        arrow.style.opacity = 0.6; // Показываем кнопки
    });
}

// Скрываем кнопки переключения слайдов через 5 секунд после загрузки страницы
setTimeout(hideNavigation, 5000);


// Скрываем кнопки переключения слайдов после выхода курсора за пределы слайдера
mySlider.root.addEventListener('mouseenter', function () {
    showNavigation();
});

// Скрываем кнопки переключения слайдов после выхода курсора за пределы слайдера
mySlider.root.addEventListener('mouseleave', function () {
    hideNavigation();
});
