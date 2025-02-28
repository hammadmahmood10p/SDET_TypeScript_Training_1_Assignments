"use strict";
// Union Type Example
function printValue(value) {
    console.log("Value:", value);
}
const staff = {
    name: "John Doe",
    age: 30,
    employeeId: 12345
};
console.log("Staff Member:", staff);
// Function that handles both string and number inputs
function processInput(input) {
    if (typeof input === 'string') {
        console.log("Concatenated value:", input + " is a string");
    }
    else {
        console.log("Added value:", input + 10);
    }
}
processInput("Hello");
processInput(5);
function calculateArea(shape) {
    switch (shape.type) {
        case 'circle':
            const circleArea = Math.PI * Math.pow(shape.radius, 2);
            console.log("Area of Circle:", circleArea);
            return circleArea;
        case 'rectangle':
            const rectangleArea = shape.width * shape.height;
            console.log("Area of Rectangle:", rectangleArea);
            return rectangleArea;
    }
}
calculateArea({ type: 'circle', radius: 5 });
calculateArea({ type: 'rectangle', width: 10, height: 5 });
const optionalPerson = {
    name: "Jane Doe"
};
console.log("Optional Person:", optionalPerson);
const testString = 'Yes'; // 'Yes'
const testNumber = 'No'; // 'No'
console.log("Is string test (string):", testString);
console.log("Is string test (number):", testNumber);
const clickEventHandler = 'onClick'; // 'onClick'
console.log("Event Handler Type for 'click':", clickEventHandler);
const partialPerson = {
    name: "Alice"
};
const requiredPerson = {
    name: "Bob",
    age: 25
};
const pickedPerson = {
    name: "Charlie"
};
const omittedPerson = {
    age: 40
};
console.log("Partial Person:", partialPerson);
console.log("Required Person:", requiredPerson);
console.log("Picked Person:", pickedPerson);
console.log("Omitted Person:", omittedPerson);
