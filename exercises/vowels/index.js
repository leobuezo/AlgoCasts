// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let arr = str.toLowerCase().split('');
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u') {
            counter++;
        }
    }
    console.log(counter);
    return counter;
}

vowels('HolA mundo!');
module.exports = vowels;
