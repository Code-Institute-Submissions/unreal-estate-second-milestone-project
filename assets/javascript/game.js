//Variables
var myGamePiece;
var myBackground;
var myDestination;
var moveCounter = 0;
var imageWidth = 715;
var imageHeight = 570;
var canvasidth = 715;
var canvasHeight = 570;
var WIDTH = 715;
var HEIGHT = 570;


//Load the game
window.onload = function() {
    startGame();
}

//Structure of the components, game area, and navigation button 'how to' basics from: https://www.w3schools.com/graphics/game_images.asp
//Modified
function startGame() {
    myGamePiece = new component(30, 25, "./assets/images/player.png",  665, 516, "image");  
    myBackground = new component(715, 570, "./assets/images/maze.png", 0, 0, "background");
    myDestination = new component(35, 35, "./assets/images/destination.png", 0, 25, "image");
    myGameArea.start();
}
//Creating canvas with height and width 
var myGameArea = {
    canvas: document.createElement("canvas"),
    
    start: function() {
       this.canvas.width = 715;
       this.canvas.height = 570;
        this.canvas.style.left = 20;
        this.canvas.style.top = 20;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height, this.canvas.style.left, this.canvas.style.top);
    }


};
//Set a myCanvas ID, so I can use CSS in styling my canvas
myGameArea.canvas.setAttribute("id", "myCanvas"); 

//Make the canvas responsive
// Original code learnt from https://www.youtube.com/watch?v=1y57COMRSdA
let resizeCanvas = function(){
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
myGameArea.width = WIDTH;
myGameArea.height = HEIGHT;
    
}
resizeCanvas();

window.addEventListener('resize', function(){
resizeCanvas();
}
);

//Maze as a background component with player and the destination 
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
        if (1 === canMoveTo(this.x + this.speedX, this.y + this.speedY, myGameArea.context)) {
            this.x += this.speedX;
            this.y += this.speedY;
        }

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
/***Original code from: https://www.codeproject.com/Articles/577080/Create-an-HTML-and-JavaScript-Maze-Game-with-a-ti ***/
/*** Modified ***/
function canMoveTo(destX, destY, context) {

    var imgData = context.getImageData(destX, destY, 40, 35);

    var data = imgData.data;
    var canMove = 1;
//If the player reached the wall, it stops, if it reached the destination, victory message pops up
    if (destX >= 0 && destX <= imageWidth - 15 && destY >= 0 && destY <= imageHeight - 15) {

        for (var i = 0; i < 4 * 40 * 35; i += 4) {

            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) {
                canMove = 0;
                break;
            } 
            
            else {
                data[i], data[i + 1], data[i + 2]
                canMove = 1;
                break;
            }

            
        }
    } else if (isTouching(myGamePiece, myDestination)){ //two components meet, victory message pops up with movecounter
        $('#victory').modal({ show: false});

        $('#victory').modal('show');
        document.getElementById("moves-counter").innerHTML = moveCounter.toString();


    }
     else {
        canMove = 0; //can't move

    }
    return canMove;

}


//Direction buttons and movecounter 
//Navigation with boostrap buttons on the game area
//If the player moves, the counter gets +1, so in the end, the player get to know how many steps he/she moved

function move(dir) {
    var newX;
    var newY;
    var canMove; 
    if (dir === "up") {
        if (1 === canMoveTo(myGamePiece.x, myGamePiece.y - 1, myGameArea.context)) {
            myGamePiece.speedY = -1;
            moveCounter = moveCounter + 1;
        }
    }
    if (dir === "down") {
        if (1 == canMoveTo(myGamePiece.x, myGamePiece.y + 1, myGameArea.context)) {
            myGamePiece.speedY = 1;
            moveCounter = moveCounter + 1;
        }
    }
    if (dir === "left") {
            if (1 == canMoveTo(myGamePiece.x - 1, myGamePiece.y, myGameArea.context)) {
            myGamePiece.speedX = -1;
            moveCounter = moveCounter + 1;
        }
    }
    if (dir === "right") {
        if (1 == canMoveTo(myGamePiece.x + 1, myGamePiece.y, myGameArea.context)) {
            myGamePiece.speedX = 1;
            moveCounter = moveCounter + 1;
        }
    }
}

function clearmove() {
    myGamePiece.image.src = "./assets/images/s/player.png";
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}


//Select level, with repositioned player, and destination on each level
//When the level button is clicked, the game loads

function startEasyLevel() {
    myBackground = new component(715, 570, "./assets/images/maze.png", 0, 0, "background");
    myGamePiece = new component(30, 25, "./assets/images/player.png", 665, 516, "image");
    myDestination = new component(35, 35, "./assets/images/destination.png", 0, 25, "image");
    myGameArea.start();
}

function startMediumLevel() {
    myBackground = new component(715, 570, "./assets/images/medium.png", 0, 0, "background");
    myGamePiece = new component(22, 15, "./assets/images/player.png", 680, 540, "image");
    myDestination = new component(35, 35, "./assets/images/destination.png", 0, 15, "image");
    myGameArea.start();
}

function startHardLevel() {
    myBackground = new component(715, 570, "./assets/images/hard.png", 0, 0, "background");
    myGamePiece = new component(20, 15, "./assets/images/player.png", 680, 540, "image");
    myDestination = new component(25, 25, "./assets/images/destination.png", 0, 15, "image");
    myGameArea.start();
}

function startInsaneLevel() {
    myBackground = new component(715, 570, "./assets/images/insane.png", 0, 0, "background");
    myGamePiece = new component(20, 15, "./assets/images/.png", 685, 540, "image");
    myDestination = new component(25, 25, "./assets/images/.png", 0, 10, "image");
    myGameArea.start();
}

//Check if the player meets the destination
function isTouching(a,b) {
return (
    a.x === b.x
);
}

//Feedback button
// Submit and send mail with EmailJs
//https://www.emailjs.com/docs/sdk/installation/


function sendMail(feedbackForm) {
    emailjs.init("user_UW97WmP3GsBepuyB8Vffd");
    emailjs.send("gmail", "unreal_estate", {
            "from_name": feedbackForm.name.value,
            "from_email": feedbackForm.email.value,
            "feedback": feedbackForm.feedback.value
        })
        .then(
            function(response) {
                $('#success').modal({ show: false})

                $('#success').modal('show');

                $('#myModal').modal('hide');
            },
            function(error) {
                alert("Something went wrong. Please contact me at andrekrisztina5@gmail.com", error);
                $('#myModal').modal('hide');
            }
        );
    return false;
}



