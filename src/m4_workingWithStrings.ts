
// 1. String Manipulation //
//-----------------------//

// --- String Concatenation --- //
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;

console.log(fullName);
// Output: John Doe


// --- Substring Extraction --- //
let testMessage: string = "Test Failed: Username is invalid";
let reason: string = testMessage.slice(13);

console.log(reason);
// Output: Username is invalid


// --- String Length --- //
let input: string = "password123";
console.log(input.length);
// Output: 11


// --- Changing Case --- //
let userInput: string = "TestUser";
console.log(userInput.toLowerCase());
// Output: testuser


// --- Trimming Strings --- //
let rawInput: string = " username ";
console.log(rawInput.trim());
// Output: username


// --- Replacing Substrings --- //
let url: string = "http://example.com/{userId}";
let updatedUrl: string = url.replace("{userId}", "12345");

console.log(updatedUrl);
// Output: http://example.com/12345


// --- Formatting Output --- //
let testCase: string = "Login Test";
let result: boolean = true;

console.log(`Test Case: ${testCase}, Result: ${result ? "Passed" : "Failed"}`);
// Output: Test Case: Login Test, Result: Passed


// --- Parsing Data --- //
let response: string = "User ID: 5678, Status: Active";
let userId: string = response.split(",")[0].split(":")[1].trim();

console.log(userId);
// Output: 5678


// --- Dynamic Test Content --- //
function generateTestEmail(username: string): string {
    return `${username.toLowerCase()}@test.com`;
}

console.log(generateTestEmail("TestUser"));
// Output: testuser@test.com


// --- Activity: Extract Domain from Email --- //
let email: string = "user@example.com";
let domain: string = email.split("@")[1];

console.log(domain);
// Output: example.com


// 2. Template Literals and Embedded Expressions //
//----------------------------------------------//

// --- Basic Syntax --- //
const greeting: string = `Hello, World!`;
console.log(greeting);
// Output: Hello, World!


// --- Embedding Expressions --- //
const testName: string = "Login Test";
const status: boolean = true;
const message: string = `Test: ${testName}, Status: ${status ? "Passed" : "Failed"}`;

console.log(message);
// Output: Test: Login Test, Status: Passed


// --- Dynamic URL Generation --- //
function createUrl(base: string, params: Record<string, string>): string {
    const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    return `${base}?${queryString}`;
}

console.log(createUrl("https://api.example.com/search", { query: "test", limit: "10" }));
// Output: https://api.example.com/search?query=test&limit=10