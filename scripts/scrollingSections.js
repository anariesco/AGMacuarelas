$(function () {
    $('.navigation__link').click(function (event) {
        event.preventDefault();

        const section = $(this).attr('href');

        $('body').animate({
            scrollTop: $(section).offset().top
        });
    });
});