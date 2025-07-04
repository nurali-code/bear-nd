// Меню бургер
$('.btn__menu, .nav__link').on('click', function () {
    window.innerWidth < 11199.99 ? $('.header .nav, body, .btn__menu').toggleClass('active') : '';
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


// FAQ аккордеон
$('.faq__heading').on('click', function () {
    const parent = $(this).closest('.faq-item');
    $('.faq__heading').not(this).removeClass('active').next().slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
    setTimeout(() => { $('.faq-item').not(parent).removeClass('active'); }, 300);
    parent.toggleClass('active');
});

$('.live__slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    cennterPadding: '0',
    speed: 300,
    slidesToShow: 2,
    asNavFor: '.live__navbar',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
$('.live__navbar').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cennterPadding: '0px',
    variableWidth: true,
    asNavFor: '.live__slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
            }
        },
    ]
});
$('.reviews__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    cennterPadding: '14px',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                variableWidth: false,
                cennterPadding: '20px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
            }
        },
    ]
});