const add = function(n1, n2) {
	const addition = n1+n2;
  return addition;
};

const subtract = function(n1, n2) {
	const sub = n1 - n2;
  return sub;
};

const sum = function(array) {
	return array.reduce((total,current) => total + current, 0);
  
};

const multiply = function(array) {
  return array.reduce((total,current) => total * current, 1);

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
