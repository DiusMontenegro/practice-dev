const $ = function (selector) {
    const elements = document.querySelectorAll(selector);

    const obj = {
        click: function (callback) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', callback);
            }
            return obj;
        },
        hide: function (callback) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            return obj;
        },
        show: function (callback) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = '';
            }
            return obj;
        },
        toggle: function (callback) {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].style.display === 'none') {
                    elements[i].style.display = '';
                } else {
                    elements[i].style.display = 'none';
                }
            }
            return obj;
        },
    };
    return obj;
};

$('h1').click(function () {
    console.log('h1 is clicked');
    $('p').hide();
});

$('p').click(function() {
    console.log('p is clicked');
    $('p').hide();
});

$('#show_all').click(function() {
    console.log('#show_all is clicked');
    $('h1').show();
    $('p').show();
});

$('#hide_all').click(function(event) {
    console.log('event passed to the callback function is', event.type);
    $('h1').hide();
    $('p').hide();
});

$('#toggle').click(function() {
    console.log('toggle is clicked');
    $('p').toggle();
});

