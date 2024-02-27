function StringAnagram(str) {
    let words = [];
    _rStringAnagram("", str, words);
    return words;
}

function _rStringAnagram(name, rem, words) {

    // let nameDepth = "";
    // for(let i = 0; i < name.length; i++) {
    //     nameDepth += '_________'
    // }

    if (rem === "") {
        words.push(name);
    }

    for (let i = 0; i < rem.length; i++) {
        let newRem = "";
        for (let j = 0; j < rem.length; j++) {
            if (i !== j) {
                newRem += rem[j];
            }
        }

        _rStringAnagram(name + rem[i], newRem, words);
    }
}

// function StringAnagram(str) {
//     let words = [];
//     _rStringAnagram("", str, words);
//     return words;
// }

// function _rStringAnagram(name, rem, words) {
//     if (rem === "") {
//         words.push(name);
//     } else {
//         for (let i = 0; i < rem.length; i++) {
//             let newWord = name + rem[i];
//             let newRem = rem.slice(0, i) + rem.slice(i + 1);
//             _rStringAnagram(newWord, newRem, words);
//         }
//     }
// }

// Testing the function
let words = StringAnagram("lim");
console.log(words.length);   // Output: 6

words = StringAnagram("lima");
console.log(words.length);  // Output: 24

words = StringAnagram("limas");
console.log(words.length); // Output: 120
