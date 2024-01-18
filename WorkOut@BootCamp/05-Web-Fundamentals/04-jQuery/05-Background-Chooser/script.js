$(document).ready(function(){
    $('#main_box').click(function(){
        $(this).css({backgroundImage: 'none'});
        $(this).children().css({border: "none"});
    })
    $('.mini_boxes').click(function(event){
        let thisImg = $(this).attr('src')
        
        event.stopPropagation();
        $(this).siblings().css({border: "none"});
        $(this).css({border: "2px solid yellow"});
        $(this).parent().css({backgroundImage: `url(${thisImg})`})
    })
 });    