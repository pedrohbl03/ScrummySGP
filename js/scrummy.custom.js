$(document).ready(function() {


    $("#mobile-menu").find(".nav-item > .nav-link").on("click", function() {
        $(".offcanvas-btn-close").click();
    });
});