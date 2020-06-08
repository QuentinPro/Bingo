$(".hidden").hide();

$("td").on("click", function(){
	
	$(this).toggleClass("clicked");
});

$(".reset").click(function() {
	$("td").removeClass("clicked");
	$(".hidden").hide();
});


function condition_horizontale(){
    if ($(".h-1", this).hasClass('clicked') && $(".h-2", this).hasClass('clicked') && $(".h-3", this).hasClass('clicked') && $(".h-4", this).hasClass('clicked')){
        $(".hidden").show();
    }
}

$("#first_lign, #second_lign, #third_lign, #fourth_lign").click(condition_horizontale);


// $('.h-1').click(function(){
// 	alert("ui");
// });

// function ver(){
// 	if($("#" + this + " .h-1").hasClass('clicked')) {
// 		alert("ui");
// 	}
// }

// $("first_lign").click(ver);

function condition_verticale_une(){
    if ($("#first_lign .h-1").hasClass('clicked') && $("#second_lign .h-1").hasClass('clicked') && $("#third_lign .h-1").hasClass('clicked') && $("#fourth_lign .h-1").hasClass('clicked') ){
        $(".hidden").show();
    }
}

$(".h-1").click(condition_verticale_une);

function condition_verticale_deux(){
    if ($("#first_lign .h-2").hasClass('clicked') && $("#second_lign .h-2").hasClass('clicked') && $("#third_lign .h-2").hasClass('clicked') && $("#fourth_lign .h-2").hasClass('clicked') ){
        $(".hidden").show();
    }
}

$(".h-2").click(condition_verticale_deux);

function condition_verticale_trois(){
    if ($("#first_lign .h-3").hasClass('clicked') && $("#second_lign .h-3").hasClass('clicked') && $("#third_lign .h-3").hasClass('clicked') && $("#fourth_lign .h-3").hasClass('clicked') ){
        $(".hidden").show();
    }
}

$(".h-3").click(condition_verticale_trois);

function condition_verticale_quatre(){
    if ($("#first_lign .h-4").hasClass('clicked') && $("#second_lign .h-4").hasClass('clicked') && $("#third_lign .h-4").hasClass('clicked') && $("#fourth_lign .h-4").hasClass('clicked') ){
        $(".hidden").show();
    }
}

$(".h-4").click(condition_verticale_quatre);