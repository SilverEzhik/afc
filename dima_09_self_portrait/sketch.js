// dima_09_self_portrait
// Dima Konev
// September 24 2017

//setup the image to show


//resolution
var resX = 16;
var resY = 16;

//the field
var arr = [];

//dimensions of the field
var a;
var b;

function setup() {
    createCanvas(800, 800);
    //get dimensions
    a = Math.floor(width/resX);
    b = Math.floor(height/resY);

    //create two empty fields
    for(var i = 0; i < a; i++) {
        arr[i] = [];
        for(var j = 0; j < b; j++) {
            arr[i][j] = false;
        }
    }

    arr[7][21] = true;
    arr[7][22] = true;
    arr[7][23] = true;
    arr[7][24] = true;
    arr[7][25] = true;
    arr[7][26] = true;
    arr[7][27] = true;
    arr[7][28] = true;
    arr[8][20] = true;
    arr[8][21] = true;
    arr[8][22] = true;
    arr[8][23] = true;
    arr[8][24] = true;
    arr[8][25] = true;
    arr[8][26] = true;
    arr[8][27] = true;
    arr[8][28] = true;
    arr[8][29] = true;
    arr[8][30] = true;
    arr[9][19] = true;
    arr[9][20] = true;
    arr[9][21] = true;
    arr[9][22] = true;
    arr[9][23] = true;
    arr[9][24] = true;
    arr[9][25] = true;
    arr[9][26] = true;
    arr[9][27] = true;
    arr[9][28] = true;
    arr[9][29] = true;
    arr[9][30] = true;
    arr[9][31] = true;
    arr[10][15] = true;
    arr[10][16] = true;
    arr[10][17] = true;
    arr[10][18] = true;
    arr[10][19] = true;
    arr[10][20] = true;
    arr[10][21] = true;
    arr[10][22] = true;
    arr[10][23] = true;
    arr[10][24] = true;
    arr[10][25] = true;
    arr[10][26] = true;
    arr[10][27] = true;
    arr[10][28] = true;
    arr[10][29] = true;
    arr[10][30] = true;
    arr[10][31] = true;
    arr[11][13] = true;
    arr[11][14] = true;
    arr[11][15] = true;
    arr[11][16] = true;
    arr[11][19] = true;
    arr[11][20] = true;
    arr[11][21] = true;
    arr[11][22] = true;
    arr[11][23] = true;
    arr[11][24] = true;
    arr[11][25] = true;
    arr[11][26] = true;
    arr[11][27] = true;
    arr[11][28] = true;
    arr[11][29] = true;
    arr[11][30] = true;
    arr[11][31] = true;
    arr[12][12] = true;
    arr[12][13] = true;
    arr[12][14] = true;
    arr[13][11] = true;
    arr[13][12] = true;
    arr[13][23] = true;
    arr[13][24] = true;
    arr[13][25] = true;
    arr[13][26] = true;
    arr[14][10] = true;
    arr[14][11] = true;
    arr[14][27] = true;
    arr[15][9] = true;
    arr[15][10] = true;
    arr[15][27] = true;
    arr[16][8] = true;
    arr[16][9] = true;
    arr[16][27] = true;
    arr[17][8] = true;
    arr[17][9] = true;
    arr[17][27] = true;
    arr[18][7] = true;
    arr[18][8] = true;
    arr[18][27] = true;
    arr[19][7] = true;
    arr[19][8] = true;
    arr[19][27] = true;
    arr[20][6] = true;
    arr[20][7] = true;
    arr[20][8] = true;
    arr[20][27] = true;
    arr[21][6] = true;
    arr[21][7] = true;
    arr[21][27] = true;
    arr[22][6] = true;
    arr[22][7] = true;
    arr[22][23] = true;
    arr[22][24] = true;
    arr[22][25] = true;
    arr[22][26] = true;
    arr[23][6] = true;
    arr[23][7] = true;
    arr[23][24] = true;
    arr[24][6] = true;
    arr[24][7] = true;
    arr[24][24] = true;
    arr[25][6] = true;
    arr[25][7] = true;
    arr[25][24] = true;
    arr[26][6] = true;
    arr[26][7] = true;
    arr[26][24] = true;
    arr[27][6] = true;
    arr[27][7] = true;
    arr[27][23] = true;
    arr[27][24] = true;
    arr[27][25] = true;
    arr[27][26] = true;
    arr[28][6] = true;
    arr[28][7] = true;
    arr[28][27] = true;
    arr[29][6] = true;
    arr[29][7] = true;
    arr[29][8] = true;
    arr[29][27] = true;
    arr[30][7] = true;
    arr[30][8] = true;
    arr[30][27] = true;
    arr[31][7] = true;
    arr[31][8] = true;
    arr[31][27] = true;
    arr[32][8] = true;
    arr[32][9] = true;
    arr[32][27] = true;
    arr[33][8] = true;
    arr[33][9] = true;
    arr[33][27] = true;
    arr[34][9] = true;
    arr[34][10] = true;
    arr[34][27] = true;
    arr[35][10] = true;
    arr[35][11] = true;
    arr[35][27] = true;
    arr[36][11] = true;
    arr[36][12] = true;
    arr[36][23] = true;
    arr[36][24] = true;
    arr[36][25] = true;
    arr[36][26] = true;
    arr[37][12] = true;
    arr[37][13] = true;
    arr[37][14] = true;
    arr[38][13] = true;
    arr[38][14] = true;
    arr[38][15] = true;
    arr[38][16] = true;
    arr[38][19] = true;
    arr[38][20] = true;
    arr[38][21] = true;
    arr[38][22] = true;
    arr[38][23] = true;
    arr[38][24] = true;
    arr[38][25] = true;
    arr[38][26] = true;
    arr[38][27] = true;
    arr[38][28] = true;
    arr[38][29] = true;
    arr[38][30] = true;
    arr[38][31] = true;
    arr[39][15] = true;
    arr[39][16] = true;
    arr[39][17] = true;
    arr[39][18] = true;
    arr[39][19] = true;
    arr[39][20] = true;
    arr[39][21] = true;
    arr[39][22] = true;
    arr[39][23] = true;
    arr[39][24] = true;
    arr[39][25] = true;
    arr[39][26] = true;
    arr[39][27] = true;
    arr[39][28] = true;
    arr[39][29] = true;
    arr[39][30] = true;
    arr[39][31] = true;
    arr[40][19] = true;
    arr[40][20] = true;
    arr[40][21] = true;
    arr[40][22] = true;
    arr[40][23] = true;
    arr[40][24] = true;
    arr[40][25] = true;
    arr[40][26] = true;
    arr[40][27] = true;
    arr[40][28] = true;
    arr[40][29] = true;
    arr[40][30] = true;
    arr[40][31] = true;
    arr[41][20] = true;
    arr[41][21] = true;
    arr[41][22] = true;
    arr[41][23] = true;
    arr[41][24] = true;
    arr[41][25] = true;
    arr[41][26] = true;
    arr[41][27] = true;
    arr[41][28] = true;
    arr[41][29] = true;
    arr[41][30] = true;
    arr[42][21] = true;
    arr[42][22] = true;
    arr[42][23] = true;
    arr[42][24] = true;
    arr[42][25] = true;
    arr[42][26] = true;
    arr[42][27] = true;
    arr[42][28] = true;

    
    fontIosevka = loadFont("./iosevka-custom-medium.ttf");
    fontRobotoCondensed = loadFont("./RobotoCondensed-Regular.ttf");

    setupWindows();
    

    frameRate(30);
}
var fontIosevka;
var fontRobotoCondensed;
function isPainted(x, y) {
    return arr[Math.floor(x/resX)][Math.floor(y/resY)];
}
function isPaintedRange(x, y, w, h) {
    var x1 = Math.max(Math.floor(x/resX), 0);
    var x2 = Math.min(Math.floor((x+w)/resX), a);
    var y1 = Math.max(Math.floor(y/resY), 0);
    var y2 = Math.min(Math.floor((y+h)/resY), b);

    for(var i = x1; i < x2; i++) {
        for(var j = y1; j < y2; j++) {
            if (arr[i][j] == true) {
                return true;
            }
        }
    }
    return false;
}
//shuffle array
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffleArray(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
function setupWindows() {
    makeTerminalWindow(10 + random(300), 10 + random(300), 300 + random(400), 200+ random(400));
    makeFinderWindow(10 + random(300), 10 + random(300), 300 + random(400), 200+ random(400));
    makeTerminalWindow(10 + random(300), 10 + random(300), 300 + random(400), 200+ random(400));
    makePhotoshopWindow(10 + random(300), 10 + random(300), 300 + random(400), 100+ random(400));
    makeFinderWindow(10 + random(300), 10 + random(300), 300 + random(200), 200+ random(200));
}
function makeFinderWindow(x, y, w, h) {
    w = w - w % 50;
    h = h - h % 50;
    w = Math.max(400, w);
    h = Math.max(300, h);
    var window = createWindow(x, y, w, h, "Finder",
            function() {
                fill(245, 245, 245);
            },
            function() {
                
                var w = 20;
                var h = 20;
                fill(255, 255, 255);
                textFont(fontIosevka, 16);
                textAlign(CENTER, BOTTOM);
                
                for(var i = 20; i < this.w - 50; i += 25) {
                    for(var j = 20; j < this.h - 50; j += 25) {
                        var x = this.globalX(i);
                        var y = this.globalY(j);
                        if(isPaintedRange(x - 10, y - 10, 30, 30) == true) {
                            var t1 = Math.floor(i + Math.cos(j*0.1) * 5 - 10);
                            var t2 = Math.floor(j + Math.sin(i*0.1) * 5 - 10);
                            translate(t1, t2);
                            if (Math.sin(i * j) > -0.1) {
                                colorMode(HSB);
                                stroke(360 * Math.sin(i + j + 0.5), 50, 100);
                                fill(360 * Math.sin(i + j + 0.5), 50, 100);
                                rect(0, 0, 40, Math.floor(35 + sin(i)));
                                colorMode(RGB);
                            }
                            else {
                                stroke(100, 179, 217);
                                fill(110, 203, 249);
                                rect(0, 0, 10, 5); 
                                rect(0, 5, 40, 30);
                                stroke(0, 0, 0);
                            }
                            strokeWeight(0);
                            fill(100, 100, 100);
                            rect(-5, 40, 50, 5);
                            strokeWeight(1);
                            translate(-t1, -t2);
                        }
                    }
                }
                strokeWeight(0);
                fill(211, 211, 211, 100);
                rect(0, 0, this.w, 50);
                fill(222, 222, 222, 100);
                rect(0, 50, Math.floor(this.w/4.5), this.h - 50);
            });
    windows.push(window);
}
function makeTerminalWindow(x, y, w, h) {
    w = w - w % 10 + 4;
    h = h - h % 20 + 3;
    var window = createWindow(x, y, w, h, "Terminal",
            function() {
                fill(0, 0, 0, 240);
            },
            function() {
                
                var w = 20;
                var h = 20;
                fill(255, 255, 255);
                textFont(fontIosevka, 16);
                textAlign(CENTER, BOTTOM);
                
                for(var i = 7; i < this.w - 5; i += 10) {
                    for(var j = 20; j < this.h; j += 20) {
                        var x = this.globalX(i);
                        var y = this.globalY(j);
                        if(isPaintedRange(x - 11, y - 24, 16, 26) == true) {
                            text(String.fromCharCode(Math.floor(33 + random(126-33))), i, j);
                        }
                    }
                }
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
                
                for(var i = 0; i < w; i++) {
                    for(var j = 0; j < h; j++) {
                        var x = this.globalX(this.w/w * i);
                        var y = this.globalY(this.h/h * j);
                        var dx = this.w/w * i;
                        var dy = this.h/h * j;
                        if(isPaintedRange(x, y, w, h) == true) {
                            fill(0, 0, 0);
                            rect(dx, dy, 10, 10);
                        }
                    }
                }
            });
    windows.push(window);
}
function makePhotoshopWindow(x, y, w, h) {
    w = Math.max(500, w);
    w += w % 10;
    h = Math.max(300, h);
    var window = createWindow(x, y, w, h, "Adobe Photoshop",
            function() {
                // dark theme photoshop
                fill(40, 40, 40);
            },
            function() {
                fill(255, 255, 255);
                
                var canvasX = 50
                var canvasY = 50;
                var canvasW = this.w - 120 - 20 - 60
                var canvasH = this.h - 100 + 30;
                rect(canvasX, canvasY, canvasW, canvasH);
                
                var w = 20;
                var h = 20;
                
                var limit = this.w * 0.1;
                translate(canvasX + canvasW/2, canvasY + canvasH/2);
                colorMode(HSB);
                stroke(360 * Math.sin((this.x + this.y) / 800), 50, 70);
                colorMode(RGB);
                strokeWeight(10);
                for (var i = -limit/2 - 3; i < limit/2 + 3 + 16; i++) {
                    for (var j = -limit/2 - 3; j < limit/2 + 0; j++) {

                        //how many layers of translation are you on?
                        var x = this.globalX(canvasW/limit * i + canvasW/2 + canvasX);
                        var y = this.globalY(canvasH/limit * j + canvasH/2 + canvasY);
                        var dx = canvasW/limit * i;
                        var dy = canvasH/limit * j;
                        if(isPaintedRange(x, y, w, h) == true) {
                            fill(0, 0, 0);
                            translate(canvasW/limit * i, canvasH/limit * j);
                            line(0, 0, j * 0.5, -i * 0.5);
                            translate(canvasW/limit * -i, canvasH/limit * -j);
                        }
                    }
                }
                translate(-(canvasX + canvasW/2), -(canvasY + canvasH/2));
                strokeWeight(0);
                stroke(0, 0, 0);
                fill(40, 40, 40, 100);
                var canvasX = 50
                var canvasY = 50;
                var canvasW = this.w - 120 - 20 - 60
                var canvasH = this.h - 100 + 30;
                rect(20, 30, canvasW + 60, 20);
                rect(20, 30, 30, 20 + 20 + canvasH);
                rect(20 + canvasW + 30, 30, 30, 20 + 20 + canvasH);
                rect(20, 30 + canvasH + 20, canvasW + 60, 20);
                strokeWeight(1);


                //photoshop ui
                fill(83, 83, 83, 150);
                rect(0, 0, this.w, 30);
                rect(0, 0 + 30, 20, this.h - 30);
                rect(0 + this.w - 120, 0 + 30, 120, 70);
                rect(0 + this.w - 120, 0 + 30 + 70, 120, 100);
                rect(0 + this.w - 120, 0 + 30 + 70 + 100, 120, this.h - (30 + 70 + 100));
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

var titleHeight = 20;
var windows = [];

var focusedWindow = null;

var draggedWindow = null;
var draggedWindowOffsetX = null;
var draggedWindowOffsetY = null;

function drawWindow(window, front) {
    stroke(0, 0, 0);
    if(front == true) {
        fill(0, 50, 100);
    } else {
        fill(100, 100, 100);
    }
    strokeWeight(1);
    rect(window.x, window.y, window.w, titleHeight);
    fill(255, 255, 255);
    strokeWeight(0);
    textFont(fontRobotoCondensed, 14);
    textAlign(CENTER, BASELINE);
    text(window.title, window.x + window.w/2, window.y + 15);
    strokeWeight(1);
    window.setup();
    rect(window.x, window.y + titleHeight, window.w, window.h);
    
    //use relative x/y while drawing the window
    translate(window.x, window.y + titleHeight);
    window.draw();
    translate(-window.x, -(window.y + titleHeight));
}

function getClickedWindow() {
    var obj = new Object();
    for (var i = windows.length - 1; i >= 0; i--) {
        if (mouseX >= windows[i].x && mouseX <= windows[i].x + windows[i].w &&
            mouseY >= windows[i].y && mouseY <= windows[i].y + titleHeight + windows[i].h) {
            obj.window = windows[i];
            obj.clickedTitleBar = (mouseY >= windows[i].y && mouseY <= windows[i].y + titleHeight);
            return obj;
        }
    }
    return null;
}



function keyPressed() {
}

//detect where the click took place
function mousePressed() {
    var click = getClickedWindow();

    //background clicked
    if (click == null) {
        focusedWindow = null;
        return;
    }
    //make the window highlighted
    focusedWindow = click.window;

    //put the window in front
    windows.splice(windows.indexOf(click.window), 1);
    windows.push(click.window);
   
    //prepare for drag
    if (click.clickedTitleBar == true) {
        draggedWindow = click.window;
        draggedWindowOffsetX = mouseX - draggedWindow.x;
        draggedWindowOffsetY = mouseY - draggedWindow.y;
    }
}





function draw() {
    background(0, 20, 60);

    //handle drags
    if (mouseIsPressed == true && draggedWindow != null) {
        draggedWindow.x = mouseX - draggedWindowOffsetX;
        draggedWindow.y = mouseY - draggedWindowOffsetY;
    }
    else {
        draggedWindow = null;
        draggedWindowOffsetX = null;
        draggedWindowOffsetY = null;
    }
        
    //draw all the windows
    for(var i = 0; i < windows.length; i++) {
        drawWindow(windows[i], windows[i] == focusedWindow);
    }
    
    //drawDebugText();
}

function drawDebugText() {
    //print info
    fill(255, 255, 0);
    textFont(fontRobotoCondensed, 14);
    textAlign(LEFT, BASELINE);
    text(Math.floor(frameRate()) + " FPS" + "\n" + 
        "Mouse X = " + mouseX + " | Mouse Y = " + mouseY + "\n" +
        "Tiles Mouse X = " + Math.floor(mouseX/resX) + " | Tiles Mouse Y = " + Math.floor(mouseY/resY) + "\n" +
        "mouseIsPressed = " + mouseIsPressed, 10, 20);
}
function drawBackgroundImage() {
    for(var i = 0; i < a; i++) {
        for(var j = 0; j < b; j++) {
            if(arr[i][j] == false) {
                fill(200, 200, 200, 200);
            }
            else {
                fill(0, 0, 0);
                rect(i * resX, j * resY, resX, resY);
            }

        }
    }
}
