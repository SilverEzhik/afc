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

//mode to place cells
var setupMode = false;
//mode where each cell has a 1 in 10000 chance of randomly changing 
var chaos = false;



function setup() {
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
    //create glider
    flickCell(10, 15);
    flickCell(11, 15);
    flickCell(12, 15);
    flickCell(12, 14);
    flickCell(11, 13);
    
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

            if(lastLF[nx][ny] == true) {
                neighbors++;
            }
        }
    }
    return neighbors;
}


//step process for a single cell
function cellStep(x, y) {
    //less than 2 neighbors, die
    if (neighborCount(x, y) < 2) {
        currentLF[x][y] = false;
    }
    //more than 3 neighbors, die
    else if (neighborCount(x, y) > 3) {
        currentLF[x][y] = false;
    }
    //exactly 3 neighbors, come to life
    else if (neighborCount(x, y) == 3) {
        currentLF[x][y] = true;
    }
    //two neighbors, be what you were before
    else {
        currentLF[x][y] = lastLF[x][y];
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
            if(currentLF[i][j] == false) {
                if (lastLF[i][j] == true) {
                    fill(170, 170, 170, 200);
                } else {
                    fill(200, 200, 200, 200);
                }
            }
            //fill cell that's filled
            else if (currentLF[i][j] == true) {
                fill(0, 0, 0);
            }

            //draw cell
            rect(i * resX, j * resY, resX, resY);
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
