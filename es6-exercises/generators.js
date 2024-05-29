/*
function* getEmployee() {
  console.log('the function has started');

  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

  for (const name of names) {
    yield name;
  }

  console.log('the function has ended')
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value;
generatorIterator.next().value;
generatorIterator.next().value;

// sending data into/ot of a generator

function* displayResponse() {
  const response = yield;
  console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();
iterator.next();
iterator.next('Hello there!');
*/



function* displayResponse() {
  const response = yield;
  console.log(`Your response is "${response}"`);
}

const iterator = displayResponse();

iterator.next();
iterator.next('Hello there!');



function* getEmployee() {
  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
  const facts = [];
  for (const name of names) {
    // yield *out* each name AND store the returned data into the facts arrays
    facts.push(yield name);
  }
  return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;
console.log(name);

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

positions.join('\n');
