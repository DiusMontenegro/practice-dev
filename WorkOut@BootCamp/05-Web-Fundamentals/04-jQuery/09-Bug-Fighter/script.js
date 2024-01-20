$(document).ready(function () {
    //Marks the selected character
    function highlight(element) {
        element.siblings().removeClass('chosen');
        element.addClass('chosen');
    }
    //Save the chosen character as default, and display in header text
    function saveSelection(element, name, animated_img) {
        var user = element.parent().parent().attr('id'); //get section's id (user1 or user2)
        $('#' + user + '_default').val(animated_img);
        $('#' + user + '_name').text(name); //update the top text (Player1 vs. Player2)
    }
    /*------------------------------------Action Listeners------------------------------------*/
    //Display hovered character. When mouse out, display default.
    $('nav > img').hover(
        function () {
            $(this).parent().siblings('.picked').attr('src', $(this).attr('data-animated-img'));
        },
        function () {
            var user = $(this).parent().parent().attr('id');
            $('#' + user + ' > .picked').attr('src', $('#' + user + '_default').val());
        }
    );
    //Trigger update when new character is selected
    $('nav > img').click(function () {
        saveSelection($(this), $(this).attr('name'), $(this).attr('data-animated-img'));
    });
    //Display the names of chosen characters
    $('button').click(function () {
        var character1 = $('#user1_name').text();
        var character2 = $('#user2_name').text();
        alert('Battle begins with ' + character1 + ' and ' + character2 + '!');
    });
})