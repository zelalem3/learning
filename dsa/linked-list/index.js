class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head; // Initially, head is also the tail
        this.length = 1; // Starts with one element
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        if (this.length === 1) {
            this.head.next = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
             // Update the tail to the new node
        }

        this.length++; // Increase the length of the list
    }

    traverse() {
        // Optional: This can be implemented to return a full traversal of the list
        return this.printList();
    }

    prepend(value) {
        const newHead = {
            value: value,
            next: this.head // Point new head to the current head
        };
        this.head = newHead; // Update the head to the new node
        this.length++;
        return this;
    }

    insertNode(index, value) {
        if (index >= this.length) {
            return this.append(value); // If index is greater than or equal to length, append at the end
        }

        const newNode = {
            value: value,
            next: null
        };
        const leader = this.traverseToIndex(index - 1); // Get node before the index
        const holdingPointer = leader.next; // Node at the index
        leader.next = newNode; // Connect leader to new node
        newNode.next = holdingPointer; // Connect new node to current index node
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return null; // Index out of bounds
        }
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;

        if (unwantedNode === this.tail) { // If it's the tail
            this.tail = leader; // Update the tail
        }
        leader.next = unwantedNode.next; // Remove the unwanted node
        this.length--;
        return this.printList(); // Return updated list
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next; 
        }
        return array;
    }

    reverse(){
        if(this.length == 1)
        {
            return this.head;1
        }
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next; 
        }
        array.reverse();
        return array;

    }


}

// Testing the LinkedList
const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(40);
myLinkedList.append(80);
myLinkedList.prepend(90);
myLinkedList.insertNode(2, 30); // Inserting 30 at index 2
console.log(myLinkedList.printList()); // ['90', '10', '30', '20', '40', '80']
myLinkedList.remove(3); // Removing the node at index 3
console.log(myLinkedList.printList()); // ['90', '10', '30', '40', '80']
console.log(myLinkedList.reverse());