var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import the readline module for handling user input in Node.js
import * as readline from 'readline';
// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// for Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}
// while Loop
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}
// do...while Loop
let j = 0;
do {
    console.log(j); // Output: 0 1 2 3 4
    j++;
} while (j < 5);
// Using for...of with Arrays
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, cherry
}
// Using for...in with Objects
let person = { firstName: 'John', lastName: 'Doe', age: 30 };
for (let key in person) {
    console.log(key, person[key]);
    // Output: firstName John, lastName Doe, age 30
}
// Practical Examples
// Example 1: Using for loop to sum elements in an array
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // Output: 150
// Example 2: Using while loop to find the first number divisible by 7
let k = 1;
let found = false;
while (!found) {
    if (k % 7 === 0) {
        console.log(`first number divisible by 7: ${k}`); // Output: 7
        found = true;
    }
    k++;
}
// Example 3: Using do...while loop for user input (Node.js compatible)
function getUserInput() {
    return new Promise((resolve) => {
        rl.question('Enter a number greater than 10: ', (answer) => {
            resolve(parseInt(answer));
        });
    });
}
function runExample3() {
    return __awaiter(this, void 0, void 0, function* () {
        let number;
        do {
            number = yield getUserInput();
        } while (number <= 10);
        console.log(`You entered: ${number}`); // Output: Entered number greater than 10
        rl.close(); // Close the readline interface
    });
}
runExample3();
// Example 4: Using for...of with Arrays
let numbers2 = [1, 2, 3, 4, 5];
for (let number of numbers2) {
    console.log(number * 2); // Output: 2, 4, 6, 8, 10
}
// Example 5: Using for...in with Objects
let person2 = { name: 'Alice', age: 28, city: 'New York' };
for (let key in person2) {
    console.log(`${key}: ${person2[key]}`);
    // Output: name: Alice, age: 28, city: New York
}
console.log("All executed.");
