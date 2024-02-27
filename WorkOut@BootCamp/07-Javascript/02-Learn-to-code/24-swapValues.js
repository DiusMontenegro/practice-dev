function swapFirstToLast(arr) {

    if (arr.length >= 2) {
        const firstVal = arr[0];

        arr[0] = arr[arr.length - 1];
        arr[length - 1] = firstVal;

        return arr;
    }
}

swapFirstToLast();
