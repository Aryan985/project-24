
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height, width, 20);

	
	bottomSide = new dustbinSide(1100, 680, 200, 20);
	rightSide = new dustbinSide(990, 640, 20, 100);
	leftSide = new dustbinSide(1210, 640, 20, 100);

	
	paper = new Paper(200, 600, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("0");

  ground.display();

	bottomSide.display();
	rightSide.display();
	leftSide.display(); 

	paper.display();

	if(keyWentDown(UP_ARROW)){
		
		Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}

	drawSprites();
}

  
  




