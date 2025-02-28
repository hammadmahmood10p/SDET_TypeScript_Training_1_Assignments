"use strict";
// Section 1: Dynamic Imports and ESNext Features
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1.1 Dynamic Imports
function loadUtility() {
    return __awaiter(this, void 0, void 0, function* () {
        const lodash = yield import("lodash"); // Import entire lodash module
        const data = [1, 2, 3, 4, 5, 6];
        console.log("Chunked data:", lodash.default.chunk(data, 2)); // Access `chunk` from lodash.default
    });
}
loadUtility();
// 1.2 Symbols
const uniqueKey = Symbol("key");
const obj = {
    [uniqueKey]: "value",
};
console.log("Symbol value:", obj[uniqueKey]); // "value"
// 1.3 Generators (yield)
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateSequence();
console.log("Generator sequence:");
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
// 1.4 Async with ESNext
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log("Fetched data:", data);
    });
}
fetchData("https://restful-booker.herokuapp.com/booking");
// Section 2: Special Types in TypeScript
// 2.1 never
function assertNever(value) {
    throw new Error(`Unexpected value: ${value}`);
}
function handleShape(shape) {
    switch (shape) {
        case "circle":
            console.log("Handling circle");
            break;
        case "square":
            console.log("Handling square");
            break;
        default:
            assertNever(shape);
    }
}
handleShape("circle"); // "Handling circle"
handleShape("square"); // "Handling square"
// 2.2 unknown
function processInput(input) {
    if (typeof input === "string") {
        console.log("Uppercase input:", input.toUpperCase());
    }
    else {
        console.log("Input is not a string");
    }
}
processInput("hello"); // "HELLO"
processInput(42); // "Input is not a string"
// 2.3 void
function logMessage(message) {
    console.log("Logged message:", message);
}
logMessage("Hello, TypeScript!");
// 2.4 Type Assertions
// const input = document.getElementById("username") as HTMLInputElement;
// input.value = "TypeScript";
// console.log("Input value:", input.value);
// Exercises and Practice Tasks
// Exercise 1: Dynamic Import
function loadMoment() {
    return __awaiter(this, void 0, void 0, function* () {
        const moment = yield import("moment");
        console.log("Formatted date:", moment.default().format("MMMM Do YYYY, h:mm:ss a"));
    });
}
loadMoment();
// Task 1: Generator Function
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
const fib = fibonacci();
console.log("Fibonacci sequence:");
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
// Task 2: Handle unknown Input
function checkArray(input) {
    if (Array.isArray(input)) {
        console.log("Array length:", input.length);
    }
    else {
        console.log("Input is not an array");
    }
}
checkArray([1, 2, 3]); // "Array length: 3"
checkArray("hello"); // "Input is not an array"
