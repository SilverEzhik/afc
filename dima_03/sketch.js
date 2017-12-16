// afc_03
// Dima Konev
// September 12 2018

function setup() {
    createCanvas(800, 450);

}

var s = 0;
var a = 1;

function draw() {
    s += a;
    if (s > 800) {
        a = -a;
    }
    if (s == 0) {
        a = -a;
    }
    background(255, 0, 0);
    stroke(0,255,0);
    strokeWeight(s * 0.1);
    arc(100, 400, 100, 100, HALF_PI, TWO_PI, CHORD);
    rect(100, 100, 100, 100);
    ellipse(s, 100 + Math.sin(s * 0.1) * 20, 60, 60);
    
}
