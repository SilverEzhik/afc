// dima_
// Dima Konev
// 

var x;
var y;

var fx;

var diameter;
var speed;


function setup() {
    createCanvas(800, 800);
    background(200, 200, 200);

    x = 0;
    y = 0;

    fx = 0;

    diameter = 20; 
    speed = 2.5;

    noStroke();
}

function bounce() {
    if (x > width || x < 0) {
        speed = -speed;
    }
}
function yBounce() {
    y = height/2 - (100 * Math.abs(cos(PI * fx / 400)));
}
function draw() {
    bounce();

    fill(100, 100, 100);
    rect(0, height/2 + diameter/2, width, height/2);

    fill(255, 0, 100, 10);
    ellipse(x, y, diameter, diameter);
    fill(0, 100, 255, 10);
    ellipse(width - x, y, diameter, diameter);
    x += speed;
    fx += Math.abs(speed);
    yBounce();
}
