const add = (num1, num2) => {
    return num1 + num2;
 } // arrow function
 
 console.log(add(1, 2))

 const subtract = function(num1, num2){
    return num1 - num2;
} // function expression
console.log(subtract(9,7))

const multi = (num1, num2) => num1 *num2;
console.log(multi(6,6)) // arrow function

10>=21 ? "something" : "nothing" //tenary operator
console.log(10>=21 ? "something" : "nothing")

const club = (age) => age >= 21 ? "Get in" : "Stay out"; // ternary operator with arrow function
console.log(club(17))

//Arrow function practice
/*function greet(name) {
   return "Hello, " + name + "!";
}*/
const greet = (name) => {
    return `Hello, ${name}!`;
}  // arrow function with template literals
console.log(greet("Matteo"));

/*function square(number) {
    return number * number;
 }*/ 
const square = number => number * number  // arrow function without parentheses
console.log(square(3));

/*function isEven(number) {
   if (number % 2 === 0) {
       return true;
   } else {
       return false;
   }
}*/
const isEven = (number) => number % 2 === 0 ? "true" : "false"; // arrow function with ternary operator
console.log(isEven(9));

// Explicit to Implicit Return practice

//const square = (x) => { return x * x; };
const square2 = x=> x * x;
console.log(square2(8));

//const multiply = (a, b) => { return a * b; };
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

//const getMessage = () => { return "Welcome to JavaScript!"; };
const getMessage = () => "Welcome to JavaScript!";
console.log(getMessage());

//Higher order functions
function performOperation(num1, num2, operation) {
    return operation(num1, num2);
 }
 
 function add2(a, b) {
    return a + b;
 }
 
 function subtract2(a, b) {
    return a - b;
 }
 
 // Usage of the higher-order function
 const result1 = performOperation(5, 3, add2); // Calls the "add" function
 const result2 = performOperation(10, 4, subtract2); // Calls the "subtract" function
 const result3 = performOperation(10, 10, (num1, num2) => num1 * num2); // Calls the anonymous function

 let arr = [2, 4, 6, 8, 10];
 const doubled2 = arr.map(value => value * 2); // Using arrow function with map
 console.log(doubled2); 

 const evensOnly = arr.filter(value => value % 2 == 0); // Using arrow function with filter
 console.log(evensOnly);

 //Higher Order Functions practice
 //.map and .filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*function evenNumbersSquared(arr){
    return number.filter(num => num % 2 === 0) // filter even numbers
              .map(num => num * num); // square the even numbers    
};*/
/*PREPP
Parameters: input: array of numbers, output: array of numbers
Example:
Psuedocode: I am going to use the filter method to filter out the even numbers. Then I will use the map method to square the even numbers. Then I will console log to check the code.*/
const evenNumbersSquared = number => number.filter(num => num % 2 === 0).map(num => num * num); // arrow function with filter and map
console.log(evenNumbersSquared(numbers)); // [4, 16, 36, 64, 100]

//Reduce excercise
const prices = [10.99, 5.49, 12.99, 8.75, 15.20];
function calculateDiscountedTotal(prices, discount) {
    return prices.reduce((total, price) => total + price * (1 - discount), 0); // reduce to calculate total with discount
}
const discount = 0.2; // 20% discount
const total = calculateDiscountedTotal(prices, discount)
console.log(total) // call the function

// Find
const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Your higher-order function here
const findWordWithA = wordsArr => {
// Use find
};

console.log(findWordWithA(words));

//Recursion
function countdown(n) {
    if (n <= 0) {
      console.log("Done!");
      return;
    }
   
    console.log(n);
    countdown(n - 1);  
}

countdown(5);;

// Recursion practice Sum of an array
const sumOfArray = (arrayOfNumbers) => {
    if (arrayOfNumbers.length == 1){
        return arrayOfNumbers[0]; // base case: if the array has only one element, return that element
    }
const numbers1 =arrayOfNumbers.pop();
console.log(arrayOfNumbers);  
console.log(numbers1);
return numbers1 + sumOfArray(arrayOfNumbers); // recursive case: add the last element to the sum of the rest of the array
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6]));
  