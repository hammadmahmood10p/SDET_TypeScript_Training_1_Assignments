"use strict";
// let itemName: string = "Laptop";
// let price: number = 1599.99;
// let quantity: number = 2;
let users = [
    { firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com" },
    { firstName: "Jane", lastName: "Smith", age: 25, email: "jane.smith@example.com" }
];
console.log('');
console.log('-------- OUTPUT --------');
users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName}, Age: ${user.age}, Email: ${user.email}`);
});
