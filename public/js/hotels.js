$(function() {
    var tabschoose = $('.tabs_choose'),
        searchcontent = $('.search-box .content');
    tabschoose.children().on('click', function() {
        var num = $(this).index();
        searchcontent.eq(num).removeClass('display-n').siblings().addClass('display-n');
    });
    var slidertop = $('.slider-top'),
        slidertopdiv = slidertop.children('div'),
        slidertopp = slidertop.children('p');
    var num = 1;
    var timeout = setInterval(function() {
        var temp = num % 8;
        slidertopdiv.eq(temp).removeClass('display-n').siblings('div').addClass('display-n');
        slidertopp.children().eq(temp).addClass('current').siblings().removeClass('current');
        num++;
        console.log(temp);
    }, 3000);
    slidertopp.children().hover(function() {
        num = $(this).index();
        slidertopdiv.eq(num % 8).removeClass('display-n').siblings('div').addClass('display-n');
        $(this).addClass('current').siblings().removeClass('current');
    })
})