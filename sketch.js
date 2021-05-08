var canvas;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var plane,stone,rubber,iron,hammer;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;

function preload(){
	
}

function setup() {
	canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane=new Plane(400,height,800,30);

	stone= new Stone(120,400,PI/4);
	
	rubber= new Rubber(650,400,50);

	

	iron= new Iron(400,400,40);

	hammer= new Hammer(400,400);

	
  
}


function draw() {
  background("pink");
Engine.update(engine);
  plane.display();

  stone.display();

  rubber.display();

  
  iron.display();

  hammer.display(); 
}