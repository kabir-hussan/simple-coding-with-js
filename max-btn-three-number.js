/**
 * Find the maximum number among three number
 */

function maxOfThree(a, b, c){

    if( a>b && a>c ){
        return a;
    }

    else if( b>a && c>a ){
        return b;
    }

    else{
        return c;
    }
}

const max1= maxOfThree(10, 40, 20);
const max2= maxOfThree(234, 123, 656);

console.log("The biggest number is: ", max1);
console.log("The biggest number is: ", max2);