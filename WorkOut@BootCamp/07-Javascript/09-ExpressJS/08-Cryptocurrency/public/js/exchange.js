$(document).ready(function () {
    function roundUp(number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return number - (number % 1) + 1;
        }
    }

    let page_number = 1;
    let rows_per_page = 10;

    let API = '/exchanges_API';
    let readyData = {};

    $.get(
        API,
        function (data) {
            readyData = data;
            paginate();
        },
        'json'
    );

    function paginate() {
        const total_page = roundUp(readyData.length / rows_per_page);

        let start_index = (page_number - 1) * rows_per_page;
        let end_index = start_index + (rows_per_page - 1);
        end_index =
            end_index >= readyData.length ? readyData.length - 1 : end_index;

        // Clear existing content
        $('#data_container').empty();
        $('#pagination').empty();

        if (page_number > 1) {
            $('#pagination').append(`<button id="prev">Previous 10</button>`);
        }

        $('#pagination').append(`<button id="all">List Top 100</button>`);

        if (page_number < total_page) {
            $('#pagination').append(`<button id="next">Next 10</button>`);
        }

        // Append new rows
        for (let i = start_index; i <= end_index; i++) {
            if (i < 100) {
                $('#data_container').append(`<p>${readyData[i].id}</p>`);
            } else {
                $('#data_container').append(`<p>Limit Reached !!!</p>`);
                $('#next').remove();
                break;
            }
        }
    }

    $(document).on('click', '#next', function () {
        page_number++;
        paginate();
        return false;
    });

    $(document).on('click', '#prev', function () {
        page_number--;
        paginate();
        return false;
    });

    $(document).on('click', '#all', function () {
        page_number = 1;
        rows_per_page = 100;

        paginate();
        $('#pagination').append(`<button id="default">Back</button>`);
        return false;
    });

    $(document).on('click', '#default', function () {
        page_number = 1;
        rows_per_page = 10;
        paginate();
        return false;
    });
});
