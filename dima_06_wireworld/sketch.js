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
            lifeField[i][j] = 0;
            lifeField2[i][j] = 0;
        }
    }

    currentLF = lifeField;
    lastLF = lifeField2;

    for(var i = 0; i < a; i++) {
        flickCell(i, 15);
    }
}

//toggles cell at x, y
function flickCell(x, y) {
   if (currentLF[x][y] != 0) {
       print("what");
       currentLF[x][y] = 0;
   }
   else {
       currentLF[x][y] = 3;
   }
}

//returns the count of neighbors a cell has that are electron heads
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

            if(lastLF[nx][ny] == 1) {
                neighbors++;
            }
        }
    }
    return neighbors;
}

//step process for a single cell
function cellStep(x, y) {
    //empty stays empty
    if (lastLF[x][y] == 0) {
        currentLF[x][y] = 0;
    }
    //head becomes tail
    else if (lastLF[x][y] == 1) {
        currentLF[x][y] = 2;
    }
  //tail becomes conductor
    else if (lastLF[x][y] == 2) {
        currentLF[x][y] = 3;
    }
    //conductor becomes...
    else if (lastLF[x][y] == 3) {
        var neighbors = neighborCount(x, y);
        //electron head, if 1/2 electron heads are nearby
        if (neighbors == 1 || neighbors == 2) {
            currentLF[x][y] = 1;
        }
        else {
            currentLF[x][y] = 3;
        }
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
    if (setupMode == true) {
        if (keyCode === 190) {
            lifeStep();
        }
        if (keyCode === 188) {
            swapFields();
        }
        if (keyCode === 88) {
            currentLF[parseInt(mouseX/resX)][parseInt(mouseY/resY)] = 1;
        }
        if (keyCode === 90) {
            currentLF[parseInt(mouseX/resX)][parseInt(mouseY/resY)] = 2;
        }
    }
}

//toggle cell where the mouse is
function mousePressed() {
    if (setupMode == true) {
        flickCell(parseInt(mouseX/resX), parseInt(mouseY/resY));
    }
}



function draw() {
    background(0, 0, 0);
    
    //change background depending on mode
    if(setupMode == false) {
        stroke(100, 100, 100);
        
        //only swap field pointers if not in setup mode
        swapFields();
    }
    else {
        stroke(0, 0, 255);
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
            if(currentLF[i][j] == 0) {
                fill(0, 0, 0, 0);
            }
            //fill cell that's filled
            else if (currentLF[i][j] == 1) {
                fill(255, 100, 100);
            }
            else if (currentLF[i][j] == 2) {
                fill(100, 100, 255);
            }
            else if (currentLF[i][j] == 3) {
                fill(255, 255, 141);
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
    fill(255, 255, 255);
    stroke(255, 255, 255);
    text('Mouse X = ' + parseInt(mouseX/resX) + " | Mouse Y = " + parseInt(mouseY/resY) +
         "\nIteration: " + iterations + 
         "\nSetup Mode: " + setupMode + " (Space to toggle)" + 
         "\nChaos Mode: " + chaos + " (c to toggle)" + 
         "\nr to flick a pile of random cells",
         10, 20);
}
