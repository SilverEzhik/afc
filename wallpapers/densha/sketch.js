// densha no mado kara
// Dima Konev
// 


var bokeh = [];
var building = [];
function setup() {
    createCanvas(800, 1280);
}

function draw() {
    if (frameCount % 30 == 0 && building.length < 10) {
        building.push(new Building());
    }
    if (frameCount % 20 == 0 && bokeh.length < 40) {
        bokeh.push(new Bokeh());
    }

    background(5, 10, 20, 100);

    for (var i = 0; i < building.length; i++) {
        building[i].display();

        if (building[i].location.x > width/2 + building[i].a/2 || building[i].location.x < -width/2 - building[i].a/2 || building[i].location.y > height/2 + building[i].b/2 || building[i].location.y < -height/2 - building[i].b/2) {
            if (random(10) > 9) {
                building.push(new Building());
            }
            building.splice(building.indexOf(building[i]), 1);
        }
    }
    for (var i = 0; i < bokeh.length; i++) {
        bokeh[i].display();

        if (bokeh[i].location.x > width/2 + bokeh[i].radius || bokeh[i].location.x < -width/2 - bokeh[i].radius || bokeh[i].location.y > height/2 + bokeh[i].radius || bokeh[i].location.y < -height/2 - bokeh[i].radius) {
            if (random(10) > 9) {
                bokeh.push(new Bokeh());
            }
            bokeh.splice(bokeh.indexOf(bokeh[i]), 1);
        }
    }
    if (frameCount < 600) {
        f = map(frameCount, 0, 600, 255, 0);
        background(0, 0, 0, f);
    }

}

function Building() {
    this.direction = createVector(random(-1, 1), random(-0.1, 1));
    this.location = createVector(0, 0);
    this.color = { h: 0, 
                   s: 0,
                   b: 0,
                   a: 0.3 
                 };
    this.a = random(width/4, width/2);
    this.b = random(height/2, height);

    this.display = function() {
        this.location.add(this.direction);
        this.radius += Math.sqrt(Math.pow(this.direction.x, 2) + Math.pow(this.direction.y, 2)) * 0.3;

        push();
            rectMode(CENTER);
            colorMode(HSB);
            translate(width/2, height/2);
            noStroke();
            hsbFill(this.color);
            rect(this.location.x, this.location.y, this.a, this.b);
        pop();
    }
}

function Bokeh() {
    this.direction = createVector(random(-1, 1), random(-1, 1));
    this.location = createVector(0, 0);
    this.color = { h: bokehRandom(), 
                   s: random(100),
                   b: random(90, 100),
                   a: random(0.3, 0.7) 
                 };
    this.radius = random(10, 50);

    this.display = function() {
        this.location.add(this.direction);
        this.radius += Math.sqrt(Math.pow(this.direction.x, 2) + Math.pow(this.direction.y, 2)) * 0.1;

        push();
            colorMode(HSB);
            translate(width/2, height/2);
            noStroke();
            hsbFill(this.color);
            ellipse(this.location.x, this.location.y, this.radius, this.radius);
        pop();
    }
}



function hsbFill(color) {
    fill(color.h, color.s, color.b, color.a);
}

function bokehRandom() {
    var color = random(360);

    while((color > 70 && color < 180) || (color > 260 && color < 310)) {
        color = random(360);
    }
    return color;
}
