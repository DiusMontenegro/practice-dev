$(document).ready(function () {
    $('img').hover(function() {
        let newSource = $(this).data('alt-src');
        $(this).attr('src', newSource);
    }, function () {
        $(this).attr('src',"./img/cookie.jpg");
    })
})