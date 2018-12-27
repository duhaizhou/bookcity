$(function(){
    $("<link rel='stylesheet' href='css/shortcut.css'>").appendTo("head");
    $.ajax({
        url:"shortcut.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#shortcut");
        }
    })
    
});
//添加选择所在省份并显示在标题栏的功能

$(window).on("load",function(){
   
    $("#ttbar-mycity .dd").on("click","a",function(){
        var $a=$(this);
        $a.parent().parent().find(".selected").removeClass("selected");
        $a.addClass("selected");
        $a.parent().parent().prev().find("[data-id]")
        .attr({
            "data-id":$a.attr("data-id"),
            "title":$a.html()
        })
        .text($a.html())
   })
   
})

