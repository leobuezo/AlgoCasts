// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let myArray = [];
    let j = 0;
    for(let i = 0; i < n; i++) {
        myArray[i] = '#';
        for(let j = i + 1; j < n; j++) {
            myArray[j] = ' ';
        }
        console.log(myArray.join(''));
    }
}
module.exports = steps;
