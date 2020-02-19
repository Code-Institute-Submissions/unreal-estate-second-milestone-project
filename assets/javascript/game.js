// Creating the maze, holding the data
var board = new Array();
 
    function maze() {
        init();           
        explorePath(1,1); }
// Initalizing the canvas, drawing context added, filling the array with zeros
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
