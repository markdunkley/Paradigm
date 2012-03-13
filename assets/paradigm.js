$(document).ready(function() { 
		 
	$("a.fancy_image").fancybox(); 

	defaultValue = $("#q").val();

	$('#q').click(function() {
		if(this.value == defaultValue ) {
			$(this).val("");
			$(this).parent().addClass("activesearch");
		}
	});
	
	$('#q').blur(function() {
		if(this.value == "") {
			$(this).val("Search...");
			$(this).parent().removeClass("activesearch");
			
		}
	});
	
	$(".main-nav li.dropdown").hover(
		function() {
			$(this).addClass("active");
			$(this).children(".dropdown-ie").show();		
				
		},
		function(){
			$(this).removeClass("active");
			$(this).children(".dropdown-ie").hide();
		})

}); 


