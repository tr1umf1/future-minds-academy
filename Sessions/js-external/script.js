// let age = 19;

// console.log("Mosha ime eshte " + age);

// age= 10;
// console.log("Mosha ime eshte " + age);

let number1 = parseInt(prompt("Write your first number"));
let number2 = parseInt(prompt("Write your second number"));
if (number1 < number2) {
    alert("Number 1 should be bigger than the number 2" );
    number2 = parseInt(prompt("Write your second number"));
}
let sum = number1 + number2;
let subtract = number1 - number2;
let multiply = number1 * number2;
let divide = number1 / number2;

console.log(`Shuma e ketyre numrave eshte ${sum}`)
console.log(subtract);
console.log(multiply);
console.log(divide);
