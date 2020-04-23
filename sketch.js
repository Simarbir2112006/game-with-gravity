
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 var box;
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    //ground.fillcolor="white";

}
 
function mousePressed() {
    if (mouseY < 350) {
        Box();
    }
}
 
function draw() {
    // Draw all the elements including the slider that 
    
    background("black");
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
 for(var i=0; i<boxes.length;i=i+1){
    rectMode(CENTER);
    rect( boxes[i].position.x , boxes[i].position.y, 30 , 20 );  
 }
 world.gravity.y=map(gSlider.value(),0,100,0,1)
 
console.log(world.gravity.y);
Engine.update(engine);

  
    //spawnBox;
    
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box() {

    // add options such as friction and restitution. Experiment with the values
    var box_options = {
        restitution:1.0
    }
    box = Bodies.rectangle( mouseX , mouseY , 30 ,20 , box_options );
    boxes.push(box);
    World.add(world,box);
    console.log("box");
    
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    //this.show = function () {
   // }
}
