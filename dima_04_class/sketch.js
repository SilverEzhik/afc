// afc_
// Dima Konev
// 

var font;

function setup() {
    createCanvas(800, 450);
    font = loadFont("./nicokaku_v1.ttf");
}

var oldX = [];
var oldY = [];

function draw() {
    background(200, 100, 0);
    strokeWeight(0);
    squares(0, 0, 255, 255, 255);
    squares(0, 0, 255, 255, 255);
    squares(25, 0, 0, 100, 200);
    squares(0, 25, 0, 100, 200);
    fill(200, 200, 200, 100);
    textSize(72);
    strokeWeight(1);

    textAlign(CENTER);

    textFont(font);
    text("あいうえお", mouseX, mouseY);
    text("あいうえお", oldX, oldY);
    fill(200, 200, 200, 10);
    for(var i = 0; i <= 100; i++) {
        text("あいうえお", oldX[i], oldY[i]);
        if(frameCount % i == 0) {
            oldX[i] = mouseX;
            oldY[i] = mouseY;
        }
    }
    
}

function squares(x, y, r, g, b) {
    fill(r, g, b, 50);
    for(var i = 0; i < 800/50; i++) {
        for(var j = 0; j < 450/50; j++) {
            if(i % 2 == 0 && j % 2 == 0) {
                rect(x + 50 * i, y + 50 * j, 50, 50);
            }
            else if(i % 2 != 0 && j % 2 != 0) {
                rect(x + 50 * i, y + 50 * j, 50, 50);
            }
        }
    }
}
