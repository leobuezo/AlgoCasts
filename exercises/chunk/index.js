// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
/*     const cantArr = Math.ceil(array.length / size);
    console.log(array);
    console.log(cantArr);
    let arrays = [];
    let count = 0;
    for (let m = 0; m < cantArr; m++) {
        arrays.push([]);
        for ( let n = 0; n < size; n++) {
            if(count < array.length && n < size) {
                arrays[m][n] = array[count];
                count++;
            }
        }
    }
 */    
    let arrays = [];
    for(let i = 0; i < array.length; i += size) {
        arrays.push(array.slice(i, i + size));
    }
    return arrays;
}

chunk([1, 2, 3, 4, 5, 6, 7], 2);
module.exports = chunk;
