$(document).ready(function () {

    // --------preloader -----------------
    // $('main').hide();
    // setTimeout(function () {
    $('#preloader').fadeOut(500);
    //     $('main').show()
    // }, 3000)

    $('.top_scroll').hide();

    $(window).scroll(function () {
        h = $(window).scrollTop();
        if (h > 140) {
            $('#header-sticky').addClass('top_fixed');
            $('.top_scroll').fadeIn(500);
            $('.top_scroll').addClass('transform')

        }
        else {
            $('#header-sticky').removeClass('top_fixed');
            $('.top_scroll').fadeOut(500)
            $('.top_scroll').removeClass('transform')


        }
    })

    $('.top_scroll').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 550)
    })


    $('.mo-sub-menu').hide();
    $('.mo-peta-menu').hide();

    $('.mo-main-menu li a').click(function () {
        $(this).siblings('.mo-sub-menu').slideToggle();
    })

    $('.mo-sub-menu li a').click(function () {
        $(this).siblings('.mo-peta-menu').slideToggle();
    })

    $('.mo-main-menu li a i').on("click", function () {
        $(this).toggleClass('fa-plus fa-minus');
    })

   
    // // --------------gallery---------
    // $('.gallery__filter-button button').on('click', function () {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');

    // });
    var cnt_tab = 0;
    $('.tab-pane-2').hide();
    $('.tab-button , .button-1 ').on('click', function () {

        $('sav .circle').hover('disable', true)
        $('.tab-button .button-1 ').removeClass('btn-active');
        $(this).addClass('btn-active').css('stroke-dashoffset' ,'301.59px');
 

        if (cnt_tab == 1) {
            $('.tab-pane-1').fadeIn();
            $('tab-pane-2').hide();
            cnt_tab = 0;
        }
        else {
            $('.tab-pane-2').fadeIn();
            $('.tab-pane-1').hide();
            cnt_tab = 1;
        }



    })




    $("#banner").owlCarousel({
        items: 1,
        loop: true,
        // autoplay:true,
        // autoplayTimeout:7000,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
    });


    $("#testimonial").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },

            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });


    $("#ab-slidar").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },

            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    });




    new WOW().init();

    var owl = $('#banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();

    });
});








$(document).ready(function () {

    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    // ---------fancy box ------------

    // $("a.image-popups").fancybox({
    //     'transitionIn': 'elastic',
    //     'transitionOut': 'elastic',
    //     'speedIn': 600,
    //     'speedOut': 200,
    //     'overlayShow': false
    // });


});
