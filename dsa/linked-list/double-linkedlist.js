class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            prev: null,
            next: null,
        };

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        
        let leader = this.traverseToIndex(index - 1);
        let unwantedNode = leader.next;

        if (unwantedNode === this.tail) {
            this.tail = leader;
        }

        leader.next = unwantedNode.next;
        if (unwantedNode.next) {
            unwantedNode.next.prev = leader;
        }

        this.length--;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return;
        }

        const newNode = {
            value: value,
            next: null,
            prev: null,
        };

        if (index === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            let leader = this.traverseToIndex(index - 1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;

            if (follower) {
                follower.prev = newNode;
            } else {
                this.tail = newNode;
            }
        }

        this.length++;
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
}

// Testing the DoubleLinkedList
const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(20);
myDoubleLinkedList.append(30);
myDoubleLinkedList.append(40);
myDoubleLinkedList.append(50);
console.log(myDoubleLinkedList.printList()); 
myDoubleLinkedList.remove(3);
console.log(myDoubleLinkedList.printList()); 
myDoubleLinkedList.insert(3, 900);
console.log(myDoubleLinkedList.printList());