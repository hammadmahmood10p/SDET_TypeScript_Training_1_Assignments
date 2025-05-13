// // Basic Random Number Generation
// const randomDecimal = Math.random();
// console.log(randomDecimal); // Output: A decimal between 0 and 1

// function getRandomNumber(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Usage
// console.log(getRandomNumber(1, 100)); // Output: A random integer between 1 and 100

// // Conditionals
// const testStatus = "fail";

// if (testStatus === "pass") {
//     console.log("Test passed!");
// } else if (testStatus === "fail") {
//     console.log("Test failed!");
// } else {
//     console.log("Test skipped!");
// }

// // Output: Test failed!

// const testPriority = 2;

// switch (testPriority) {
//     case 1:
//         console.log("High priority test");
//         break;
//     case 2:
//         console.log("Medium priority test");
//         break;
//     case 3:
//         console.log("Low priority test");
//         break;
//     default:
//         console.log("Invalid priority");
// }

// // Output: Medium priority test

// // Comparators and Logical Operators
// console.log(5 == "5"); // Output: true
// console.log(5 === "5"); // Output: false

// const isReady = true;
// const isTestPassed = false;

// if (isReady && isTestPassed) {
//     console.log("Ready to deploy!");
// } else if (isReady || isTestPassed) {
//     console.log("Partial success.");
// } else {
//     console.log("Not ready.");
// }

// // Output: Partial success.

// // Practical Examples
// function generateRandomUsername(): string {
//     const prefix = "User";
//     const randomId = getRandomNumber(1000, 9999); // Using the previously defined function
//     return `${prefix}${randomId}`;
// }

// // Usage
// console.log(generateRandomUsername()); // Output: User1234 (random)

// function checkResponseTime(time: number): string {
//     if (time < 200) {
//         return "Fast response";
//     } else if (time < 500) {
//         return "Moderate response";
//     } else {
//         return "Slow response";
//     }
// }

// // Usage
// console.log(checkResponseTime(450)); // Output: Moderate response

// function validateLogin(username: string, password: string): boolean {
//     return username === "admin" && password === "12345";
// }

// // Usage
// console.log(validateLogin("admin", "12345")); // Output: true
// console.log(validateLogin("admin", "wrong")); // Output: false

// Module Quiz: Random Numbers and Control Flow
function isDivisibleByThreeAndFive(num: number): boolean {
    return num % 3 === 0 && num % 5 === 0;
}

// Usage examples
console.log(isDivisibleByThreeAndFive(15)); // Output: true (15 is divisible by 3 and 5)
console.log(isDivisibleByThreeAndFive(10)); // Output: false (10 is divisible by 5 but not by 3)
console.log(isDivisibleByThreeAndFive(9)); // Output: false (9 is divisible by 3 but not by 5)
console.log(isDivisibleByThreeAndFive(30)); // Output: true (30 is divisible by both)