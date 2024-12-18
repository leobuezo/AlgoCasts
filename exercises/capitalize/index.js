// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
/*    console.log(str.split(' '));
    let arr = str.split(' ');
    let newArr = [];
    for(let a in arr) {
        console.log(arr[a][0].toString().toUpperCase());
        if(a < arr.length -1) {
            newArr[a] = arr[a][0].toString().toUpperCase() + arr[a].slice(1) + ' ';
        } if(a == arr.length -1) {
            newArr[a] = arr[a][0].toString().toUpperCase() + arr[a].slice(1);
        }
    }
    console.log(newArr.join(''));
    return newArr.join('');
*/
    const words = [];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

capitalize("a short, sentence");

module.exports = capitalize;
