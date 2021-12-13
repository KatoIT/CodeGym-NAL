const WIDTH = 1000;
const HEIGHT = 500;
const HEIGHT_PADDLE = 7;
const WIDTH_PADDLE = 150;
var scores = 0;
var isMoveLeft = 0; 

function Circle(x, y, vx, vy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.vx = vx;
    this.vy = vy;

    this.update = function (pad) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.closePath();
        //
        // Move
        this.x += this.vx;
        this.y += this.vy;
        // 
        if (this.y >= (pad.getY() +5)) {
            alert("Lose!");
            clearInterval(xVar);
        }
        if (this.y >= (pad.getY() - 5) &&
            (this.x <= pad.getX() + WIDTH_PADDLE) &&
            (this.x >= pad.getX())) {
            this.vy = -this.vy;
            this.vx -= isMoveLeft;
        }
        if (this.y <= 5) {
            this.vy = -this.vy;
        }
        if (this.x >= (WIDTH - 5) || this.x <= 5) {
            this.vx = -this.vx;
        }
    }
}

function Paddle() {
    this.x = 500 - WIDTH_PADDLE/2;
    this.y = 450;
    //
    this.update = function (vx) {
        this.x += vx;
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > WIDTH - WIDTH_PADDLE) {
            this.x = WIDTH - WIDTH_PADDLE;
        }
        
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, WIDTH_PADDLE, HEIGHT_PADDLE);
        ctx.fillStyle = "rgb(100,60,100)";
        ctx.fill();
        ctx.closePath();

    }
    
    this.getX = function () {
        return this.x;
    }
    this.getY = function () {
        return this.y;
    }

}

// số ngẫu nhiên 
function getRandomHex() {
    return Math.floor(Math.random() * 255);
    // return 5;
}

// màu ngẫu nhiên
function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function clearCanvas(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            // Left
            isMoveLeft += 0.01;
            pad.update(-10);
            break;
        case 39:
            // Right
            isMoveLeft -= 0.01;
            pad.update(10);
            break;
    }
}
function stop() {
    isMoveLeft = 0;
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
    window.addEventListener('keyup', stop);
}

let pad = new Paddle(2);
let ball = new Circle(500, 20, 1, 2, 10);

function update() {
    clearCanvas();
    ball.update(pad);
    pad.update(0);
    scores += 1;
    document.getElementById("score").innerHTML = scores;
}

const xVar = setInterval(update, 700 / 60);
