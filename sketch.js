const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pendulum=new Pendulum(300,100,"red");
}

    
   

function draw(){

    Engine.update(engine);
    pendulum.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.detached();
}
function keyPressed(){
  if(keyCode===32){
   
  }
} 
