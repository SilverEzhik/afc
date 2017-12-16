// yukimachi 
// Dima Konev
// 


var snowflake = [];
var person = [];

function setup() {
    createCanvas(800, 1280);
    background(20, 30, 80, 255);
    
    noStroke();
    fill(0, 0, 0, 70);
    beginShape();
        vertex(-188, 819.375);
        vertex(304, 553.375);
        vertex(322, 541.375);
        vertex(346, 535.375);
        vertex(366, 535.375);
        vertex(386, 545.375);
        vertex(1130, 809.375);
        vertex(1170, 1435.375);
        vertex(-398, 1413.375);
    endShape(CLOSE);
    fill(0, 0, 0, 150);
    beginShape();
        vertex(-10, 600);
        vertex(200, 560);
        vertex(224, 702);
        vertex(265, 690);
        vertex(280, 730);
        vertex(254, 705);
        vertex(400, 676);
        vertex(420, 400);
        vertex(630, 340);
        vertex(660, 81);
        vertex(700, 320);
        vertex(width + 10, 300);
        vertex(width + 10, height + 10);
        vertex(0, height + 10);
    endShape(CLOSE);
    push();
        noStroke();
        rectMode(CORNERS);
        colorMode(HSB);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
            vertex(0, 610.765625);
            vertex(190.5, 573.765625);
            vertex(227.5, 752.765625);
            vertex(-28.5, 780.765625);
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
            vertex(233.5, 716.765625);
            vertex(251.5, 840.765625);
            vertex(335.5, 838.765625);
            vertex(330.5, 706.765625);
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
            vertex(450.5, 417.765625);
            vertex(421.5, 674.765625);
            vertex(536.5, 672.765625);
            vertex(539.5, 378.765625); 
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
            vertex(578.5, 368.765625);
            vertex(584.5, 804.765625);
            vertex(836.5, 802.765625);
            vertex(834.5, 312.765625);
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
            vertex(345.5, 705.765625);
            vertex(352.5, 794.765625);
            vertex(522.5, 786.765625);
            vertex(544.5, 689.765625);
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
        endShape(CLOSE);

        fill(random(210, 310), random(0, 30), random(50, 100));
        beginShape();
        endShape(CLOSE);

        fill(0, 0, 0, 50);
        rect(0, height - 20, width, height);
    pop();


    
}

function mousePressed() {
    print("vertex(" + mouseX + ", " + mouseY + ");");
}

function draw() {
    if (frameCount % 5 == 0 && snowflake.length < 1000) {
        snowflake.push(new Snowflake());
    }

    for (var i = 0; i < snowflake.length; i++) {
        snowflake[i].display();

        if (snowflake[i].location.y > height) {
            if (random(10) > 8) {
                snowflake.push(new Snowflake());
            }
            snowflake.splice(snowflake.indexOf(snowflake[i]), 1);
        }
    }

    if (frameCount % 30 == 0 && person.length < 30) {
        person.push(new Person());
    }
    for (var i = 0; i < person.length; i++) {
        person[i].display();

        if (person[i].location.x > width/2 + person[i].a/2) {
            if (random(10) > 9) {
                person.push(new Person());
            }
            person.splice(person.indexOf(person[i]), 1);
        }
    }
}

function Person() {
    this.left = random(0, 2);
    this.direction = createVector(random(0, 1), random(-0.01, 0.01));
    this.a = random(width/8, width/6);
    this.b = random(height/6, height/4);
    this.location = createVector(-width/2 - this.a, 0);

    this.display = function() {
        this.location.add(this.direction);
        this.radius += Math.sqrt(Math.pow(this.direction.x, 2) + Math.pow(this.direction.y, 2)) * 0.3;

        push();
            rectMode(CENTER);
            translate(width/2, height - this.b/2);
            if(this.left > 1) {
                rotate(PI);
            }
            noStroke();
            fill(0, 0, 0, 10);
            rect(this.location.x, this.location.y, this.a, this.b);
        pop();
    }
}

function Snowflake(){
  this.location = createVector(random(-width, width), -20);

  this.radius = random(1, 4);

  this.speed = createVector(random(0.4, 0.65), random(0.5, 1));
  this.gravity  = 0;
  this.move = function() {
      this.speed.y += this.gravity;
      this.location.add(this.speed);
  }

  this.display = function() {
    this.move();
    push();
        noStroke();
        fill(255, 255, 255, map(this.location.y, random(-10, 0), height, 10, 20));
        translate(this.location.x, this.location.y);
        ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
