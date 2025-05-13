// // Section 1: Classes, Inheritance, and Mixins

// // Example: Person Class
// class Person {
//     private name: string;
//     private age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(): void {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person = new Person("Alice", 30);
// person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// // Example: Employee Class Extending Person
// class Employee extends Person {
//     private role: string;

//     constructor(name: string, age: number, role: string) {
//         super(name, age);
//         this.role = role;
//     }

//     getRole(): string {
//         return this.role;
//     }
// }

// const employee = new Employee("Bob", 40, "Engineer");
// employee.greet(); // Output: Hello, my name is Bob and I am 40 years old.
// console.log(employee.getRole()); // Output: Engineer

// // Example: Implementing Mixins
// class Logger {
//     log(message: string): void {
//         console.log(`Log: ${message}`);
//     }
// }

// function applyMixins(targetClass: any, baseClasses: any[]): void {
//     baseClasses.forEach(baseClass => {
//         Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
//             targetClass.prototype[name] = baseClass.prototype[name];
//         });
//     });
// }

// class User {
//     constructor(public username: string) {}
// }

// interface User extends Logger {}
// applyMixins(User, [Logger]);

// const user = new User("JohnDoe");
// user.log("User logged in."); // Output: Log: User logged in.

// // Section 2: Abstract Classes, Interfaces, and Static Members

// // Example: Shape Abstract Class
// abstract class Shape {
//     abstract getArea(): number;
//     abstract getPerimeter(): number;
// }

// class Rectangle extends Shape {
//     constructor(private width: number, private height: number) {
//         super();
//     }

//     getArea(): number {
//         return this.width * this.height;
//     }

//     getPerimeter(): number {
//         return 2 * (this.width + this.height);
//     }
// }

// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.getArea()); // Output: 50
// console.log(rectangle.getPerimeter()); // Output: 30

// // Example: Shape Interface
// interface ShapeInterface {
//     getArea(): number;
//     getPerimeter(): number;
// }

// class Circle implements ShapeInterface {
//     constructor(private radius: number) {}

//     getArea(): number {
//         return Math.PI * this.radius ** 2;
//     }

//     getPerimeter(): number {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const circle = new Circle(7);
// console.log(circle.getArea()); // Output: 153.938...
// console.log(circle.getPerimeter()); // Output: 43.982...

// // Example: Static Members
// class ShapeCounter {
//     static count = 0;

//     static increment(): void {
//         this.count++;
//     }
// }

// ShapeCounter.increment();
// ShapeCounter.increment();
// console.log(ShapeCounter.count); // Output: 2

// Exercises and Practice Tasks

// Exercise 1: Implement a Shape Interface and Subclasses
interface Shape {
    getArea(): number;
    getPerimeter(): number;
}

class Square implements Shape {
    constructor(private side: number) {}

    getArea(): number {
        return this.side ** 2;
    }

    getPerimeter(): number {
        return 4 * this.side;
    }
}

class Triangle implements Shape {
    constructor(private base: number, private height: number, private side1: number, private side2: number) {}

    getArea(): number {
        return 0.5 * this.base * this.height;
    }

    getPerimeter(): number {
        return this.base + this.side1 + this.side2;
    }
}

const square = new Square(4);
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16

const triangle = new Triangle(3, 4, 5, 5);
console.log(triangle.getArea()); // Output: 6
console.log(triangle.getPerimeter()); // Output: 13

// Task 1: Create Reusable Test Structures
abstract class ShapeTest {
    constructor(protected shape: Shape) {}

    testArea(expected: number): number {
        const area = this.shape.getArea();
        console.assert(area === expected, `Expected area to be ${expected}, but got ${area}`);
        return area;  // ✅ Return the computed area
    }

    testPerimeter(expected: number): number {
        const perimeter = this.shape.getPerimeter();
        console.assert(perimeter === expected, `Expected perimeter to be ${expected}, but got ${perimeter}`);
        return perimeter;  // ✅ Return the computed perimeter
    }
}

class CircleTest extends ShapeTest {
    constructor(radius: number) {
        super(new Circle(radius));
    }
}

class RectangleTest extends ShapeTest {
    constructor(width: number, height: number) {
        super(new Rectangle(width, height));
    }
}

// Test cases
const circleTest = new CircleTest(5);
console.log("Circle area is:", circleTest.testArea(78.53981633974483));
console.log("Circle perimeter is:", circleTest.testPerimeter(31.41592653589793));

const rectangleTest = new RectangleTest(4, 6);
console.log("Rectangle area is:", rectangleTest.testArea(24));
console.log("Rectangle perimeter is:", rectangleTest.testPerimeter(20));