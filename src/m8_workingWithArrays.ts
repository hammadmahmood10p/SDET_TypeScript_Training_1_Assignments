// Declaring Arrays in TypeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ['apple', 'banana', 'cherry'];

// Using Generics for Array Declaration
let mixedArray: Array<number | string> = [1, 2, 'apple', 'banana']; // Array with numbers and strings

// Basic and Intermediate Array Operations
let fruits: string[] = ['apple', 'banana', 'cherry'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange']

let removedFruit = fruits.pop();
console.log(removedFruit); // Output: 'cherry'
console.log(fruits); // Output: ['apple', 'banana']

let numbersSlice: number[] = [1, 2, 3, 4, 5];
let slicedNumbers = numbersSlice.slice(1, 4); // Extract elements from index 1 to 3
console.log(slicedNumbers); // Output: [2, 3, 4]
console.log(numbersSlice); // Original array remains unchanged: [1, 2, 3, 4, 5]

let numbersSplice: number[] = [1, 2, 3, 4, 5];
let removedElements = numbersSplice.splice(2, 2, 6, 7); // Start at index 2, remove 2 elements, and add 6 and 7
console.log(numbersSplice); // Output: [1, 2, 6, 7, 5]
console.log(removedElements); // Output: [3, 4]

// Practical Example: Array Operations in Test Data
let testCases: string[] = ['Test Case 1', 'Test Case 2', 'Test Case 3'];

// Adding a new test case
testCases.push('Test Case 4');
console.log(testCases); // Output: ['Test Case 1', 'Test Case 2', 'Test Case 3', 'Test Case 4']

// Removing the last test case
let removedTestCase = testCases.pop();
console.log(removedTestCase); // Output: 'Test Case 4'
console.log(testCases); // Output: ['Test Case 1', 'Test Case 2', 'Test Case 3']

// Extracting a portion of the test cases
let slicedTestCases = testCases.slice(0, 2);
console.log(slicedTestCases); // Output: ['Test Case 1', 'Test Case 2']

// Modifying test cases using splice
testCases.splice(1, 1, 'Updated Test Case');
console.log(testCases); // Output: ['Test Case 1', 'Updated Test Case', 'Test Case 3']
console.log('All executed.');