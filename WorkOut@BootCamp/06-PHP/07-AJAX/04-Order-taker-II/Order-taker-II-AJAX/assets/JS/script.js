/**
 * Author: Dius Montenegro
 * Date: 02/23/2024
 *
 * Description: This jQuery script enhances user interaction by allowing dynamic editing of paragraphs within forms.
 */

$(document).ready(function(){

    // Replace paragraph with a textarea on click
    $(document).on("click", "p", function () {
        $(this).parent("form").html(`
            <textarea name="description" id="text_input">${$(this).text()}</textarea>
        `);
    });

    // Submit form asynchronously and update cards container on form submission
    $(document).on("submit", "form", function() {
        const form = $(this);

        // Send POST request to the form's action URL with serialized form data
        $.post(form.attr('action'), form.serialize(), function (data) {
            // Replace content of '.cards_container' with the updated data
            $('.cards_container').html(data);
        });

        return false; // Prevent default form submission behavior
    });

    // Automatically submit form on textarea change
    $(document).on("change", "textarea", function() {
        $(this).parent('form').submit();
    });

    // Auto-submit all forms on document ready (initial load)
    $('form').submit();
});
