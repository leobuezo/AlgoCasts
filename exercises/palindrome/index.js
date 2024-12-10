// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strSplitted = str.split('');
    const strReversed = str.split('').reverse();
    let isPalindrome = true;
    let i = 0;
    while(isPalindrome && i < strSplitted.length) {
        isPalindrome = strSplitted[i] == strReversed[i] ? true : false;
        i++;
    }
    return isPalindrome;

    /* A fitter solution
        const reversed = str
            .split('')
            .reverse()
            .join('');
        return str === reversed;
    */

    /* Using every()
        return str.split('').every((char, i) => {
            return char === str[str.length - 1 - i];    
        });
        
    */
}

module.exports = palindrome;
