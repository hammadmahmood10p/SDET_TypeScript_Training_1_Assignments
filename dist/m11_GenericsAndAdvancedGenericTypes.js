"use strict";
// Section 1: Basic Generic Syntax and Generic Constraints
console.log("=== Section 1: Basic Generics ===");
// Example: Generic Function
function identity(value) {
    return value;
}
const num = identity(42); // T is number
const str = identity("Hello"); // T is string
console.log("Identity Function Outputs:");
console.log("Number:", num); // Output: 42
console.log("String:", str); // Output: Hello
function logLength(item) {
    console.log("Length of item:", item.length);
}
console.log("\nLog Length Outputs:");
logLength("Hello"); // Output: 5
logLength([1, 2, 3]); // Output: 3
// logLength(42); // Error: number does not have a length property
// Section 2: Generics in Classes
console.log("\n=== Section 2: Generics in Classes ===");
// Example: Generic Stack Class
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        console.log(`Pushed: ${item}`);
    }
    pop() {
        const poppedItem = this.items.pop();
        console.log(`Popped: ${poppedItem}`);
        return poppedItem;
    }
    peek() {
        console.log(`Peek: ${this.items[this.items.length - 1]}`);
        return this.items[this.items.length - 1];
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log("\nPeek Top of Stack:");
numberStack.peek(); // Output: 20
console.log("\nPop From Stack:");
numberStack.pop(); // Output: 20
console.log("\nPop Again:");
numberStack.pop(); // Output: 10
// Section 3: Conditional Generics and the infer Keyword
console.log("\n=== Section 3: Conditional Generics and Infer Keyword ===");
// Using variables to log the inferred type behavior
const test1 = true; // Expected: true
const test2 = false; // Expected: false
console.log("\nIsArray Tests:");
console.log("Test1 (number[]):", test1); // Output: true
console.log("Test2 (string):", test2); // Output: false
// Using variables to log inferred types
const test3 = 42; // Should be number
const test4 = "Hello"; // Should be string
console.log("\nElementType Tests:");
console.log("Test3 (number[]):", test3); // Output: 42 (number)
console.log("Test4 (string):", test4); // Output: Hello (string)
// Using variables for runtime logging
const test5 = 100; // Expected: number
console.log("\nGetReturnType Test:");
console.log("Test5 (() => number):", test5); // Output: 100 (number)
