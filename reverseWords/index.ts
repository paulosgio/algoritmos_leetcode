function reverseWords(s: string): string {
    let response: string = ""
    let arr: string[] = []
    let i: number = 0
    while(i < s.length) {
        if(s[i] !== " ") {
            arr.push(s[i])
            i++
        } else {
            response += arr.reverse().join("") + " "
            arr = []
            i++
        }
    }
    response += arr.reverse().join("")
    return response
};

console.log(reverseWords("Mr Ding"))