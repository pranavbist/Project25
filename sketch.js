
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper1;
var world;
var dustbinImg,dustbinObject;

function preload(){
	dustbinImg=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	//rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    dustbinObject = createSprite(1200,530);
	dustbinObject.addImage(dustbinImg);
	dustbinObject.scale = 0.90;

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper1=new Paper(100,650,50)
	Engine.run(engine);
     

	
}


function draw() {
  //rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper1.display();
 
	dustbinObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:145,y:-165});
	}
}
