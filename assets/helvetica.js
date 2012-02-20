$(document).ready(function(){
  
  var defaultval = $("#result-q").val();

  
  $("#result-q").click(function(){
    if ($(this).val() == defaultval ) {
      $(this).val('');
      $(this).parent("form").addClass("activesearch");
    }
  });
});