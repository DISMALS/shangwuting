"use stract";
$(document).ready(function () {
//选项卡
function tabS(type,clickBtn, showMain, siblingsC) {
    var abstractMenuA = $(clickBtn);
    var MTextOne = $(showMain);
    abstractMenuA.bind(type, function () {
        var this_ = $(this);
        if (this_.hasClass("on")) {
            MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
        } else {
            this_.addClass("on").siblings(siblingsC).removeClass("on");
            MTextOne.eq(abstractMenuA.index(this)).show().siblings().hide();
        }
    });
}
tabS("mouseenter", "ul.oneTabTit li", "dl.oneTabMainC", "li");
tabS("mouseenter", "ul.twoTabTit li", "div.twoLListM", "li");
tabS("mouseenter", "ul.fourTabTit li", "div.fourTabC", "li");
tabS("mouseenter", "ul.tabThreeT li", "ul.tabThreeMm", "li");
tabS("mouseenter", "ul.tabThreeT li", "ul.tabFourMm", "li");
tabS("mouseenter", "ul.tabFiveTit li", "div.tabFiveM", "li");
tabS("mouseenter", "ul.tabSixTit li", "ul.tabSixM", "li");
tabS("mouseenter", "ul.tabSevenT li", "div.tabSevenM", "li");
tabS("mouseenter", "ul.tabThreeT li", "ul.twoEvelList", "li");


//导航栏鼠标滑过显示下拉菜单
$(".menuLi").bind({
    mouseenter: function () {
        var this_ = $(this);
        this_.addClass("on").find(".pullDownMenu").slideDown(150, function () {
            this_.find(".pullDownMenu a").click(function () {
                this_.removeClass("on").find(".pullDownMenu").stop(true).slideUp(150);
            });
        });
        this_.siblings().removeClass("on").find(".pullDownMenu").stop(true).slideUp(150);
    },
    mouseleave: function () {
        var this_ = $(this);
        this_.removeClass("on").find(".pullDownMenu").stop(true).slideUp(10);
    }
});


//鼠标滑过导航下拉菜单
$(".twoLeftMore").bind({
    mouseenter: function () {
        $(this).children(".twoLMore").addClass("nors").removeClass("nor");
        $(this).find(".moreList").slideDown(150);
    },
    mouseleave: function () {
        $(this).children(".twoLMore").addClass("nor").removeClass("nors");
        $(this).find(".moreList").slideUp(150);
    }
});




//右侧浮动显示
$(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop < 300) {
        $(".popMenu").hide(300);
    } else if (winTop >= 300) {
        $(".popMenu").show(300, function () {
            $(".backTop").click(function () {
                $(window).scrollTop(0);
            });
        });
    }
});


//公共服务切换
$(".serveList ul li:even").css("background-color", "#f8f8f8");
$(".serveList ul:first").css("display", "block");
$(".serveTab a").each(function (index) {
    $(this).click(function () {
        $(".serveTab a.on").removeClass("on");
        $(this).addClass("on");
        $(".serveList>ul:eq(" + index + ")").show().siblings().hide();
    })
})

//判断左侧滚动内容的高度
var columList = $(".columList").height();
if (columList >= 400) {
    $(".columList").parent().attr("id", "scrollMFive");
}
    //自定义滚动5
$("#scrollMFive").slimScroll({ alwaysVisible: true, railVisible: false, height: '400px' });

});