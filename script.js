var pet ={
    name:prompt("what is the name of your pet"),
    type:prompt('what is type'),
    age:+prompt("Enter the age of your pet"),
    happiness:+prompt('Enter their Happiness index'),
    hunger:+prompt('Enter their Hunger index '),
    feed:function(){
        hunger = Math.max(this.hunger-20,0);
    },

    play:function(){
        happiness = Math.min(this.happpiness+20,100);

    },
    agepet:function(){
         this.age += 1;
       this.happiness -=5;
       this.hunger +=10;
       alert(`your pet age is ${this.age}, happiness is ${this.happiness}, hunger is ${this.hunger}`)


    },
    

}

var petinfo = pet.agepet();
console.log(petinfo)