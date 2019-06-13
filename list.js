/* eslint-disable indent */
'use strict'

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        let tempNode = this.head;
        while(tempNode.next !== null){
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null) 
    }
    insertBefore(item, ){

    }
    insertAfter(){

    }
    insertAt(){

    }

    find(item){
        let currNode = this.head

        if (!this.head){
            return null
        }
        while (currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            else{
                currNode = currNode.next
            }
        }
        return currNode
    }
    remove(item){
        if(!this.head){
            return null;
        }

        if(this.head.value === item {
            this.head = this.head.next
        })
        let currNode = this.head
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode = currNode.next
        }
        if(currNode === null){
            console.log('item not found')
            return;
        }
        previousNode.next = currNode.next;
    }
}


let ll = new LinkedList();
ll.insertFirst(5)

console.log(ll.head)

