// dima_
// Dima Konev
//

function setup() {
    createCanvas(800, 800);
}

const SECONDS_IN_A_DAY = 86400;

var zoom = 1;
var rot = 0;


// replace hour() with 0 - 23 to quickly test different hours
function althour() {
    return hour();
}

//get color for previous hour
function prevHour() {
    h = althour() - 1;
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
    
    //center everything
    translate(width/2, height/2);

    //use hsb color
    colorMode(HSB);

    //background of previous hour circle
    background(map(prevHour(), 0, 23, 0, 360), 40, 100);

    //current circle
    fill(map(althour(), 0, 23, 0, 360), 40, 100);
    
    //slowly expand to fill in the circle as the hour reaches XX:59:59
    zoom = map(minute() * 60 + second(), 0, 3599, 0, Math.sqrt(width * width + height * height));
    stroke(map(althour(), 0, 23, 0, 360), 50, 90);
    ellipse(0, 0, zoom, zoom);

    //zoom = (hour() * 3600 + minute() * 60 + second());



    //minute arrow
    push();
        rotate(rot);
        var transparency = 0;
        for(var i = 0; i < 360; i++) {
            //fill changing per second 
            stroke(map(second(), 0, 59, 270, 360), 100, 80, transparency);
            line(0, 0, 0, -height/4);
            transparency += 1/360;
            rotate(PI/180);
        }
        rot = map(minute(), 0, 59, 0, 359) * PI/180;
    pop();

}
