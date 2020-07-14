$(".hidden").hide();

$("td").on("click", function(){
	
	$(this).toggleClass("clicked");
	$(this).removeClass("win");
});

$(".reset").click(function() {
	$("td").removeClass("clicked");
	$("td").removeClass("win");
});


function condition_horizontale(){
    if ($(".h-1", this).hasClass('clicked') && $(".h-2", this).hasClass('clicked') && $(".h-3", this).hasClass('clicked') && $(".h-4", this).hasClass('clicked')){
        $("td", this).addClass("win");
    }
}

$("#first_lign, #second_lign, #third_lign, #fourth_lign").click(condition_horizontale);


function condition_verticale_une(){
    if ($("#first_lign .h-1").hasClass('clicked') && $("#second_lign .h-1").hasClass('clicked') && $("#third_lign .h-1").hasClass('clicked') && $("#fourth_lign .h-1").hasClass('clicked') ){
        $(".h-1").addClass("win");
    }
}

$(".h-1").click(condition_verticale_une);

function condition_verticale_deux(){
    if ($("#first_lign .h-2").hasClass('clicked') && $("#second_lign .h-2").hasClass('clicked') && $("#third_lign .h-2").hasClass('clicked') && $("#fourth_lign .h-2").hasClass('clicked') ){
        $(".h-2").addClass("win");
    }
}

$(".h-2").click(condition_verticale_deux);

function condition_verticale_trois(){
    if ($("#first_lign .h-3").hasClass('clicked') && $("#second_lign .h-3").hasClass('clicked') && $("#third_lign .h-3").hasClass('clicked') && $("#fourth_lign .h-3").hasClass('clicked') ){
       $(".h-3").addClass("win");
    }
}

$(".h-3").click(condition_verticale_trois);

function condition_verticale_quatre(){
    if ($("#first_lign .h-4").hasClass('clicked') && $("#second_lign .h-4").hasClass('clicked') && $("#third_lign .h-4").hasClass('clicked') && $("#fourth_lign .h-4").hasClass('clicked') ){
        $(".h-4").addClass("win");
    }
}

$(".h-4").click(condition_verticale_quatre);

function condition_diagonale_une(){
    if ($(".d-1").hasClass('clicked') && $(".d-2").hasClass('clicked') && $(".d-3").hasClass('clicked') && $(".d-4").hasClass('clicked') ){
        $(".d-1, .d-2, .d-3, .d-4").addClass("win");
    }
}

$(".d-1, .d-2, .d-3, .d-4").click(condition_diagonale_une);

function condition_diagonale_deux(){
    if ($(".d-5").hasClass('clicked') && $(".d-6").hasClass('clicked') && $(".d-7").hasClass('clicked') && $(".d-8").hasClass('clicked') ){
        $(".d-5, .d-6, .d-7, .d-8").addClass("win");
    }
}

$(".d-5, .d-6, .d-7, .d-8").click(condition_diagonale_deux);


$(function() {
  var body = $('body');
  var backgrounds = ['url(images/rift.jpg)', 'url(images/second_rift.jpg), url(images/rift.jpg)', 'url(images/another_one.jpg), url(images/second_rift.jpg)', 'url(images/summoners.jpg), url(images/another_one.jpg)'];
  var current = 0;

function nextBackground() {
  body.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 15000);
 }
 setTimeout(nextBackground, 15000);
   body.css('background', backgrounds[0]);
 });
