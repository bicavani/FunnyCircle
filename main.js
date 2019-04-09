let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let circles = [];
let n = Math.floor(Math.random() * 20 + 20);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function creat() {
    let circle = new Circle(window.innerWidth, window.innerHeight);
    return circle;
}
function multicircle() {
    for (let i = 0; i < n; i++) {
        circles[i] = creat();
    }
}

function update() {
    context.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i < n; i++) {
        circles[i].moveCircle();
        circles[i].checkCollision();
        circles[i].drawCircle(context);
    }
}
multicircle();
setInterval("update()", 20);








