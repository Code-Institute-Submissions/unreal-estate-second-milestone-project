//Initalizing the canvas, drawing context added
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");

var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
var intervalVar;
var imageWidth = 210;
var imageHeight = 210;
var canvasWidth = 522;
var canvasHeight = 522;

    var mazeImg = new Image();
    mazeImg.onload = function () {
    context.drawImage(mazeImg, 0, 0, imageWidth, imageHeight, 0, 0, canvasWidth, canvasHeight);         
        context.beginPath();
        context.arc(542, 122, 7, 0, 2 * Math.PI, false);
        context.closePath();
        context.fillStyle = '#00FF00';
        context.fill();
               
        
    };
    mazeImg.src = "../assets/images/maze.png";
    
    



    

