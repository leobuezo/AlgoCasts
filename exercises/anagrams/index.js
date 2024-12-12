// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
    const strB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
    return strA === strB;
}
/*     const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
    const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
    if(strA.length !== strB.length) return false;

    let objA = stringMap(strA);
    let objB = stringMap(strB);

    let found = false;
    for(let prop in objA) {
        if(objA[prop] !== objB[prop]) {
            console.log("objA[prop] ", objA[prop])
            console.log("objB[prop] ", objB[prop])
            found = true;
        }
    }
    console.log("found in objA loop: ", found);
    if(found) {
        return false;
    }
    return true;
}

function stringMap(str) {
    let result = {};
    for(let el of str) {
        result[el] = result[el] + 1 || 1;
    }
    return result;
}
 */
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
module.exports = anagrams;
