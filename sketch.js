const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,backgroundImg;
var box1box2,box3,box4,box5;
var polygon,string1,pointB,groundmain;
var bg = "bg.png";

function preload (){
  getTime();
}

function setup() {
  createCanvas(800,400);

    engine = Engine.create();
    world = engine.world;

  ground1 = new Ground (330,355,250,5);

  ground2 = new Ground (630,240,200,5);

groundmain = new Ground (400,395,800,10);

  box6 = new Box (255,325,25,35);
  box1 = new Box (280,325,25,35);
  box2 = new Box (305,325,25,35);
  box3 = new Box (330,325,25,35);
  box4 = new Box (355,325,25,35);
  box5 = new Box (380,325,25,35);
  box7 = new Box (405,325,25,35);

  box8 = new Box (280,290,25,35);
  box9 = new Box (305,290,25,35);
  box10 = new Box (330,290,25,35);
  box11 = new Box (355,290,25,35);
  box12 = new Box (380,290,25,35);

  box13 = new Box (305,255,25,35);
  box14 = new Box (330,255,25,35);
  box15 = new Box (355,255,25,35);

  box16 = new Box (330,220,25,35);

box17 = new Box (580,210,25,35);
box18 = new Box(605,210,25,35);
box19 = new Box(630,210,25,35);
box20 = new Box(655,210,25,35);
box21 = new Box(680,210,25,35);

box22 = new Box(605,175,25,35);
box23 = new Box(630,175,25,35);
box24 = new Box(655,175,25,35);

box25 = new Box(630,140,25,35);

polygon1 = new Polygon(80,230,20,20);

string1 = new Slingshot(polygon1.body,{x:120,y:230});

}

function draw() {
  background(255,205,200);

  text(mouseX + "," + mouseY,mouseX,mouseY);

  if (backgroundImg){
    background(backgroundImg);
    }

  ground1.display();
  ground2.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

box13.display();
box14.display();
box15.display();

box16.display();


box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

box22.display();
box23.display();
box24.display();
box25.display();

string1.display();

polygon1.display();
//rect (polygon.position.x,polygon.position.y,20,20);

Engine.update(engine);

groundmain.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  string1.fly();
}

function keyPressed(){
  if (keyCode === 32 ){
      string1.attach(polygon1.body);
  }
}

async function getTime (){

  var information = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var informationJSON = await information.json();

  var dt = informationJSON.datetime;
  var hour = dt.slice(11,13);
  console.log(hour);


  if (hour > 6 && hour <= 18){
    bg = "bg.png";
}else {
    bg = "bg2.jpg";
}
backgroundImg = loadImage(bg);


}