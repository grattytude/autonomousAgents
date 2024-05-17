class DNA{
  constructor(){
    this.genes = [];
    this.maxforce = 0.1;
    for(let i = 0; i < lifeSpan; i++){
      let angle = random(TWO_PI);
      this.genes[i] = p5.Vector.fromAngle(angle);
      this.genes[i].mult(random(0,this.maxforce));
    }
  }
  crossover(partner){
    let child = new DNA();
    let midpoint = floor(random(this.genes.length));
    for(let i = 0; i < this.genes.length;i++){
      if(i < midpoint){
        child.genes[i] = this.genes[i];
      }else{
        child.genes[i] = partner.genes[i]; 
      }
    }
    return child;
  }
  
  mutate(m){
    for(let i = 0; i < this.genes.length; i++){
      if(random(1) < m){
        let angle = random(TWO_PI);
        this.genes[i] = p5.Vector.fromAngle(angle);
        this.genes[i].mult(random(0,this.maxforce));
      }
    }
  }
}
