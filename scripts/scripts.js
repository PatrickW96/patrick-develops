$(document).ready(function() {
    let count = 0;

    // Using scroll event to animate elements when user scrolls down the page
    $(window).scroll(scrollAnimation);

    // Sidebar tab click event
    $('.follow-tab').click(openNav);
    $('.closebtn').click(closeNav);

    // Next/Prev button click events
    $('#nextBtn').click(nextBtn);
    $('#prevBtn').click(prevBtn);
    
    
    function scrollAnimation() {
        const topPosition = $(document).scrollTop();
        console.log(topPosition)
        sidebarHeight(topPosition)

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

    function carousel() {
        const carouselArrayOfObj = [
            {
                image : {
                    number : 0,
                    projectName : "JavaScript Quiz",
                    source : "images/javascript-quiz.jpg",
                    description : `"JavaScript Quiz" is a quick quiz application that showcases my ability to manipulate the DOM using Vanilla JS`,
                    appHostSite : "https://patrickw96.github.io/javascript-quiz/"    
                }
            }, 

            {
                image : {
                    number : 1,
                    projectName : "Plan Ahead",
                    source : "images/plan-ahead.jpg",
                    description : `"Plan ahead" is a simple daily todo tracker made and coded using jQuery library to manipulate the DOM. The app also utilized
                    a users local storage to save todo's on refresh.`,
                    appHostSite : "https://patrickw96.github.io/plan-ahead/"    
                }
            },

            {
                image : {
                    number : 2,
                    projectName : "RandomPW Generator",
                    source : "images/pwgenerator.jpg",
                    description : `This app takes a users input (pw length, characters to include/not include) and then creates a unique random password. Then you can click the 
                    clipboard button to copy the pw to local clipboard.`,
                    appHostSite : "https://patrickw96.github.io/password-generator/"    
                }
            },

            {
                image : {
                    number : 3,
                    projectName : "What's the Weather",
                    source : "images/weather.jpg",
                    description : `"What's the Weather" is a weather dashboard application created using jQuery. Ajax requests are made to the OpenWeatherApi
                    based on user search to extract JSON files which were disected and used to populate cards with useful information.`,
                    appHostSite : "https://patrickw96.github.io/whats-the-weather/"    
                }
            }
        ];

        return carouselArrayOfObj;
    };

    console.log(carousel()[2].image.description)

    function nextBtn() {
        count++;

        if (count > 3) {
            count = 0;
        };
        carouselFunction();
    };

    function prevBtn(event) {
        let click = event.type;

        if (count > 0) {
            count--;
        } else {
            count = 3;
        };
        carouselFunction();
    };

    function carouselFunction() {
        if (count == carousel()[count].image.number) {
            $('#carousel').attr('src' , carousel()[count].image.source);
            $(`#projectName`).text(carousel()[count].image.projectName);
            $(`.description`).text(carousel()[count].image.description);
            // $(`#link`).attr('href' , carousel()[count].image.appHostSite);
        };
    };

    function openNav() {
        $('#mySideNav').width('215px');
        $('.follow-tab').addClass('hide');
    };

    function closeNav() {
        $('#mySideNav').width('0px');
        $('.follow-tab').removeClass('hide');
    }

    function sidebarHeight(position) {
        if (position < 568) {
            $('#mySideNav').css("margin-top" , "0");
        } else {
            $('#mySideNav').css("margin-top" , "4.6%");
        };

        if ($(window).width() < 768) {
            if (position < 568) {
                $('#mySideNav').css("margin-top" , "0");
            } else {
                $('#mySideNav').css("margin-top" , "67px");
            };
        };
    };
});