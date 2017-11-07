$(function() {
    $(".phone-h").on('mouseover mouseleave', function(ev) {
        if (ev.type == "mouseover") {
            $(".phone_box").css('display', 'block');
        } else {
            $(".phone_box").css('display', 'none');
        }

    });
    $(".weixin-h").on('mouseover mouseleave', function(ev) {
        if (ev.type == "mouseover") {
            $(".weinxin_box").css('display', 'block');
        } else {
            $(".weinxin_box").css('display', 'none');
        }
    });
    $(".floor-list li").on("click", function() {
        $(this).children("span").children("i").css("display", "block");
        $(this).siblings().children("span").children("i").css("display", "none");
    });
    $(".img-list-nav li").on("click", function() {
        $(this).children("span").addClass("span-active");
        $(this).siblings().children("span").removeClass("span-active");
    });
});