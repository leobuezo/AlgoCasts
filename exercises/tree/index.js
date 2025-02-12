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
        this.children[this.children.length] = newNode;
    }

    remove(data) {
        let i = 0;
        let found = false;
        while(i < this.children.length && found === false) {
            if(data == this.children[i].data && i == this.children.length-1) {
                this.children[i] = null;
                this.children.length -= 1; 
                found = true;
            } else if(data == this.children[i].data) {
                this.children[i] = this.children[i+1];
                found = true;
            }
            i++;
        }
    }
}
  
class Tree {}

module.exports = { Tree, Node };
