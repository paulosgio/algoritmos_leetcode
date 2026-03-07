function reverseWords(s) {
    let response = "";
    let arr = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] !== " ") {
            arr.push(s[i]);
            i++;
        }
        else {
            response += arr.reverse().join("") + " ";
            arr = [];
            i++;
        }
    }
    response += arr.reverse().join("");
    return response;
}
;
console.log(reverseWords("Mr Ding"));
