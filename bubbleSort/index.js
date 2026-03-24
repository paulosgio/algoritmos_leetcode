function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let n = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = n;
            }
        }
    }
    return arr;
}
console.log(BubbleSort([5, 2, 5, 3, 1]));
