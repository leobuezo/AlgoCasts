// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const newNode = new Node(data);
        this.children.push(newNode);
    }

    remove(data) {
        this.children = this.children.filter( child => child.data !== data );
    }
}
  
class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // let arrayBF = [];
        // arrayBF.push(this.root);
        // while(arrayBF.length > 0) {
        //     for(let child of arrayBF[0].children) {
        //         arrayBF.push(child);
        //     }
        //     fn(arrayBF.shift());    
        // }
        let arrayBF = [];
        arrayBF.push(this.root);
        while(arrayBF.length) {
            const node = arrayBF.shift();
            arrayBF.push(... node.children);
            fn(node);
        }
    }

    traverseDF(fn) {
        let arrayBF = [];
        arrayBF.push(this.root);
        while(arrayBF.length) {
            const node = arrayBF.shift();
            arrayBF.unshift(... node.children);
            fn(node);
        }
    }

}

module.exports = { Tree, Node };
