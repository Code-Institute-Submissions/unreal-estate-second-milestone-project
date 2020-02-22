// Initalizing the canvas, drawing context added, filling the array with zeros
var maze;
var grid;
var canvas;
var context;
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
function newFunction() {
    "use strict";
    newFunction();
    grid();

}

var document;
function grid() {
    "use strict";
    var canvas = document.getElementById("canvas");
}
context = canvas.getContext("2d"); 
var blockSize = 40;
for (var y= 0; y<maze.length; y++)
{
    for(var x=0; x<maze[y].length; x++)
        if(maze[y][x] ===1 )
    {
        ctx.fillStyle ="red";
        ctx.fillRect(x*50, y*50, 50,50);
        ctx.stroke();
    }
    else if(maze [y][x] === -1)
    {
        ctx.fillStyle ="blue";
        ctx.fillRect(x*50, y*50, 50,50);
        ctx.stroke();
    }
}

      


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
});
