/**
 * Created by daming on 2/12/15.
 */
var height = 345;

var heights = [height,height,height,height,height,height,height];

var board = [[],[],[],[],[],[],[]];

var gameOver = false;

var dispMsg = function(msg) {
    if (msg) {
        $("#issues").text(msg);
    } else {
        $("#issues").text('empty msg !!!');
    }
};
var toggleClassFcn = function(id){
    $('#disc'+id).toggleClass("blink");
};

var stepCount = 0;

var flashDiscs = function (board, p0r, p0c, p1r, p1c, p2r, p2c, p3r, p3c) {
    var id0 = board[p0r][p0c];
    var id1 = board[p1r][p1c];
    var id2 = board[p2r][p2c];
    var id3 = board[p3r][p3c];
    setInterval( function() { toggleClassFcn(id0); }, 400 );
    setInterval( function() { toggleClassFcn(id1); }, 400 );
    setInterval( function() { toggleClassFcn(id2); }, 400 );
    setInterval( function() { toggleClassFcn(id3); }, 400 );
};

var checkOneCell = function (board, row, col, playerId) {
    var rowMax = 7;
    var colMax = 6;
    if (row < 0 || row >= rowMax || col < 0 || col >= colMax) {
        return false;
    }
    if (board[row].length < col+1) {
        return false;
    }
    return board[row][col]%2 == playerId;
};

var judgeBoard = function (board, index, playerId) {
    var row = index;
    var col = board[index].length-1;

    // staight-down
    if (    checkOneCell(board,     row,    col-1,  playerId)
        &&  checkOneCell(board,     row,    col-2,  playerId)
        &&  checkOneCell(board,     row,    col-3,  playerId)
    ) {
        flashDiscs(board, row, col, row, col-1, row, col-2, row, col-3);
        return true;
    }

    // horizontal: -3
    if (    checkOneCell(board,     row-3,  col,    playerId)
        &&  checkOneCell(board,     row-2,  col,    playerId)
        &&  checkOneCell(board,     row-1,  col,    playerId)
    ) {
        flashDiscs(board, row, col, row-3, col, row-2, col, row-1, col);
        return true;
    }
    // horizontal: -2
    if (    checkOneCell(board,     row-2,  col,    playerId)
        &&  checkOneCell(board,     row-1,  col,    playerId)
        &&  checkOneCell(board,     row+1,  col,    playerId)
    ) {
        flashDiscs(board, row, col, row-2, col, row-1, col, row+1, col);
        return true;
    }
    // horizontal: -1
    if (    checkOneCell(board,     row-1,  col,    playerId)
        &&  checkOneCell(board,     row+1,  col,    playerId)
        &&  checkOneCell(board,     row+2,  col,    playerId)
    ) {
        flashDiscs(board, row, col, row-1, col, row+1, col, row+2, col);
        return true;
    }
    // horizontal: 0
    if (    checkOneCell(board,     row+1,  col,    playerId)
        &&  checkOneCell(board,     row+2,  col,    playerId)
        &&  checkOneCell(board,     row+3,  col,    playerId)
    ) {
        flashDiscs(board, row, col, row+1, col, row+2, col, row+3, col);
        return true;
    }

    // left-bottom: -3
    if (    checkOneCell(board,     row-3,  col-3,  playerId)
        &&  checkOneCell(board,     row-2,  col-2,  playerId)
        &&  checkOneCell(board,     row-1,  col-1,  playerId)
    ) {
        flashDiscs(board, row, col, row-3, col-3, row-2, col-2, row-1, col-1);
        return true;
    }
    // left-bottom: -2
    if (    checkOneCell(board,     row-2,  col-2,  playerId)
        &&  checkOneCell(board,     row-1,  col-1,  playerId)
        &&  checkOneCell(board,     row+1,  col+1,  playerId)
    ) {
        flashDiscs(board, row, col, row-2, col-2, row-1, col-1, row+1, col+1);
        return true;
    }
    // left-bottom: -1
    if (    checkOneCell(board,     row-1,  col-1,  playerId)
        &&  checkOneCell(board,     row+1,  col+1,  playerId)
        &&  checkOneCell(board,     row+2,  col+2,  playerId)
    ) {
        flashDiscs(board, row, col, row-1, col-1, row+1, col+1, row+2, col+2);
        return true;
    }
    // left-bottom: 0
    if (    checkOneCell(board,     row+1,  col+1,  playerId)
        &&  checkOneCell(board,     row+2,  col+2,  playerId)
        &&  checkOneCell(board,     row+3,  col+3,  playerId)
    ) {
        flashDiscs(board, row, col, row+1, col+1, row+2, col+2, row+3, col+3);
        return true;
    }

    // left-up: -3
    if (    checkOneCell(board,     row-3,  col+3,  playerId)
        &&  checkOneCell(board,     row-2,  col+2,  playerId)
        &&  checkOneCell(board,     row-1,  col+1,  playerId)
    ) {
        flashDiscs(board, row, col, row-3, col+3, row-2, col+2, row-1, col+1);
        return true;
    }
    // left-up: -2
    if (    checkOneCell(board,     row-2,  col+2,  playerId)
        &&  checkOneCell(board,     row-1,  col+1,  playerId)
        &&  checkOneCell(board,     row+1,  col-1,  playerId)
    ) {
        flashDiscs(board, row, col, row-2, col+2, row-1, col+1, row+1, col-1);
        return true;
    }
    // left-up: -1
    if (    checkOneCell(board,     row-1,  col+1,  playerId)
        &&  checkOneCell(board,     row+1,  col-1,  playerId)
        &&  checkOneCell(board,     row+2,  col-2,  playerId)
    ) {
        flashDiscs(board, row, col, row-1, col+1, row+1, col-1, row+2, col-2);
        return true;
    }
    // left-up: 0
    if (    checkOneCell(board,     row+1,  col-1,  playerId)
        &&  checkOneCell(board,     row+2,  col-2,  playerId)
        &&  checkOneCell(board,     row+3,  col-3,  playerId)
    ) {
        flashDiscs(board, row, col, row+1, col-1, row+2, col-2, row+3, col-3);
        return true;
    }

    return false;
};

$(document).ready(function() {
    $(".column-button").click(function() {
        if (gameOver) {
            return;
        }
        var index = $(this).parent().index();
        var curPlayerId = stepCount%2;
        console.log('cur col index : '+index);
        if (board[index].length == 6) {
            dispMsg('Column is full!');
            return;
        }
        if (board[index].length == 6) {
            return;
        }
        board[index].push(stepCount);
        var p = curPlayerId == 0 ? "player1" : "player2" ;
        var newToken = "<div id=\"disc" + stepCount + "\" style=\"position: absolute; top:" + heights[index] +  "px\" class=\"disc " + p + "\">"+stepCount+"</div>";
        heights[index] -= 50;
        //$(this).prev().prepend(newToken);
        $(this).prev().prepend(newToken);

        // judge!
        if (judgeBoard(board, index, curPlayerId)) {
            dispMsg(curPlayerId + ' won !!!');
            gameOver = true;
        } else {
            dispMsg('none won yet');
        }
        stepCount++;
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
        stepCount = 0;
        $(".column").html('');
        for(var i=0; i<board.length; i++) {
            board[i]=[];
        }
        heights = [height,height,height,height,height,height,height];
        gameOver = false;
    });

    $("#test").click(function() {
        console.log('test');
        dispMsg('Test clicked');
        console.log('board : ');
        console.log(JSON.stringify(board));
    });
});
