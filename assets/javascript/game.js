var myGamePiece;
var myBackground;
var myDestination;
var imageWidth = 715;
var imageHeight = 570;
var canvasWidth = 715;
var canvasHeight = 570;


window.onload = function () {
    startGame();
}

function startGame() {
    console.log("did anything");
    myGamePiece = new component(32, 32, "./assets/images/player.png", 665, 516, "image");
    myBackground = new component(715, 570, "./assets/images/maze.png", 0, 0, "background");
    myDestination = new component(35, 35, "./assets/images/destination.png", 0, 25, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 715;
        this.canvas.height = 570;
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
     
    
};

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
        
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    };  
    
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
function canMoveTo(destX, destY,context) { 
    console.log("0");
    var imgData = context.getImageData(destX, destY, 40, 35);
    console.log("1");
    var data = imgData.data; console.log("2");
    var canMove = 1;
    console.log("3");
    if (destX >= 0 && destX <= imageWidth - 15 && destY >= 0 && destY <= imageHeight - 15) { 
    console.log("4");
        for (var i = 0; i < 4 * 40 * 35; i += 4) { console.log("5");
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) { 
            console.log("6");
                canMove = 0;
                console.log("7");
                break;
                console.log("8");
            } 
            else if (data[i] === 93 && data[i + 1] === 188 && data[i + 2] === 210) { //the colour of the destination
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
    var canMove; //direction buttons
    if (dir == "up") {
        if (1 == canMoveTo(myGamePiece.x, myGamePiece.y-1, myGameArea.context));
        myGamePiece.speedY = -1}        
    if (dir == "down"){
        if (1 == canMoveTo(myGamePiece.x, myGamePiece.y+1,myGameArea.contect));
    } {myGamePiece.speedY = 1; }
    if (dir == "left"){
        if (1== canMoveTo(myGamePiece.x-1, myGamePiece.y, myGameArea.context));
    } {myGamePiece.speedX = -1; }
    if (dir == "right"){
        if (1==canMoveTo(myGamePiece.x+1, myGamePiece.y, myGameArea.context));
    } {myGamePiece.speedX = 1; }
    }

function clearmove() {
    myGamePiece.image.src = "../assets/images/player.png";
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}


//select level
