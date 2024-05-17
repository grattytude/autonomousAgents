let lifeSpan = 350;
let lifeCounter = 0;
let population;
let target;

function setup() {
  createCanvas(600,600);
  target = createVector(width/2,24);
  let mutationRate = 0.1;
  population = new Population(mutationRate,50);
}


function draw() {
  background(255);
  
  fill(127);
  stroke(0);
  strokeWeight(2);
  circle(target.x,target.y,24);
  
  if(lifeCounter < lifeSpan ){
    population.live();
    lifeCounter++;
  }else if(population.generationStart()){
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }
  else{
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }
  
  fill(0);
  noStroke();
  //console.log(population.generation);
  text("generation #: "+population.generation +"\nCycles left: "+(lifeSpan - lifeCounter),10,20);
}

function mousePressed(){
  target.x = mouseX;
  target.y = mouseY;
}
