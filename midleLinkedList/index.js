class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
function midleLinkedList(head) {
    let ahead = head;
    while (ahead && ahead.next) {
        ahead = ahead.next.next;
        head = head.next;
    }
    return head;
}
const node4 = new ListNode(4);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = node1;
console.log(midleLinkedList(head));
