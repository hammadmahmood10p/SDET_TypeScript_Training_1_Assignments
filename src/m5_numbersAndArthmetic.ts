// // Module 5: Numbers and Arithmetic

// // ===== Basic Arithmetic Operations =====
// const num1 = 15;
// const num2 = 4;
// console.log(`Addition: ${num1 + num2}`); // Output: 19
// console.log(`Subtraction: ${num1 - num2}`); // Output: 11
// console.log(`Multiplication: ${num1 * num2}`); // Output: 60
// console.log(`Division: ${num1 / num2}`); // Output: 3.75
// console.log(`Modulus: ${num1 % num2}`); // Output: 3

// // ===== Application in Testing: Shopping Cart Calculation =====
// const itemPrice = 25;
// const quantity = 3;
// const totalPrice = itemPrice * quantity;
// console.log(`Total Price: ${totalPrice}`); // Output: $75

// // ===== Increment and Decrement Operators =====
// let count: number = 0;
// count++;
// console.log(count); // Output: 1

// let count2: number = 10;
// count2--;
// console.log(count2); // Output: 9

// // ===== Example 1: Arithmetic Operations in a Shopping Cart =====
// const itemPrice2 = 50;
// const quantity2 = 2;
// const taxRate = 0.1; // 10%

// const subtotal = itemPrice2 * quantity2;
// const totalPrice2 = subtotal + (subtotal * taxRate);

// console.log(`Subtotal: $${subtotal}`); // Output: Subtotal: $100
// console.log(`Total Price (with tax): $${totalPrice2}`); // Output: Total Price (with tax): $110

// // ===== Example 2: Checking Even or Odd Numbers =====
// function checkEvenOdd(num: number): string {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(checkEvenOdd(10)); // Output: Even
// console.log(checkEvenOdd(7)); // Output: Odd

// // ===== Example 3: Increment and Decrement Operators =====
// let counter = 5;

// console.log(`Initial Counter: ${counter}`); // Output: Initial Counter: 5

// counter++;
// console.log(`After Increment: ${counter}`); // Output: After Increment: 6

// counter--;
// console.log(`After Decrement: ${counter}`); // Output: After Decrement: 5

// // ===== Example 4: Simulating Test Data with Arithmetic =====
// const testScores = [85, 90, 78, 92, 88];
// const totalScore = testScores.reduce((sum, score) => sum + score, 0);
// const averageScore = totalScore / testScores.length;

// console.log(`Total Score: ${totalScore}`); // Output: Total Score: 433
// console.log(`Average Score: ${averageScore}`); // Output: Average Score: 86.6

// // ===== Example 5: Incremental Test Case Execution =====
// let executedTests = 0;

// function executeTest() {
//     executedTests++;
//     console.log(`Executed Tests: ${executedTests}`);
// }

// executeTest(); // Output: Executed Tests: 1
// executeTest(); // Output: Executed Tests: 2

// // ===== Example 6: Arithmetic for Validation =====
// const originalPrice = 200;
// const discount = 20; // $20 off
// const expectedPrice = originalPrice - discount;

// const calculatedPrice = 180;

// if (calculatedPrice === expectedPrice) {
//     console.log("Discount applied correctly.");
// } else {
//     console.log("Discount calculation is incorrect.");
// }
// // Output: Discount applied correctly.

// // ===== Example 7: Factorial Calculation Using Decrement =====
// function factorial(num: number): number {
//     let result = 1;
//     while (num > 0) {
//         result *= num;
//         num--;
//     }
//     return result;
// }

// console.log(`Factorial of 5: ${factorial(5)}`); // Output: Factorial of 5: 120

// // ===== Example 8: Timer Simulation with Decrement =====
// let timer = 10;

// while (timer > 0) {
//     console.log(`Time Remaining: ${timer} seconds`);
//     timer--;
// }

// // Output: Time Remaining: 10 seconds
// //    Time Remaining: 9 seconds
// //    ...
// //    Time Remaining: 1 second

// ===== Quiz: Practical Code Challenge =====
function calculate(a: number, b: number) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
    };
}

console.log(calculate(5, 3));
// Output: { sum: 8, difference: 2, product: 15 }