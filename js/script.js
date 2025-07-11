// Меню бургер
$('.btn__menu, .nav__link').on('click', function () {
    window.innerWidth < 1199 ? $('.header .nav, body, .btn__menu').toggleClass('active') : '';
});

function animateNumber(element, to, duration = 2000, useSpaces = false) {
    let start = 0;
    let startTime = null;
    // Сохраняем любые нечисловые символы (например, пробелы, +)
    const originalText = $(element).text();
    const match = originalText.match(/^(\D*)\s*([\d\s.,]+)\s*(\D*)$/);
    const prefix = match ? match[1] : '';
    const suffix = match ? match[3] : '';

    function formatNumber(value, decimals, useSpaces) {
        let formatted = value.toLocaleString('ru-RU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        if (!useSpaces) {
            formatted = formatted.replace(/\s/g, '');
        }
        return formatted;
    }

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = progress * (to - start) + start;
        // Определяем, есть ли десятичная часть в исходном числе
        const decimals = (to % 1 !== 0) ? 1 : 0;
        // Форматируем число с нужным разделителем и пробелами при необходимости
        const formatted = formatNumber(value, decimals, useSpaces);
        $(element).text(`${prefix}${formatted}${suffix}`);
        if (progress < 1) { requestAnimationFrame(animate); }
    }
    requestAnimationFrame(animate);
}

// Используем Intersection Observer для анимации чисел при появлении в зоне видимости
const animElements = document.querySelectorAll('[data-anim]');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Проверяем, есть ли пробелы в числе
                const text = entry.target.textContent;
                const hasSpaces = /\d\s+\d/.test(text);
                // Заменяем запятую на точку для корректного парсинга
                const n = parseFloat(text.replace(/\s/g, '').replace(',', '.'));
                animateNumber(entry.target, n, 2000, hasSpaces);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    animElements.forEach(el => observer.observe(el));
} else {
    // Fallback для старых браузеров
    $('[data-anim]').each(function () {
        const text = $(this).text();
        const hasSpaces = /\d\s+\d/.test(text);
        const n = parseFloat(text.replace(/\s/g, '').replace(',', '.'));
        animateNumber(this, n, 2000, hasSpaces);
    });
}


// services аккордеон   
$('.services__heading').on('click', function () {
    $('.services__heading').not(this).removeClass('active').next().slideUp(300);
    $('.services__heading').not(this).find('.ic use').attr('href', 'img/sprite.svg#inc');
    $(this).toggleClass('active').next().slideToggle(300);
    if ($(this).hasClass('active')) {
        $(this).find('.ic use').attr('href', 'img/sprite.svg#dec');
    } else {
        $(this).find('.ic use').attr('href', 'img/sprite.svg#inc');
    }
});

// faq аккордеон
$('.faq__heading').on('click', function () {
    $('.faq__heading').not(this).removeClass('active').next().slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
});

$('.subs-slider').slick({
    arrows: false,
    // infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    cennterPadding: '0',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.reviews-slider').slick({
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    cennterPadding: '0',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});