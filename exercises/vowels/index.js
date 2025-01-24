// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    /*
    let arr = str.toLowerCase().split('');
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
            counter++;
        }
    }
    console.log(counter);
    return counter;
    */
    /*
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let counter = 0;
    return ( [... str.toLowerCase().split('')].filter( char => vowelsSet.has(char) ? counter + 1 : 0).length);
    */
   const vowels = str.toLowerCase().match(/[aeiou]/g);
   return vowels ? vowels.length : 0;
}

console.log(vowels('HIsdfeagh!'));
module.exports = vowels;
