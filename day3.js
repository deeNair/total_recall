class Hamster{
    constructor(name){
      this.owner='';
      this.name=name;
      this.price=15;
    }
    wheelRun(){
        console.log('squeak squeak');
      }
      eatFood(){
        console.log('nibble nibble');
      }
      getPrice(){
        return this.price;
      }

}

class Person{
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
      }
      getName(){
        return this.name;
      }
      getAge() {
        return this.age;
      }
      getWeight(){
        return this.weight;
      }
      greet(){
        console.log(`I am ${this.name} hello`);
      }
      eat(){
        this.weight++;
        this.mood++;
      }
      exercise(){
        this.weight--;
      }
      ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
      }
      buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();
      }

}



const Timmy=new Person("Timmy");
for(let i=0;i<5;i++){
    Timmy.ageUp();
}


for(let i=0;i<=5;i++){
    Timmy.eat();
}
for(let i=0;i<=5;i++){
    Timmy.exercise;
}

for(let i=0;i<9;i++){
    Timmy.ageUp();
}

let gus=new Hamster("Gus");
console.log(gus.getPrice());

gus.owner="Timmy";
console.log(gus.owner);

//console.log(Timmy.buyHamster(gus));


for(let i=0;i<15;i++){
    Timmy.ageUp();
}

for(let i=0;i<=2;i++){
    Timmy.eat();
}
for(let i=0;i<=2;i++){
    Timmy.exercise;
}

//console.log(Timmy.age);

class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer=appetizer;
        this.entree=entree;
        this.dessert=dessert;

    }

}
class chef{

    constructor(){
      this.dinArr=[];
    }
dinner(appetizer,entree,dessert){
    const dinner1=new Dinner(appetizer,entree,dessert);
        
    this.dinArr.push(dinner1);
         return dinner1;
       

    }
    //return dinner1;

    
}

const chef1=new chef();
console.log(chef1.dinner("fries","burger","cake"));
//let din=chef1.dinArr;
//din.find(appetizer);
console.log(chef1.dinArr[0]);