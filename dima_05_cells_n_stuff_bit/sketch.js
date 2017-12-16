// afc_05_cells_n_stuff
// Dima Konev
// September 19 2017

//resolution
var resX = 16;
var resY = 16;

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
var backstep = 0;

//mode to place cells
var setupMode = true;
//mode where each cell has a 1 in 10000 chance of randomly changing 
var chaos = false;


function shiftCell(x, y) {
    //shift by 1
    lifeField[x][y] = (lifeField[x][y] << 1) & ~1;
}
function shiftCellBack(x, y) {
    //shift by 1
    lifeField[x][y] = lifeField[x][y] >>> 1;
}
function activateLastBitOfCell(x, y) {
    lifeField[x][y] |= 1;
}
function deactivateLastBitOfCell(x, y) {
    lifeField[x][y] &= ~1;
}
function getLSBOfCell(x, y) {
    return (lifeField[x][y] & 1);
}
function getSecondLSBOfCell(x, y) {
    return (lifeField[x][y] >>> 1) & 1;
}

function setup() {
    createCanvas(800, 800);
    //get dimensions
    a = parseInt(width/resX);
    b = parseInt(height/resY);

    //create two empty fields
    for(var i = 0; i < a; i++) {
        lifeField[i] = [];
        //lifeField2[i] = [];
        for(var j = 0; j < b; j++) {
            lifeField[i][j] = 0;
            //lifeField2[i][j] = false;
        }
    }

    //create glider
    flickCell(1, 3);
    flickCell(2, 3);
    flickCell(3, 3);
    flickCell(3, 2);
    flickCell(2, 1);
    
}

//toggles cell at x, y
function flickCell(x, y) {
   if (getLSBOfCell(x, y) == 1) {
       deactivateLastBitOfCell(x, y);
   }
   else {
       activateLastBitOfCell(x, y);
   }
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
            if(nx < 0) {
                nx = a - 1;
            }
            else if (nx >= a) {
                nx = 0;
            }
            var ny = y + j;
            if(ny < 0) {
                ny = b - 1;
            }
            else if (ny >= b) {
                ny = 0;
            }

            var neighbor;
            if (nx < x || (nx == x && ny < y)) {
                neighbor = getSecondLSBOfCell(nx, ny);
            }
            else {
                neighbor = getLSBOfCell(nx, ny);
            }
            neighbors += neighbor;
        }
    }
    return neighbors;
}

function currentNeighborCount(x, y) {
    var neighbors = 0;

    for(var i = -1; i <= 1; i++) {
        for(var j = -1; j <= 1; j++) {
            //don't count the cell itself
            if(i == 0 && j == 0) {
                continue;
            } 
            
            //wrap around
            var nx = x + i;
            if(nx < 0) {
                nx = a - 1;
            }
            else if (nx >= a) {
                nx = 0;
            }
            var ny = y + j;
            if(ny < 0) {
                ny = b - 1;
            }
            else if (ny >= b) {
                ny = 0;
            }

            if(getLSBOfCell(nx, ny) == 1) {
                neighbors++;
            }
        }
    }
    
    return neighbors;
}

//step process for a single cell
function cellStep(x, y) {

    shiftCell(x, y);
    neighbors = neighborCount(x, y);
    //less than 2 neighbors, die
    if (neighbors < 2) {
        deactivateLastBitOfCell(x, y);
    }
    //more than 3 neighbors, die
    else if (neighbors > 3) {
        deactivateLastBitOfCell(x, y);
    }
    //exactly 3 neighbors, come to life
    else if (neighbors == 3) {
        activateLastBitOfCell(x, y);
    }
    //two neighbors, be what you were before
    else {
        lifeField[x][y] |= getSecondLSBOfCell(x, y);
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
    for(var i = 0; i < a; i++) {
        for(var j = 0; j < b; j++) {
            cellStep(i, j);
        }
    }
    iterations++;
    if (backstep < 32) {
        backstep++;
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
    //.
    if (keyCode === 190) {
        lifeStep();
    }
    //,
    if (keyCode === 188) {
        if (backstep < 1) {
            return;
        }
        for(var i = 0; i < a; i++) {
            for(var j = 0; j < b; j++) {
                shiftCellBack(i, j);
            }
        }
        iterations--;
        backstep--;
    }
    //x
    if (keyCode === 88) {
        flickCell(parseInt(mouseX/resX), parseInt(mouseY/resY));
       /* print("flicc");
        var x = parseInt(mouseX/resX);
        var y = parseInt(mouseY/resY);
        for(var i = 0; i < a; i++) {
            for(var j = 0; j < b; j++) {
                if(i < x || (i == x && j < y)) {
                    flickCell(i, j);
                }
            }
        }*/
    }
}

//toggle cell where the mouse is
function mousePressed() {
    
    if (setupMode == true) {
        var x = parseInt(mouseX/resX);
        var y = parseInt(mouseY/resY);
        flickCell(x, y);
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
            if(getLSBOfCell(i, j) == 0) {
                if (getSecondLSBOfCell(i, j) == 1) {
                    fill(170, 170, 170, 200);
                }
                else if (lifeField[i][j] >>> 2 & 1 == 1) {
                    fill(190, 190, 190, 200);
                } else {
                    fill(200, 200, 200, 200);
                }
            }
            //fill cell that's filled
            else if (getLSBOfCell(i, j) == 1) {
                fill(0, 0, 0);
            }

            //draw cell
            rect(i * resX, j * resY, resX, resY);
        }
    }
    if(setupMode == false) {
        //only increase iterations if not paused
        iterations++;
        if (backstep < 31) {
            backstep++;
        }
    }

    //print info
    fill(0,0,0);
    text('Mouse X = ' + parseInt(mouseX/resX) + " | Mouse Y = " + parseInt(mouseY/resY) +
         "\nIteration: " + iterations + 
         "; Backstep: " + backstep + 
         "\nSetup Mode: " + setupMode + " (Space to toggle)" + 
         "\nChaos Mode: " + chaos + " (c to toggle)" + 
         "\nr to flick a pile of random cells",
         10, 20);
}
