const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,plane,stone,iron;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,350,70);
    stone = new Stone(700,320,100,100);
    iron = new Iron(700,320,100,100);

    sand1 = new Sand(500,450,7);
    sand2 = new Sand(507,450,7);
    sand3 = new Sand(514,450,7);
    sand4 = new Sand(521,450,7);
    sand5 = new Sand(528,450,7);
    sand6 = new Sand(535,450,7);
    sand7 = new Sand(542,450,7);
    sand8 = new Sand(549,450,7);
    sand9 = new Sand(556,450,7);
    sand10 = new Sand(563,450,7);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();
}