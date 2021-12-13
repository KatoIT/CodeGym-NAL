
// Câu 1
function findMax(arr) {
    var max = arr[0];
    arr.forEach(i => {
        if (i > max) {
            max = i;
        }
    });
    return max;
}
// Câu 2
function tryRemoveFromArray(arr, x) {
    var index = [];
    for (const i in arr) {
        if (Object.hasOwnProperty.call(arr, i)) {
            const e = arr[i];
            if (x==e) {
                index.push(i);
                
            }
        }
    }
    for (let j = index.length-1; j >=0 ; j--) {
        arr.splice(index[j], 1);
    };
    return arr;
}
// Câu 3
function isPerfectSquare(x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
function isFibonacci(n) {
    return (isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4));
}
// Câu 4
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    
    this.render = function (canvas) {
        // 
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}//
var canvas = document.getElementById("myCanvas");
var circle = new Circle(10, 10, 100, '#000000');
circle.render(canvas);
//
// var arr = [1, 8, 3, 4, 5, 5, 6, 7, 8];
// arr.splice(8, 1)
// document.write(arr);
// document.write(isFibonacci(5));