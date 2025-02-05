// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, nextNode) {
        this.data = data;
        this.next = nextNode;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        const newNode = new Node(data, null);
        if(this.head == null) {
            this.head = newNode;
        } else {
            const next = this.head;
            this.head = newNode;
            this.head.next = next;
        }
    }

    size() {
        let node = this.head;
        let count = 0;
        if(node == null) {
            return count;
        } else {
            while(node) {
                node = node.next;
                count++;
            }
            return count;    
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        let found = null;
        if(node == null) {
            return found;
        } else {
            while(node) {
                found = node;
                node = node.next;
            }
            return found;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        let node = this.head;
        if(!this.head) {
            return;
        } 
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let actual = this.head;
        while(actual.next.next) {
            actual = actual.next;
        }
        actual.next = null;
    }

    insertLast(data) {
        let node = this.head;
        if(!node) {
            this.head = new Node(data, null);;
        }
        else {
            let lastNode = this.getLast();
            const newNode = new Node(data, null);
            lastNode.next = newNode;
        }
    }

    getAt(index) {
        let node = this.head;
        let count = 0;
        if(!node) {
            return null;
        }
        else if(index < 0 || index >= this.size()) {
            return null;
        }
        else {
            while(node) {
                if(node && count == index) {
                    return node;
                }
                node = node.next;
                count++;
            }
        }
    }

    removeAt(index) {
        if(this.size() === 0 || index >= this.size() || index < 0) {
            return;
        }
        else if(index === 0) {
            this.head = this.head.next;
            return;
        }
        else if(index == this.size()-1) {
            this.removeLast();
            return;
        }
        else if(index > 0 && index < this.size()-1) {
            let node = this.head;
            let count = 0;
            while(node) {
                if(node && count == index-1) {
                    node.next = node.next.next;
                    return;
                }
                node = node.next;
                count++
            }
        }
    }

    insertAt(data, index) {
        if(index < 0) {
            return;
        }
        else if(index === 0) {
            const newNode = new Node(data, this.head);
            this.head = newNode;
            return;
        }
        else if(index < this.size()) {
            let previousNode = this.getAt(index-1);
            const nextNode = this.getAt(index);
            const newNode = new Node(data, nextNode);
            previousNode.next = newNode;
            return;
        }
        else if(index >= this.size()) {
            this.insertLast(data);
            return;
        }
    }
    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node);
            node = node.next;
        }
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let node = current;
                    current = current.next;
                    return { value: node, done: false };
                }
                return { done: true };
            }
        };
    }
}

module.exports = { Node, LinkedList };
