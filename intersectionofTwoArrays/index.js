function intersection(nums1, nums2) {
    let arr = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (arr.includes(nums1[i])) {
                    break;
                }
                else {
                    arr.push(nums1[i]);
                }
            }
        }
    }
    return arr;
}
;
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
