// dima_11_collage
// Dima Konev
// October 9 2017

var moscowTrees = [];
var moscowBGM;

var californiaTrees = [];
var californiaBGM;

var newYorkTrees = [];
var newYorkBGM;

var hedgehog;

//moscow fonts
var Aquarelle;
var Corinthia;
var Hermes;

//california fonts
var SanFrancisco;
var ProductSans;
var Shirokuma;

//new york fonts
var AmericanTypewriter;
var HonokaMincho;
var Iosevka;

function preload() {
    for (var i = 1; i <= 6; i++) {
        moscowTrees[i-1] = loadImage("assets/moscow/" + i + ".png");
    }
    moscowBGM = loadSound("assets/moscow/amb.mp3");
    for (var i = 1; i <= 5; i++) {
        californiaTrees[i-1] = loadImage("assets/california/" + i + ".png");
    }
    californiaBGM = loadSound("assets/california/amb.mp3");
    for (var i = 1; i <= 3; i++) {
        newYorkTrees[i-1] = loadImage("assets/newyork/" + i + ".png");
    }
    newYorkBGM = loadSound("assets/newyork/amb.mp3");

    hedgehog = loadImage("assets/hedgehog.png");

    Aquarelle = loadFont("assets/fonts/Aquarelle.ttf");
    Corinthia = loadFont("assets/fonts/Corinthia.ttf");
    Hermes = loadFont("assets/fonts/Hermes.ttf");

    SanFrancisco = loadFont("assets/fonts/SanFrancisco.otf");
    ProductSans = loadFont("assets/fonts/ProductSans.ttf");
    Shirokuma = loadFont("assets/fonts/Shirokuma.ttf");

    AmericanTypewriter = loadFont("assets/fonts/AmericanTypewriter.ttf");
    HonokaMincho = loadFont("assets/fonts/HonokaMincho.ttf");
    Iosevka = loadFont("assets/fonts/Iosevka.ttf");
    
    thoughts = [
                {text: "Вот бы\nучиться\nпоехать...", size: 24, font: Aquarelle, x: -50, y: -100},
                {text: "Polymorphism,\nInheritance,\nEncapsulation", size: 20, font: Hermes, x: 70, y: -100},
                {text: "English is fun,\nisn't it?", size: 40, font: Corinthia, x: 0, y: -100},
                {text: "A new adventure!", size: 20, font: SanFrancisco, x: 0, y: -100},
                {text: "あ…い…う…え…お…", size: 24, font: Shirokuma, x: 0, y: -90},
                {text: "This is not\nwhat I wanted.", size: 20, font: ProductSans, x: 10, y: -120},
                {text: "Let's try\nsomething\nnew...", size: 20, font: AmericanTypewriter, x: -50, y: -100},
                {text: "日本語は楽しい！", size: 20, font: HonokaMincho, x: 60, y: -100},
                {text: "vim irq_handler.h", size: 20, font: Iosevka, x: 0, y: -110}
];

}

function setup() {
    createCanvas(1000, 1000);
    currentSound = moscowBGM;
    currentSound.play();
}

function mousePressed() {
    moscowBGM.play();
}

var hogRot = 0; //hedgehog's position in the world
var bob = 0; //hedgehog's "steps"
var bobModifier = 0.005; //how fast the hedgehog "walks"

var rot; //rotate diorama with screen
var globalScale = 0.5;

var currentSound;
var nextSound;

function crossfade() {
    //don't do anything if there is no sound queued
    //and don't crossfade to self
    if (nextSound == null || nextSound == currentSound) {
        return;
    }

    nextSound.setVolume(0);
    nextSound.setVolume(1, 2, 0);
    nextSound.play();
    currentSound.setVolume(0, 2, 0);
    currentSound = nextSound;
    nextSound = null;
}

var thoughts;

function printThoughts() {
    var t = 0;
    if (hogRot > 0) {
        t = 0;
    }
    if (hogRot > 0.7) {
        t = 1;
    }
    if (hogRot > 1.3) {
        t = 2;
    }

    if (hogRot > 2.0) {
        t = 3;
    }
    if (hogRot > 2.7) {
        t = 4;
    }
    if (hogRot > 3.4) {
        t = 5;
    }
    if (hogRot > 4.0) {
        t = 6;
    }
    if (hogRot > 4.6) {
        t = 7;
    }
    if (hogRot > 5.5) {
        t = 8;
    }
    stroke(0, 0, 0);
    strokeWeight(5);
    strokeJoin(ROUND);
    fill(255, 255, 255);
    textAlign(CENTER, CENTER);
    textFont(thoughts[t].font);
    textSize(thoughts[t].size);
    text(thoughts[t].text, thoughts[t].x, thoughts[t].y);
}

