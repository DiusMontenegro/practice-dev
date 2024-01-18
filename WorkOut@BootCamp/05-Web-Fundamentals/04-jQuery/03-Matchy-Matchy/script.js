$(document).ready(function () {
    $('img').on('click', function () {
        let altSrc = $(this).data('alt-src');
        let currentSrc = $(this).attr('src');
        console.log(`My data-alt-src is: ${altSrc}`)
        $(this).attr('src', altSrc);
        $(this).data('alt-src', currentSrc);
    });
})