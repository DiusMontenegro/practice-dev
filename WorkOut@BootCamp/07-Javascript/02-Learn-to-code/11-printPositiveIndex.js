function printPositiveIndex(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            console.log(i);
        }
    }
}

printPositiveIndex();
