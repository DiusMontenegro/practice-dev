function countPositives(arr) {

    let newArr = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += 1;
        }

        newArr.push(arr[i]);
    }

    newArr[arr.length - 1] = sum;

    return newArr;
}

countPositives();
