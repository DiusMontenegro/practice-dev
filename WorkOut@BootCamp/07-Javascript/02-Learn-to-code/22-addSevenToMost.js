function addSevenToMost(arr) {

    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }

    return newArr;
}

addSevenToMost();
