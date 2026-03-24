/* class ListNode {
    value: number
    next: ListNode | null
    constructor(value: number, next: ListNode | null = null) {
        this.value = value
        this.next = next
    }
}
function mergeLinkedList(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0)
    let curr: ListNode = dummy
    while (list1 && list2) {
        if (list1.value < list2.value) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2
    return dummy.next
}
const head = new ListNode(null)
const headAgain = new ListNode(0)
console.log(mergeLinkedList(head, headAgain))

//falta so ordenar agora */