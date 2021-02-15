alert("به سایت. گروه صنعتی آلفا خوش آمدید")
$(document).ready(function () {
    'use strict';

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
alert("CREATE BAY:ABBAS AREZOMANDI")
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
            strings: ["Designer", "Developer", "Freelancer"],
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
        type: 'imag@e',
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
