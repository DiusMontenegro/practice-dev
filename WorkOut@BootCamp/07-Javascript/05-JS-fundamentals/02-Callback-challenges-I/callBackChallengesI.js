// 1.
let result = foreach([1, 2, 3, 4, 5], function (num) {
    return num * 2;
});

function foreach(arr_num, operation) {
    let newArr = [];
    for (let i = 0; i < arr_num.length; i++) {
        newArr[i] = (operation(arr_num[i]));
    }
    return newArr;
}

console.log(result);

// 2.

result = foreach([1, 2, 3, 'v88', 'training'], function (val) {
    if (typeof val === 'number') {
        return 0;
    }
    return val;
});

function foreach(arr, operation) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = (operation(arr[i]));
    }
    return newArr;
}

console.log(result); //this should log [0,0,0,"v88","training"];

// 3.
result = foreach([1, 2, 3, 'hello'], function (val) {
    return typeof val;
});

function foreach(arr, operation) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = (operation(arr[i]));
    }
    return newArr;
}

console.log(result); //this should log ["number", "number", "number", "string"];

// 4.
result = filter([1, 2, 3, 4, 15], function (val) {
    return val < 10;
}); //this filters each value in the array and only allows values that are less than 10

function filter(arr, operation) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (operation(arr[i]) == true) {
            newArr[i] = (arr[i]);
        }
    }
    return newArr;
}

console.log(result); //this should log [1,2,3,4]

// 5.
result = reject([1, 2, 3, 4, 15], function (val) {
    return val < 3;
}); //rejects any value that is less than 3

function reject(arr, operation) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (operation(arr[i]) === false) {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

console.log(result); //this should log [3,4,15]
