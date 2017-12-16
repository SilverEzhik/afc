// dima_
// Dima Konev
//

var circles;
function setup() {
    createCanvas(720, 1280);
    background(255);

    circles = new Circles();
    rectMode(CENTER);
    noStroke();
}

function draw() {
    background(0, 0, 0);
    circles.display();

    for(var i = 0; i < 100; i++) {
        fill(100, 100, 100, i);
        //rect(i * 10, 100, 10, 10);
    }
}

var s = 20;

function Circles() {
    this.heights = [];
    for (var i = 0; i < 360; i++) {
        this.heights[i] = Math.floor(random(15));
    }

    //what pixel are we showing
    this.offset = 0;


    this.display = function() {
        push();
            fill(255);
            text("offset: " + this.offset, 10, 10);
            translate(this.offset, 0);
            colorMode(HSB);
            for(var i = 0; i < 360 + (height/s); i++) {
                var transparency = 0;

                for (var j = 0; j < height/s; j++) {
                    if (i * s + s < -this.offset || i * s > (-this.offset + width + s)) {
                        break;
                    }

                    if (j > this.heights[i % 360] && transparency < 1) {
                        transparency += 0.05;
                    }
                    if (transparency == 0) {
                        continue;
                    }
                    fill(i % 360, 100, 100, transparency)
                    rect(0, j * s, s, s);
                }
                translate(s, 0);
            }

            this.offset = (this.offset - 5) % (360 * s);
        pop();
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
