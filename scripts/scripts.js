$(document).ready(function() {

    $(window).scroll(function() {
        var topPosition = $(document).scrollTop();
        console.log(topPosition)

        if (topPosition > 685) {
            $('#fact-one').removeClass('hide')
            $('#fact-one').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 800) {
            $('#fact-two').removeClass('hide')
            $('#fact-two').addClass('animate__animated animate__bounceInRight')
        };
        if (topPosition > 925) {
            $('#fact-three').removeClass('hide')
            $('#fact-three').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 1050) {
            $('#fact-four').removeClass('hide')
            $('#fact-four').addClass('animate__animated animate__bounceInRight')
        };
        if (topPosition > 1175) {
            $('#fact-five').removeClass('hide')
            $('#fact-five').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 1225) {
            $('#fact-six').removeClass('hide')
            $('#fact-six').addClass('animate__animated animate__bounceInRight')
        };
    });

    if (width > 768) {

    }
});