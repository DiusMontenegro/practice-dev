/**
 * Document Ready Function
 *
 * This jQuery script is executed when the document is fully loaded. It handles the dynamic
 * loading of order-related content using AJAX requests.
 *
 * Programmer: Dius Montenegro
 * Date: 02/22/2024
 */

$(document).ready(function () {

    // Load initial orders HTML content on page load
    $.get("orders/index_html", function (data) {
        $('#orders').html(data);

        // Set up form submission handling
        $('form').submit(function () {

            // Send an AJAX POST request to create a new order
            $.post("orders/create_order", $(this).serialize(), function (data) {
                // Update the 'orders' container with the updated content
                $('#orders').html(data);
            })

            // Prevent the default form submission behavior
            return false;
        })
    })

});

