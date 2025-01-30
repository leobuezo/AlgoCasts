// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.items = [];
    }
    
    add(item) {
        this.items.unshift(item);
    }
    
    remove() {
        return this.items.pop();
    }
    
    front() {
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Queue;
