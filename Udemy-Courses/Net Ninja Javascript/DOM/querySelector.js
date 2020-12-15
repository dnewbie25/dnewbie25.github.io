//Grabs the first element that matches the parameter
const paragraph = document.querySelector('p');

console.log(paragraph);

//querySelector with a class

const error = document.querySelector('div.error');

console.log(error);

//querySelectorAll selects all elements that match. Returns a nodeList

const paras = document.querySelectorAll('p');

console.log(paras[0]); //the first <p> of the paraws nodelist
