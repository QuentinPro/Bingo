$(".hidden").hide();

$("td").on("click", function(){
	
	$(this).toggleClass("clicked");
});

$(".reset").click(function() {
	$("td").removeClass("clicked");
	$(".hidden").hide();
});


function show(){
    if ($(".h-1", this) && $(".h-2", this) && $(".h-3", this) && $(".h-4", this).hasClass('clicked')){
        $(".hidden").show();
        // alert("Félicitations, vous avez remporté le bingo de la toxicité pour cette partie! (malheureusement)");
    }
}

// or, simplifying further
$("#first_lign, #second_lign, #third_lign, #fourth_lign").click(show);
