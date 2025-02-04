console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log( 'Hello world' ); // added a console.log, 'hello world'.
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello()); // this already calls it I believe
hello();  // I added this extra code to "call" the function 'hello'.
console.log( '------end of #1------');

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return;
}
// Remember to call the function to test
//original above


//----------------------start of #2 version 1 ---------------------
function helloName1( name ) {
  console.log( 'test helloName1. VERSION 1 -->>', name ); //added a console.log, with the variable "name"
  return;
  }
  
  console.log( helloName1('daleV1') ); /* this does console.log "testing helloName. Name is -->> Dale"
  --but also console.logs an "undefined" value? not sure why.*/ 
  //Dont this this verion as much
  //----------------------end of #2 version 1------------------------
  


//----------------------start of #2 version 2----------------------
//this version if better I think. Doesn't console.log "undefined". Console.logs cleaner.
function helloName2( name, test ) {
  console.log( 'test helloName2. VERSION 2 -->>', name, test ); //added a console.log, with
  return;
}

helloName2( 'DaleV2' ); // added this code to CALL "helloName" function, 
//assigned the string value of "dale" to NAME
 //----------------------end of #2 version 2------------------------
//testing both verions again below
helloName1('bob1', 'test 2'); //version 1 test again 
helloName2('bob2', 'test 2'); //version 2 test again 
console.log( '------end of #2------');


// just testing randon function below
function newFriend( name, number ) {
  console.log( 'my new friends name & number is:', name, number );
  return;
}
newFriend( 'Pete', '123-456-7891' );
console.log( '------end of random funct. test------');

// 3. Function to add two numbers together & return the result
// function addNumbers( firstNumber ) {
//   // return firstNumber + secondNumber;
// }
//---------original above-----------

/*tested this 2 different ways. got the same consol.log answer. I saw the question asks us to do it the second way
--without using a variable in the function. Just wants us to RETURN the 2 ARGUMENTS when calling the the function*/

////----------------------start of #3 version 1- main Answer----------------------
function addNumbers( firstNumber, secondNumber ) { //added second ARGUMENT called "secondNumber"
  // console.log( 'addNumbersAnswer:' );
  // let addNumbersAnswer = ( firstNumber + secondNumber ); //added a variable add the numbers in function
  // return addNumbersAnswer; //added returner, to return the variable in the function
  return ( firstNumber + secondNumber );
} 
console.log( 'addNumbersAnswer 2 + 2 =', addNumbers( 2, 2));
console.log( '------end of #3 V1--main answer------');



////----------------------start of #3 version 2----------------------
function addNumbers( firstNumber, secondNumber ) { //added second ARGUMENT called "secondNumber"
  // console.log( 'addNumbersAnswer:' );
  let addNumbersAnswer = ( firstNumber + secondNumber ); //added a variable add the numbers in function
  return addNumbersAnswer; //added returner, to return the variable in the function
  // return ( firstNumber + secondNumber );
} 
console.log( 'addNumbersAnswer 2 + 2 =', addNumbers( 2, 2));
console.log( '------end of #3 V2------');




// 4. Function to multiply three numbers & return the result
function multiplyThree( ){

}
//original code above


////----------------------start of #4----------------------
function multiplyThree( num1, num2, num3 ){  // added 3 ARGUMENTS "num1, num2, num3"
  return (num1 + num2 + num3 ); // added RETURNER to add THE 3 ARGUMENTS
}
console.log( '#4-->> 1 + 1 + 1 =', (1, 1, 1 )); //Console.loged, can called the function while adding number values
console.log( '-----end of #4------');


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
// function isPositive( number ) {
//   if ( number > 0 ){
//     return;
//   }
//     return;
// }
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

// console.log( 'isPositive - should say true', isPositive(3) );
// console.log( 'isPositive - should say false', isPositive(0) );
// console.log( 'isPositive - should say false', isPositive(-3) );

// console.log( '-----orignal #5 code above--');
//original code above


