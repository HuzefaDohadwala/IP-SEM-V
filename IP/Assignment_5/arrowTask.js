// 1. Basic Arrow Function
const add = (a, b) => a + b;
console.log('Add:', add(2, 3));

// 2. Arrow Function with No Parameters
const sayHello = () => 'Hello, World!';
console.log('Say Hello:', sayHello());

// 3. Arrow Function with a Single Parameter
const square = x => x * x;
console.log('Square:', square(4));

// 4. Arrow Function with Multiple Statements
const multiply = (x, y) => {
  const result = x * y;
  return result;
};
console.log('Multiply:', multiply(5, 6));

// 5. Arrow Function as a Callback
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log('Squared Numbers:', squaredNumbers);

// 6. Arrow Function and 'this'
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  arrowFullName: () => `${this.firstName} ${this.lastName}`,
};
console.log('Full Name:', person.fullName()); // Regular function
console.log('Arrow Full Name:', person.arrowFullName()); // Arrow function

// 7. Arrow Function and Lexical 'this'
const counter = {
  count: 0,
  increase: function() {
    setInterval(() => {
      this.count++;
      console.log('Count:', this.count);
    }, 1000);
  },
};

counter.increase();

// 8. Arrow Function with Default Parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet());
console.log(greet('Alice'));
