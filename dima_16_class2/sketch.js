// dima_
// Dima Konev
// 

var position;
var velocity;
var value;

function setup() {
    createCanvas(800, 800);
    background(90, 130, 130);
    position = createVector(random(width), random(height));
    velocity = createVector(0, 0);
    value = 0;
    strokeWeight(0.5);
}

function getValue(x, y) {
    return (position.x + position.y) * 0.01 * PI * 4;
    return sin(position.x * 0.01) + sin(position.y * 0.01) * PI * 2;
}

function draw() {
    value = getValue(position.x, position.y);

    velocity.x = cos(value) * 0.8;
    velocity.y = sin(value) * 0.8;

    beginShape(LINES);
        translate(position.x, position.y);
        vertex(position.x, position.y);
        velocity.x *= 0.99;
        velocity.y *= 0.99;
        position.x += velocity.x;
        position.y += velocity.y;
        vertex(position.x, position.y);
    endShape();

    if (position.x > width) {
        position.x = 0;
    }
    if (position.y > height) {
        position.y = 0;
    }
}
