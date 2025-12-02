class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.value;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return poppedNode.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class StackArray {
    constructor() {
        this.array = [];
    }
    
    push(value) {
        this.array.push(value);
        return this;
    }
    
    peek() {
        return this.array[this.array.length - 1];
    }
    
    isEmpty() {
        return this.array.length === 0;
    }
    
    pop() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.array.pop(); 
    }
}

let stackarr = new StackArray();
stackarr.push(10);
console.log("peek:", stackarr.peek());
stackarr.push(20);
console.log("peek",stackarr.peek());
stackarr.push(30);
console.log("peek:", stackarr.peek());
stackarr.pop();
console.log("peek:", stackarr.peek());