console.log('hello world');
console.log( 'playing with functions');


// 7. Function to find a value in an array. 
// Return true if the value is found, and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
const simpleArray = [1, 2, 3];

function find(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return true
        } else {
            // return false
        }
    }
    return false;
}

console.log('7. function find(1, arr) - should return true:', find(1, simpleArray)); // should be true
console.log('7. function find(2, arr) - should return true:', find(2, simpleArray)); // should be true
console.log('7. function find(3, arr) - should return true:', find(3, simpleArray)); // should be true
console.log('7. function find(4, arr) - should return false:', find(4, simpleArray)); // should be true


//Collins code below:
console.log('collins code below');
let array7Issues = [ 1 ,2, 3, 4, 5 ];
console.log(array7Issues, 'check the array')

let arraySearchValueIssues = 3;
console.log(arraySearchValueIssues, 'check the search value')

function findIssue(array, value) {
  for( let i = 0; i<array.length; i++ ) {
    if (array[i] === value) {
      return true;
    } // I deleted the `else` statement here
  }

  // I moved the `return false` statement outside the `for` loop. Now this will only be executed once ALL values in the array have been checked.
  return false;
}
console.log(findIssue( array7Issues, arraySearchValueIssues ));