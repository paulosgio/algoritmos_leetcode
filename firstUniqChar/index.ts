function firstUniqChar(s: string): number {
    const obj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) { //verifica se existe a chave no obj
            obj[s[i]][1]++ //tenho que acessar o array da propriedade da letra current e adicionar mais um
        } else {
            obj[s[i]] = [i, 1]
        }        
    }

   const char = Object.keys(obj).find((char) => obj[char][1] === 1);
    if (char) {
        const result = obj[char][0];
        return result;
    } else {
        return -1
    }
}
