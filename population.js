class Population{
  constructor(mutation,leng){
    this.mutationRate = mutation;
    this.population = [];
    
    this.matingPool = [];
    this.generation = 0;
    
    for(let i = 0; i < leng;i++){
      let x = width/2;
      let y = height + 20;
      
      this.population[i] = new Rocket(x,y,new DNA());
    }
    
  }
  generationStart(generation){
  if(this.generation === 3){
    return true;
  }else{
    return false;
  }
  
}
  
  live(){
    for(let rocket of this.population){
      rocket.run();
    }
  }
  
  fitness(){
    for(let rocket of this.population){
    rocket.calculateFitness();
    }
  }
    
    selection(){
      let totalFitness = 0;
      for(let rocket of this.population){
        rocket.fitness /= totalFitness;
      }
    }
    reproduction(){
      let nextPopulation = [];
      for(let i = 0;i<this.population.length;i++){
        let parentA = this.weightedSelection();
        let parentB = this.weightedSelection();
        
        let child = parentA.crossover(parentB);
        
        child.mutate(this.mutationRate);
        let x = width/2;
        let y = height + 20;
        nextPopulation[i] = new Rocket(x,y,child);
        
      }
      this.population = nextPopulation;
        this.generation++;
    }
      weightedSelection(){
        let index = 0;
        let start = random(1);
        while (start > 0){
          start = start - this.population[index].fitness;
          index++;
        }
        index--;
        return this.population[index].dna;
      }
  
}
