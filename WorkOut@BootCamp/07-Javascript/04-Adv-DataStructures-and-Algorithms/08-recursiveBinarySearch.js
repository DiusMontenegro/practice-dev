function rBinarySearch(arr, num, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = arr.length - 1;
    }

    // Base case: if start is greater than end, the element is not in the array
    if (start > end) {
        return false;
    }

    // Find the middle index of the array without using Math.floor
    const mid = start + ((end - start) / 2) | 0;

    // If the middle element is equal to the target, return true
    if (arr[mid] === num) {
        return true;
    } else if (arr[mid] < num) {
        // If the target is greater than the middle element, search the right half
        return rBinarySearch(arr, num, mid + 1, end);
    } else {
        // If the target is smaller than the middle element, search the left half
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
