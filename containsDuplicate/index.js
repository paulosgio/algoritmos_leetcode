function containsNearbyDuplicate(nums, k) {
    let r = 0;
    const obj = {};
    let arr = [];
    while (r < nums.length) {
        if (obj[nums[r]]) {
            obj[nums[r]].push(r);
        }
        else {
            obj[nums[r]] = [r];
        }
        r++;
    }
    //posso fazer uma verificação caso o objeto so tenha uma propriedade, nao precise passar por esse indexBiggerLength
    let biggestKey = null;
    let biggestLength = 0;
    for (const key in obj) {
        if (obj[key].length >= biggestLength) {
            biggestLength = obj[key].length;
            biggestKey = Number(key);
        }
    }
    const arrSelected = obj[biggestKey];
    if (arrSelected.length > 2) {
        for (let i = 0; i < arrSelected.length; i++) {
            if ((arrSelected[i] - arrSelected[i - 1]) <= k) {
                return true;
            }
        }
        return arr.some((num) => num <= k);
    }
    else if (arrSelected.length === 1) {
        return false;
    }
    else {
        const definitiveNum = arrSelected[arrSelected.length - 1] - arrSelected[0];
        if (definitiveNum <= k) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(containsNearbyDuplicate([1, 4, 2, 3, 1, 2], 3));
//resolver essa questão, [1,0,1,1]
//Estamos quase resolvendo!!!! PRA CIMA!!!!!
