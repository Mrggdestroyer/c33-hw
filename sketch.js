const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var BG;
var snow = [];

function preload()
{
  BG = loadImage("snow3.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


function draw() {
  background(BG);
  Engine.update(engine)

  if (frameCount%7 == 0)
  {
    snow.push(new Snow(random (0,800),0));
  }

  for (var k = 0; k < snow.length; k++)
  {
    snow[k].display();
  }

  drawSprites();
}