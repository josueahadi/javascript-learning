// Input a number, double it, increase it by 10, and then multiply by 3.
// Each operation should be in a separate Promise and then chained together.


const value = 5
const double = (value) =>  new Promise(resolve => resolve(value * 2));
const addTen = (value) =>  new Promise(resolve => resolve(value + 10));
const multiplyByThree = (value) =>  new Promise(resolve => resolve(value * 3));
double(value)
  .then(addTen)
  .then(multiplyByThree)
  .then((result) => {
    console.log(result);
  });