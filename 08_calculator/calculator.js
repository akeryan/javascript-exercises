const add = function(a, b) {
  return a + b	
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce((s, num) => s + num, 0)
};

const multiply = function(...nums) {
  return nums.reduce((mul, num) => mul * num, 1)
};

const power = function(base, pow) {
	return Math.pow(base, pow)
};

const factorial = function(a) {
  if(a === 0 || a === 1) {
    return 1 
  } 
  return a * factorial(a-1)
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
