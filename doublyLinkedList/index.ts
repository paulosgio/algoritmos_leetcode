class node {
    value: number
    next: node | null
    prev: node | null
    constructor(value: number) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    head: node | null
    tail: node | null
    constructor() {
        this.head = null
        this.tail = null
    }
    addToFront(value: number) {
        const newNode = new node(value)
        newNode.next = this.head
        if (this.head) {
             this.head.prev = newNode
        } else {
            this.tail = newNode
        }
        this.head = newNode
    }
    addToEnd(value: number) {
        const newNode = new node(value)
        newNode.prev = this.tail
        if (this.tail) {
             this.tail.next = newNode
        } else {
            this.head = newNode
        }
        this.tail = newNode
    }
    removeToHead() {
        const removedHead = this.head
        if (this.head) {
            this.head = this.head.next
            this.head.prev = null
        } else {
            this.tail = null
            return null
        }
        return removedHead
    }
    removeToTail() {
        const removedTail = this.tail
        if (this.tail) {
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            this.head = null
            return null
        }
        return removedTail
    }
}
const list = new doublyLinkedList()
list.addToFront(3)
list.addToFront(2)
list.addToFront(1)
list.addToEnd(4)
list.addToEnd(5)
list.addToEnd(6)
console.log(list.removeToHead())
console.log(list.removeToTail())
console.log(list)