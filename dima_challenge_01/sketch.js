// dima_challenge_01
// Dima Konev
// 

function setup() {
    createCanvas(800, 800);

}

maxSymbols = 0;
startSymbol = 0;
endSymbol = 5;
currentSet = 0;

var symbols = [ ["•", "•", "•", "•", "•"],
                ["1", "2", "3", "4", "5"],
                ["i", "f", "{", "…", "}"],
                ["h", "e", "l", "l", "o"]
              ];

function draw() {
    background(255, 240, 0);

    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(48);

    for(var i = startSymbol; i < maxSymbols; i++) {
        text(symbols[currentSet][i], 240 + 80 * i, 400);
    }

    if (frameCount % 30 == 0) {
        maxSymbols++;
    }
    //don't go beyond max symbols
    if (maxSymbols > endSymbol) {
        maxSymbols = 0;
    }
    //change to next symbol set
    if (frameCount % 180 == 0) {
       currentSet++;
    }
    //don't go beyond number of symbol sets
    if (currentSet == symbols.length) {
        currentSet = 0;
    }
}
