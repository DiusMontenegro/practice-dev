$(document).ready(function () {

    $( ".datepicker" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });

    // Create chart.
    $("#chartContainer1").CanvasJSChart(options1);

});
