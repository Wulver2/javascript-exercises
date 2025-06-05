const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  let f = 1;
	for(let i = 2; i < num + 1; i++ ) {
    f = f * i;
  }
  return f;
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
