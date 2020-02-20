// Initalizing the canvas, drawing context added, filling the array with zeros
var document;
function init() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            context = canvas.getContext("2d");
for(i=0; i< SIZE; i++) {
            board[i] = new Array();
            for(j=0; j<SIZE; j++) {
                board[i][j] = 0; 
            }
        }
    }
}
// Creating the maze, holding the data
var board = new Array[]; 
    function maze() {
        init();           
        explorePath(1,1); }
// Directions with arrows

node.addEventListener('keydown', function(event) {
const key = event.key; 
switch (event.key){
    case "Left":
    break;
    case "Up":
    break;
    case "Right":
    break;
    case "Down":
    break;
    }