function maximumLengthSubstring(s: string): number {
    let left: number = 0
    let right: number = 0
    let max: number = 1
    const counter = {}

    counter[s[0]] = 1

    while (right < s.length - 1) {
        right++
        if (counter[s[right]]) {
            counter[s[right]] ++
        } else {
            counter[s[right]] = 1
        }
        while (counter[s[right]] === 3) {
            counter[s[left]] --
            left ++
        }
        
        max = Math.max(max, right - left + 1)
    }

    return max
};

console.log(maximumLengthSubstring("eebadadbfa"))