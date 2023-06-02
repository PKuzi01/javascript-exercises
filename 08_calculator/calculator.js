const add = function(no1, no2) {
	  let sum = no1 + no2;
    return sum;
};

const subtract = function(no1, no2) {
	  let sum = no1 - no2;
    return sum;
};

const sum = function(array) {
	if (array === []) {
    return 0;
  } else {
    let result = 0;
    for (let x = 0; x < array.length; x++) {
      result += array[x];
    }
    return result;
  }
  
};

const multiply = function(array) {
  if (array === []) {
    return 0;
  } else {
    let result = 0;
    for (let x = 0; x < array.length; x++) {
      result += array[x];
    }
    return result;
  }
};

const power = function(no1, no2) {
	let sum = no1 ** no2;
  return sum;
};

const factorial = function(num) {
	if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
