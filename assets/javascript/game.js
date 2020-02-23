// Initalizing the canvas, drawing context added, filling the array with zeros
var maze;
var grid;
var context;
window.onload = function() {
var canvas = document.getElementById("canvas");
context = canvas.getContext("2d"); 
var img = document.getElementById("slug");
context.drawImage(img, 10, 10);
}
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

var blockSize = 30;
for (var y= 0; y<maze.length; y++)
{
    for(var x=0; x<maze[y].length; x++)
        if(maze[y][x] ===1 )
    {
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

