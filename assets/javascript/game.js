//Initalizing the canvas, drawing context added
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");

var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
var intervalVar;
var imageWidth = 414;
var imageHeight = 254;
var canvasWidth = 522;
var canvasHeight = 522;
function drawMazeAndRectangle(rectX, rectY) {
    makeWhite(0, 0, canvas.width, canvas.height);
    var mazeImg = new Image();
    mazeImg.onload = function () {
    context.drawImage(mazeImg, 0, 0, imageWidth, imageHeight, 0, 0, canvasWidth, canvasHeight);         drawRectangle(rectX, rectY, "#0000FF", false, true);
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
               
        
    };
    mazeImg.src = "../assets/images/maze.gif";
    
    
}

function drawRectangle(x, y, style) {
    makeWhite(currRectX, currRectY, 15, 15);
    currRectX = x;
    currRectY = y;
    context.beginPath();
    context.rect(x, y, 15, 15);
    context.closePath();
    context.fillStyle = style;
    context.fill();
    
}
function makeWhite(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fillStyle = "white";
    context.fill();
}


drawMazeAndRectangle(425, 3);