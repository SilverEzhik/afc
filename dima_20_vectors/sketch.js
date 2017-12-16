// dima_
// Dima Konev
// 

var location1;
var location2;

function setup() {
    createCanvas(800, 800);

    location1 = createVector(100, 100);
    location2 = createVector(200, 100);

}

function draw() {
    background(200);
    fill(0, 0, 100, 60);
    ellipse(location1.x, location1.y, 40, 40);
    location2.add(location1);
    ellipse(location2.x, location2.y, 40, 40);
    
}
