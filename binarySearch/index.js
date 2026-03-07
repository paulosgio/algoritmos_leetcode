export function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let steps = 0;
    if (nums.includes(target) === false) {
        return -1;
    }
    else {
        while (low <= high) {
            steps += 1;
            let mid = Math.round((low + high) / 2);
            if (nums[mid] === target) {
                console.log(steps);
                return mid;
            }
            else if (nums[mid] < target) {
                low = mid;
            }
            else {
                high = mid - 1;
            }
        }
    }
}
console.log(search([5], 5));
