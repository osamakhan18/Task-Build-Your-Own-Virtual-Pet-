var pet ={
    name:"jack",
    type:"Dog",
    age:10,
    happiness:70,
    hunger:30,
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

    },
    // getinfo:function(){
    //    alert(this.age)
    //    alert(this.happiness)
    //    alert(this.hunger)
    // }
    

}

var petinfo = pet.getinfo();
console.log(petinfo)