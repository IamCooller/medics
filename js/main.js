$(document).ready(function() {
    $('.about__left-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<svg class="prevArrow" width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">       <path d="M17 1L2 13.0592L17 25.1184" stroke="white" stroke-width="2"/> <path d="M17 1L2 13.0592L17 25.1184" stroke="white" stroke-width="2"/></svg>  ',
        nextArrow: '<svg class="nextArrow" width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 1L16 13.0592L1 25.1184" stroke="white" stroke-width="2"/> <path d="M1 1L16 13.0592L1 25.1184" stroke="white" stroke-width="2"/> </svg> ',
        fade: true,
        asNavFor: '.about__left-bottom'
    });
    $('.about__left-bottom').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.about__left-top',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    $('.customer__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<svg width="18" class="prevArrow" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 1L2 16L17 31" stroke="#CFE3F6" stroke-width="2"/>  </svg>  ',
        nextArrow: '<svg width="18" class="nextArrow" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M1 1L16 16L1 31" stroke="#CFE3F6" stroke-width="2"/>  </svg>    ',
        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true
                }
            },

        ]
    });





    $('#checkboxLeft').click(function(e) {
        $('.header__mobile-right').toggleClass('opacity');
        $("body").toggleClass("Error");
    });
    $('#checkboxRight').click(function(e) {
        $('.header__mobile-left').toggleClass('opacity');
        $("body").toggleClass("Error");
    });
    $('.lookMore').click(function(e) {
        $('.aboutText').css('overflow', 'visible');
        $('.aboutText').css('max-height', '100%');
        $('.lookMore').hide();
    });

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.features__list').slick({
                slidesToShow: 1,
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
                centerMode: true,
                mobileFirst: true

            });
            $('.doctors__list').slick({
                slidesToShow: 1,
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,

                adaptiveHeight: true
            });

        };
    }



    var x = window.matchMedia("(max-width: 990px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

});