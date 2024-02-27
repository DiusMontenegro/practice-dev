function BinaryStringExpansion(str) {
    words = [];
    _rBinaryStringExpansion ("", str, words);
    return words;
}

function _rBinaryStringExpansion(name, rem, words) {

    // let nameDepth = "";
    // for(let i = 0; i < name.length; i++) {
    //     nameDepth += '___'
    // }
    if (rem === "") {
        // console.log(name);
        words.push(name);
        return;
    }

    let newRem = "";

    for(let i = 1; i < rem.length; i++) {
        newRem += rem[i];
    }

    if (rem[0] === "?") {
        // console.log(nameDepth + name + '1');
        _rBinaryStringExpansion(name + "1", newRem, words);
        // console.log(nameDepth + name + '0');
        _rBinaryStringExpansion(name + "0", newRem, words);
    } else {
        // console.log(nameDepth + name + rem[0]);
        _rBinaryStringExpansion(name + rem[0], newRem, words);
    }
}

// function BinaryStringExpansion(str) {
//     const result = [];
//     generateBinaryStrings(str, "", result);
//     return result;
// }

// function generateBinaryStrings(input, current, result) {
//     if (input.length === 0) {
//         result.push(current);
//         return;
//     }

//     const firstChar = input[0];
//     const remainingChars = input.slice(1);

//     if (firstChar === '?') {
//         generateBinaryStrings(remainingChars, current + '0', result);
//         generateBinaryStrings(remainingChars, current + '1', result);
//     } else {
//         generateBinaryStrings(remainingChars, current + firstChar, result);
//     }
// }

// Test cases
console.log(BinaryStringExpansion("0?0??").length);    // Should return 8
console.log(BinaryStringExpansion("?0?0??").length);   // Should return 16
console.log(BinaryStringExpansion("??0?0??").length);  // Should return 32
