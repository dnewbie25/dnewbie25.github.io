//getElementbyID -->> can return a nodelist but ID are intended to be unique 

const title = document.getElementById('page-title');

console.log(title);

//getElementByClassName -->> returns a node list

const errors = document.getElementsByClassName('error');

console.log(errors);

//getElementByTag -->> returns a node list

const midParagraph = document.getElementsByTagName('p');

console.log(midParagraph[1]);