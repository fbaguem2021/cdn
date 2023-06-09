"use strict";
export default class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Person { this.name: ${this.name}, this.age:${this.age} }`;
    }
}
