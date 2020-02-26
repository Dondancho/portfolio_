$(function() {



    /* filter 
    =====================*/
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });
        }


    });

    filter.on("click", function() {
    let getElem = document.getElementsByClassName('slick-slide');
    let findElem = getElem.getElementsByClassName('hide');
    findElem.style.display = 'none';
    });
/*    if ($("portfolio__col").hasClass("hide")) {
        $("slick-slide").css("display", "none;");
    }*/




    /* modal 
    =====================*/
    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 100);

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();

    });


    // /* slider https://kenwheeler.github.io/slick/
    // =====================*/
    // $('[data-slider="slick"]').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     fade: true,
    //     arrows: false,
    //     dots: true
    // });

    // $(".slickPrev").on("click", function() {
    //     event.preventDefault();

    //     let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    //     currentSlider.slick("slickPrev")
    // });

    // $(".slickNext").on("click", function() {
    //     event.preventDefault();

    //     let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    //     currentSlider.slick("slickNext")
    // });


    /* mobile nav
    =====================*/

    $("#navToggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("show");
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        /*Если сделали скролл на 100px задаём новый класс для header*/
        if (height > 1) {
            $('header').addClass('active');
        } else {
            /*Если меньше 100px удаляем класс для header*/
            $('header').removeClass('active');
        }
    });

    const slider = $(".main-slider");
    slider
        .slick({
            dots: false,
            infinite: false,
            arrows: false,
            adaptiveHeight: true,
            vertical: true,
            verticalSwiping: true,
        });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    const slider1 = $(".works__nav");
    slider1
        .slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/backCat.svg" alt="">',
            nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/nextCat.svg" alt="">',
        });

    const slider2 = $(".portfolio");
    slider2
        .slick({
            dots: false,
            infinite: false,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true
        });

});