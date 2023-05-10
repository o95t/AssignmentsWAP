
$("#start").on("click", function () {

    var animation = $('#animation').val();
    var size = $('#size').val();
    // Log the selected value to the console
    console.log(animation);
    alert(size + animation + "  Handler for `click` called.");
});