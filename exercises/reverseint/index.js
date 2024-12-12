// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let arr = n.toString().split('');
    let nSign = Math.sign(n);
    let cero = true;
    let value = 0;
    if(nSign === -1) {
        arr.shift();
    }
    arr.reverse();
    while(cero === true) {
        if(arr[0] == 0) {
            arr.shift();
        } else {
            cero = false;
        }
    }
    if(nSign === -1) {
        value = '-' + arr.join('')
    } else if(nSign === 1) {
        value = arr.join('')
    }
    return parseInt(value);

/*
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('');
    return parseInt(reversed) * Math.sign(n);
*/
}

module.exports = reverseInt;
