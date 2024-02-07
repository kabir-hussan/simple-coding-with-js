/**
 * Calculate The Total Cost Of The Products In A Shopping Cart
 */

//An array with object of some products
const products=[
    {name: 'Shirt', price: 400, quantity: 3},
    {name: 'Pant', price: 500, quantity: 2},
    {name: 'Panjabi', price: 800, quantity: 1},
    {name: 'T-shirt', price: 400, quantity: 4}
];

function getTotalAmount(shirt, pant, panjabi, tshirt){

    let total= 0; 

    for(const product of products)
    {
        const itemCost= product.price * product.quantity; //every item price multiply with quantity
 
        total= total + itemCost;
    }

    return total;

}

const totalAmount= getTotalAmount(products);
console.log("Total Amount Of All Product Is: ",totalAmount);