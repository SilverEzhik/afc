// dima_17_scrollingwallpaper
// Dima Konev
// October 30 2017

var grid1;
var grid2;

var circle1;
var circle2;

var square;

function setup() {
    createCanvas(540, 960);

    grid1 = new Grid(0);
    grid2 = new Grid(180);

    circle1 = new Circle(width/2, height - 50, -1, -1, 50, 0);
    circle2 = new Circle(width/2, 50, 1, 1, 50, 180);
    //circle2 = new Circle(180, 1, 1);

    square = new Square(0, 1, 1);
    frameRate(24);
}

function draw() {
    push();
        noFill();
        strokeWeight(2);
        translate(width/2, height/2);
        square.display();
        //rotate(PI);
        //circle3.display();
        //circle4.display();
    pop();

    push();
        noFill();
        strokeWeight(2);
        grid1.display();
        translate(width, height);
        rotate(PI);
        grid2.display();
    pop();


    push();
        noFill();
        strokeWeight(2);
        circle1.display();
        circle2.display();
    pop();


}

var s = 20;

function Circle(x, y, dx, dy, r, color) {
    //this.offset = offset;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.x = x;
    this.y = y;
    this.r = r;
    this.display = function() {
        push();
            colorMode(HSB);
            stroke(this.color, 100, 100, 1);

            ellipse(this.x, this.y, this.r * 2, this.r * 2);
            this.x += this.dx;
            this.y += this.dy;

            
            if (this.x < 0 + this.r || this.x > width - this.r) {
                this.dx = -this.dx;
            }
            if (this.y < 0 + this.r || this.y > height - this.r) {
                this.dy = -this.dy;
            }
            this.color = (this.color + 0.5) % (360);
        pop();
    }
}

function Square(offset, direction, size) {
    this.offset = offset;
    this.color = offset;
    this.display = function() {
        push();
            rectMode(CENTER);
            colorMode(HSB);
            rotate(direction * this.offset / 180 * PI);
            stroke(this.color, 100, 100, 1);
            rect(0, 0, 100 * size, 100 * size);
            this.offset = (this.offset + 0.8) % (720);
            this.color = (this.color + (1.5) * direction) % (360);
        pop();
    }
}

function Grid(offset) {
    this.x = new Columns(width, height, offset);
    this.y = new Columns(height, width, offset);

    this.display = function() {
        push();
            this.x.display();
            translate(width, 0);
            rotate(PI/2);
            this.y.display();
        pop();
    }
}
function Columns(w, h, offset) {
    this.heights = [];
    for (var i = 0; i < 360; i++) {
        this.heights[i] = Math.floor(random(30));
    }

    //what pixel are we showing
    this.offset = -offset * s;


    this.display = function() {
        push();
            fill(255);
            //text("offset: " + this.offset/s, 10, 10);
            translate(this.offset, 0);
            colorMode(HSB);
            for(var i = 0; i < 360 + (w/s); i++) {
                var transparency = 0;/// (360 - (i % 360));
                push();
                for (var j = 0; j <= h/s; j+=1) {
                    if (i * s + s < -this.offset || i * s > (-this.offset + w + s)) {
                        break;
                    }
                    transparency += 0.025;

                    stroke(i % 360, 100, 100, transparency);
                    line(0, 0, 0, s);
                    translate(0, s);
                }
                pop();
                
                translate(s, 0);
            }

            this.offset = (this.offset - 1) % (360 * s);
        pop();
    }
}
