function squares(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]**2);
    }

    return newArr;
}

squares();
