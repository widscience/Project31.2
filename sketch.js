const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var d1, d2, d3, d4, d5, d6, d7;
var p1, p2, p3;

var plinko = [];
var particles = [];

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,height/40);

  d1 = new Divider(3);
  d2 = new Divider(80);
  d3 = new Divider(160);
  d4 = new Divider(240);
  d5 = new Divider(320);
  d6 = new Divider(400);
  d7 = new Divider(475);

  //var i;
  for (var i=0; i < width; i=i+50){
    p1 = new Plinko(50, i, 10);
    plinko.push(p1);
  }  
  //p2 = new Particle();
  //p3 = new Particle();
  
}

function draw() {
  background(0);  


  ground.display();

  d1.display();
  d2.display()
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();


  p1.display();

  drawSprites();
}