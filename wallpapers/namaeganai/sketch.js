// namaeganainamaeganainamaeganai
// Dima Konev
// 

function setup() {
    createCanvas(800, 1280);

    prepare();
}
function prepare() {
    textScale = random(30, 100);

    location.x = random(textScale, width - textScale * symbols[currentSet].length);
    location.y = random(textScale, height - textScale);
    bgColor.h = random(0, 360);
    bgColor.s = random(0, 100);
    bgColor.b = random(70, 100);

    textColor.h = random(0, 360);
    textColor.s = random(0, 100);
    textColor.b = random(0, 50);
}

var location;
var textScale;
var bgColor = new Object();
var textColor = new Object();

var maxSymbols = 0;
var startSymbol = 0;
var endSymbol = 5;
var currentSet = 0;

var symbols = [ "名前がない" , "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "hello", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "namae_ga_nai", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "名前がない", "are", "you", "still" , "there?"];



function draw() {
    colorMode(HSB);
    background(bgColor.h, bgColor.s, bgColor.b, 0.01);

    fill(0, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(48);
    textFont("Sawarabi Mincho");

    textSize(textScale);
    translate(location.x, location.y);
    fill(textColor.h, textColor.s, textColor.b);
    for(var i = startSymbol; i < maxSymbols; i++) {
        text(symbols[currentSet][i], textScale * i, 0);
    }

    if (frameCount % 15 == 0) {
        maxSymbols++;
    }
    //don't go beyond max symbols
    if (maxSymbols > symbols[currentSet].length) {
        maxSymbols = 0;
        currentSet++;
        //don't go beyond number of symbol sets
        if (currentSet == symbols.length) {
            currentSet = 0;
        }
        prepare();
    }
}
