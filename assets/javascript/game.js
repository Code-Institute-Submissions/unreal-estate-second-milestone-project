var myGamePiece;
var myBackground;
var myDestination;
var imageWidth = 700;
var imageHeight = 550;
var canvasWidth = 700;
var canvasHeight = 550;


window.onload = function () {
    startGame();
}

function startGame() {
    console.log("did anything");
    myGamePiece = new component(40, 35, "./assets/images/player.png", 655, 495, "image");
    myBackground = new component(700, 550, "./assets/images/maze.png", 0, 0, "background");
    myDestination = new component(35, 35, "./assets/images/destination.png", 0, 25, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 550;
        this.canvas.style.left = 20;
        this.canvas.style.top = 20;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height, this.canvas.style.left, this.canvas.style.top );
    }
    
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
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
        if (type == "image" || type == "background") {
            context.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            context.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }    
}

function updateGameArea() {
    myGameArea.clear();
    myBackground.newPos();    
    myBackground.update();
    myGamePiece.newPos();    
    myGamePiece.update();
    myDestination.newPos(); 
    myDestination.update();
}
let newX;
let newY;
movingAllowed = canMoveTo(newX, newY);
    if (movingAllowed === 1) 
    {    
        currRectX = newX;
        currRectY = newY;
    }
    

function canMoveTo(destX, destY) { 
    console.log("0");
    var imgData = context.getImageData(destX, destY, 40, 35);
    console.log("1");
    var data = imgData.data; console.log("2");
    var canMove = 1;
    console.log("3");
    if (destX >= 0 && destX <= mazeWidth - 15 && destY >= 0 && destY <= mazeHeight - 15) { 
    console.log("4");
        for (var i = 0; i < 4 * 40 * 35; i += 4) { console.log("5");
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { 
            console.log("6");
                canMove = 0;
                console.log("7");
                break;
                console.log("8");
            } 
            else if (data[i] === 0 && data[i + 1] === 255 && data[i + 2] === 0) { 
                console.log("9");
                canMove = 2; 
                console.log("10");
                break; 
                console.log("11");
            }
        }
    }
    else {
        canMove = 0;
         console.log("12");
    }
    return canMove;
    console.log("13");
}


function move(dir) {
    var newX;
    var newY;
    var canMove //direction buttons
    if (dir == "up") {myGamePiece.speedY = -1; }
    if (dir == "down") {myGamePiece.speedY = 1; }
    if (dir == "left") {myGamePiece.speedX = -1; }
    if (dir == "right") {myGamePiece.speedX = 1; }
}

function clearmove() {
    myGamePiece.image.src = "../assets/images/player.png";
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
