// afc_01_hw
// Dima Konev
// September 11 2017

var buildings = [];
var layerLengths = [0, 0, 0, 0, 0];

function setup() {
    createCanvas(800, 450);
    
    for (var l = 0; l < 5; l++) {
        y[l] = 300;
        if(l != 0) {
            y[l] = y[l-1] + 30;
        }
        buildings.push([]);
        for (var i = 0; i < 10; i++) {
            var building = new Object();
            building.x = 0;
            if(i != 0) {
                building.x = buildings[l][i-1].x + buildings[l][i-1].a + random(15);
            }
            building.a = 75 + random(50);
            building.b = 50 + random(200);
            building.rgb = [200 - random(100), 230 - random(100), 255 - random(100)];
            building.windows = [1 + random(7), 6 + random(10)];

            buildings[l].push(building);
        }
        var building = buildings[l][buildings[l].length - 1];
        layerLengths[l] = building.x + building.a;

    }
    setX(200);
    print(buildings);
}
function setX(offset) {
    for(var l = 0; l < 5; l++) {
        x[l] = offsetCalc(offset, l);
    }
}

function getLayerLength(layer) {
    return layerLengths[layer];
}

var x = [0, 0, 0, 0, 0];
var y = [0, 0, 0, 0, 0];
var buildingY = 300;


function offsetCalc(value, layer) {
    return value * (0.2 * (layer + 1));
}
function draw() {
    var x = mouseX * 0.5;
    if(mouseX > 800) {
        x = 800 * 0.5 + (mouseX - 800) * 0.5 * 0.3;
    }
    if (mouseX < 0){
        x = x * 0.3; 
    }
    setX(x + 200);
    background(5, 9, 76);
    fill(0, 0, 0);
    triangle(400, 100, 0, 300, 800, 300);
    fill(20,20,20);
    rect(0, 300, 800, 150);
    drawBuildings();
    //fill(255, 255, 255);
    //text(x, 10, 10);
    //shadow
}
function drawBuildings(offset) {
    var my = mouseY;
    my = my/15;
    my = my - 20;
    
    for (var l = 0; l < 5; l++) {
        /*
        x[l] += offsetCalc(1, l);
        if(x[l] > getLayerLength(l)) {
            x[l] = 0;
        }*/
        for (var i = 0; i < 10; i++) {
            fill(20*l,20*l,20*l);-
            building(buildings[l][i].x - x[l], y[l] + offsetCalc(my, l), buildings[l][i].a, buildings[l][i].b, buildings[l][i].rgb, buildings[l][i].windows);
        }
        if(x[l] + 800 > getLayerLength(l)) {
            for (var i = 0; i < 10; i++) {
                fill(20*l,20*l,20*l);
                building(buildings[l][i].x - x[l] + getLayerLength(l), y[l] + offsetCalc(my, l), buildings[l][i].a, buildings[l][i].b, buildings[l][i].rgb, buildings[l][i].rgb);
            }
        }
    }
}

function building(x, y, a, b, rgb, windows) {
    y = y - b;
    if(x+a < 0 || x > 800) {
        return;
    }
    strokeWeight(1);
    rect(x, y, a, b);
    var w1 = 1;
    var w2 = 6;
    strokeWeight(0.5);
    for (var i = 0; i < w1; i++) {
        for (var j = 0; j < w2; j++) {
            fill(rgb[0], rgb[1], rgb[2], 21);
            rect(x + (a/w1) * i, y + (b/w2) * j, a/w1, b/w2);
        }
    }
}
