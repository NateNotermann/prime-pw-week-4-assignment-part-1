console.log( "hello world" );

function actualMathFunction( num0, num1 ) {
    console.log( 'in actualMath', num0, num1 );
    let actualmathAnswer = num0 * num1;
    return actualmathAnswer;
} //end actual match

function logger() {
    console.log( 'in logger' );
} //end logger function 

function mathExample() {
    console.log( 'in math example function' );
    let mathAnswer = 3 * 9;
    console.log(array);
    return mathAnswer;
}

function returnerFunction () {
    console.log( 'in returner');
    return true;
}

// logger();
// returnerFunction();

console.log( 'running returnerFunction', returnerFunction() );
// console.log( 'running mathExample function', mathExample() );


console.log( 'running actualMathFunction with 4 x 6 =', actualMathFunction( 4, 6 ) );
console.log( 'running actualMathFunction with 10 x 10 =', actualMathFunction( 10, 10 ) );

function newFriend (num3, pete, lastName, cool ) {
    console.log( 'in newFriend array', newFriend );
    let newFriendStatus =  ( num3 + pete + lastName + cool); 
    console.log( newFriendStatus );
    return newFriendStatus;

}

console.log( testing 'newFriend function', newFriend( 1234, 'peter', 'Kaiser', 'true' ) );
