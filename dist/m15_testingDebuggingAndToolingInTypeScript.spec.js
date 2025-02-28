// Ensure Jest is Installed (if not already):
// npm install --save-dev jest @types/jest ts-jest
// Configure Jest for TypeScript:
// Create a jest.config.js file in the project root:
// module.exports = {
//     preset: "ts-jest",
//     testEnvironment: "node",
// };
// Run Your Tests with Jest:
// npx jest
// ✅ Jest will now pick up and execute your test cases.
// Alternative: Run Jest on a Specific File
// If you want to run tests from a specific file (like m15_testingDebuggingAndToolingInTypeScript.ts), use:
// npx jest dist/m15_testingDebuggingAndToolingInTypeScript.js
// Why node Doesn't Work?
// node executes JavaScript/TypeScript files as a normal script and doesn’t recognize Jest’s test function.
// Jest provides its own environment, making functions like test() available.
// Section 1: Unit Testing with Jest and TypeScript
// 1.1 Writing Type-Safe Unit Tests
export function add(a, b) {
    return a + b;
}
test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    console.log("add(2, 3) test passed");
});
// 1.2 Configuring Jest with TypeScript
// Jest configuration is done via npm commands, not in code.
// Section 2: Debugging with Source Maps
// 2.1 Enabling Source Maps
// Source maps are enabled in tsconfig.json, not in code.
// Section 3: Tooling in TypeScript
// 3.1 TypeScript Compiler API
import * as ts from "typescript";
function analyzeCode(code) {
    const sourceFile = ts.createSourceFile("test.ts", code, ts.ScriptTarget.Latest, true);
    ts.forEachChild(sourceFile, (node) => {
        console.log("Node kind:", ts.SyntaxKind[node.kind]);
    });
}
const code = `const x: number = 10;`;
analyzeCode(code);
// Exercises and Practice Tasks
// Exercise 1: Writing Unit Tests
export function multiply(a, b) {
    return a * b;
}
test("multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
    console.log("multiply(4, 5) test passed");
});
// Exercise 2: Debugging with Source Maps
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
console.log("Divide result:", divide(10, 2)); // 5
try {
    console.log("Divide result:", divide(10, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message); // "Division by zero"
    }
    else {
        console.error("An unknown error occurred");
    }
}
function validateUser(user) {
    return typeof user.name === "string" && typeof user.age === "number";
}
test("validates user object", () => {
    const user = { name: "Alice", age: 25 };
    expect(validateUser(user)).toBe(true);
    console.log("validateUser test passed");
});
