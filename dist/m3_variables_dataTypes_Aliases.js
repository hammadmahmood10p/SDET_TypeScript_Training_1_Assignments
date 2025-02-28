"use strict";
let itemName = "Laptop";
let price = 1599.99;
let quantity = 2;
console.log('');
console.log('-------- OUTPUT --------');
console.log(`Item: ${itemName}, Price: ${price}, Quantity: ${quantity}`);
let cart = [
    { name: "Laptop", price: 1300, quantity: 2 },
    { name: "Keyboard", price: 499.99, quantity: 5 },
];
console.log('');
console.log('-------- OUTPUT --------');
cart.forEach(item => {
    console.log(`${item.quantity} x ${item.name} @ ${item.price} each`);
});
let users = [
    { firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com" },
    { firstName: "Jane", lastName: "Smith", age: 25, email: "jane.smith@example.com" }
];
console.log('');
console.log('-------- OUTPUT --------');
users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName}, Age: ${user.age}, Email: ${user.email}`);
});
