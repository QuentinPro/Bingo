$(".reset").click(function() {
	$("td").removeClass("clicked");
	$(".flex-row").removeClass("win");
});

$(".table-bordered").on("click", ".flex-row .flex-cell", function() {

    $(this).toggleClass("clicked");

    var $board = $(this).closest(".table-bordered");

    // remove all wins
    $board.find(".win").removeClass("win");

    // check for wins
    var board = $.map($(".flex-row"), function(row, i) {
    var cells = $.map($(row).find(".flex-cell"), function(cell, i){
        return $(cell).hasClass("clicked")
        
    });
        return [cells];
    });

    var rowCount = board.length
    var colCount = board[0].length;

    // check for win on rows
    var winningRows = []
    for (var i = 0; i < rowCount; i++) {
        var rowValues = board[i];
        var rowWin = rowValues.every(function(val) { 
            return val
        });
        if (rowWin) {
            console.log("Win on Row: " + i);
            $board.find(".flex-row").eq(i).addClass("win");
        }
    };

    //check for win on columns
    for (var i = 0; i < colCount; i++) {
        var colValues = board.map(function(row) {
            return row[i]
        });
        var colWin = colValues.every(function(val) { 
            return val
        });
        if (colWin) {
            console.log("Win on Col: " + i);
    	    $board.find(".flex-row:eq(0) .flex-cell").eq(i).addClass("win")
        }
    };

    // check diagonal down
    var diagDownValues = board.map(function(row, i) {return board[i][i]})
    var diagDownWin = diagDownValues.every(function(val) { return val});
    if (diagDownWin) {
        console.log("Win on Down Diagonal");
        $board.find(".flex-header .flex-cell:first-child").addClass("win")
    }

    // check diagonal down
    var diagUpValues = board.map(function(row, i) {return board[i][rowCount - i - 1]})
    var diagUpWin = diagUpValues.every(function(val) { return val});
    if (diagUpWin) {
        console.log("Win on Up Diagonal");
        $board.find(".flex-header .flex-cell:last-child").addClass("win")
    }
});

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