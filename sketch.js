
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper
var ground
var plank1,plank2,plank3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 paper = new Bob(200,350,50,50)

	 ground = new Ground(400,600,900,10);

	 plank1 = new Plank(500,540,10,100)
	 plank2 = new Plank(550,590,100,10)
	 plank3 = new Plank(600,540,10,100)


	Engine.run(engine);
  
}


function draw() {
   background("blue");
   Engine.update(engine)

 paper.display()
 ground.display()
 plank1.display()
 plank2.display()
 plank3.display()
 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38){
	 Matter.body.applyForce(paper.body, paper.body.position,{x:200,y:85})
 
	}
 
 }



