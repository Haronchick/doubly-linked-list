const Node = require('./node');

class LinkedList {

    constructor() {
        var tail = new Node(null, null, null);
        var head = new Node(null, null, tail);
        this._tail = tail;
        this._tail.prev = head;
        this._head = head;
        this.length = 0;
        return this;
    }

    append(data) {
        var newNode = new Node(data);
        var currentTail = this._tail;
        if (this.length) {
          //  currentTail.next = newNode;
            this._tail = newNode;
            this._tail.prev = currentTail;
            this._tail.next = newNode;
        } else {
            //this._head.data = data;
            this._head = newNode;
            this._tail = newNode;
        }
        this.length++;

        return newNode;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
