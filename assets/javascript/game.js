// Initalizing the canvas, drawing context added
var mazeCanvas;
var grid;
var maze;
var sprite;
var finishSprite;
var difficulty;
var cellSize;
var context;
var canvas;

window.onload = function() {
context = canvas.getContext("2d"); 
}
// Canvas properites
window.onload = function () {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
        context.canvas.width = viewHeight - (viewHeight / 100);
        context.canvas.height = viewHeight - (viewHeight / 100);
    } else {
        context.canvas.width = viewWidth - (viewWidth / 100);
        context.canvas.height = viewWidth - (viewWidth / 100);
    }

// Sprites 
sprite = new Image();
    sprite.src = "../images/sprite.png";
    sprite.onload = function () {
        sprite = changeBrightness(1.20, sprite);
    };
    finishSprite = new Image();
    finishSprite.src = "/media/finishSprite.png";
    finishSprite.onload = function () {
        finishSprite = changeBrightness(1.10, finishSprite);
    };

};
// Resize of the window view
window.onresize = function () {
    let viewWidth = $("#view").width();
    let viewHeight = $("#view").height();
    if (viewHeight < viewWidth) {
        context.canvas.width = viewHeight - (viewHeight / 100);
        context.canvas.height = viewHeight - (viewHeight / 100);
    } else {
        context.canvas.width = viewWidth - (viewWidth / 100);
        context.canvas.height = viewWidth - (viewWidth / 100);
    }
    cellSize = viewCanvas.width / difficulty;
    if (player != null) {
        draw.redrawMaze(cellSize);
        player.redrawPlayer(cellSize);
    }
};
// Maze and levels
function makeMaze() {
document.getElementById("mazeCanvas").classList.add("border");
    if (player != undefined) {
        player.unbindKeyDown();
        player = null;
    }
    var e = document.getElementById("sel1");
    difficulty = e.options[e.selectedIndex].value;
    cellSize = mazeCanvas.width / difficulty;
    maze = new Maze(difficulty, difficulty);
    draw = new DrawMaze(maze, ctx, cellSize, finishSprite);
    player = new Player(maze, mazeCanvas, cellSize, displayVictoryMess, sprite);
};
// Drawing on canvas
function drawMaze(Maze, cellsize) {
    var cellSize = cellsize;
    context.lineWidth = cellSize / 40;
    this.redrawMaze = function (size) {
        cellSize = size;
        ctx.lineWidth = cellSize / 40;
        drawMap();
        drawEndMethod();
    };
    function drawCell(xCord, yCord, cell) {
        var x = xCord * cellSize;
        var y = yCord * cellSize;    

        if (cell.n == false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + cellSize, y);
            ctx.stroke();
        }
        if (cell.s === false) {
            ctx.beginPath();
            ctx.moveTo(x, y + cellSize);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.e === false) {
            ctx.beginPath();
            ctx.moveTo(x + cellSize, y);
            ctx.lineTo(x + cellSize, y + cellSize);
            ctx.stroke();
        }
        if (cell.w === false) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + cellSize);
            ctx.stroke();
        }
  
    }

    function drawMap() {
        for (x = 0; x < map.length; x++) {
            for (y = 0; y < map[x].length; y++) {
                drawCell(x, y, map[x][y]);
            }
        }
    }

    function drawEndFlag() {
        var coord = Maze.endCoord();
        var gridSize = 4;
        var fraction = cellSize / gridSize - 2;
        var colorSwap = true;
        for (let y = 0; y < gridSize; y++) {
            if (gridSize % 2 == 0) {
                colorSwap = !colorSwap;
            }
            for (let x = 0; x < gridSize; x++) {
                ctx.beginPath();
                ctx.rect(
                    coord.x * cellSize + x * fraction + 4.5,
                    coord.y * cellSize + y * fraction + 4.5,
                    fraction,
                    fraction
                );
                if (colorSwap) {
                    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
                } else {
                    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                }
                ctx.fill();
                colorSwap = !colorSwap;
            }
        }
    }

    function drawEndSprite() {
        var offsetLeft = cellSize / 50;
        var offsetRight = cellSize / 25;
        var coord = Maze.endCoord();
        context.drawImage(
            endSprite,
            2,
            2,
            endSprite.width,
            endSprite.height,
            coord.x * cellSize + offsetLeft,
            coord.y * cellSize + offsetLeft,
            cellSize - offsetRight,
            cellSize - offsetRight
        );
    }

    function clear() {
        var canvasSize = cellSize * map.length;
        context.clearRect(0, 0, canvasSize, canvasSize);
    }


    if (endSprite != null) {
        drawEndMethod = drawEndSprite;
    } else {
        drawEndMethod = drawEndFlag;
    }
    clear();
    drawMap();
    drawEndMethod();
}