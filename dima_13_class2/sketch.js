// dima_
// Dima Konev
// 

var circle;
function setup() {
  createCanvas(800,800);
  background(150,150,200);
  
  circle = new Circle();
}


function draw() {
  noStroke();
  circle.move();
  circle.bounce();
  fill(255 * Math.abs(Math.sin(circle.period)), 255 * Math.abs(Math.cos(circle.y + circle.period)), 255 * Math.abs(Math.cos(circle.x + circle.period)), 100);
  circle.draw();
  print("x: " + circle.x);
}

function Circle() {
    this.x = 0;
    this.y = 300;
    this.diameter = 20;
    m = 1;
    this.speed_x = m * PI;
    this.speed_y = m * 3;
    this.period = 0;

    this.draw = function() {
        push();
        translate(this.x, this.y);
        rotate(Math.sin(this.x + this.y + this.period));
        rect(0, 0, this.diameter, this.diameter);
        pop();
    }
    
    this.wrap = function(){
      if(this.x > width + this.diameter){
        this.x = 0;
      }
      if(this.y > height + this.diameter){
        this.y = 0;
      }
    }

    this.bounce = function(){
      if(this.x > width || this.x < 0){
        this.speed_x = this.speed_x * -1;
        this.period+=0.1;
      }
      if(this.y > height || this.y < 0){
        this.speed_y = this.speed_y * -1;
        this.period+=0.1;
      }
    }

    this.move = function(){
      this.x+=this.speed_x;
      this.y+=this.speed_y;
    }

    this.moveRandom = function(){
      this.x+=random(-this.speed_x, this.speed_x);
      this.y+=random(-this.speed_y, this.speed_y);
    }
}
