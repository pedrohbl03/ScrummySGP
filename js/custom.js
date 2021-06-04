(function($) {
    "use strict";
    $(document).ready(function() {
        // $("select").niceSelect();

        /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
            AOS Animation Activation
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
        AOS.init();
        window.addEventListener("load", AOS.refresh);

        /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
            Bootstrap Mobile Megamenu Support
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
            if (!$(this).next().hasClass("show")) {
                $(this)
                    .parents(".dropdown-menu")
                    .first()
                    .find(".show")
                    .removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass("show");

            $(this)
                .parents("li.nav-item.dropdown.show")
                .on("hidden.bs.dropdown", function(e) {
                    $(".dropdown-submenu .show").removeClass("show");
                });

            return false;
        });

        /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
               Sticky Header
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                $(".site-header--sticky").addClass("scrolling");
            } else {
                $(".site-header--sticky").removeClass("scrolling");
            }
            if (
                document.body.scrollTop > 700 ||
                document.documentElement.scrollTop > 700
            ) {
                $(".site-header--sticky.scrolling").addClass("reveal-header");
            } else {
                $(".site-header--sticky.scrolling").removeClass("reveal-header");
            }
        }



        /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
               Prcing Dynamic Script
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
        // Table BTN Trigger
        $('#table-price-value .toggle-btn').on("click", function(e) {
            console.log($(e.target).parent().parent().hasClass("monthly-active"));
            $(e.target).toggleClass("clicked");
            if ($(e.target).parent().parent().hasClass("monthly-active")) {
                $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
            } else {
                $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
            }
        });

        $("[data-pricing-trigger]").on("click", function(e) {
            $(e.target).addClass("active").siblings().removeClass("active");
            var target = $(e.target).attr("data-target");
            console.log($(target).attr("data-value-active") == "monthly");
            if ($(target).attr("data-value-active") == "monthly") {
                $(target).attr("data-value-active", "yearly");
            } else {
                $(target).attr("data-value-active", "monthly");
            }
        });

















        /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
               Smooth Scroll
        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

        $(".goto").on("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $("html, body").animate({
                        scrollTop: $(hash).offset().top,
                    },
                    2000,
                    function() {
                        window.location.hash = hash;
                    }
                );
            } // End if
        });





        $("a.popup").fancybox({
            // 'transitionIn'	:	'elastic',
            // 'transitionOut'	:	'elastic',
            // 'speedIn'		:	600, 
            // 'speedOut'		:	200, 
            // 'overlayShow'	:	false
        });

        /*---------- Counter Up ------------ */

        if ($.fn.counterUp) {
            $('.counter').counterUp({
                delay: 20,
                time: 2000
            });
        }

        // $(".accordion2-single-accordion").on("click",function() {
        //   $(this).addClass("current-collapse").next(".accordion2-single-accordion").removeClass("");
        // });

        // var $curr = $( "#start" );
        // $curr.addClass( "current-collapse" );
        // $( "button" ).click(function() {
        //   $curr = $curr.prev();
        //   $( "accordion2-single-accordion" ).css( "background", "" );
        //   $curr.toggleClass( "current-collapse" );
        //   $curr = $curr.next();
        //   $( "accordion2-single-accordion" ).css( "background", "" );
        //   $curr.removeClass( "current-collapse" );
        // });



    });





    // Table BTN Trigger
    // $('#l5-pricing-btn .toggle-btn').on("click",function(e){
    //   console.log($(e.target).parent().parent().hasClass("monthly-active"));
    //   $(e.target).toggleClass("clicked");
    //    if($(e.target).parent().parent().hasClass("monthly-active")){
    //          $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
    //    }else{
    //          $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
    //    }
    // })

    // $("[data-pricing-trigger]").on("click", function(e) {
    //   $(e.target).addClass("active").siblings().removeClass("active");
    //   var target = $(e.target).attr("data-target");
    //   console.log($(target).attr("data-value-active") == "monthly");
    //   if ($(target).attr("data-value-active") == "monthly") {
    //       $(target).attr("data-value-active", "yearly");
    //   } else {
    //       $(target).attr("data-value-active", "monthly");
    //   }
    // })


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });


    $('.navbar-nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 80
        }, 500);
    });

}(jQuery));


