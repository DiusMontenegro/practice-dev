function BinaryStringExpansion(str) {
    const result = [];
    generateBinaryStrings(str, "", result);
    return result;
}

function generateBinaryStrings(input, current, result) {
    if (input.length === 0) {
        result.push(current);
        return;
    }

    const firstChar = input[0];
    const remainingChars = input.slice(1);

    if (firstChar === '?') {
        generateBinaryStrings(remainingChars, current + '0', result);
        generateBinaryStrings(remainingChars, current + '1', result);
    } else {
        generateBinaryStrings(remainingChars, current + firstChar, result);
    }
}

// Test cases
console.log(BinaryStringExpansion("0?0??").length);    // Should return 8
console.log(BinaryStringExpansion("?0?0??").length);   // Should return 16
console.log(BinaryStringExpansion("??0?0??").length);  // Should return 32
