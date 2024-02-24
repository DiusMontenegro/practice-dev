/**
 * Programmer : Dius Montenegro
 * DATE : 02/24/2024
 *
 * DOCU: JQuery (AJAX) responsible for automatically submitting and rendering real-time data.
*/

$(document).ready(function(){

    // AJAX function requesting data from the given url from the action.
    $(document).on('submit', 'form', function () {
        $.get($(this).attr('action'), $(this).serialize(), function(data) {
            $('#data').html(data);
        })
        return false;
    })

    // function to be triggered when the select value is changed
    $(document).on('change', 'select', function () {
        $(this).parent('form').submit();
    })

    // function to be triggered when the input value is changed
    $(document).on('keyup', 'input', function () {
        $(this).parent('form').submit();
    })

    // default submission when the document is ready
    $('form').submit();
});
