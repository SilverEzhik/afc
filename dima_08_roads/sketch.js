// afc_05_cells_n_stuff
// Dima Konev
// September 19 2017

//resolution
var resX;
var resY;

//the two fields
var lifeField = [];
var lifeField2 = [];

//variables for swapping around
var currentLF;
var lastLF;
var temp;

//dimensions of the field
var a;
var b;

var iterations = 0;

//mode to place cells
var setupMode = true;
//mode where each cell has a 1 in 10000 chance of randomly changing 
var chaos = false;



function setup() {
    res = 16;
    resX = res;
    resY = res;

    createCanvas(800, 800);
    //get dimensions
    a = parseInt(width/resX);
    b = parseInt(height/resY);

    //create two empty fields
    for(var i = 0; i < a; i++) {
        lifeField[i] = [];
        lifeField2[i] = [];
        for(var j = 0; j < b; j++) {
            lifeField[i][j] = false;
            lifeField2[i][j] = false;
        }
    }

    currentLF = lifeField;
    lastLF = lifeField2;
}

//toggles cell at x, y
function flickCell(x, y) {
   if (currentLF[x][y] == false) {
       currentLF[x][y] = true;
   }
   else {
       currentLF[x][y] = false;
   }
}

function getLastCell(x, y) {
    //wraparound
    if(x < 0) {
        return true;
        x = a + x;
    }
    else if (x >= a) {
        return true;
        x = x - a;
    }

    if(y < 0) {
        return true;
        y = b + y;
    }
    else if (y >= b) {
        return true;
        y = b - y;
    }

    return lastLF[x][y];
}


function wrapX(x) {
    if(x < 0) {
        x = a - 1;
    }
    else if (x >= a) {
        x = 0;
    }
    return x;
}
function wrapY(y) {
    if(y < 0) {
        y = b - 1;
    }
    else if (y >= b) {
        y = 0;
    }
    return y;
}
function neighborCountV(x, y) {
    var neighbors = 0;

    var j = 0;
    for(var i = -1; i <= 1; i++) {
        //don't count the cell itself
        if(Math.abs(i) == Math.abs(j)) {
            continue;
        } 
        
        //wrap around
        var nx = x + i;
        var ny = y + j;

        if(getLastCell(nx, ny) == true) {
            neighbors++;
        }
    }
    return neighbors;
}
function neighborCountH(x, y) {
    var neighbors = 0;

    var i = 0;
    for(var j = -1; j <= 1; j++) {
        //don't count the cell itself
        if(Math.abs(i) == Math.abs(j)) {
            continue;
        } 
        
        //wrap around
        var nx = x + i;
        var ny = y + j;

        if(getLastCell(nx, ny) == true) {
            neighbors++;
        }
    }
    return neighbors;
}
//returns the count of neighbors a cell has
function neighborCountVN(x, y) {
    var neighbors = 0;

    for(var i = -1; i <= 1; i++) {
        for(var j = -1; j <= 1; j++) {
            //don't count the cell itself
            if(Math.abs(i) == Math.abs(j)) {
                continue;
            } 
            
            //wrap around
            var nx = x + i;
            var ny = y + j;

            if(getLastCell(nx, ny) == true) {
                neighbors++;
            }
        }
    }
    return neighbors;
}
//returns the count of neighbors a cell has
function neighborCount(x, y) {
    var neighbors = 0;

    for(var i = -1; i <= 1; i++) {
        for(var j = -1; j <= 1; j++) {
            //don't count the cell itself
            if(i == 0 && j == 0) {
                continue;
            } 
            
            //wrap around
            var nx = x + i;
            var ny = y + j;

            if(getLastCell(nx, ny) == true) {
                neighbors++;
            }
        }
    }
    return neighbors;
}


//step process for a single cell
function cellStep(x, y) {
    if (lastLF[x][y] == false) {
        if ((neighborCountV(x, y) == 2 || neighborCountH(x, y) == 2) && (neighborCount(x, y) < 5)){
            currentLF[x][y] = true;
            return;
        }
        if (neighborCountVN(x, y) == 1) {
            if (neighborCount(x, y) == 1 && Math.floor(random(0, 100)) > 70) {
                currentLF[x][y] = true;
            }
            else if (neighborCount(x, y) == 2) {
                if (Math.floor(random(0, 100)) == 88) {
                    currentLF[x][y] = true;
                }
            }
        }
    }
    else {
        currentLF[x][y] = true;
    }
}

//swaps the two fields
function swapFields() {
    temp = currentLF;
    currentLF = lastLF;
    lastLF = temp;
}

//perform a single step
function lifeStep() {
    swapFields();
    for(var i = 0; i < a; i++) {
        for(var j = 0; j < b; j++) {
            cellStep(i, j);
        }
    }
}
function keyPressed() {
    //mode to place cells on screen
    if (key == ' ') {
        setupMode = !setupMode;
    }
    if (keyCode === 67) {
        chaos = !chaos;
    }
    //place a bunch of random cells on screen
    if (keyCode === 82) {
        for(var i = 0; i < a; i++) {
            for(var j = 0; j < b; j++) {
                var r = parseInt(random(0, 2));
                if (r == 1) {
                    flickCell(i, j);
                }
            }
        }
    }
    if (keyCode === 190) {
        lifeStep();
    }
    if (keyCode === 188) {
        swapFields();
    }
}

//toggle cell where the mouse is
function mousePressed() {
    if (setupMode == true) {
        flickCell(parseInt(mouseX/resX), parseInt(mouseY/resY));
        print(neighborCountVN(parseInt(mouseX/resX), parseInt(mouseY/resY)));
    }
}



function draw() {
    
    //change background depending on mode
    if(setupMode == false) {
        if(chaos == true) {
            background(255, 0, 0);
        }
        else {
            background(0, 255, 0);
        }
        //only swap field pointers if not in setup mode
        swapFields();
    }
    else {
        background(0, 0, 255);
    }

    strokeWeight(0);
    //combine rendering and performing live steps
    for(var i = 0; i < a; i++) {
        for(var j = 0; j < b; j++) {
            //only step if not in setup mode
            if(setupMode == false) {
                cellStep(i, j); 
                
                if (chaos == true) {
                    //life's not fair
                    var chance = parseInt(random(0,10000));
                    if (chance == 988) {
                        flickCell(i, j);
                        continue;
                    }
                }
            }
                
            //fill empty cell
            if(currentLF[i][j] == false) {
                if (neighborCountVN(i, j) == 1) {
                    fill(0, 0, 255);
                }
                if (neighborCount(i, j) == 2) {
                    fill(255, 0, 0);
                }
                else if (lastLF[i][j] == true) {
                    fill(170, 170, 170, 200);
                } else {
                    fill(200, 200, 200, 200);
                }
            }
            //fill cell that's filled
            else if (currentLF[i][j] == true) {
                fill(0, 0, 0);
                rect(i * resX, j * resY, resX, resY);
            }

            //draw cell
        }
    }
    if(setupMode == false) {
        //only increase iterations if not paused
        iterations++;
    }

    //print info
    fill(0,0,0);
    text('Mouse X = ' + parseInt(mouseX/resX) + " | Mouse Y = " + parseInt(mouseY/resY) +
         "\nIteration: " + iterations + 
         "\nSetup Mode: " + setupMode + " (Space to toggle)" + 
         "\nChaos Mode: " + chaos + " (c to toggle)" + 
         "\nr to flick a pile of random cells",
         10, 20);
}
