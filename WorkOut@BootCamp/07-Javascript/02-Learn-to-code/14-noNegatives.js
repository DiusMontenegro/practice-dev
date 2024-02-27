function noNegative(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

noNegative();
