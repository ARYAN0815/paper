
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper1=new Paper(400,200.10,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display;
  keyPressed();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode ===UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   paper1.velocityY=2;
       paper1.velocityX=2;
	}
   }



