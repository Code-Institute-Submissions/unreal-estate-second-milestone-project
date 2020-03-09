//Initalizing the canvas, drawing context added
var x;
var y;
var currRectX = 425;
var currRectY = 3;
var mazeWidth = 556;
var mazeHeight = 556;
var intervalVar;
var imageWidth = 210;
var imageHeight = 210;
var canvasWidth = 522;
var canvasHeight = 522;
var context;
var myGamePiece;

function newFunction() {
    var canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');
    return context;
}

function startGame() {
    myGamePiece = new component(30, 30, "../assets/images/player.png", 10, 120, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas: document.getElementById("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        context = myGameArea.context;
        if (type == "image") {
            context.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    console.log("Updating")
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}


function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
var mazeImg = new Image();
var playerImg = new Image();

mazeImg.onload = function() {
    mazeImg.src = "../assets/images/maze.png";
    context.drawImage(mazeImg, 0, 0, imageWidth, imageHeight, 0, 0, canvasWidth, canvasHeight);
    context.beginPath();
    context.arc(542, 122, 7, 0, 2 * Math.PI, false);
    context.closePath();
    context.fillStyle = '#00FF00';
    context.fill();
    

};

function moveup() {
    myGamePiece.speedY = -1;
}

function movedown() {
    myGamePiece.speedY = 1;
}

function moveleft() {
    myGamePiece.speedX = -1;
}

function moveright() {
    myGamePiece.speedX = 1;
}