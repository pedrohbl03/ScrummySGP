$(document).ready(function() {


    $("#mobile-menu").find(".nav-item > .nav-link").on("click", function() {
        $(".offcanvas-btn-close").click();
    });



    $('.navbar-nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 80
        }, 500);
    });

    
});