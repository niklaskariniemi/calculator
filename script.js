// initialize variables
const bottom = document.querySelector( '.bottom');
const zero = document.querySelector( '#zero' );
const one = document.querySelector( '#one' );
const two = document.querySelector( '#two' );
const three = document.querySelector( '#three' );
const four = document.querySelector( '#four' );
const five = document.querySelector( '#five' );
const six = document.querySelector( '#six' );
const seven = document.querySelector( '#seven' );
const eight = document.querySelector( '#eight' );
const nine = document.querySelector( '#nine' );
const clear = document.querySelector( '#clear' );
const equal = document.querySelector( '#equal' );
const plus = document.querySelector( '#plus' );
const minus = document.querySelector( '#minus' );
const mult = document.querySelector( '#mult' );
const division = document.querySelector( '#division' );

// function for addition
function add( numOne, numTwo ){
    num = numOne + numTwo;
    return num;
}

// function for subtraction
function sub( numOne, numTwo ){
    num = numOne - numTwo;
    return num;
}

// function for multiplication
function multiply( numOne, numTwo ){
    num = numOne * numTwo;
    return num;
}

// function for division
function divide( numOne, numTwo ){
    num = numOne / numTwo;
    return num;
}

// function that calls the correct math function
function operate( operator, numOne, numTwo ){
    if ( operator == '+' )
    {
        num = add( numOne, numTwo );
    }
    else if ( operator == '-' )
    {
        num = sub( numOne, numTwo );
    }
    else if ( operator == '*' )
    {
        num = multiply( numOne, numTwo );
    }
    else if ( operator == '/' )
    {
        num = divide( numOne, numTwo );
    }
    else
    {
        num = "Error";
    }

    return num;
}

// event listener for every button on keypad
zero.addEventListener('click', () => {
    inputVal = bottom.innerText = '0';
});
one.addEventListener('click', () => {
    inputVal = bottom.innerText = '1';
});
two.addEventListener('click', () => {
    inputVal = bottom.innerText = '2';
});
three.addEventListener('click', () => {
    inputVal = bottom.innerText = '3';
});
four.addEventListener('click', () => {
    inputVal = bottom.innerText = '4';
});
five.addEventListener('click', () => {
    inputVal = bottom.innerText = '5';
});
six.addEventListener('click', () => {
    inputVal = bottom.innerText = '6';
});
seven.addEventListener('click', () => {
    inputVal = bottom.innerText = '7';
});
eight.addEventListener('click', () => {
    inputVal = bottom.innerText = '8';
});
nine.addEventListener('click', () => {
    inputVal = bottom.innerText = '9';
});
clear.addEventListener('click', () => {
    inputVal = bottom.innerText = 'C';
});
equal.addEventListener('click', () => {
    inputVal = bottom.innerText = '=';
});
plus.addEventListener('click', () => {
    inputVal = bottom.innerText = '+';
});
minus.addEventListener('click', () => {
    inputVal = bottom.innerText = '-';
});
mult.addEventListener('click', () => {
    inputVal = bottom.innerText = '*';
});
division.addEventListener('click', () => {
    inputVal = bottom.innerText = '/';
});