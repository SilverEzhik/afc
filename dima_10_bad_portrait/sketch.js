// dima_10_actual_portrait
// Dima Konev
// 27 September 2017

var windowHue;
var bgHue;
var eyeHue;
var Saturation;


function setup() {
    createCanvas(800, 800);
    
    makeMouthWindow();    
    makeEyeWindow(200);
    eyeHue = random(360);
    makeEyeWindow(450);
    makeNoseWindow();
    
    Saturation = 100;
    bgHue = random(360);
    windowHue = random(360);
}
var windows = [];


titleHeight = 20;

function drawWindow(window) {
    strokeWeight(1);
    stroke(0, 0, 0);
    colorMode(HSB);
    fill(windowHue, Saturation, 70);
    rect(window.x, window.y, window.w, titleHeight);
    strokeWeight(0);
    if (windowHue > 190) {
        fill(0, 0, 100);
    }
    else {
        fill(0, 0, 0);
    }
    textAlign(CENTER, BASELINE);
    text(window.title, window.x + window.w/2, window.y + 15);
    strokeWeight(1);
    window.setup();
    fill(0, 0, 80);
    rect(window.x, window.y + titleHeight, window.w, window.h);

    //use relative x/y while drawing the window
    translate(window.x, window.y + titleHeight);
    window.draw();
    translate(-window.x, -(window.y + titleHeight));
}
function makeEyeWindow(x) {
    x = x - random(30) + random(30);
    y = 200 - random(30) + random(30);
    w = 200 - random(20) + random(20);
    h = 100 - random(20) + random(20);
    
    var r1 = 10 + random(20);
    var r2 = 10 + random(20);

    var window = createWindow(x, y, w, h, "Eye",
            function() {
                fill(200, 200, 200);
            },
            function() {
                strokeWeight(5);
                stroke(0, 0, 0);
                fill(0, 0, 100);
                beginShape();
                    curveVertex(-1000 + r2 * 30, this.h/2-400);
                    curveVertex(5, this.h/2);
                    curveVertex(this.w - 5, this.h / 2);
                    curveVertex(5, this.h/2);
                    curveVertex(-1000 + r1 * 30, this.h/2+400);
                endShape();    


                colorMode(HSB);
                strokeWeight(15);
                fill(0, 0, 0);
                stroke(eyeHue, Saturation, 50);
                ellipse(this.w/2, this.h/2, r2 * 2, r2 * 2);
                colorMode(RGB);  
                
                

            });
    windows.push(window);
}
function makeNoseWindow() {
    x = 350 - random(40) + random(40);
    y = 300 - random(40) + random(40);
    w = 100 - random(40) + random(40);
    h = 150 - random(40) + random(40);
    
    var r1 = -10 + random(20);
    var r2 = -10 + random(20);

    var hue = random(360);
    var window = createWindow(x, y, w, h, "Nose",
            function() {
                fill(200, 200, 200);
            },
            function() {
                noFill();
                strokeWeight(5);

                colorMode(HSB);
                stroke(hue, Saturation, 50);
                beginShape();
                    curveVertex(r1 * 100, r2 * 100);
                    curveVertex(this.w/2 + r1, 30 + r2);
                    curveVertex(this.w/2 + r2, this.h - 30 - r1);
                    curveVertex(this.w - r2 * 100, this.h - r1 * 100);
                endShape();    
                colorMode(RGB);  
                
                

            });
    windows.push(window);
}

function makeMouthWindow() {
    x = 200 - random(40) + random(40);
    y = 500 - random(40) + random(40);
    w = 400 - random(40) + random(40);
    h = 100 - random(40) + random(40);
    
    var r1 = -10 + random(20);
    var r2 = -10 + random(20);
    var r3 = -10 + random(10);
    var r4 = 10 + random(10);


    var hue = random(360);
    var window = createWindow(x, y, w, h, "Mouth",
            function() {
                fill(200, 200, 200);
            },
            function() {
                noFill();
                strokeWeight(5);

                colorMode(HSB);
                stroke(hue, Saturation, 50);
                beginShape();
                    curveVertex(r1 * 100, r3 * 100);
                    curveVertex(50 + r1, this.h / 2 + r2);
                    curveVertex(this.w - 50 - r2, this.h / 2 + r1);
                    curveVertex(this.w - r2 * 100, this.h - r4 * 100);
                endShape();    
                colorMode(RGB);  
                
                r3 += 0.0001;
                r4 -= 0.0001;
                

            });
    windows.push(window);
}
function makeGenericWindow(x, y, w, h) {
    var window = createWindow(x, y, w, h, "Test window",
            function() {
                fill(200, 200, 200);
            },
            function() {

                var w = 20;
                var h = 20;

            });
    windows.push(window);
}
function createWindow(x, y, w, h, title, bg, f) {
    var window = new Object();
    window.x = Math.floor(x);
    window.y = Math.floor(y);
    window.w = Math.floor(w);
    window.h = Math.floor(h);
    window.title = title;

    window.setup = bg;
    window.draw = f;
    window.globalX = function(x) {
        return this.x + x;
    }
    window.globalY = function(y) {
        return this.y + titleHeight + y;
    }

    return window;
}


function draw() {
    colorMode(HSB);
    background(bgHue, Math.max(Saturation * 0.4, 0), 90);
    noFill()
    strokeWeight(5);

    for(var i = 0; i < windows.length; i++) {
        drawWindow(windows[i]);
    }


    //spoilers











































    //Ezhik was having a bad day and made a computer get sad too









    //stay for a while
    Saturation = Math.max(0, Saturation - 0.0001);
    if (frameCount >= 600 && mouseIsPressed == false) {
           location.reload();
    } 
}
