// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
/* My solution:
   ============
    let rev = new Array(str.length);
    let arr = str.split('');
    console.log(arr);

    for(let i = 0; i < arr.length; i++) {
        rev[(rev.length -1) - i] = arr[i];
    }
    console.log("rev ", rev);
    return rev.join('');
*/
/*  Other solution: split , reverse and join
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
*/
/*  More efficient use of For()
    let reversed = '';
    for(let el of str) {
        reversed = el + reversed;
    }
    return reversed;
*/
//  Best solution, using reduce()
    return str.split('').reduce((rev, el) => el + rev, '');
}

module.exports = reverse;
