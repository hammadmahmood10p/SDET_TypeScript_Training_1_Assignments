"use strict";
// // Section 1: Classes, Inheritance, and Mixins
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
