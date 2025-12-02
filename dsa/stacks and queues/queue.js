class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first ? this.first.value : null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode; 
        } else {
            this.last.next = newNode; 
            this.last = newNode; 
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            return null; 
        }
        const dequeuedNode = this.first; 
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) {
            this.last = null; 
        }
        return dequeuedNode.value; 
    }

    isEmpty() {
        return this.length === 0; 
    }
}

// Testing the Queue
let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log("peek",myQueue.peek()); // Output: 10
console.log(myQueue.dequeue()); // Output: 10
console.log("peek",myQueue.peek()); // Output: 20
console.log(myQueue.isEmpty()); // Output: false