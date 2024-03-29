/* eslint-disable indent */
'use strict';

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

    insertLast(item) {
        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
    insertBefore(item, target) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.next.value !== target) {
            if (currNode.next.value === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(item, currNode.next);

    }
    insertAfter(item, target) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== target) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(item, currNode.next);
    }
    insertAt(item, pos) {
        let i = 0;
        let currNode = this.head;

        if (pos === 0) {
            this.insertFirst(item);
        }
        if (!this.head) {
            return null;
        }
        while (i < pos) {

            currNode = currNode.next;
            i++;

        }
        this.insertBefore(item, currNode.value);

    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}


let ll = new LinkedList();
ll.insertFirst('tauhida');
ll.insertFirst('other');
ll.insertFirst('stuff');
ll.insertLast('Helo');
ll.insertLast('Husker');
// ll.insertAt('kat', 1);


// console.log(ll);

function main() {
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('hotdog', 'Helo');
    SLL.insertAt('kat', 2);
    SLL.remove('Tauhida');
}
// display: displays the linked list
function display(list) {
    let values = '';
    let currNode = list.head;
    if (!list.head) {
        return null;
    }
    while (currNode.next !== null) {

        values += currNode.value;
        currNode = currNode.next;
    }
    values += currNode.value;
    console.log(values);

}
// console.log(display(ll));

// size: returns the size of the linked list
function size(list) {
    let length = 1;
    let currNode = list.head;
    if (!list.head) {
        return null;
    }
    while (currNode.next !== null) {

        currNode = currNode.next;
        length++;
    }
    console.log(length);
    return length;
}

// console.log(size(ll));
// isEmpty: finds if the list is empty or not(without using the size() function)
function isEmpty(list) {
    if (!list.head) {
        return;
    } else {
        return true;
    }
}
// console.log(isEmpty(ll));
// findPrevious: finds the node before the item you are looking for
function findPrevious(list, item) {
    let currNode = list.head;
    while (currNode.next.value !== item) {
        currNode = currNode.next;

    }
    console.log(currNode.value);
}
// console.log(findPrevious(ll, 'other' ));

// findLast: returns the last node in the linked list
function findLast(list) {
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    console.log(currNode.value);
}
// console.log(findLast(ll));


// 4. mistey driver 
function deleteDup(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else { newNode = newNode.next; }
        }
        current = current.next;
    }
}
// getting ride of duplicates; O(n);

// 5 
function reverse(list) {

    let currNode = list.head;

    while (currNode.next !== null) {
        list.insertFirst(currNode.next.value);
        currNode = currNode.next;
    }
    deleteDup(list);

}
reverse(ll);
console.log(ll);

function fromEnd(list, num) {
    let currNode = list.head;
    let i = 0;
    let count = (size(list) - num)
    while (i < count) {
        currNode = currNode.next;
        i++;

    }
    console.log(currNode.value);
}
fromEnd(ll, 3)

function getMid(list) {
    let currNode = list.head;
    let i = 0;
    let count = Math.floor(size(list) / 2)
    while (i < count) {
        currNode = currNode.next;
        i++;
    }
    console.log(currNode.value);
}

getMid(ll);

function cycList(list) {
    let current = list.head;
    while (current !== null) {
        let listItem = current;
        while (listItem.next !== null) {
            if (current === listItem.next) {
                return true;
            } else {
                listItem = listItem.next;
            }
        }
        current = current.next;
    }
    return false
}

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertFirstDll(item) {
        let node = new _Node(item, this.head, null);
        if (this.head !== null) {
            this.head.prev = node;
        }
        this.head = node;
        if (this.tail === null) {
            this.tail = node;
        }
    }
    insertLastDll(item) {

        let node = new _Node(item, null, this.tail);
        if (this.tail !== null) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.head === null) {
            this.head = node;
        }
    }

    insertBeforeDll(item, target){
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (currNode.next.value !== target) {
            if (currNode.next.value === null) {
                return null;
            }
            else {
                currNode = currNode.next;
                
            }
        }
        currNode.next = new _Node(item, currNode.next, currNode);

    }
    insertAfterDll(item, target) {
        let currNode = this.tail;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== target) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.prev;
            }
        }
        currNode.next = new _Node(item, currNode.next, currNode);
    }

    insertAtDll(item, pos) {
        let i = 0;
        let currNode = this.head;

        if (!this.head) {
            return null;
        }
        while (i < pos) {

            currNode = currNode.next;
            i++;

        }
        this.insertBeforeDll(item, currNode.value);

    }

    findDll(item){
        let currNode = this.tail;
        if (!this.tail) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.prev === null) {
                return null;
            }
            else {
                currNode = currNode.prev;
            }
        }
        return currNode;
    }
    removeDll(item) {

        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }
        previousNode.next = currNode.next;
        currNode.next.prev= previousNode;
    }

}