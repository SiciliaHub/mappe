$(document).ready(function(){ 
  $.get("menu.html", function(data) {
    $("#header").html(data);
  });
}); 