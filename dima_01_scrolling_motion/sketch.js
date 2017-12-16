// afc_01_scrolling_motion
// September 5 2017

function setup() {
    createCanvas(600, 600);
    background(255, 0, 0);
}

var r = 0;
var g = 0;
var b = 0;

var x = 0;
var y = 0;

function draw() {
    r = r + random();
    g = g + random();
    b = b + random();
    if (r > 255) {
        r = 0;
    } else {
        r++;
    }
    if (g > 255) {
        g = 0;
    } else {
        g = g + 2;
    }
    if (b > 255) {
        b = 0;
    } else {
        b = b + 3;
    }
    //background(r, g, b);

    fill(0,0,255,100);
    stroke(255,0,0);
    strokeWeight(4);
    ellipse(x, x, x*0.5, x*0.5);
    stroke(240,190,0);
    strokeWeight(88);
    point(41,50);
    fill(200,0,200,140);
    noStroke();
    triangle(200,300,200,100,60,60)
    fill(g,r,b,x*(17/40)-1)
    triangle(r*2.5,g*2.5,g*2.5,b*2.5,b*2.5,r*2.5)

    if (x > 600) {
        x = -40;
    } else {
        x++;
    }

}
