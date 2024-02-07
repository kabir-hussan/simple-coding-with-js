/**
 * Calculate Discount For Multiple Layer
 * 
 * first100-------> 100
 * second100------> 90
 * above200------->70
 */

function getLayerdDiscountTotal(quantity){

    first100Price= 100;
    second100Price= 90;
    above200Price= 70;

    if(quantity <=100 )
    {
        const total= quantity * first100Price;
        return total;
    }

    else if( quantity <=200)
    {
        const first100Total= 100* first100Price;
        const remaining= quantity - 100;
        const remainingTotal= remaining * second100Price;
        const total= remainingTotal + first100Total;
        return total;
    }

    else{
        const first100Total= 100 * first100Price;
        const second100Total= 100 * second100Price;
        const remaining= quantity - 200;
        const remainingTotal= remaining * above200Price;
        const total= first100Total + second100Total + remainingTotal;
        return total;
    }

}

const totalAmount= getLayerdDiscountTotal(150);

console.log("Total Amount Is: ", totalAmount);
