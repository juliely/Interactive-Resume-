
$("img").hide();
// when the button is pressed:

$("button").click( function () {

  $(this).hide();
  $("img").show();

});

$("img").click( function() {
  $(this).hide();
  $("button").show();
});
