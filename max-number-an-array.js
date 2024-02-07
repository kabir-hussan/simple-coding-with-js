/**
 * Find the maximum number of an array
 */

function maxOfArray(array){

    let max= array[0];
    for(const item of array)
    {
        if(item > max)
        {
            max= item;
        }
    }

    return max;
}

const numbers= [ 44, 66, 23, 65, 75, 96, 22 ];

const max= maxOfArray(numbers);

console.log('The Maximum Number Of The Given Array is: ', max);