$(document).ready(function () {
    // pulldown menu
    $(".outer-menu").hover(
        function () {
            $(this).find(".inner-menu").css("display", "block");
        },
        function () {
            $(this).find(".inner-menu").css("display", "none");
        }
    );
});
