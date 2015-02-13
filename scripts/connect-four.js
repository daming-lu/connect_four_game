/**
 * Created by daming on 2/12/15.
 */

$(document).ready(function() {
    $(".column-button").click(function() {
        var index = $(this).parent().parent().index();
        // 0,1,2,...,6
        alert('index : '+index);
        //if(!updateGame(index)) return;
        //started = true;
        //var p = tokens%2 ? "player2" : "player1";
        //var newToken = "<div class=\"token " + p + "\"></div>";
        //$(this).prev().prepend(newToken);
        //var t = $(this).prev()
        //    .children(".token:first-child").position().top;
        //$(this).prev()
        //    .children(".token:first-child").css("top", t);
        //if($("html").hasClass("ie"))
        //    $(this).prev().children(".token:first-child")
        //        .css("top", 81);
        //$(this).prev().children(".token:first-child")
        //    .animate({top:"+="+dropLength(index)+"px"}, 300);
        //if(!playing) return;
        //updateDisplayToken();
    });

    $(".column-button").mouseenter(function() {
        $(this).addClass("highlighted");
    });
    $(".column-button").mouseleave(function() {
        $(this).removeClass("highlighted");
    });
});