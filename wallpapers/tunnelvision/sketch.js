// tunnel
// Dima Konev
// 

var angle;
var speed;
var offset;
var scalar;
var size;

function setup() {
    createCanvas(800, 800);
    background(200, 200, 200);

    angle = 0;
    speed = 0.5;
    offset = width/2;
    scalar = 0;
    size = random(5);


    noStroke();
}

function draw() {

    translate(width/2, height/2);
    x = width/2 - offset + Math.cos(angle) * scalar;
    y = height/2 - offset + Math.sin(angle) * scalar;

    fill(0, 100, 255, 100);
    ellipse(x, y, size, size);

    rotate(PI/3);
    fill(100, 0, 255, 100);
    ellipse(y, x, size, size);

    rotate(PI/3);
    fill(255, 100, 0, 100);
    ellipse(x, y, size, size);

    rotate(PI/3);
    fill(255, 0, 100, 100);
    ellipse(y, x, size, size);

    rotate(PI/3);
    fill(100, 255, 0, 100);
    ellipse(x, y, size, size);

    rotate(PI/3);
    fill(0, 255, 100, 100);

    angle += Math.pow(0.1, 2/ frameCount);
    scalar += 0.1; 
    size += 0.05;

    if (frameCount % 10000 == 0) {
        setup();
    }

}
