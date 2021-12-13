function Circle(x, y, vx, vy, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.vx = vx;
    this.vy = vy;

    this.update = function () {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.closePath();
        this.x += this.vx;
        this.y += this.vy;
        //changing direction on hitting wall
        if (this.y >= (1366 - 10) || this.y <= 10) {
            this.vy = -this.vy;
        }
        if (this.x >= (768 - 10) || this.x <= 10) {
            this.vx = -this.vx;
        }
    }
}

function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

var ball=[];

function createCircle(i) {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 30 * 2);
    var color = getRandomColor();
    // var x = 20;
    // var y = 20;
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var rndX = Math.floor((Math.random() * 8) + 1);     //random starting velocity
    var rndY = Math.floor((Math.random() * 8) + 1);

    var circle = new Circle(x, y, rndX, rndY, radius);
    ball.push(circle);

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

}

function clearCanvas(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.clearRect(0, 0, 1366, 768);
}

function createMultipleCircle() {
    let circles = new Array();
    for (var i = 0; i < 30; i++) {
        circles.push(createCircle(i));
    }

    let body = document.getElementById("body");

}

createMultipleCircle();

function update() {
    var i;
    clearCanvas();
    for (i = 0; i < 30; i++) {
        ball[i].update();
    }
}

setInterval(update, 2000 / 60);
