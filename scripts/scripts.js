$(document).ready(function() {

    $(window).scroll(scrollAnimation);
    
    function scrollAnimation() {
        var topPosition = $(document).scrollTop();
        console.log(topPosition)

        if (topPosition > 730) {
            $('#fact-one').removeClass('hide')
            $('#fact-one').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 900) {
            $('#fact-two').removeClass('hide')
            $('#fact-two').addClass('animate__animated animate__bounceInRight')
        };
        if (topPosition > 1220) {
            $('#fact-three').removeClass('hide')
            $('#fact-three').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 1430) {
            $('#fact-four').removeClass('hide')
            $('#fact-four').addClass('animate__animated animate__bounceInRight')
        };
        if (topPosition > 1660) {
            $('#fact-five').removeClass('hide')
            $('#fact-five').addClass('animate__animated animate__bounceInLeft')
        };
        if (topPosition > 1975) {
            $('#fact-six').removeClass('hide')
            $('#fact-six').addClass('animate__animated animate__bounceInRight')
        };
    };

    if ($(window).width() == 786) {
        $('.placeholder').remove();
    }
});