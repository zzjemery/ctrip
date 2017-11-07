$(function() {
    var d1 = $('#drop-list1 dt'),
        d1l = $('#drop-list1 .list-group'),
        input = $('.serch-body .input input'),
        hotsearch = $('.hot-search'),
        close = $('.close');
    d1.hover(function() {
        $(this).addClass('hover');
        $(this).css('color', 'blue');
        d1l.addClass('show')
    }, function() {
        $(this).toggleClass('hover');
        $(this).css('color', '#333');
        d1l.toggleClass('show')
    })

    d1l.hover(function() {
        $(this).addClass('show');
        d1.addClass('hover');
    }, function() {
        $(this).toggleClass('show');
        d1.toggleClass('hover');
    })
    input.focus(function() {
        $(this).attr('value', '');
        $(this).css('background', '#F1F9FF');
        hotsearch.addClass('show');
    });
    close.on('click', function() {
        $(this).parent().removeClass('show');
        if (input.html() == "") {
            input.attr('value', '请输入目的地、主题或关键字');
            input.css('background', 'white');
        }
    })
    var asiderow = $('.content1 .row'),
        dest = $('.dest'),
        destp = $('.dest ul li p');
    asiderow.hover(function() {
        var num = $(this).index();
        $(this).css({
            border: "1px solid #666",
            'border-width': '1px 0 1px 0',
        })
        dest.eq(num).addClass('show');
    }, function() {
        var num = $(this).index();
        $(this).css({
            border: "1px solid #fff",
            'border-width': '1px 0 1px 0'
        });
        dest.eq(num).removeClass('show');
    })
    dest.hover(function() {
        $(this).addClass('show');
    }, function() {
        $(this).removeClass('show');
    })
    var vanescroll = $('#vanescroll');
    // wavescroll.chilren()
    var ulcon = $('.ulcon');
    ulcontitle = $('.ulcon *');
    ulcon.children().hover(function() {
        $(this).css({
            border: '2px solid #FF9813'
        })
    }, function() {
        $(this).css({
            border: '2px solid #fff'
        })
    });
    ulcontitle.attr('title', '泰国曼谷+芭提雅+沙美岛7日5晚半自助游(4钻)·沙美岛·2晚曼谷5');
    var ul1 = $('.ul1'),
        dot1 = $('.dot1');
    dot1.children().on('click', function() {
        var num = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        ul1.eq(num).addClass('show').siblings().removeClass('show');
    })
    var ul2 = $('.ul2'),
        dot2 = $('.dot2');
    dot2.children().on('click', function() {
        var num = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        ul2.eq(num).addClass('show').siblings().removeClass('show');
    })
    var titleoption1 = $('main .product-travel .title dl dd');
    titleoption1.on('click', function() {
        $(this).addClass('current').siblings().removeClass('current');
    });
    var titleoption2 = $('main .demo-product .title dl dd');
    titleoption2.on('click', function() {
        $(this).addClass('current').siblings().removeClass('current');
    })
    var vanearrayleft = $('travel_vane_arrleft'),
        vanearrayright = $('travel_vane_arrright'),
        vanescrollbox = $('vanescroll');
    vanearrayleft.on('click', function() {
        vanescrollbox.css('left', '350px')
    })
})