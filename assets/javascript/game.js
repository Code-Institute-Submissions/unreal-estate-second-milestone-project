// Initalizing the canvas, drawing context added, filling the array with zeros
var document;
var maze;
var canvas;
var context;
function grid() {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
    
var blockSize = 40;
for (var= 0; y<maze.length; y++)
{
    for(var x=0; x<maze[y].length; x++)
        if(maze[y][x] ===1 )
    {
        ctx.fillStyle ="red";
        ctx.fillRect(x*50, y*50, 50,50);
    }
    else if(maze [y][x] === -1)
    {
        ctx.fillStyle ="blue";
        ctx.fillRect(x*50, y*50, 50,50);
    }
}

      

// Creating the maze, holding the data
var board = new Array(); 
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
};
});

