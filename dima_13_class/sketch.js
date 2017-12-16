// dima_
// Dima Konev
// 

var riley_circle;

function setup() {
    createCanvas(800, 800);

    riley_circle = new RileyCircle();
    background(20);
    rectMode(CENTER);
}

function RileyCircle() {
    this.display = function() {
        for (var i = 0; i < 20; i++) {
            strokeWeight(random(10));
            stroke(255 - 255/i);
            fill(255/i);
            ellipse(random(width), height/2, i * 10, i * 10);
            ellipse(width/2, random(height), i * 10, i * 10);
            rect(width/2, random(height), i * 10, i * 10);
            rect(random(width), height/2, i * 10, i * 10);

        }
    }
}

function draw() {
    riley_circle.display();
}



