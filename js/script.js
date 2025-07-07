// Меню бургер
$('.btn__menu, .nav__link').on('click', function () {
    window.innerWidth < 1199 ? $('.header .nav, body, .btn__menu').toggleClass('active') : '';
});

function animateNumber(element, to, duration = 2000) {
    let start = 0;
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (to - start) + start);
        $(element).text(value.toLocaleString('ru-RU'));
        if (progress < 1) { requestAnimationFrame(animate); }
    }
    requestAnimationFrame(animate);
}

$('.hero__item-num').each(function () {
    const n = parseInt($(this).data('anim'), 10);
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
    $(this).find('.ic use').attr('href', 'img/sprite.svg#dec');
    $(this).toggleClass('active').next().slideToggle(300);
    $(this).hasClass('active') ? $(this).find('.ic use').attr('href', 'img/sprite.svg#dec') : $(this).find('.ic use').attr('href', 'img/sprite.svg#inc');
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