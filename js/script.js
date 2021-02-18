alert("به وب سایت گروه صنعتی آلفا خوش آمدید.")
$(document).ready(function () {
    'use strict';

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
alert("کلیه  حقوق  و  مزایای  این  سایت  متعلق  به  آقای عباس آرزومندی میباشد:)")
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 200) {
            $(".navbar").css({ "background-color": "#ffffff", "transition": "all 0.8s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
            $(".navbar-collapse").css("background-color", "transparent");
        } else {
            $(".navbar").css({ "background-color": "transparent", "box-shadow": "none" });
        }
    });

    var element = $(".text-affect");
    $(function () {
        element.typed({
            strings: ["گروه صنعتی آلفا", "سازنده تجهیزات", "صنایع غذایی","دارویی و شیمیایی","با بهره مندی از ","تکنولوژی روز  و","کادری مجرب و","حرفه ایی  میباشد "],
            loop: true,
            typeSpeed: 90
        });
    });
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });

    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    $("#review-slider").owlCarousel({
        items: 1,

        itemsDesktop: [1000, 1],

        itemsDesktopSmall: [979, 1],

        itemsTablet: [768, 1],

        pagination: true,

        navigation: false,

        slideSpeed: 1000,

        singleItem: false,

        autoplay: true,

        loop: true
    });
    
    $("#collapsibleNavbar").click(function(){
    $("#collapsibleNavbar").hide();
  });
    $("#colnav").click(function(){
    $("#collapsibleNavbar").toggle();
  });

});
