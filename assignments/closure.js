// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

// Here, I've decided to create an array variable and then have my simple closure modify that variable.
// Have also decided to make the closure return the make the closure return the mutated value and then I log the value of the closure just to make sure stuff works.

let aVariableArray = [1,2,3,4];

var a = function a(){
   return aNewVariableArray = aVariableArray.map(a => a * 3)
}

console.log(a())

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.

  //Declaration of variable 
  let count = 0;

  // Use of inline function to increment count BEFORE returning it
  let counter = () => ++count;
  return counter;
};
// Test usage: 
console.log()
const myCounter = counterMaker();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
