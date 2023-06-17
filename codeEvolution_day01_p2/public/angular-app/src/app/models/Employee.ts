
export class Employee{
    #id!:number;
    #name!:string;
    #age!:number;

    get id() { return this.#id }
    get name() { return this.#name }
    get age() { return this.#age }

    set id(id){this.#id=id}
    set name(name){this.#name=name}
    set age(age){this.#age=age}

    constructor(){};

    //constructor(id:number, name:string, age:number){ this.#id=id}
}