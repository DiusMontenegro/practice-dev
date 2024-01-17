document.addEventListener("DOMContentLoaded", function() {
    $("#click").click(function(){
        alert("Clicked!");
    });
    $("#hide").click(function(){
        $(".hide").hide();
    });
    $("#show").click(function(){
        $(".show").show();
    });
    $("#toggle").click(function(){
        $(".toggle").toggle();
    });
    

});