"use strict";
// // Section 1: Higher-Order Functions and Function Composition
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// // 1.1 Higher-Order Functions
// function processArray<T>(arr: T[], transform: (value: T) => T): T[] {
//     return arr.map(transform);
// }
// const numbers = [1, 2, 3, 4];
// const doubled = processArray(numbers, (n) => n * 2);
// console.log("Doubled numbers:", doubled); // [2, 4, 6, 8]
// // 1.2 Function Composition
// const add = (x: number) => x + 1;
// const multiply = (x: number) => x * 2;
// function compose<T>(...functions: ((arg: T) => T)[]): (arg: T) => T {
//     return (arg: T): T => functions.reduceRight((acc, fn) => fn(acc), arg);
// }
// const addThenMultiply = compose(multiply, add);
// console.log("addThenMultiply(5):", addThenMultiply(5)); // 12
// // Section 2: Currying and Partial Application
// // 2.1 Currying
// function curry<T, U, V>(fn: (x: T, y: U) => V): (x: T) => (y: U) => V {
//     return (x: T) => (y: U) => fn(x, y);
// }
// const multiplyCurried = (a: number, b: number) => a * b;
// const curriedMultiply = curry(multiplyCurried);
// const double = curriedMultiply(2);
// console.log("double(5):", double(5)); // 10
// // 2.2 Partial Application
// function partial<T, U, V>(fn: (x: T, y: U) => V, x: T): (y: U) => V {
//     return (y: U) => fn(x, y);
// }
// const addPartial = (a: number, b: number) => a + b;
// const addFive = partial(addPartial, 5);
// console.log("addFive(3):", addFive(3)); // 8
// // Section 3: Async Programming in Functional Paradigms
// // 3.1 Async Programming with Promises and async/await
// async function fetchData(url: string): Promise<any> {
//     const response = await fetch(url);
//     return response.json();
// }
// async function processData() {
//     const data = await fetchData("https://restful-booker.herokuapp.com/booking");
//     const filteredData = data.filter((item: any) => item.active);
//     console.log("Filtered data:", filteredData);
// }
// processData();
// // 3.2 Functional Transformations with Async Data
// async function fetchAndTransform(url: string): Promise<string[]> {
//     const data = await fetchData(url);
//     return data
//         .filter((item: any) => item.active)
//         .map((item: any) => item.name);
// }
// fetchAndTransform("https://restful-booker.herokuapp.com/booking").then((names) => console.log("Transformed names:", names));
// Exercises and Practice Tasks
// Exercise 1: Higher-Order Functions
function processStrings(arr, transform) {
    return arr.map(transform);
}
const strings = ["apple", "banana", "cherry"];
const uppercased = processStrings(strings, (str) => str.toUpperCase());
console.log("Uppercased strings:", uppercased); // ["APPLE", "BANANA", "CHERRY"]
// Task 1: Implement Currying
function curry_Volume(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}
const volume = curry_Volume((length, width, height) => length * width * height);
const calculateVolume = volume(2)(3)(4); // Corrected: Fully apply the curried function
console.log("Volume of the box:", calculateVolume); // 24
// Task 2: Handle Async Data with Conditional Generics
function fetchDataWithGenerics(url, parseAsJson) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return parseAsJson ? (yield response.json()) : (yield response.text());
    });
}
fetchDataWithGenerics("https://restful-booker.herokuapp.com/booking", false).then(console.log);
fetchDataWithGenerics("https://restful-booker.herokuapp.com/booking", true).then(console.log);
// async function fetchDataWithGenerics<T>(url: string, parseAsJson: boolean): Promise<T> {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return parseAsJson ? (await response.json()) : (await response.text());
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error; // Re-throw the error if needed
//     }
// }
// async function run() {
//     console.log("Fetching as text:");
//     const textData = await fetchDataWithGenerics<string>("https://restful-booker.herokuapp.com/booking", false);
//     console.log(textData);
//     console.log("Fetching as JSON:");
//     const jsonData = await fetchDataWithGenerics<object>("https://restful-booker.herokuapp.com/booking", true);
//     console.log(jsonData);
// }
// run().catch(console.error);
