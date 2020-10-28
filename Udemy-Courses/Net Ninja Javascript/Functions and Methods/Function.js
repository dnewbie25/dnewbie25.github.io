// Function Declaration
function greet(){
  console.log("Hello World!");
}

// Function Expression

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

// Arrow Function

const calcArea2 = (radius) => {
  return 3.14 * radius**2;
};

console.log(calcArea2(3));

// Another arrow function

let myAge = birthYear => {return 2020 - birthYear};

console.log(myAge(1997));

// Callbacks and forEach method