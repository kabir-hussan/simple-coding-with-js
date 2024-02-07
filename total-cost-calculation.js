/**
 * Shirt Price-------> 400 TK
 * Pant Price--------> 600 TK
 * Shoe Price---------> 1200 TK
 * 
 */

function totalCost(shirtQuantity, pantQuantity, shoeQuantity){

    const shirtPrice= 400;
    const pantPrice= 600;
    const shoePrice= 1200;

    const totalShirtPrice= shirtQuantity * shirtPrice;
    const totalPantPrice= pantQuantity * pantPrice;
    const totalShoePrice= shoeQuantity * shoePrice;

    const totalAmount= totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalAmount;

}

const totalPrice= totalCost(2, 2, 1);

console.log("TotalCost is: ", totalPrice);