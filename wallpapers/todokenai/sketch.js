// todokenai basho
// Dima Konev
// 


var bokeh = [];
var building = [];
function setup() {
    createCanvas(800, 1280);
    ff = 0;
    for (var j = 0; j < 100; j++) {
        building.push(new Building());
        if (j % 9 == 0) {
            building[building.length-1].isGate = true;
        }
        for (var i = building.length - 1; i >= 0; i--) {
            building[i].scale += building[i].scale * 0.1;
        }

        ff++;
    }
}

function draw() {
    if (frameCount % 30 == 0 && building.length < 200) {
        building.push(new Building());
        if (frameCount % 600 == 0) {
            building[building.length-1].isGate = true;
        }
    }

    noStroke();
    push();
        colorMode(HSB);
        for(var i = 0; i < 24; i++) {
            fill(114, 44, map(i, 0, 24, 0, 46), 0.9);
            rect(0, 0, width, height/24);
            translate(0, height/24);
        }
    pop();

    for (var i = building.length - 1; i >= 0; i--) {
        building[i].display();

        if (building[i].scale > 80) {
            building.splice(building.indexOf(building[i]), 1);
        }
    }
}

function Building() {
    this.isGate = false;

    this.direction = createVector(0.05, 0.05);
    this.location = createVector(random(-10, 10), random(-10, 10));
    this.scale = 1;

    this.display = function() {
        if (this.location.y < -5) {
            this.direction.y = 0.1;
        }
        else if (this.location.y > 5) {
            this.direction.y = -0.1;
        }
        if (this.location.x > 10) {
            this.direction.x = -0.1;
        }
        if (this.location.x < -10) {
            this.direction.x = 0.1;
        }

        this.location.add(this.direction);
        this.scale += this.scale * 0.001;

        push();
            rectMode(CORNERS);
            translate(width/2 + this.location.x, height/2 + this.location.y);
            noStroke();
            s = this.scale - 1;
            a = map(s, 0, 2, 0, 255);
            if (a > 255) {
                a = 255;
            }
            if(this.isGate == true) {
                fill(180, 190, 160, a);
                rect(s * -13, s * -12, s * 13, s * -8);
                rect(s * -12, s * -12, s * -10, s * 10);
                rect(s * 12, s * -12, s * 10, s * 10);
            }
            fill(111, 111, 111, a);
            rect(s * -15, s * 10, s * 15, s * 15); 

        pop();
    }
}

