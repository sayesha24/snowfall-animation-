const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var girl, girl_walking; 
var bg; 
var snowflakes; 
var music; 

function preload() {

  girl_walking= loadAnimation("girl1.png", "girl2.png", "girl3.png", "girl4.png");
  bg= loadImage("snow1.jpg")

  music= loadSound("music.m4a");
}

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  music.loop();

  girl= createSprite(900, 500, 50, 50);
  girl.addAnimation("moving", girl_walking);
girl.velocityX= -3;

snowflakes= new Snow(Math.round(random(255, 600)), Math.round(random(200, 600)));
}

function draw() {
  background(bg);  

  Engine.update(engine);

if(girl.x < 100){

  girl.x= 900;
}
snowflakes.display();




  drawSprites();

}