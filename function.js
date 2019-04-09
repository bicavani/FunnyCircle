function Circle() {
    this.radius = Math.floor(Math.random() * 40 + 40);
    this.speedx = Math.floor(Math.random() * 5 + 1);
    this.speedy = Math.floor(Math.random() * 5 + 1);
    this.x = Math.floor(Math.random() * (window.innerWidth - this.radius - this.radius + 1) + this.radius);
    this.y = Math.floor(Math.random() * (window.innerHeight - this.radius - this.radius + 1) + this.radius);
    this.color = getRandomColor();
    this.drawCircle = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    };
    this.moveCircle = function () {
        this.x += this.speedx;
        this.y += this.speedy;

        this.left = this.x - this.radius;
        this.top = this.y - this.radius;
        this.right = this.x + this.radius;
        this.bottom = this.y + this.radius;
    };
    this.checkCollision = function () {
        if (this.right >= window.innerWidth || this.left <= 0){
            this.speedx = -this.speedx;
        }
        if (this.bottom >= window.innerHeight || this.top <= 0) {
            this.speedy = -this.speedy
        }
    };
}

function getRandomHex() {
    let randomHex = Math.floor(Math.random() * 255);
    return randomHex;
}

function getRandomColor() {
    let r = getRandomHex();
    let g = getRandomHex();
    let b = getRandomHex();
    return "rgb(" + r + "," + g + "," + b + ")";
}
