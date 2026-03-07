export function search(nums: number[], target: number, low: number, high: number) {
    if (nums.includes(target) === false) {
        return -1
    } else {
        while (low <= high) {
            let mid: number = Math.round((low + high ) / 2)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                low = mid 
            } else {
                high = mid -1
            }
        }
    }
    
}

function exponetialSearch(arr: number[], target: number): number {
    if (arr[0] === target) {
        return 0
    }

    let n: number = arr.length
    let right: number = 1

    while(right < n && arr[right] < target) {
        right *= 2
    }

    if (arr[right] === target) {
        return right
    }

    return search(arr, target, right/2, n-1)
}

console.log(exponetialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31, 32, 33, 34, 35, 36, 37, 38, 39, 40], 32))

//quando o exponential acha o target, retorna o index, que seria ou o 0 ou o right, quando passa, ele chama a busca binaria padrão, passando ja o arr e o right do jeito que parou o array na func anterior e o left sendo metade dele, assim facilitando a busca