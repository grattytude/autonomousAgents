class Rocket{
  constructor(x,y,dna){
  this.acceleration = createVector();
  this.velocity = createVector();
  this.position = createVector(x,y);
  this.r = 4;
  this.fitness = 0;
  this.dna = dna;
  this.geneCounter = 0;
  }
  
  calculateFitness(){
    let distance = p5.Vector.dist(this.position, target);
    this.fitness = 1/(distance*distance);
  }
  
  run(){
    this.applyForce(this.dna.genes[this.geneCounter]);
    this.geneCounter = (this.geneCounter + 1);
    this.update();
    this.show();
  }
  
  applyForce(force){
    this.acceleration.add(force);
  }
  
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  show(){
    let angle = this.velocity.heading()+ PI/2;
    let r = this.r;
    stroke(0);
    strokeWeight(1);
    push();
    translate(this.position.x,this.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(0);
    rect(-r/2,r*2,r/2+20,r+20);
    rect(r/2,r*2,r/2+20,r+20);
    
    fill(200);
    beginShape(TRIANGLES);
    vertex(0,-r*2);
    vertex(-r,r*2);
    vertex(r,r*2);
    endShape(CLOSE);
    
    pop();
  }
}
