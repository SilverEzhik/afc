// dima_16_class
// Dima Konev
// 

var axisX;
var axisY;
var x;
var y;
var distance;
var objectAngle;
var incrementAngle;

function setup() {
    createCanvas(800, 800);

    axisX = width/2;
    axisY = height/2;

    distance = 0;

    x = 0;
    y = 0;

    objectAngle = 360/4;
    incrementAngle = 0;

    background(80, 80, 100);
    noStroke();
}

function draw() {
    //translate(axisX, axisY);
    //background(80, 80, 100);
    colorMode(HSB);
    
    for (var i = 0; i < 10; i+=0.001) {
        fill(36 * i, 100, 100, 10); 
        x = axisX + distance * cos(radians(i * objectAngle + incrementAngle));
        y = axisY + distance * sin(radians(i * objectAngle + incrementAngle));
        rect(x, y, 10, 10);
    }
    distance++;
    incrementAngle += 100/distance;
}
