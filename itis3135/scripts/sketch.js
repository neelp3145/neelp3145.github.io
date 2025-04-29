let x = 100;
let y = 100;

function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw() {
    stroke(0);
    strokeWeight(2);
    line(x, y, mouseX, mouseY);
    x = mouseX;
    y = mouseY;
}
