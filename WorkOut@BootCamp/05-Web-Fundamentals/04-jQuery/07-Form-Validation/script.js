$(document).ready(function () {
    $('#date').datepicker({ showAnim: 'fold' });
    $('#submit').click(function () {
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const date = $('#date').val();
        const dateToday = new Date();
        const enteredDate = new Date(date);

        if (!firstName) {
            alert(`First Name Can't be blank.`);
        } else if (!lastName) {
            alert(`Last Name Can't be blank.`);
        } else if (!date || enteredDate < dateToday) {
            alert('Please enter a valid date.');
        } else if (firstName && lastName && date) {
            alert(
                `Success, ${firstName} ${lastName}! Your vaccination is reserved on ${date}.`
            );
        }
        $('form').submit(function () {
            return false;
        });
    });
});
