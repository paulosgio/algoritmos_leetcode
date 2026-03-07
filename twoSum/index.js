function twoSum(nums, t) {
    let index = [];
    for (let i = 0; i < nums.length; i++) {
        let r = i + 1;
        while (r < nums.length) {
            if (nums[i] + nums[r] === t) {
                index = [i, r];
            }
            r++;
        }
    }
    return index;
}
console.log(twoSum([3, 2, 3], 6));
