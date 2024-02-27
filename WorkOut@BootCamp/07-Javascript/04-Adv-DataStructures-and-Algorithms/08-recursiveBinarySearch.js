function rBinarySearch(arr, num, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = arr.length - 1;
    }

    if (start > end) {
        return false;
    }

    const mid = start + ((end - start) / 2) | 0;

    if (arr[mid] === num) {
        return true;
    } else if (arr[mid] < num) {
        return rBinarySearch(arr, num, mid + 1, end);
    } else {
        return rBinarySearch(arr, num, start, mid - 1);
    }
}

// Test cases
console.log(rBinarySearch([1, 3, 5, 7], 1));      // Should return true
console.log(rBinarySearch([1, 3, 5, 7], 7));      // Should return true
console.log(rBinarySearch([1, 3, 5, 7], 5));      // Should return true
console.log(rBinarySearch([1, 3, 5, 7], 4));      // Should return false
console.log(rBinarySearch([1, 3, 5, 7], 10));     // Should return false
console.log(rBinarySearch([1, 3, 5, 7, 9], 15));  // Should return false
console.log(rBinarySearch([1, 3, 5, 7, 9], -15)); // Should return false
