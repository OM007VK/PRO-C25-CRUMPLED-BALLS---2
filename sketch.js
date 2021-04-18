const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ball;
var ground1;
var ballImage;

function preload()
{
	
	ballImage = loadImage("images/paper.png")

}

function setup() {
	createCanvas(1500, 400);
    engine = Engine.create();
	world = engine.world;
	
    ground1 = new ground(750,385,1500,15)

	dustbin1= new Box (900,312,15,130);
	dustbin1.shapeColor = "black"
	dustbin2= new Box(1100,312,15,130);
	dustbin2.shapeColor = "black"
	dustbin3= new Box(1000,370,200,15);
	dustbin3.shapeColor = "black"
	
	ball = new Ball(200,200,100)

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(80);

	ground1.display();
	ball.display();
	//dustbin1.display();
	//dustbin2.display();
	dustbin3.display();
	fill ("black")
	text(mouseX + "," + mouseY, mouseX,mouseY)

}

function keyPressed() 
{
	
	if (keyCode === UP_ARROW) 
	{
	Matter.Body.applyForce(ball.body,ball.body.position,{x:275,y:-300});
	}
}