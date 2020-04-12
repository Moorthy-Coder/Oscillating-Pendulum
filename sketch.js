const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine;
var world;

var ground;
var holder;
var bob;
var connector;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, height, 800, 20); 
  holder = new Holder(400, 200, 170, 20);
  bob = new Ball(400, 400, 50);
  connector = new String(bob.body, { x: 400, y: 200 });
}

function draw() {
  background(0);
  Engine.update(engine);

  fill("#00FF00");
  textSize(22);
  text("Drag the Ball to oscillate", 270, 50);
  text("Press Space to stop the oscillation!", 225, 85);

  ground.display();
  holder.display();
  connector.display();
  bob.display();

}

function mouseDragged() {
  Matter.Body.setPosition(bob.body, { x: mouseX, y: mouseY });
  Matter.Body.setStatic(bob.body, false);
}

function keyPressed()
{
  if (keyCode == 32)
  {
    Matter.Body.setStatic(bob.body, true);
  }
}