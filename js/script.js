$(document).ready(function () {
    $('.menu img').on('click', function () {
        $(this).toggleClass("before after");
    });
    $('.menu img').on('click', function () {
        $(".mobile").toggleClass("stop start");
    });
    $('.mobile-link').on('click', function () {
        $(".mobile").toggleClass("stop start");
        $(".menu img").toggleClass("before after");
    });
});
