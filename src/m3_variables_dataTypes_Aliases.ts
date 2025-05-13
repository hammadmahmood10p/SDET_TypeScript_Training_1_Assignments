// let itemName: string = "Laptop";
// let price: number = 1599.99;
// let quantity: number = 2;

// console.log('');
// console.log('-------- OUTPUT --------');
// console.log(`Item: ${itemName}, Price: ${price}, Quantity: ${quantity}`);

// // ----------------- Aliases ----------------- //

// type CartItem = {
//     name: string;
//     price: number;
//     quantity: number;
// };

// let cart: CartItem[] = [
//     {name: "Laptop", price: 1300, quantity: 2},
//     {name: "Keyboard", price: 499.99, quantity: 5},
// ];

// console.log('');
// console.log('-------- OUTPUT --------');

// cart.forEach(item => {
//     console.log(`${item.quantity} x ${item.name} @ ${item.price} each`);
// });

// ----------------- Exercise ----------------- //

type Person = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};
  
let users: Person[] = [
    { firstName: "John", lastName: "Doe", age: 30, email: "john.doe@example.com" },
    { firstName: "Jane", lastName: "Smith", age: 25, email: "jane.smith@example.com" }
];
  
console.log('');
console.log('-------- OUTPUT --------');
  
users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName}, Age: ${user.age}, Email: ${user.email}`);
});