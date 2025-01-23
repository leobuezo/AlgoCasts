// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let columns = (n * 2) - 1;
    let pounds = 1;
    for(let r = 0; r < n; r++) {
        let startPoint = Math.floor(columns / 2) - r;
        let level = r + 1;
        pounds = (level > 1) ? pounds + 2 : 1;
        let rows = '';
        for(let c = 0; c < columns; c++) {
            // if((c < startPoint) || (c > startPoint + pounds-1)) {
            //     myArray[c] = ' ';
            // } else {
            //     myArray[c] = '#';
            // }
            rows += (c < startPoint) || (c > startPoint + pounds-1) ? ' ' : '#';
        }
        console.log(rows);
    }
}

pyramid(6);
module.exports = pyramid;
