// afc_04_giorgio_de_chirico
// Dima Konev
// September 14 2017

var buildings = [];
var layerLengths = [0, 0, 0, 0, 0];

function setup() {
    createCanvas(800, 600);
    img = loadImage("horse.png"); 
}
function draw() { 
    background(90, 119, 125);
    
    //mountains
    fill(69, 67, 55);
    beginShape();
    vertex(800, 400);
    vertex(0, 400);
    vertex(150, 320);
    vertex(200, 330);
    vertex(300, 300);
    vertex(700, 320);
    endShape(CLOSE);

    makeHouse(300-90, 312.5, 0.75);
    //house shadow
    fill(30, 30, 30, 200);
    beginShape();
    vertex(260, 312.5);
    vertex(267 + 25 * 0.75, 312.5 + 25 * 0.75);
    vertex(267 + 25 * 0.75, 312.5 + 50 * 0.75);
    vertex(267 + 50 * 0.75, 312.5 + 50 * 0.75);
    vertex(267 + 50 * 0.75, 312.5 + 25 * 0.75);
    vertex(267 + 25 * 0.75, 312.5);
    endShape(CLOSE);

    //tower
    fill(188, 101, 71);
    strokeWeight(1);
    beginShape();
    vertex(300, 200);
    vertex(300, 350);
    vertex(500, 350);
    vertex(500, 200);
    vertex(450, 180);
    vertex(350, 180);
    endShape(CLOSE);

    //tower shadow
    strokeWeight(0);
    fill(30, 30, 30, 200);
    beginShape();
    vertex(420, 350);
    vertex(420 + 25, 350 - 25);
    vertex(480, 320);
    vertex(500, 325);
    vertex(500, 350);
    endShape(CLOSE);

    fill(30, 30, 30, 75);
    beginShape();
    vertex(300, 200);
    vertex(300, 350);
    vertex(350, 350);
    vertex(370, 350);
    vertex(375, 180);
    vertex(350, 180);
    endShape(CLOSE);
    beginShape();
    vertex(300, 200);
    vertex(300, 350);
    vertex(350, 350);
    vertex(370+10, 350);
    vertex(375+10, 180);
    vertex(350, 180);
    endShape(CLOSE);
    beginShape();
    vertex(300, 200);
    vertex(300, 350);
    vertex(350, 350);
    vertex(370+20, 350);
    vertex(375+20, 180);
    vertex(350, 180);
    endShape(CLOSE);

    //windows
    strokeWeight(0);
    fill(0, 0, 0);
    rect(450, 300, 25, 50);
    rect(420, 200, 10, 20);
    rect(455, 210, 10, 20);
    rect(360, 200, 10, 20);
    rect(320, 210, 10, 20);

    makeHouse(500, 312.5, 0.75);
    makeHouse(500+94, 325, 0.50);

    //ground
    fill(177, 127, 68);
    rect(0, 350, 800, 300);
    fill(30, 30, 30, 200);
    rect(0, 350 + 50, 800, 300);

    //horse
    fill(30, 30, 30, 200);
    beginShape();
    vertex(250, 370);
    vertex(390, 355);
    vertex(630, 360);
    vertex(630, 370);
    endShape(CLOSE);
    strokeWeight(1);
    stroke(111, 111, 111);
    fill(190, 190, 190);
    rect(630, 280, 90, 90);
    tint(0, 0, 0);
    image(img, 622, 192, 100, 100);

    strokeWeight(0);
    //walls
    fill(39, 37, 25);
    beginShape();
    vertex(670, 0);
    vertex(670, 400);
    vertex(800, 600);
    vertex(800, 0);
    endShape(CLOSE);

    beginShape();
    vertex(130, 50);
    vertex(130, 400);
    vertex(0, 600);
    vertex(0, -50);
    endShape(CLOSE);

    fill(150, 150, 150);
    beginShape();
    vertex(130, 50);
    vertex(130, 50+75);
    vertex(0, 50);
    vertex(0, -50);
    endShape(CLOSE);

    //fill(0,0,0);
    //text('Mouse X = ' + mouseX + " | Mouse Y = " + mouseY, 10, 10);
}
function makeHouse(x, y, s) {
    strokeWeight(s);
    stroke(103, 53, 51);

    fill(103, 53, 51);
    beginShape();
    vertex(x + (25 * s), y);
    vertex(x + (100 * s), y);
    vertex(x + (125 * s), y + (25 * s));
    vertex(x + (50 * s), y + (25 * s));
    endShape(CLOSE);
    
    fill(100, 100, 100);
    beginShape();
    vertex(x + (25 * s), y);
    vertex(x + (50 * s), y + (25 * s));
    vertex(x, y + (25 * s));
    endShape(CLOSE);
    beginShape();
    vertex(x + (50 * s), y + (25 * s));
    vertex(x, y + (25 * s));
    vertex(x, y + (50 * s));
    vertex(x + (50 * s), y + (50 * s));
    endShape(CLOSE);

    fill(150, 150, 150);
    beginShape();
    vertex(x + (50 * s), y + (25 * s));
    vertex(x + (50 * s), y + (50 * s));
    vertex(x + (125 * s), y + (50 * s));
    vertex(x + (125 * s), y + (25 * s));
    endShape(CLOSE);
    strokeWeight(0);
}
