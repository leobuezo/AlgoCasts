// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(this.data > value) {
            if(!this.left) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        }
        else if(this.data < value) {
            if(!this.right) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if(this.data == value) {
            return this;
        } else if(this.data > value) {
            if(this.left) {
                return this.left.contains(value);
            }
        } else if(this.data < value) {
            if(this.right) {
                return this.right.contains(value);
            }
        }
        return null;
    }
}

module.exports = Node;
