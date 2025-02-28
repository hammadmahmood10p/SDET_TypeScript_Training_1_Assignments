let username: string = "John";
let userAge: number = 25;
let isLoggedIn: boolean = true;

// username = 123;
// userAge = "25";
// isLoggedIn = "true";


function greetUser(name: string): string {
    return `Hello, ${name}!`;
  }
  
  console.log(greetUser("Hammad")); // Output: Hello, Alice!
  //console.log(greetUser(42)); // Error: Argument of type 'number' is not assignable

function calculateSum(a: number, b: number){
    return a + b;
}

console.log('The sum is: ', calculateSum(10, 20));
// console.log(calculateSum(10, "20"));

function multiply(a: number, b: number) {
  return a * b; // TypeScript infers the return type as 'number'
}

let result = multiply(5, 4); // TypeScript infers the type of 'result' as 'number'
console.log(result); // Output: 20

// result = "twenty"; // Error: Type 'string' is not assignable to type 'number'.
console.log('The result is: ', result);