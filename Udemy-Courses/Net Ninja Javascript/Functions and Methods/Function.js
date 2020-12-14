"use strict";

// Function Declaration. Works everywhere in the code
function greet(){
  console.log("Hello World!");
}

// Function Expression. Must be declared before the block of code where it will be used

const speak = function(){
  console.log("Speaking to this world!!");
}

greet();
speak();

// Arguments & Parameters

const speak2 = function(time, name = 'luigi'){
  console.log(`Good ${time}, ${name}`);
}

speak2("night");
speak2("morning", "Diana");

// Returning Values

let calcArea = function(radius) {
  let area = 3.14 * radius**2;
  return area;
}

const area = calcArea(2);

let volumeSphere = function(radius) {
  let volume = (4/3) * 3.14 * radius**3;
  return volume;
}

console.log(area);
console.log(volumeSphere(2));

// Arrow Function 1. Parenthesis for multiple parameters

const calcArea2 = (radius, square = 2) => {
  return 3.14 * radius**square;
};

console.log(calcArea2(3));

// Arrow function 2. Without parenthesis for a single parameter

let myAge = birthYear => {return 2020 - birthYear};

console.log(myAge(1997));

// Function expressions and Arrow function

let greet2 = function(){ //function expressions as usual
  return 'This is my greet2() function expression';
};

console.log(greet2());

let greet3 = () => { //arrow function expression
  return 'This is my greet3() arrow function';
};

console.log(greet3());

// Callbacks and forEach method

/* Callback is when you pass a function as an argument to another function */

console.log("Callback functions star now!!");

const myCallBack = (callbackFunction) => {
  let value = 50;
  callbackFunction(value);
};

myCallBack(function(value){
  console.log(value);
});

//forEach method

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(element, index){ //parameters are element & index
  console.log(`Item ${index + 1}: ${element}`);
});

//Another way to use forEach is with arroiw functions, like this

const logPerson = (person, index) => {
  console.log(`Person #${index + 1} is ${person}`)
};

people.forEach(logPerson);