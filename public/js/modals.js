$(document).ready(function () {
    M.AutoInit();
    $('.modal').modal();
    $(".dropdown-trigger").dropdown({
        coverTrigger: false,
    });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
});