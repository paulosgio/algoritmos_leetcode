class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
function mergeLinkedList(list1, list2) {
    let h = list1;
    let nn = h.next;
    while (h && nn) {
        h = nn;
        nn = h.next;
        if (!h.next && list2) {
            h.next = list2;
        }
    }
    if (list1.value === null && list1.next === null) {
        return list2;
    }
    else if (list2.value === null && list2.next === null) {
        return list1;
    }
    return list1;
}
const head = new ListNode(null);
const node4Again = new ListNode(4);
const node3 = new ListNode(3, node4Again);
const headAgain = new ListNode(1, node3);
console.log(mergeLinkedList(head, headAgain));
