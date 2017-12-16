// dima_16_class
// Dima Konev

var resolution;

function setup() {
    createCanvas(800, 800);
    background(130, 130, 80);

    resolution = 20;

    translate(width/2, height/2);
    for(var i = -width/2; i < width/2; i += resolution) {
        for(var j = -height/2; j < height/2; j += resolution) {
            var value = PI * 2 * 0.01 * (i+j);

            push();
                translate(i, j);
                rotate(value);
                beginShape(LINES);
                vertex(0, 0);
                vertex(resolution, 1);
                endShape();
            pop();

        }
    }

}

function draw() {
}

