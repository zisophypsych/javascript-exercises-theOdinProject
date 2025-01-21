const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(a) {
  let sum = a.reduce(((sum,curr) => sum + curr),0);
  return sum;
};

const multiply = function(a) {
  let prod = a.reduce((acc,curr) => acc*curr)
  return prod
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let factorial = 1;
  for (i=1;i <= a; i++){
    factorial *= i;
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
