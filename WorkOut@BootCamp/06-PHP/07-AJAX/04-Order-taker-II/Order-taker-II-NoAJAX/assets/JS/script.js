/**
 * Author: Dius Montenegro
 * Date: 02/23/2024
 * Description: This jQuery script allows dynamic editing of paragraphs within forms. When a paragraph is clicked,
 * it replaces the parent form's content with a textarea and an "Update" input, facilitating text updates.
 */

$(document).ready(function(){
    $(document).on("click", "p", function () {
        $(this).parent("form").html(`
            <textarea name="description" id="text_input">${$(this).text()}</textarea>
            <input type="submit" value="Update">
        `);
    });
});

