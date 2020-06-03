$("td").on("click", function(){
	
	$(this).toggleClass("clicked");
});

$(".reset").click(function() {
	$("td").removeClass("clicked");
});