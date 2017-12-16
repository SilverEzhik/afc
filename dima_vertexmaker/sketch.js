// dima_
// Dima Konev
//

function setup() {
    createCanvas(800, 800);

}

var points = [];

function mousePressed() {
    var point = new Object();
    point.x = Math.floor(mouseX - 400);
    point.y = Math.floor(mouseY - 400);
    points.push(point);
}

function getShape() {
    var s = "";
    for(var i = 0; i < points.length; i++) {
        s += "vertex(" + points[i].x + ", " + points[i].y + ");\n";
    }
    print(s);
}
function draw() {
    background(255);
    stroke(255, 0, 0);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);

    //mouse guide
    stroke(150);
    noFill();
    line(width/2, height/2, mouseX, mouseY);
    ellipseMode(RADIUS);
    var radius = Math.sqrt(Math.pow(mouseX - 400, 2) + Math.pow(mouseY - 400, 2));
    ellipse(width/2, height/2, radius, radius);

    text((mouseX - 400) + ", " + (mouseY - 400), 10, 10);


    translate(width/2, height/2);

    stroke(0);
    fill(0, 0, 255, 10);
    beginShape();
    for(var i = 0; i < points.length; i++) {
        vertex(points[i].x, points[i].y);
    }
    vertex(0, 0);
    endShape(CLOSE);
}
