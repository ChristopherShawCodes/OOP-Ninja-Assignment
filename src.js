

class Ninja {
    constructor(name,health){
        this.name = name
        this.health = health
        this.speed = 3 
        this.strength = 3
        return this
    }
    
    sayName(){
        console.log(`Ninja says, Hi ! My name is ${this.name}`)
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}
   


const ninja1 = new Ninja('Christopher',100)
const ninja2 = new Ninja('Britt',100)

ninja1
    .sayName()
    .drinkSake()
    .showStats()  

ninja2
    .drinkSake()
    .drinkSake()
    .drinkSake()
    .sayName()
    .showStats()