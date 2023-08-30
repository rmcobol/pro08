$(document).ready(function(){
    //메뉴작업
    $(".navi>li").on("mouseover",function(){
        $(this).find(".submenu").stop().slideDown(500);
    });

    $(".navi>li").on("mouseout",function(){
        $(this).find(".submenu").stop().slideUp(500);
    });

    // 이미지 슬라이드 작업
    var imgs=2;
    var now=0;

    start();

    function start(){
        $(".imgslide>a").eq(0).siblings().css({"margin-top":"-300px"});

        setInterval(function(){slide();},3000);
    }

    function slide(){
        now=now==imgs ? 0 : now+=1;

        $(".imgslide>a").eq(now-1).css({"margin-top":"-300px"});
        $(".imgslide>a").eq(now).css({"margin-top":"0px"});
    }



    // 팝업창
    $(".notice li:eq(0)").click(function () {
        $("#layer").addClass("active");
    });
    $(".btn").click(function () {
        $("#layer").removeClass("active");
    });
});