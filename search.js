$(document).ready(function () {
    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            //Data toggle
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});
