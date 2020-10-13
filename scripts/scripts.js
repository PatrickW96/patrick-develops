$(document).ready(function() {

    $(window).scroll(scrollAnimation);
    
    function createAboutMeCard() {

    };
    
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

    function carousel() {
        const carouselImagesArray = [
            {
                image : 1,
                projectName : "JavaScript Quiz",
                source : "images/javascript-quiz.jpg",
                description : `"JavaScript Quiz" is a quick quiz application build to put your JavaScript knowledge to the test. 50 seconds on the clock..
                can you beat it? Check it out at the link below.`,
                appHostSite : "https://patrickw96.github.io/javascript-quiz/"
            }, 

            {
                image : 2,
                projectName : "What's the Weather?",
                source : "images/weather.jpg",
                description : `A weather dashboard application that utilizes "openweatherAPI" to display the  weather and next 5 day forecast for over
                2000,000 cities.`,
                appHostSite : "https://patrickw96.github.io/whats-the-weather/"
            },

            {
                image : 3,
                projectName : "Plan Ahead",
                source : "images/plan-ahead.jpg",
                description : `A daily to do list application that is build to keep you on track. With color coded time slots, "Plan Ahead" was put together with a busy user in mind.`,
                appHostSite : "https://patrickw96.github.io/plan-ahead/"

            },

            {
                image : 4,
                projectName : "RandomPW",
                source : "images/pwgenerator.jpg",
                description : `This app is a random password generator. Choose how many characters and which characters to include then press "Generate" button. Once the password is printed
                to the screen click to the clipboard to copy.`,
                appHostSite : "https://patrickw96.github.io/password-generator/"
            }
        ];

        if (count == carouselImagesObject.image) {
            $('#carousel').attr(carouselImagesObject[counter]);
        }; 

        if (count > 5) {
            count = 0;
        }


        const carouselBox = $('#carousel');
        let counter = 0; 

        $('#nextBtn').click(nextBtnAdd);
        $('#prevBtn').click(prevBtnSubtract);


        carouselBox.attr(carouselImagesArray[counter]);
    };

    function nextBtnAdd() {
        counter++;

        if (count == carouselImagesObject.image) {
            $('#carousel').attr(carouselImagesObject[counter]);
        }; 

        if (count > 5) {
            count = 0;
        };
    };

    function prevBtnSubtract() {
        counter--;

        if (count == carouselImagesObject.image) {
            $('#carousel').attr(carouselImagesObject[counter]);
        }; 

        if (count > 5) {
            count = 0;
        };
    };
});