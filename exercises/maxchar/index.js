// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result = {};
    for(let el of str) {
        // result[el] = result[el] + 1 || 1;
        if(!result[el]) {
            result[el] = 1;
        } else {
            result[el]++;
        }
    }

    let maxVal = 0;
    let maxEl = null;
    for(let prop in result) {
        if(result[prop] > maxVal) {
            maxVal = result[prop]
            maxEl = prop
        }
    }

    console.log(maxEl)
    return maxEl;
}

maxChar("hello there!");
module.exports = maxChar;
