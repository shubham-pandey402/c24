const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var Stone;
var Iron;
var rubber;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
 Stone = new stone(500,300,10,50);
  Iron = new iron(200,399);
  rubber = new Rubber(700,300,70);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   Stone.display();
    Iron.display();
 rubber.display();
}