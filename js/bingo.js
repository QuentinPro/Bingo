$(".hidden").hide();

$("td").on("click", function(){
	
	$(this).toggleClass("clicked");
});

$(".reset").click(function() {
	$("td").removeClass("clicked");
	$(".hidden").hide();
});


function show(){
    if ($(".h-1", this).hasClass('clicked') && $(".h-2", this).hasClass('clicked') && $(".h-3", this).hasClass('clicked') && $(".h-4", this).hasClass('clicked')){
        $(".hidden").show();
    }
}

// or, simplifying further
$("#first_lign, #second_lign, #third_lign, #fourth_lign").click(show);
