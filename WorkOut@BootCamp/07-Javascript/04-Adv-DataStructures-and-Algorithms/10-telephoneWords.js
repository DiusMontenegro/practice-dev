function Words(nums) {
    // Mapping of digits to corresponding letters
    const digitToLetters = {
        '2': 'ABC',
        '3': 'DEF',
        '4': 'GHI',
        '5': 'JKL',
        '6': 'MNO',
        '7': 'PQRS',
        '8': 'TUV',
        '9': 'WXYZ',
        '0': 'O',
        '1': 'I'
    };

    function generateCombinations(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        const digit = remaining[0];
        const letters = digitToLetters[digit];

        for (const letter of letters) {
            generateCombinations(current + letter, remaining.slice(1));
        }
    }

    const result = [];

    generateCombinations('', nums);

    return result;
}

// Testing the function
console.log(Words("9456").length);  // Output: 108
console.log(Words("946").length);   // Output: 36
console.log(Words("7946").length);  // Output: 144
