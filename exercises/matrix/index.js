// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let min = 0;
    let max = n - 1;
    let val = 1;
    while(min <= max) {
        for(let c = min; c <= max; c++) matrix[min][c] = val++;
        for(let f = min + 1; f <= max; f++) matrix[f][max] = val++;
        for(let ci = max - 1; ci >= min; ci--) matrix[max][ci] = val++;
        for(let fi = max - 1; fi >= min + 1; fi--) matrix[fi][min] = val++;
        min += 1;
        max -= 1;
    }    
    return matrix;
}

console.log(matrix(4));
module.exports = matrix;
