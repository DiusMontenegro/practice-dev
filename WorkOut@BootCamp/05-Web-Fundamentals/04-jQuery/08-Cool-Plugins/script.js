$(document).ready(function () {
    //images
    $('img').click(function () {
        const imgName = $(this).attr('id');
        
        $(this).fadeOut(1000);
        $(`.${imgName}`).fadeOut(1000);
    })

    // Buttons
    $("button").hover(function() {
        $(this).css({cursor: 'pointer'})
        $('#reset, #newGame').click(function () {
            $('li, img').fadeIn();
        })
        $('#menu').on('click', function () {
            $('aside, .game').hide();
            $('.menu').fadeIn(200);
        })
        $('#back, #newGame').click(function () {
            $('.menu').hide();
            $('aside, .game').fadeIn(100);
        })
        $('#rate').on('click', function () {
            $('form').toggle();
            $('.comment-tab, h3').hide();
        })
    });

    // form
    $('form').submit(function () {
        const rating = $('#star').val()
        const comment = $('textarea').val()

        if (rating <= 2) {
            alert(`I'm sorry, I will do better. Please let me know your thoughts.`);
        } else {
            alert(`Thank you for rating me ${rating} stars!`);
        }
        $('.comment-tab').append(`<p>${comment}</p>`);
        $(this).hide();
        $('.comment-tab, h3').fadeIn();
        return false
    })
})