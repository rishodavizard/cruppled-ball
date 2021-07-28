
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite, paperBody;
var leftwall, rightwall, bottomwall, groundSprite;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	paperSprite = ellipse(200, 500, 50, 50)

	leftwall=createSprite(550,675,20,100);
	leftwall.shapeColor=color(255,0,0);

	rightwall=createSprite(750,675,20,100)
	rightwall.shapeColor=color(255,0,0)

	bottomwall=createSprite(750,575,200,20)
	bottomwall.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = Bodies.circle(200 , 200 , 50 , {restitution:0.3, isStatic:false, friction:0.5, density:1.2});
	World.add(world, paperBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y
  
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBody.body.position,{x:85,y:-95});
	}


  drawSprites();
 
}



