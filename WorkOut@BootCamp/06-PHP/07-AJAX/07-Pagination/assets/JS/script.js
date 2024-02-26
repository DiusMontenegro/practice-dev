/**
 * Date: 02/26/2024
 * Programmer: Dius Montenegro
 *
 * This jQuery script handles pagination and dynamic content loading for a table of products.
 */

$(document).ready(function(){

    /**
     * Rounds up a number to the nearest integer.
     * @param {number} number - The number to be rounded up.
     * @returns {number} - The rounded-up number.
     */
    function roundUp(number) {
        if (number % 1 === 0) {
            return number;
        } else {
            return number - (number % 1) + 1;
        }
    }

    let page_number = 1;

    // Handle form submission for pagination and dynamic content loading
    $(document).on('submit', 'form', function () {
        $.get($(this).attr('action'), $(this).serialize(), function(data) {

            const rows_per_page = 5;
            const total_page = roundUp(data.products.length / rows_per_page);

            let start_index = (page_number - 1) * rows_per_page;
            let end_index = start_index + (rows_per_page - 1);
            end_index = (end_index >= data.products.length) ? data.products.length - 1 : end_index;

            // Clear existing content
            $('#data').empty();
            $('#pagination_links').empty();

            if (page_number > 1) {
                $('#pagination_links').append(`<a id="previous" href="">◀️</a>`);
            }

            let active = '';
            for (let i = 0; i < total_page; i++) {
                if (i === page_number - 1) {
                    active = 'active';
                } else {
                    active = '';
                }

                $('#pagination_links').append(
                    `<a href="" id="${i + 1}" class="page_index ${active}">${i + 1}</a>`
                );
            }

            if (page_number < total_page){
                $('#pagination_links').append(`<a id="next" href="">▶️</a>`);
            }

            // Append new rows
            for (let i = start_index; i <= end_index; i++) {
                $('#data').append(`
                    <tr>
                        <td> ${data.products[i].name} </td>
                        <td> ${data.products[i].inventory} </td>
                        <td> ${data.products[i].price} </td>
                        <td> ${data.products[i].created_at} </td>
                    </tr>
                `);
            }

            if (data.products.length > 0 ) {
                $("#pagination_details").html(`<p>Showing ${start_index + 1} to ${end_index + 1} out of ${data.products.length} entries </p>`)
            } else {
                $("#pagination_details").html(`<p> No results found </p>`)
            }
        }, "json");

        return false;
    });

    // Handle click on "Next" button
    $(document).on('click', "#next", function () {
        page_number++;
        $('form').submit();
        return false;
    });

    // Handle click on "Previous" button
    $(document).on('click', "#previous", function () {
        page_number--;
        $('form').submit();
        return false;
    });

    // Handle click on page index
    $(document).on('click', ".page_index", function () {
        page_number = parseInt($(this).attr('id'));
        $('form').submit();
        return false;
    });

    // Handle change in select input
    $(document).on('change', 'select', function () {
        $(this).parent('form').submit();
    });

    // Handle keyup event on input
    $(document).on('keyup', 'input', function () {
        $(this).parent('form').submit();
    });

    // Initial form submission on document ready
    $('form').submit();
});
