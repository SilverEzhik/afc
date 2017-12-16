// dima_
// Dima Konev
// 

var circles;
function setup() {
    createCanvas(800, 800);
    background(255);

    circles = new Circles();
    rectMode(CENTER);
    noStroke();
}

function draw() {
    circles.display();
}

function Circles() { 
    this.display = function() {
        var p = 50;
        var s = 16;
        var mr = Math.abs(Math.sin(frameCount * 0.01));
        var mg = Math.abs(Math.cos(frameCount * 0.01));
        var mb = Math.abs(Math.sin(frameCount * 0.01) + Math.cos(frameCount * 0.01));
        for(var i = 0; i < p; i++) {
            for (var j = 0; j < p; j++) {
                fill((255-(i/p * 255)) * mr, j/p * 255 * mg, i/p * 255 * mb);
                if (frameCount % (i+j+1) == 0) {
                    rect(i * s, j * s, s * 4, s * 4);
                }
                else {
                    rect(i * s, j * s, s * 4, s * 4);
                }
            }
        }
    }
}
function grid() {
    var res = 10;
    stroke(0, 0, 0);
    strokeWeight(1);
    for (var i = 0; i < Math.max(width, height); i += res) {
        line(0, i, width, i);
        line(i, 0, i, height);
    }
}
