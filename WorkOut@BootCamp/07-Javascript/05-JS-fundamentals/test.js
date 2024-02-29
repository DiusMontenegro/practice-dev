const $documentReady = function (callback) {
    document.addEventListener('DOMContentLoaded', callback);
};

const $query = function (selector) {
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
        toggle: function () {
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

$documentReady(function () {

    $query('h1').click(function () {
        console.log('h1 is clicked');
        $query('p').hide();
    });

    $query('p').click(function() {
        console.log('p is clicked');
        $query('p').hide();
    });

    $query('#show_all').click(function() {
        console.log('#show_all is clicked');
        $query('h1').show();
        $query('p').show();
    });

    $query('#hide_all').click(function(event) {
        console.log('event passed to the callback function is', event.type);
        $query('h1').hide();
        $query('p').hide();
    });

    $query('#toggle').click(function() {
        console.log('toggle is clicked');
        $query('p').toggle();
    });
});
