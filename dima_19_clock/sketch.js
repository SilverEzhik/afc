// dima_
// Dima Konev
// 

function setup() {
    createCanvas(800, 800);
}

const SECONDS_IN_A_DAY = 86400;

var zoom = 1;
var rot = 0;

function prevHour() {
    h = hour() - 1;
    if (h == -1) {
        return 23;
    }
    else {
        return h;
    }
}

function draw() {
    /*
    zoom = map(hour() * 3600 + minute() * 60 + second(), 0, SECONDS_IN_A_DAY, 0, 240); 
    zoom = map(second(), 0, 59, 0, 240); 
    */
    background(255);
    translate(width/2, height/2);

    colorMode(HSB);
    
    background(map(prevHour(), 0, 23, 0, 360), 50, 100);
    noStroke();
    fill(map(hour(), 0, 23, 0, 360), 50, 100);
    zoom = map(minute() * 60 + second(), 0, 3599, 0, Math.sqrt(width * width + height * height));
    ellipse(0, 0, zoom, zoom);

    //zoom = (hour() * 3600 + minute() * 60 + second());
    

   
    push();
        rotate(rot);
        var transparency = 0;
        for(var i = 0; i < 360; i++) {
            stroke(map(second(), 0, 59, 0, 360), 100, 50, transparency);
            line(0, 0, 0, -height/4);
            transparency += 1/360;
            rotate(PI/180);
        }
        rot = map(minute(), 0, 59, 0, 359) * PI/180;
    pop();
    
}


