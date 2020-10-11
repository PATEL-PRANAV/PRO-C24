const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,box1,box2,box3;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(20,100);
	box1.shapeColor="red";
	box2 = createSprite(450,610,20,100);
	box2.shapeColor="red";
	box3 = createSprite(380,650,150,20);
	box3.shapeColor="red";

    ground = new Ground(600,380,1200,10) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();


  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
		
	   }
}

