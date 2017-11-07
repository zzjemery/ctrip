(function() {
    $("#sougaotie").on("click", function() {
        $(this).toggleClass("i-pos");
    });
    $("#dot li").on("mouseover", function() {
        $(this).toggleClass("i-pos");
        $("#trains-slide li:eq(" + $(this).index() + ")").css("display", "block").siblings().css("display", "none");
    });
})($)