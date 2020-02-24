// Initalizing the canvas, drawing context added, filling the array with zeros
var maze;
var grid;
var ctx;
var context;
var context;

var canvas = document.getElementById("canvas");
context = canvas.getContext("2d"); 
// zero=wall, one=road, two = endpoint
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
    for (var y= 0; y<maze.length; y++)
    "use strict";
    newFunction();
    grid();

}


var document;
function grid() {
    "use strict";
}

var blockSize = 40;
var blockSize = 30;
for (var y= 0; y<maze.length; y++)
{
    for(var x=0; x<maze[y].length; x++)
        if(maze[y][x] ===1 )
    {
       context.fillStyle = "red";
       context.fillStyle = "blue";
       context.fillRect(x*50, y*50, 50,50);
       context.stroke();
    }
    else if(maze [y][x] === -1)
    {
        context.fillStyle = "blue";
        context.fillRect(x*50, y*50, 50,50);
        context.stroke();
    }
}

      
// Directions with arrows
