$(function() {
    $(".unslider-nav li").on("click", function() {
        $(this).addClass("unslider-active").siblings().removeClass("unslider-active");
        console.log($(this).index());
        var left = $(".ct-unslide-list").width() * 0.2 * $(this).index();
        $(".ct-unslide-list").animate({ left: -left }, 600);
    });
});