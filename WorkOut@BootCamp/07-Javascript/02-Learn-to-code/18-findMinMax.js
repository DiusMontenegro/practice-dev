function minMax(arr) {

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        } else if (max < arr[i]) {
            max = arr[i];
        }
    }

    return [min, max];
}

minMax();
