const WIDTH = 1000;
const HEIGHT = 500;
const HEIGHT_PADDLE = 7;
const WIDTH_PADDLE = WIDTH;

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
        this.x += this.vx;
        this.y += this.vy;
        // Xử lý chạm
        if (this.y >= (HEIGHT-5)) {
            alert("Lose!");
            clearInterval(xVar);
            // this.vy = -this.vy;
        }
        console.log("" + this.x + ", " + this.y + ", " + pad.getX() + ", " + pad.getY());
        if (this.y <= 5 || (this.y >= pad.getY() -5 && (this.x <= pad.getX() + WIDTH_PADDLE) && (this.x >= pad.getX()))) {
            console.log("" + this.x + ", " + this.y + ", " + pad.getX() + ", " + pad.getY());
            this.vy = -this.vy;
        }
        if (this.x >= (WIDTH - 5) || this.x <= 5) {
            this.vx = -this.vx;
        }
    }

}
function Paddle() {
    this.x = 500;
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
        ctx.fillStyle = getRandomColor();
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
    // return Math.floor(Math.random() * 255);
    return 5;
}
// màu ngẫu nhiên
function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

var ball;
// tạo 1 quả bóng
function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = 10;
    var color = getRandomColor();
    // Vị trí ban dầu
    var x = 500;
    var y = 20;
    // var x = Math.random() * window.innerWidth;
    // var y = Math.random() * window.innerHeight;

    var rndX = 2;     //random starting velocity
    var rndY = 2;
    while (rndX == rndY) {
        rndY = Math.floor((Math.random() * 8) + 1);
    }
    console.log(rndX + ", " + rndY);
    var circle = new Circle(x, y, rndX, rndY, radius);
    ball = circle;

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fill();

}

function clearCanvas(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}
let pad = new Paddle(2);

createCircle()
function update() {
    clearCanvas();
    ball.update(pad);
    pad.update(0);
}

const xVar = setInterval(update, 1000 / 60);


function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            // Left
            pad.update(-15);
            break;
        case 39:
            // Right
            pad.update(15);
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}