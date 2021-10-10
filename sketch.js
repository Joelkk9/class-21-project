var ball;
var radius = 40;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (200,390,1200,10);
    

	Engine.run(engine);

	var ball_options = {
		isStatic : false, 
		restiution : 0.3,
		frictionAir : 0,
		density : 1.2
	}

	ball = Bodies.circle (260,100,radius/2,ball_options);
	World.add (world,ball);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse (ball.position.x,ball.position.y,radius,radius);

  
  ground.display () ;
  rect (200,390,1200,10);
  
  
	  
  
  
}
