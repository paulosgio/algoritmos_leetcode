class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
function reverseList(head) {
    let newList = null;
    while (head) {
        let nextNode = head.next;
        head.next = newList;
        newList = head;
        head = nextNode;
    }
    return newList;
}
;
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = node1;
console.log(reverseList(head));
