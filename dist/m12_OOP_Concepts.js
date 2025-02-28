"use strict";
// Section 1: Classes, Inheritance, and Mixins
// Example: Person Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Alice", 30);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// Example: Employee Class Extending Person
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}
const employee = new Employee("Bob", 40, "Engineer");
employee.greet(); // Output: Hello, my name is Bob and I am 40 years old.
console.log(employee.getRole()); // Output: Engineer
// Example: Implementing Mixins
class Logger {
    log(message) {
        console.log(`Log: ${message}`);
    }
}
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            targetClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
class User {
    constructor(username) {
        this.username = username;
    }
}
applyMixins(User, [Logger]);
const user = new User("JohnDoe");
user.log("User logged in."); // Output: Log: User logged in.
// Section 2: Abstract Classes, Interfaces, and Static Members
// Example: Shape Abstract Class
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50
console.log(rectangle.getPerimeter()); // Output: 30
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(7);
console.log(circle.getArea()); // Output: 153.938...
console.log(circle.getPerimeter()); // Output: 43.982...
// Example: Static Members
class ShapeCounter {
    static increment() {
        this.count++;
    }
}
ShapeCounter.count = 0;
ShapeCounter.increment();
ShapeCounter.increment();
console.log(ShapeCounter.count); // Output: 2
class Square {
    constructor(side) {
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
    getPerimeter() {
        return 4 * this.side;
    }
}
class Triangle {
    constructor(base, height, side1, side2) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    getPerimeter() {
        return this.base + this.side1 + this.side2;
    }
}
const square = new Square(4);
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16
const triangle = new Triangle(3, 4, 5, 5);
console.log(triangle.getArea()); // Output: 6
console.log(triangle.getPerimeter()); // Output: 13
// // Task 1: Create Reusable Test Structures
// abstract class ShapeTest {
//     constructor(protected shape: Shape) {}
//     testArea(expected: number): void {
//         const area = this.shape.getArea();
//         console.assert(area === expected, `Expected area to be ${expected}, but got ${area}`);
//     }
//     testPerimeter(expected: number): void {
//         const perimeter = this.shape.getPerimeter();
//         console.assert(perimeter === expected, `Expected perimeter to be ${expected}, but got ${perimeter}`);
//     }
// }
// class CircleTest extends ShapeTest {
//     constructor(radius: number) {
//         super(new Circle(radius));
//     }
// }
// class RectangleTest extends ShapeTest {
//     constructor(width: number, height: number) {
//         super(new Rectangle(width, height));
//     }
// }
// const circleTest = new CircleTest(5);
// circleTest.testArea(78.53981633974483); // Validates the area calculation
// circleTest.testPerimeter(31.41592653589793); // Validates the perimeter calculation
// const rectangleTest = new RectangleTest(4, 6);
// rectangleTest.testArea(24); // Validates the area calculation
// rectangleTest.testPerimeter(20); // Validates the perimeter calculation
// Task 1: Create Reusable Test Structures
class ShapeTest {
    constructor(shape) {
        this.shape = shape;
    }
    testArea(expected) {
        const area = this.shape.getArea();
        console.assert(area === expected, `Expected area to be ${expected}, but got ${area}`);
        return area; // ✅ Return the computed area
    }
    testPerimeter(expected) {
        const perimeter = this.shape.getPerimeter();
        console.assert(perimeter === expected, `Expected perimeter to be ${expected}, but got ${perimeter}`);
        return perimeter; // ✅ Return the computed perimeter
    }
}
class CircleTest extends ShapeTest {
    constructor(radius) {
        super(new Circle(radius));
    }
}
class RectangleTest extends ShapeTest {
    constructor(width, height) {
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
// Section 1: Classes, Inheritance, and Mixins
// 1.1 Creating and Using Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Alice", 30);
person.greet(); // Hello, my name is Alice and I am 30 years old.
// 1.2 Inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    getRole() {
        return this.role;
    }
}
const employee = new Employee("Bob", 40, "Engineer");
employee.greet(); // Hello, my name is Bob and I am 40 years old.
console.log(employee.getRole()); // Engineer
// 1.3 Implementing Mixins
class Logger {
    log(message) {
        console.log(`Log: ${message}`);
    }
}
function applyMixins(targetClass, baseClasses) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            targetClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
class User {
    constructor(username) {
        this.username = username;
    }
}
applyMixins(User, [Logger]);
const user = new User("JohnDoe");
user.log("User logged in."); // Log: User logged in.
// Section 2: Abstract Classes, Interfaces, and Static Members
// 2.1 Abstract Classes
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // 50
console.log(rectangle.getPerimeter()); // 30
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle = new Circle(7);
console.log(circle.getArea()); // 153.938...
console.log(circle.getPerimeter()); // 43.982...
// 2.3 Static Members
class ShapeCounter {
    static increment() {
        this.count++;
    }
}
ShapeCounter.count = 0;
ShapeCounter.increment();
ShapeCounter.increment();
console.log(ShapeCounter.count); // 2
class Square {
    constructor(side) {
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
    getPerimeter() {
        return 4 * this.side;
    }
}
class Triangle {
    constructor(base, height, side1, side2) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
    getPerimeter() {
        return this.base + this.side1 + this.side2;
    }
}
const square = new Square(4);
console.log(square.getArea()); // 16
console.log(square.getPerimeter()); // 16
const triangle = new Triangle(3, 4, 5, 5);
console.log(triangle.getArea()); // 6
console.log(triangle.getPerimeter()); // 13
// Task 1: Create Reusable Test Structures
class ShapeTest {
    constructor(shape) {
        this.shape = shape;
    }
    testArea(expected) {
        const area = this.shape.getArea();
        console.assert(area === expected, `Expected area to be ${expected}, but got ${area}`);
    }
    testPerimeter(expected) {
        const perimeter = this.shape.getPerimeter();
        console.assert(perimeter === expected, `Expected perimeter to be ${expected}, but got ${perimeter}`);
    }
}
class CircleTest extends ShapeTest {
    constructor(radius) {
        super(new Circle(radius));
    }
}
class RectangleTest extends ShapeTest {
    constructor(width, height) {
        super(new Rectangle(width, height));
    }
}
const circleTest = new CircleTest(5);
circleTest.testArea(78.53981633974483); // Validates the area calculation
circleTest.testPerimeter(31.41592653589793); // Validates the perimeter calculation
const rectangleTest = new RectangleTest(4, 6);
rectangleTest.testArea(24); // Validates the area calculation
rectangleTest.testPerimeter(20); // Validates the perimeter calculation