function isPositive( number ) {
  if ( number > 0 ){
    console.log( '# is greater than 0, aka positive');
    return true; //added true, becaase number is GREATER than 0
  }
  else if( number == 0 ){ //added else if to see if number is equal to 0. if it is return false
    console.log( '# is equal to 0, aka not positive');
    return false; //added false
  }
  else { //added if neither are true, then console.log false
    console.log( '# is not positive or 0, aka negative');
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( '-----end of #5------');



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {

}
//original code above


// array = []; //added a blank array, don't seem to need this
//------------6  VERSION 1------------partially works---------
array1=[1, 4, 10 ];
array2=[];
function getLast1( array ) { //array is the parameter - when you "call" it, it becomes the argument
  console.log( 'in getLast-V1', array.slice(-1) ); 

  //parameter - broad, 
  //arguments - specific



  //let array = []; adding a empty variable array didn't work
  //added the console.log
  /* return; if I do just "return" it does console.log "undefined", not not correctly. 
  Because it is defined when i call the function below.*/
  // return array.slice(-1); //this only returned a black array "[]" not "undefined". Still not sure why.
  return; //using just return DOES return "undefined" if array is empty.
  // i don't know why return array.slice(); doesn't work, but also doesn't give an error - solved
  //oohh, ok I added "-1" and it works now. I didn't understand what slice was actually doing
} 
// else {
//   return undefined;  //I'd trying to use and ELSE to return undefined, but it's not working
// }
// cant get it to return undefined. It did initially before I was able to get slice to work..
console.log( 'console.log getlast-V1', getLast1(array1)); //added console.log
console.log( 'console.log getlast-V1', getLast1(array2)); //added console.log
console.log('----END of 6 VERSION 1-----');
//--------------END of 6 VERSION 1----------------------------------

//--------------START of 6 VERSION 2---DOES WORK-----
array3=[1, 4, 10, 20 ];
array4=[];
function getLast2( array ) {
  console.log( 'in getLast2', array[array.length-1]); 
  //let array = []; adding a empty variable array didn't work
  //added the console.log
  /* return; if I do just "return" it does console.log "undefined", not not correctly. 
  Because it is defined when i call the function below.*/
  return array[array.length-1]; 
  // i don't know why return array.slice(); doesn't work, but also doesn't give an error - solved
  //oohh, ok I added "-1" and it works now. I didn't understand what slice was actually doing
} 
// else {
//   return undefined;  //I'd trying to use and ELSE to return undefined, but it's not working
// }
// cant get it to return undefined. It did initially before I was able to get slice to work..
console.log( 'console.log getlast2array3 should be "20"-->', getLast2(array3)); //testing and calling code
console.log( 'console.log getlast2array4 should be "undefined"-->', getLast2(array4)); //testing and calling code




console.log('----END of 6 VERSION 2-----');
//--------------END of 6 VERSION 2----------------------------------


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// function find( value, array ){
  
// }
//original code above----------


//----#7 first attempt - dint work! but figured it out ----
//-------this is just to show my work and to remember what i did wrong.----

console.log('-----START of 7 --first attempt----');

testArray1=[]; //blank array
testArray2=[20, 10, 5, 1,]; //test full array

function find1( value, array ){  
  for (let i=0; i< array.length; i++) { 
    console.log(array[i]);
    if ( array[i] === value  ){
      return true  //this works for returning true..
    } else {  //this works 
        return false //this DOES NOT WORK - it returns too early.
        //because i had return here, it will return false, 
        //--and then it immediately stops/jumps out of the loop
        //thus it will not continue going through the rest of the array items. 
        //this took hours to figure out :p
    }
  }
}
// console.log( find( 5, testArray2 ));
console.log('test find 25 -false', find1(25, testArray2));
console.log('test find 10 -true',  find1(10, testArray2));

console.log('----END of 7 --first attempt-----');
//--------------END of 7---first attempt------------------------











//-------------START of 7 --SECOND ATTEMPT - WORKS!!!-----
console.log('--START #7 --ATTEMPT-2 --WORKS!--');

// blankArray=[]; //blank array
{
const testArray7=[20, 10, 5, 1,]; //test full array

console.log('checking array testArray7. Should be: [20, 10, 5, 1,]', testArray7 );
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        console.log('true value found is-->', array[i]);
          return true
      } else {
      }
  }
  console.log('true value NOT found :(');
  return false;
}
console.log('#7 Function, find 20 - should return true:', find(20,testArray7));
console.log('#7 Function, find 10 - should return true:', find(10,testArray7));
console.log('#7 Function, find 5 - should return true:', find(5,testArray7));
console.log('#7 Function, find 1 - should return true:', find(1,testArray7));
console.log('#7 Function, find 0 - should return false:', find(0,testArray7));
console.log('#7 Function, find 50 - should return false:', find(50,testArray7));
}


console.log('-----END of 7 --ATTEMPT-2--WORKS--');
// //--------------END of 7----ATTEMPT-2--WORKS------------




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!





//training video tests

const seatsInCar = 5;
let passengers = [];
let tankFull = false;

function enoughSeats() {
  console.log('in enoughSeats' );
  //check if seatsInCar >= number of passangers
  if ( seatsInCar >= passengers.length ) {
    return true;
  }
  else {
    return false;  
  } //end enough seats 
} // end enoughSeats

function getInCar( nameOfPassenger ) {
  console.log( 'in getInCar', nameOfPassenger );
  passengers.push( nameOfPassenger );
  return passengers;
}

function readyForRoadTrip() {
  console.log( 'in readyForRoadTrip' );
  if( enoughSeats() && tankFull ){
    return true;
  } //end all good to go
  else{
    return false;
  }  // not ready to go
} // end readyForRoadTrip

getInCar( 'you' );
getInCar( 'me' );
getInCar( 'Luke Skywalker' );
getInCar( 'yoda' );
getInCar( 'Dale' );
// getInCar( 'Bob' );

// tankFull = true;
console.log( 'enough seats?', enoughSeats() );
console.log( 'are we ready for the trip?', readyForRoadTrip() );






















//--this is where Avery and i were going through this problem testing things out

// 7. Function to find a value in an array. 
// Return true if the value is found, and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// function find( value, array ){
  
// }
// original code above----------

// console.log('-----7 start-----');

// testArray1=[];
// testArray2=[20, 10, 5, 1,];

// function find( value, array ){
//   for (let i=0; i< array.length; i++) {
//     console.log(array[i]);
//     if ( array[i] === value  ){
//       return true
//     } else { 
//         return false
//     }
//   }
// }
// // console.log( find( 5, testArray2 ));
// console.log('test find 25 -false', find(25, testArray2));
// console.log('test find 10 -true',  find(10, testArray2));

// console.log('----END of 7-----');
// //--------------END of 7--------------------------------


