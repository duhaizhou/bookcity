$(function(){
    $("<link rel='stylesheet' href='css/shortcut.css'>").appendTo("head");
    $.ajax({
        url:"shortcut.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#shortcut");
        }
    })
})