const Node = require('./node');

class LinkedList {

    constructor() {

        this._tail = null;
        // this._tail.prev = head;
        this._head = null;
        this.length = 0;
        //return this;
    }

    append(data) {
        let newNode = new Node(data);
        let currentTail = this._tail;
        if (this.length) {
            newNode.prev = this._tail;
            currentTail.next = newNode;
            this._tail = newNode;

        } else {
            //this._head.data = data;
            this._head = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }



    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let i = 0;
        let currentHead = this._head;
        if(index > this.length) {
            return currentHead.data;
        }else{
            while (index > i){
                currentHead = currentHead.next;
                i++;
            }
         return currentHead.data;
        }

    }

    insertAt(index, data) {
        let NewNode = new Node(data);
        let currentHead = this._head;
        var i = 0;
        if (index){
            while (index > i){
                currentHead = currentHead.next;
                i++
            }
            currentHead.data = NewNode.data;
        }else{
            NewNode.next = this._head;
            this._head.prev = NewNode;
            this._head = NewNode;
        }


        return this;
    }

    isEmpty() {
        if (this.length) { return false; }
        else{ return true; }
    }

    clear() {
        this._tail.data = null;
        this._head.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
