var genMoves=[
    "down",
    "right",
    "left",
    "up"
]

var moveCount=0

$(document).ready(function(highlightLegal){
    $(".highlightThis").mouseover(function(){
    $(this).toggleClass()
})
})
// function highlightLegal() {
//         $(this).toggleClass(".highlightTop .highlightBottom", addOrRemove);
//     }
function moveSelection() {
    switch (genMoves[moveCount]){
        case "down":
        console.log("move general down");
        $("#genRed").animate({
            "top": "100%"}, "slow")

        break;
        case "right":
        console.log("move general right");
        $("#genRed").animate({
            "right": "-100%"}, "slow")

        break;
        case "left":
        console.log("move general left");
        $("#genRed").animate({
            "right": "0"}, "slow")
        break;
        case "up":
        console.log("move general up");
        $("#genRed").animate({"top": "0"}, "slow")
        break;
    }
    moveCount++
    if (moveCount > 3)
        {moveCount=0}
}
