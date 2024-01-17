$(document).ready(function () {
    $('img').click(function () {
        $(this).css({display: "none"});
    })
    $('button').click(function () {
        $("img").show()
    })
})