

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
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

class sensei extends Ninja {
    constructor(name,health){
        super(name, health = 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
        return this
    }
    speakWisdom(){
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months. ')
        return this
    }
}


const ninja1 = new Ninja('Christopher',100)
const ninja2 = new Ninja('Britt',100)
const superSensei = new sensei('Master Splinter')

// ninja1
//     .sayName()
//     .drinkSake()
//     .showStats()  

// ninja2
//     .drinkSake()
//     .drinkSake()
//     .drinkSake()
//     .sayName()
//     .showStats()

superSensei.speakWisdom()
           .showStats()
