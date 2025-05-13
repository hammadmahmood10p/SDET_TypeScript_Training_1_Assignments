"use strict";
// // Section 1: Basic Function Declarations and Types
// function calculateGrade(score: number): string {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
function calculateArea(length, width) {
    if (width == undefined) {
        return length * length; // Square
    }
    return length * width; // Rectangle
}
console.log(calculateArea(4)); // Output: 16 (Square)
console.log(calculateArea(4, 5)); // Output: 20 (Rectangle)
