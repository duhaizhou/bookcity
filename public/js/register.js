$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    $("<link rel='stylesheet' href='css/footer.css'>").appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
            $("#logo").siblings().remove();
            $("<p>欢迎注册</p>").appendTo("header");
            
        }
    });
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#footer");
            $(".copyright").siblings().remove();
            $(".copyright").children(":last").remove();
            $(".copyright").find(".text").siblings().remove();
            $(".copyright").find(".text").parent().siblings().remove();

        }
    })
    
    
});