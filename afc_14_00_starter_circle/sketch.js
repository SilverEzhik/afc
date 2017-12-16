//afc_14_01_starter_circle

var x;
var y;
var speed_x;
var speed_y;
var diameter;

function setup() {
  createCanvas(600,600);
  background(200,200,200);
  x = 0;
  y = 300;
  diameter = 20;
  speed_x = 2.5;
  speed_y = 2.5;
}

function wrap(){
  if(x > 600){
    x = 0;
  }
  if(y > 600){
    y = 0;
  }
}

function bounce(){
  if(x > 600 || x < 0){
    speed_x = speed_x * -1;
  }
  if(y > 600 || y < 0){
    speed_y = speed_y * -1;
  }
}

function move(){
  x+=speed_x;
  y+=speed_y;
}

function moveRandom(){
  x+=random(-speed_x,speed_x);
  y+=random(-speed_y, speed_y);
}

function draw() {
  background(200,200,200);
  //wrap();
  bounce();
  //move();
  moveRandom();
  fill(255,0,0,100);
  ellipse(x,y,diameter,diameter);
  print("x: " + x);
}
