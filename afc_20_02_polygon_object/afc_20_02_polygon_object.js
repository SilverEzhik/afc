//afc_20_02_polygon_object


var polygons = [];

function setup() {
  createCanvas(720, 400);
  background(200, 200, 200);
  for (var i = 0; i < 1000; i++) {
      polygons.push(new Polygon(random(1, 10), random(0, width), random(0, height), random(10)));
  }
}

function draw() {
  background(200, 200, 200, 200);
  for (var i = 0; i < polygons.length; i++) {
      polygons[i].move();
      polygons[i].display();
  }
}

function Polygon(sides, x, y, radius) {
  this.sides = sides;

  this.angle = TWO_PI / this.sides;

  this.location = createVector(x, y);

  this.color = { r: random(255), g: random(255), b: random(255) };

  this.sv = createVector(0, 0);
  this.sx = 0;
  this.sy = 0;
  this.radius = radius;

  this.speed = createVector(random(-15, 15), random(-15, 15));
  this.gravity  = this.radius/40;
  this.friction = 0.85; // to this.speed.x
  this.damping  = 0.85; // to this.speed.y 


  this.rotation = 0;

  this.rotationSpeed = 1.5;

  this.bounce = function() {
      if (this.location.x > width || this.location.x <= 0) {
          this.speed.x = this.speed.x * -this.friction; 
      }
      if (this.location.x > width) {
          this.location.x = width;
      }
      if (this.location.x < 0) {
          this.location.x = 0;
      }
      if (this.location.y > height || this.location.y <= 0) {
          this.speed.y = this.speed.y * -this.damping;
      }
      if (this.location.y > height) {
          this.location.y = height;
      }
      if (this.location.y < 0) {
          this.location.y = 0;
      }
  }


  this.move = function() {
      this.speed.y += this.gravity;
      this.location.add(this.speed);
      this.bounce();
      this.rotation += this.speed.x * 0.1;
  }

  this.display = function() {
    push();
    fill(this.color.r, this.color.g, this.color.b);
    translate(this.location.x, this.location.y);
    rotate(this.rotation);
    beginShape();
    for (var i = 0; i < TWO_PI; i += this.angle) {
      this.sv.x = cos(i) * this.radius;
      this.sv.y = sin(i) * this.radius;
      vertex(this.sv.x, this.sv.y);
    }
    endShape(CLOSE);  
    pop();
  }
}
