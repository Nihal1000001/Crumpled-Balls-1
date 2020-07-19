var paper1;
var ground;
var bin1,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20);
	paper1=new Paper(100,680);
	bin1=new Bin(630,600,20,80);
	bin2=new Bin(740,600,20,80);
	bin3=new Bin(685,640,102,20);
	
	


}

function draw() {
  background("black");
  Engine.update(engine);
 
  
 paper1.display();
 ground.display();
 bin1.display();
 bin2.display();
 bin3.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:125,y:-45});
	}
}


