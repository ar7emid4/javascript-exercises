const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, item) => accumulator += item, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, item) => accumulator *= item, 1);
};

const power = function(x, e) {
	return x**e;
};

const factorial = function(x) {
  let result = 1
	for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
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
