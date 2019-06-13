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
    insertBefore(item, target){
        let currNode = this.head;
        if(!this.head){
            return null;
        }
        while(currNode.next.value !== target ){
            if (currNode.next.value === null){
                return null;
            }
            else{
                currNode = currNode.next
            }
        }
        currNode.next = new _Node(item, currNode.next);
        
    }
    insertAfter(item, target){
        let currNode = this.head;
        if(!this.head){
            return null;
        }
        while(currNode.value !== target){
            if(currNode.next === null){
                return null;
            }
            else{
                currNode = currNode.next
            }
        }
        currNode.next = new _Node(item, currNode.next);
    }
    insertAt(item, pos){
        let i = 0 ;
        let currNode = this.head;
        
        if(pos === 0){
            this.insertFirst(item)
        }
        if(!this.head){
            return null;
        }
        while( i < pos ){

            currNode = currNode.next;
            i++;

            }
        this.insertBefore(item, currNode.value)
        
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

        if(this.head.value === item) {
            this.head = this.head.next;
        }
        let currNode = this.head
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('item not found')
            return;
        }
        previousNode.next = currNode.next;
    }
}


let ll = new LinkedList();
ll.insertFirst('tauhida');
ll.insertFirst('tauhida');
ll.insertFirst('tauhida');
ll.insertAt("kat", 1);


console.log(ll)

function main(){
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore("Athena", "Boomer");
    SLL.insertAfter("hotdog", "Helo");
    SLL.insertAt("kat", 2);
    SLL.remove("Tauhida");
}

class DLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    insertFirstDll(item){
        let node = new _Node(item, this.head, null)
            if(this.head !== null){
                this.head.prev = node;
            }
            this.head = node;
            if(this.tail === null){
                this.tail = node;
            }
    }
}