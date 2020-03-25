$(document).ready(function(){
  $("#h").click(function(){
    $("#p1").hide();
  });
  $("#s").click(function(){
    $("#p1").show();
  });
});

$("h6").mouseenter(function(){
  $(this).css("background-color", "red");
});
$("h6").mouseleave(function(){
  $(this).css("fontSize", "25px");
});