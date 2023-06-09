"use strict"
export default class Animal {
    type: string; race: string; age: number;
    constructor(type:string, race:string, age:number) {
        this.type = type; this.race = race; this.age = age;
    }
    toString() {
        if (this.type == "dog")
            return `Dog { race: ${this.race}, age:${this.age} }`
        else if (this.type == "cat")
            return `Dog { race: ${this.race}, age:${this.age} }`
        else
            return `Animal { type:${this.type}, race:${this.race}, age:${this.race} }`
    }
}