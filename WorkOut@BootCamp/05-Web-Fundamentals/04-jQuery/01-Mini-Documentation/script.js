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
    $("#slideDown").click(function(){
        $(".slideDown").slideDown();
    });
    $("#slideUp").click(function(){
        $(".slideUp").slideUp();
    });
    $("#slideToggle").click(function(){
        $(".slideToggle").slideToggle();
    });
    $("#fadeIn").click(function(){
        $(".fadeIn").fadeIn();
    });
    $("#fadeOut").click(function(){
        $(".fadeOut").fadeOut();
    });
    $("#addClass").click(function(){
        $(".addClass").addClass("bg-blue");
    });
    $("#before").click(function(){
        $(".before").before(`<img src="./img/shuriken.png" alt="madara" class="shuriken"></img>`);
    });
    $("#after").click(function(){
        $(".after").after(`<img src="./img/bullet.svg" alt="bullet" class="bullet"></img>`);
    });
    $("#append").click(function(){
        $(".append").append(`<span>HA</span>`);
    });
    $("#html").click(function(){
        $(".html").html(`<a href='#html'>I am a link inside the list</a>`);
    });
    $("#attr").click(function(){
        alert(`My "type" Attribute value is: ${$(this).attr("type")}`);
    });
    $("#val").click(function(){
        $('.val').val("Value is now set!");
    });
    $("#text").click(function(){
        $('.text').text("Send me Gcash 😂");
    });
});