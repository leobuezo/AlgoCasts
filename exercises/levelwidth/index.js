// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require('./node');

function levelWidth(root) {
    let arrayBF = [];
    let counter = [];
    const stopper = new Node('S');
    arrayBF.push(root);
    arrayBF.push(stopper);
    let i = 0;
    counter[i] = 0;
    while(arrayBF.length > 1) {
        const node = arrayBF.shift();
        if(node.data !== stopper.data) {
            arrayBF.push(... node.children);
            counter[i] += 1;    
        } else {
            arrayBF.push(node);
            i++;
            counter[i] = 0;
        }
    }
    return counter;
}

module.exports = levelWidth;
