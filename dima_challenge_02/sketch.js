// dima_
// Dima Konev
// 

function setup() {
    createCanvas(800, 800);

}

function draw() {
    background(255, 245, 235);
    // the roads
    strokeWeight(0);
    fill(90, 150, 140, 200);
    quad(150, 0, 300, 0, 800, 400, 800, 750);
    fill(210, 170, 110, 200);
    quad(-100, 780, -100, 1100, 800, 50, 800, -60);

    // looking glass
    strokeWeight(25);
    fill(240, 240, 222, 90);
    ellipse(400, 400, 650, 650);

    // circles

    strokeWeight(2);
    fill(236, 170, 170, 220);
    ellipse(340, 260, 150, 150);
    strokeWeight(0);
    fill(60, 70, 80, 220);
    ellipse(405, 437, 230, 230);
    fill(255, 0, 0, 220);
    ellipse(424, 301, 120, 120);


    fill(118, 65, 85, 170);
    ellipse(580, 222, 110, 110);
    fill(0, 0, 0, 200);
    ellipse(505, 257, 70, 70);
    fill(125, 160, 140, 100);
    ellipse(338, 340, 70, 70);

    strokeWeight(5);
    fill(255, 123, 53, 200);
    ellipse(386, 386, 70, 70);
    strokeWeight(0);
    fill(0, 0, 0);
    ellipse(386, 386, 20, 20);
    fill(0, 0, 0);
    text(mouseX + ", " + mouseY, 10, 10);
}
