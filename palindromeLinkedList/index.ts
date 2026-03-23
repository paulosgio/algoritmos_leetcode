/* class ListNodeTeste{
    value: number
    next: ListNodeTeste | null
    constructor(value: number, next: ListNodeTeste | null = null) {
        this.value = value
        this.next = next
    }
} 
function isPalindrome(head: ListNodeTeste) {
    let arr: number[] = []
    while (head) {
        arr.push(head.value)
        head = head.next
    }
    let right = arr.length - 1
    let left = 0
    while (right >= 0) {
        if (arr[right] === arr[left]) {
            right--
            left++
        } else {
            return false
        }
    }
    return true
}
const teste1 = new ListNodeTeste(1)
const teste2 = new ListNodeTeste(3,teste1)
const teste2Again = new ListNodeTeste(2, teste2)
const teste1Again = new ListNodeTeste(1, teste2Again)
const testeHead = teste1Again
console.log(isPalindrome(testeHead)); 
 */