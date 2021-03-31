const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,350,1200,20)

  pin1 = new Pins(700,200,40,40)
  pin2 = new Pins(745,225,40,40)
  pin3 = new Pins(745,175,40,40)
  pin4 = new Pins(790,200,40,40)
  pin5 = new Pins(790,245,40,40)
  pin6 = new Pins(790,155,40,40)
  pin7 = new Pins(835,225,40,40)
  pin8 = new Pins(835,175,40,40)
  pin9 = new Pins(835,130,40,40)
  pin10 = new Pins(835,270,40,40)
  ball1 = new Ball(200,200,40)
  
}

function draw() {
  background(255,255,255);  

  ground1.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  ball1.display();
  
 
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
   ball1.velocityX=5;
  }
}
