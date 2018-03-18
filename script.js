$(".navbar-nav li a[href^='#']").on('click', function (e) {

    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 400, function () {

        window.location.hash = hash;
    });

});


var options = {
    interval: 8000,
    pause: 'hover',
    wrap: true
};
$('#bestCarousel').carousel(options);
