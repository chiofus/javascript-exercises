/**
 * 
 * @param  {...number} numbers 
 */
const add = function(...numbers) {
	return numbers.reduce((addition, curr) => addition + curr);
};

/**
 * 
 * @param  {...number} numbers 
 */
const subtract = function(...numbers) {
	return numbers.reduce((subtraction, curr) => subtraction - curr);
};

/**
 * @param {number[]} to_sum
 */
const sum = function(to_sum) {
	return to_sum.reduce((curr_sum, a) => curr_sum + a, 0);
};

/**
 * @param {number[]} to_mult
 */
const multiply = function(to_mult) {
  return to_mult.reduce((mult, a) => mult * a);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 1 || a === 0) {return 1};

  let factorial = a;
  while (a !== 1) {
    factorial = factorial * (a-1);
    a --;
  }
  return factorial;
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
