
//Calling a function to start the game:
function startGame() {
  myGameArea.start();
}

// Game area:
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 580;
    this.canvas.height = 470;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}
