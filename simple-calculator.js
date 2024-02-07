/**
 * Addition
 * Subtraction
 * Multiplication
 * Dividation
 * Module
 */

function add(num1, num2)
{
    return num1 + num2;
}

function subtract( num1, num2 )
{
    return num1 - num2;
}

function multiply(num1 , num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function module(num1, num2)
{
    return num1 % num2;
}

function calculator(a, b, operation)
{
    if(operation === 'add')
    {
        const result= add(a, b);
        return result;
    }

    else if(operation === 'sub')
    {
        const result= subtract(a, b);
        return result;
    }

    else if(operation === 'multiply')
    {
        return multiply(a, b);
    }

    else if( operation === 'divide')
    {
        return divide(a, b);
    }

    else if( operation === 'module')
    {
        return module(a, b);
    }

    else{
        return "Calculation doesnot Possible!!!!!";
    }
}


const result= calculator(20, 4, 'multiply');
console.log(result);