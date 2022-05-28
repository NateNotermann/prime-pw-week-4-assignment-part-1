
testArray7=[20, 10, 5, 1,]; 
console.log('Checking testArray7. Should be: [20, 10, 5, 1,]', testArray7 );

function find( value, array ){  
  for (let i=0; i< array.length; i++) { 
    if ( array[i] === value  ){
        console.log('If true, value found is-->', array[i]);
        return true 
    } else {  
        return false 
    }
  }
}
console.log('#7 Function, find 20 - should return true:', find(20,testArray7));
console.log('#7 Function, find 10 - should return true:', find(10,testArray7));
console.log('#7 Function, find 5 - should return true:', find(5,testArray7));
console.log('#7 Function, find 1 - should return true:', find(1,testArray7));
console.log('#7 Function, find 0 - should return false:', find(0,testArray7));
console.log('#7 Function, find 50 - should return false:', find(50,testArray7));