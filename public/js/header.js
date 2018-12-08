$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function (res) {
            $(res).replaceAll("#header");
        }
    })
})