class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Labrador");

animal.sayHello(); 
dog.sayHello();   
dog.bark();        

const myIterable = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;

        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const item of myIterable) {
    console.log(item);
}

function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num; 
        num++;     
    }
}
const iterator = numberGenerator();
for (let i = 0; i < 5; i++) {
    console.log(iterator.next().value);
}
