function greaterThanSecondGeneralized(arr) {

    if (arr.length > 1) {

        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[1] < arr[i]) {
                newArr.push(newArr);
            }
        }

        return newArr;
    } else {
        return false;
    }
}

greaterThanSecondGeneralized();
