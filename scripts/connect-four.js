/**
 * Created by daming on 2/12/15.
 */
var tokens = 0;

var height = 345;

var heights = [height,height,height,height,height,height,height];

var counter = 0;

var board = [[],[],[],[],[],[],[]];

var dispCases = function(msg) {
    if (msg) {
        $("#issues").text(msg);
    } else {
        $("#issues").text('empty msg !!!');
    }
};

var step_count = 0;

var checkOneCell = function (board, row, col, playerId) {
    var rowMax = 7;
    var colMax = 6;
    if (row < 0 || row >= rowMax || col < 0 || col >= colMax) {
        return false;
    }
    if (board[row].length < col+1) {
        return false;
    }
    return board[row][col] == playerId;
};

var judgeBoard = function (board, index, playerId) {
    var row = index;
    var col = board[index].length-1;

    // staight-down
    if (    checkOneCell(board,     row,    col-1,  playerId)
        &&  checkOneCell(board,     row,    col-2,  playerId)
        &&  checkOneCell(board,     row,    col-3,  playerId)
    ) {
        return true;
    }

    // horizontal: -3
    if (    checkOneCell(board,     row-3,  col,    playerId)
        &&  checkOneCell(board,     row-2,  col,    playerId)
        &&  checkOneCell(board,     row-1,  col,    playerId)
    ) {
        return true;
    }
    // horizontal: -2
    if (    checkOneCell(board,     row-2,  col,    playerId)
        &&  checkOneCell(board,     row-1,  col,    playerId)
        &&  checkOneCell(board,     row+1,  col,    playerId)
    ) {
        return true;
    }
    // horizontal: -1
    if (    checkOneCell(board,     row-1,  col,    playerId)
        &&  checkOneCell(board,     row+1,  col,    playerId)
        &&  checkOneCell(board,     row+2,  col,    playerId)
    ) {
        return true;
    }
    // horizontal: 0
    if (    checkOneCell(board,     row+1,  col,    playerId)
        &&  checkOneCell(board,     row+2,  col,    playerId)
        &&  checkOneCell(board,     row+3,  col,    playerId)
    ) {
        return true;
    }

    // left-bottom: -3
    if (    checkOneCell(board,     row-3,  col-3,  playerId)
        &&  checkOneCell(board,     row-2,  col-2,  playerId)
        &&  checkOneCell(board,     row-1,  col-1,  playerId)
    ) {
        return true;
    }
    // left-bottom: -2
    if (    checkOneCell(board,     row-2,  col-2,  playerId)
        &&  checkOneCell(board,     row-1,  col-1,  playerId)
        &&  checkOneCell(board,     row+1,  col+1,  playerId)
    ) {
        return true;
    }
    // left-bottom: -1
    if (    checkOneCell(board,     row-1,  col-1,  playerId)
        &&  checkOneCell(board,     row+1,  col+1,  playerId)
        &&  checkOneCell(board,     row+2,  col+2,  playerId)
    ) {
        return true;
    }
    // left-bottom: 0
    if (    checkOneCell(board,     row+1,  col+1,  playerId)
        &&  checkOneCell(board,     row+2,  col+2,  playerId)
        &&  checkOneCell(board,     row+3,  col+3,  playerId)
    ) {
        return true;
    }

    // left-up: -3
    if (    checkOneCell(board,     row-3,  col+3,  playerId)
        &&  checkOneCell(board,     row-2,  col+2,  playerId)
        &&  checkOneCell(board,     row-1,  col+1,  playerId)
    ) {
        return true;
    }
    // left-up: -2
    if (    checkOneCell(board,     row-2,  col+2,  playerId)
        &&  checkOneCell(board,     row-1,  col+1,  playerId)
        &&  checkOneCell(board,     row+1,  col-1,  playerId)
    ) {
        return true;
    }
    // left-up: -1
    if (    checkOneCell(board,     row-1,  col+1,  playerId)
        &&  checkOneCell(board,     row+1,  col-1,  playerId)
        &&  checkOneCell(board,     row+2,  col-2,  playerId)
    ) {
        return true;
    }
    // left-up: 0
    if (    checkOneCell(board,     row+1,  col-1,  playerId)
        &&  checkOneCell(board,     row+2,  col-2,  playerId)
        &&  checkOneCell(board,     row+3,  col-3,  playerId)
    ) {
        return true;
    }

    return false;
};

$(document).ready(function() {
    $(".column-button").click(function() {
        var index = $(this).parent().index();
        // 0,1,2,...,6
        //alert('index : '+index);
        console.log('cur col index : '+index);
        if (board[index].length == 6) {
            dispCases('Column is full!');
            return;
        }
        board[index].push(step_count%2);
        var p = step_count%2 == 0 ? "player1" : "player2" ;
        var newToken = "<div style=\"position: absolute; top:" + heights[index] +  "px\" class=\"disc " + p + "\">"+counter+"</div>";
        counter++;
        heights[index] -= 50;
        $(this).prev().prepend(newToken);

        // judge!
        if (judgeBoard(board, index, step_count%2)) {
            dispCases(step_count%2 + ' won !!!');
        } else {
            dispCases('none won yet');
        }
        step_count++;
    }).on('dragstart',
        function(){return false;}
    ).on('selectstart',
        function(){return false;}
    );

    $(".column-button").mouseenter(function() {
        $(this).addClass("highlighted");
    });
    $(".column-button").mouseleave(function() {
        $(this).removeClass("highlighted");
    });

    $("#restart").click(function() {
        console.log('restart');
    });

    $("#test").click(function() {
        console.log('test');
        dispCases('Test clicked');
        console.log('board : ');
        console.log(JSON.stringify(board));
    });
});
