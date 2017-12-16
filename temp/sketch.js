// dima_
// Dima Konev
// 

//resolution
var resX = 16;
var resY = 16;

//the two fields
var arr = [];

//dimensions of the field
var a;
var b;

function setup() {
    createCanvas(800, 800);
    //get dimensions
    a = parseInt(width/resX);
    b = parseInt(height/resY);

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


}

function isPaintedRange(x, y, w, h) {
    var x1 = Math.max(parseInt(x/resX), 0);
    var x2 = Math.min(parseInt((x+w)/resX), a);
    var y1 = Math.max(parseInt(y/resY), 0);
    var y2 = Math.min(parseInt((y+h)/resY), b);

    for(var i = x1; i < x2; i++) {
        for(var j = y1; j < y2; j++) {
            if (arr[i][j] == true) {
                return true;
            }
        }
    }
    return false;
}

function draw() {
    background(255, 255, 255);
    var limit = 100;
    translate(width/2, height/2);
    strokeWeight(10);
    for (var i = -limit/2; i < limit/2; i++) {
        for (var j = -limit/2; j < limit/2; j++) {
                if(isPaintedRange(width/limit * i + width/2, height/limit * j + height/2, 10, 10)) {
                    translate(width/limit * i, height/limit * j);
                    line(0, 0, -i, -j);
                    translate(width/limit * -i, height/limit * -j);
                    }
        }
    }
}