function draw() {
    background(30, 29, 43);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    rectMode(CENTER);
    rot = -mouseX * 0.1 / 8;

    //diorama
        push();
        //diorama center
        translate(width/2, height/2);
        rotate(rot);

        //diorama
        push();
            //global background rotation

            noStroke();
            drawSky();
            
            //backgrounds
            fill(200, 200, 200, 60);
            push();
                rotate(PI / 2.3);
                beginShape();
                skyShape(3 * globalScale);
                endShape(CLOSE);
                beginShape();
                moscowShape(3 * globalScale);
                vertex(0, 0);
                endShape(CLOSE);
                rotate(1.7 * PI / 3);
                beginShape();
                californiaShape(3.5 * globalScale);
                vertex(0, 0);
                endShape(CLOSE);
                rotate(2 * PI / 3);
                beginShape();
                newYorkShape(3 * globalScale);
                vertex(0, 0);
                endShape(CLOSE);
            pop();

            //ground
            push();
                rotate(4);
                fill(141, 159, 64);
                beginShape();
                skyShape(1.8 * globalScale);
                endShape(CLOSE);
                rotate(5);
                fill(30, 50, 32, 100);
                beginShape();
                skyShape(1.4 * globalScale);
                endShape(CLOSE);
                rotate(5);
                fill(30, 50, 32, 100);
                beginShape();
                skyShape(1.2 * globalScale);
                endShape(CLOSE);
            pop();

            //segment 1
            push();
                //on rotation, rotate instead of changing x
                rotate(-0.2);
                image(moscowTrees[4], 0, -300, 200, 300);
                rotate(0.3);
                image(moscowTrees[0], 0, -250, 200, 220);
                rotate(0.3);
                image(moscowTrees[1], 0, -240, 200, 150);
                rotate(0.3);
                image(moscowTrees[2], 0, -230, 200, 200);
                rotate(0.3);
                image(moscowTrees[3], 0, -270, 200, 320);
                rotate(0.3);
                image(moscowTrees[4], 0, -250, 200, 170);
                rotate(0.3);
                image(moscowTrees[1], 0, -240, 200, 210);
                rotate(0.3);
                image(moscowTrees[2], 0, -250, 200, 190);
            pop();

            //segment 2
            rotate(2 * PI / 3);
            push();
                image(californiaTrees[4], 0, -290, 200, 300);
                rotate(0.2);
                image(californiaTrees[1], 0, -250, 200, 200);
                rotate(0.3);
                image(californiaTrees[2], 0, -240, 200, 220);
                rotate(0.3);
                image(californiaTrees[0], 0, -260, 200, 190);
                rotate(0.2);
                image(californiaTrees[2], 0, -245, 200, 200);
                rotate(0.2);
                image(californiaTrees[1], 0, -265, 200, 210);
                rotate(0.3);
                image(californiaTrees[2], 0, -230, 200, 200);
                rotate(0.2);
                image(californiaTrees[0], 0, -245, 200, 190);
                rotate(0.1);
                image(californiaTrees[4], 0, -270, 170, 250);
            pop();

            //segment 3
            rotate(2 * PI / 3);
            push();
                rotate(0.1);
                image(newYorkTrees[0], 0, -240, 200, 200);
                rotate(0.3);
                image(newYorkTrees[1], 0, -270, 160, 200);
                rotate(0.3);
                image(newYorkTrees[2], 0, -250, 200, 200);
                rotate(0.1);
                image(newYorkTrees[0], 0, -280, 200, 220);
                rotate(0.3);
                image(newYorkTrees[2], 0, -250, 200, 200);
                rotate(0.3);
                image(newYorkTrees[1], 0, -280, 160, 200);
                rotate(0.1);
                image(newYorkTrees[0], 0, -230, 160, 200);
            pop();

            push();
                for (i = 0; i < 16*2; i++) {
                    rect(sin(i), -625 + 100 * sin(i), 10, 10);
                    rotate(PI/16);
                }
            pop();
        pop();

        //front walk
        push();
            rotate(hogRot);
            translate(0, -160);
            printThoughts();
            rotate(bob);
            image(hedgehog, 0, 0, 50, 100);

            hogRot += 0.0025;
            hogRot = hogRot % (PI * 2);
            bob += bobModifier;
            if(bob > PI/16 || bob < -PI/16) {
                bobModifier = -bobModifier;
            }
        pop();
    pop();

    //crossfade background sound
    if (hogRot > 0) {
        nextSound = moscowBGM;
    }
    if (hogRot > 1.9) {
        nextSound = californiaBGM;
    }
    if (hogRot > 3.7) {
        nextSound = newYorkBGM;
    }
    crossfade();
}
function drawSky() {
    //sky
    push();
        rotate(1);
        fill(35, 34, 42, 200);
        beginShape();
        skyShape(5.1 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(41, 41, 77, 200);
        beginShape();
        skyShape(5.0 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(71, 97, 154, 200);
        beginShape();
        skyShape(4.8 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(138, 168, 206, 100);
        beginShape();
        skyShape(4.7 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(138, 168, 206, 100);
        beginShape();
        skyShape(4.6 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(138, 168, 206, 90);
        beginShape();
        skyShape(4 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(138, 168, 206, 90);
        beginShape();
        skyShape(3.9 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(230, 216, 191, 80);
        beginShape();
        skyShape(3 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(230, 216, 191, 80);
        beginShape();
        skyShape(2.9 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(230, 216, 191, 80);
        beginShape();
        skyShape(2.7 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(234, 145, 71, 200);
        beginShape();
        skyShape(2 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(232, 120, 63, 200);
        beginShape();
        skyShape(1.9 * globalScale);
        endShape(CLOSE);
        rotate(1);
        fill(206, 85, 54, 200);
        beginShape();
        skyShape(1.8 * globalScale);
        endShape(CLOSE);
    pop();
}
function skyShape(s) {
    vertex(s * -200, s * -67);
    vertex(s * -193, s * -94);
    vertex(s * -187, s * -97);
    vertex(s * -173, s * -122);
    vertex(s * -155, s * -141);
    vertex(s * -140, s * -160);
    vertex(s * -119, s * -170);
    vertex(s * -88, s * -187);
    vertex(s * -75, s * -195);
    vertex(s * -59, s * -200);
    vertex(s * -53, s * -205);
    vertex(s * -34, s * -207);
    vertex(s * -12, s * -211);
    vertex(s * 3, s * -212);
    vertex(s * 17, s * -212);
    vertex(s * 23, s * -209);
    vertex(s * 52, s * -204);
    vertex(s * 71, s * -197);
    vertex(s * 83, s * -192);
    vertex(s * 103, s * -182);
    vertex(s * 112, s * -175);
    vertex(s * 135, s * -159);
    vertex(s * 147, s * -144);
    vertex(s * 166, s * -120);
    vertex(s * 178, s * -96);
    vertex(s * 183, s * -69);
    vertex(s * 190, s * -51);
    vertex(s * 201, s * -15);
    vertex(s * 202, s * 25);
    vertex(s * 198, s * 61);
    vertex(s * 166, s * 124);
    vertex(s * 140, s * 148);
    vertex(s * 103, s * 176);
    vertex(s * 55, s * 189);
    vertex(s * 13, s * 201);
    vertex(s * -47, s * 193);
    vertex(s * -77, s * 178);
    vertex(s * -103, s * 168);
    vertex(s * -132, s * 144);
    vertex(s * -158, s * 105);
    vertex(s * -182, s * 74);
    vertex(s * -194, s * 9);
    vertex(s * -207, s * -15);
    vertex(s * -199, s * -50);
}
function newYorkShape(s) {
    vertex(s * -233, s * -1);
    vertex(s * -232, s * -19);
    vertex(s * -214, s * -20);
    vertex(s * -214, s * -31);
    vertex(s * -264, s * -39);
    vertex(s * -268, s * -65);
    vertex(s * -217, s * -65);
    vertex(s * -210, s * -74);
    vertex(s * -262, s * -112);
    vertex(s * -258, s * -121);
    vertex(s * -274, s * -140);
    vertex(s * -253, s * -134);
    vertex(s * -248, s * -142);
    vertex(s * -189, s * -110);
    vertex(s * -180, s * -125);
    vertex(s * -198, s * -137);
    vertex(s * -189, s * -150);
    vertex(s * -213, s * -171);
    vertex(s * -197, s * -189);
    vertex(s * -173, s * -169);
    vertex(s * -163, s * -182);
    vertex(s * -159, s * -179);
    vertex(s * -155, s * -184);
    vertex(s * -182, s * -216);
    vertex(s * -173, s * -225);
    vertex(s * -145, s * -197);
    vertex(s * -129, s * -214);
    vertex(s * -152, s * -252);
    vertex(s * -137, s * -262);
    vertex(s * -97, s * -214);
    vertex(s * -82, s * -226);
    vertex(s * -108, s * -296);
    vertex(s * -104, s * -302);
    vertex(s * -99, s * -305);
    vertex(s * -105, s * -329);
    vertex(s * -97, s * -309);
    vertex(s * -92, s * -310);
    vertex(s * -87, s * -309);
    vertex(s * -58, s * -235);
    vertex(s * -45, s * -240);
    vertex(s * -49, s * -261);
    vertex(s * -33, s * -266);
    vertex(s * -27, s * -224);
    vertex(s * -23, s * -231);
    vertex(s * -18, s * -231);
    vertex(s * -12, s * -214);
    vertex(s * -15, s * -294);
    vertex(s * 0, s * -295);
}
function californiaShape(s) {
    vertex(s * -192, s * 0);
    vertex(s * -207, s * -49);
    vertex(s * -215, s * -86);
    vertex(s * -204, s * -112);
    vertex(s * -183, s * -129);
    vertex(s * -164, s * -147);
    vertex(s * -157, s * -145);
    vertex(s * -142, s * -155);
    vertex(s * -132, s * -152);
    vertex(s * -119, s * -156);
    vertex(s * -114, s * -171);
    vertex(s * -94, s * -180);
    vertex(s * -79, s * -179);
    vertex(s * -59, s * -177);
    vertex(s * -39, s * -175);
    vertex(s * -20, s * -176);
    vertex(s * -4, s * -179);
    vertex(s * 1, s * -179);
}
function moscowShape(s) {
    vertex(s * -185, s * 1);
    vertex(s * -184, s * -17);
    vertex(s * -177, s * -19);
    vertex(s * -178, s * -32);
    vertex(s * -219, s * -37);
    vertex(s * -219, s * -51);
    vertex(s * -233, s * -54);
    vertex(s * -232, s * -67);
    vertex(s * -243, s * -71);
    vertex(s * -232, s * -72);
    vertex(s * -229, s * -84);
    vertex(s * -217, s * -84);
    vertex(s * -214, s * -96);
    vertex(s * -179, s * -96);
    vertex(s * -173, s * -108);
    vertex(s * -190, s * -121);
    vertex(s * -213, s * -162);
    vertex(s * -175, s * -146);
    vertex(s * -157, s * -164);
    vertex(s * -144, s * -174);
    vertex(s * -129, s * -184);
    vertex(s * -129, s * -199);
    vertex(s * -120, s * -206);
    vertex(s * -109, s * -199);
    vertex(s * -105, s * -199);
    vertex(s * -112, s * -221);
    vertex(s * -110, s * -224);
    vertex(s * -113, s * -239);
    vertex(s * -115, s * -276);
    vertex(s * -98, s * -248);
    vertex(s * -90, s * -234);
    vertex(s * -87, s * -236);
    vertex(s * -77, s * -216);
    vertex(s * -58, s * -222);
    vertex(s * -50, s * -226);
    vertex(s * -40, s * -227);
    vertex(s * -15, s * -229);
    vertex(s * -9, s * -232);
    vertex(s * 0, s * -231);
}

function groundShape(s) {
    vertex(s * -212, s * 27);
    vertex(s * -213, s * -43);
    vertex(s * -187, s * -102);
    vertex(s * -169, s * -141);
    vertex(s * -143, s * -163);
    vertex(s * -93, s * -189);
    vertex(s * -9, s * -207);
    vertex(s * 38, s * -202);
    vertex(s * 81, s * -173);
    vertex(s * 123, s * -152);
    vertex(s * 153, s * -112);
    vertex(s * 175, s * -64);
    vertex(s * 185, s * 7);
    vertex(s * 165, s * 58);
    vertex(s * 140, s * 104);
    vertex(s * 111, s * 127);
    vertex(s * 77, s * 138);
    vertex(s * 23, s * 147);
    vertex(s * -19, s * 167);
    vertex(s * -49, s * 161);
    vertex(s * -83, s * 144);
    vertex(s * -124, s * 147);
    vertex(s * -153, s * 133);
    vertex(s * -177, s * 114);
    vertex(s * -199, s * 97);
    vertex(s * -202, s * 68);
    vertex(s * -210, s * 43);
}
