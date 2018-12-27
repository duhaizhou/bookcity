
$(function(){
    function slider(a){
    var $current=$("#book_slider_3 .current");
        $current.removeClass("current");
        if(a==1){
            if($current.next().length==0){
                $current.parent().children(":first-child").addClass("current");
            }else{
                $current.next().addClass("current");
            }
        }else{
            if($current.prev().length==0){
                $current.parent().children(":last-child").addClass("current");
            }else{
                $current.prev().addClass("current");
            }
        }
    }
    var timer=setInterval(function(){slider(1)},4000);
    $("#book_slider_3").on("mouseenter",function(){
        clearInterval(timer);
    })
    .on("mouseleave",function(){
        timer=setInterval(function(){slider(1)},4000);
    });
    $(".tab_nav").on("click",".nav_item",function(){
        $("#book_slider_3 .current").removeClass("current");
        var id=$(this).attr("data-tab-idx");
        $(`#book_slider_3 [data-tab-idx=${id}]`).addClass("current");
    });
    $(".tab_next").on("click",function(){slider(1)});
    $(".tab_prev").on("click",function(){slider()});
    $("#top-banner-close").on("click",function(){
        $(this).parent().hide();
    })
    //为book_new添加鼠标悬停在某个分类上显示该分类具体内容的功能
    $(".book_new .tab-nav").on("mouseenter",".nav-item",function(){
        var $navItem=$(this);
        if(!$navItem.hasClass("current")){
            var $idx=$navItem.attr("data-tab-idx");
            $(".book_new").find(".current").removeClass("current")
            .siblings(`[data-tab-idx=${$idx}]`).addClass("current");
        }
    }); 
    console.log($("#book_elevator_26"));
    //为book_rank添加鼠标进入某条显示其具体内容的功能
    $(".book_rank .p-item").on("mouseenter",function(){
        var $item=$(this);
        $item.addClass("current")
        .siblings(".current").removeClass("current");
    });
    //实现右侧楼梯功能
    $(window).scroll(function(){
        var $scrollTop=$(document.documentElement.scrollTop);
        var idx=0;
        switch(true){
            case $scrollTop[0]>2960:idx=5;
            break;
            case $scrollTop[0]>2360:idx=4;
            break;
            case $scrollTop[0]>1760:idx=3;
            break;
            case $scrollTop[0]>1200:idx=2;
            break;
            case $scrollTop[0]>800:idx=1;
            break;
            case $scrollTop[0]>500:idx=0;
            break;
        }

        if($scrollTop[0]>500){ 
           
            $(".book_elevator_item_btn_active").removeClass("book_elevator_item_btn_active");
            $("#book_elevator_26").css("display","block")
            .find(`a:eq(${idx})`).addClass("book_elevator_item_btn_active");

        }else{
            $("#book_elevator_26").css("display","none");
        }
        
       
    })
})







