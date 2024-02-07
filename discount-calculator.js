/**
 * Find the different price for the discount of the product
 * 
 * 1----100---> 100
 * 101----150---> 90
 * 151----200---> 80
 * 201-----> 70
 */

function getTotalAmount(quantity){

    if( quantity <= 100 ){
        const total= quantity * 100;
        return total;
    }

    else if( quantity <= 150 ){
        const total= quantity * 90;
        return total;
    }
    else if( quantity <=200 ){
        const total= quantity * 80;
        return total;
    }

    else{
        const total= quantity * 70;
        return total;
    }
}

const total= getTotalAmount(10);
console.log("Total Amount Is: ", total);