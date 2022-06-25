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