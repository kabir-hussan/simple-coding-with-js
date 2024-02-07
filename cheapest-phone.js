/**
 * Find the cheapest phone from the array with object
 */

//An array of phones with object
const phones= [
    {name: 'Iphone', price: 100000, color: 'black', camera: '50 mp'},

    {name: 'Xiaomi', price: 20000, color: 'black', camera: '50 mp'},

    {name: 'Samsung', price: 30000, color: 'black', camera: '50 mp'},

    {name: 'Symphony', price: 15000, color: 'black', camera: '50 mp'},

    {name: 'Walton', price: 12000, color: 'black', camera: '50 mp'}
];


//creating function 

function getCheapestPhone(phones){

    let minPricePhone= phones[0];

    for(const phone of phones)
    {
        if(phone.price < minPricePhone.price )
        {
            minPricePhone= phone;
        }
    }

    return minPricePhone;
}


const cheapest= getCheapestPhone(phones);

console.log("Cheapest Phone Is: ", cheapest);

