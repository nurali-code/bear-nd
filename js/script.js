// Меню бургер
$('.btn__menu, .nav__link').on('click', function () {
    window.innerWidth < 1199 ? $('.header .nav, body, .btn__menu').toggleClass('active') : '';
});

function animateNumber(element, to, duration = 2000) {
    let start = 0;
    let startTime = null;
    // Сохраняем любые нечисловые символы (например, пробелы, +)
    const originalText = $(element).text();
    const match = originalText.match(/^(\D*)\s*([\d\s]+)\s*(\D*)$/);
    const prefix = match ? match[1] : '';
    const suffix = match ? match[3] : '';

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (to - start) + start);
        // Форматируем число с пробелами как в оригинале
        const formatted = value.toLocaleString('ru-RU');
        $(element).text(`${prefix}${formatted}${suffix}`);
        if (progress < 1) { requestAnimationFrame(animate); }
    }
    requestAnimationFrame(animate);
}

$('[data-anim]').each(function () {
    // Извлекаем только число из текста, игнорируя пробелы и символы
    const n = parseInt($(this).text().replace(/[^\d]/g, ''), 10);
    animateNumber(this, n, 2000);
});

function scrollChatToBottom() {
    const chatBody = document.querySelector('.chat__body');
    if (chatBody) { chatBody.scrollTop = chatBody.scrollHeight; }
}
scrollChatToBottom();


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