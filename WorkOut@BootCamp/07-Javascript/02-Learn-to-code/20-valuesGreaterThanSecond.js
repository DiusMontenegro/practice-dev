function valuesGreaterThanSecond(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i]) {
            sum += arr[i];
            console.log(arr[i]);
        }
    }

    return sum;
}

valuesGreaterThanSecond();
