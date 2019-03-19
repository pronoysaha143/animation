/*-------Start Scroll----------*/
        $(window).ready(function() {
            
            AOS.init({

                duration: 2500

            });

        });
/*--------End Scroll-----------*/

/*-------Start Scroll to top----------*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 150) {
                $('.top_to_button').fadeIn().addClass('animated fadeInUp');
            } else {
                $('.top_to_button').fadeOut().removeClass('animated fadeInUp');
            }
        });
        $('.top_to_button').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
/*--------End Scroll to top-----------*/

/*-------Start smooth scroll js----------*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -20
            }, 1000);
            e.preventDefault();
        });
/*-------End smooth scroll js-----------*/
 