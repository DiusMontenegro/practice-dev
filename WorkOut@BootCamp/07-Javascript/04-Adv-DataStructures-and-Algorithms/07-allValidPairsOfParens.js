function printParenthesis(n) {
    const result = [];
    generateParenthesis(n, 0, 0, "", result);
    return result;
  }

  function generateParenthesis(n, openCount, closeCount, current, result) {
    // Base case: if the current string has reached the desired length
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // Add an open parenthesis if it's valid
    if (openCount < n) {
      generateParenthesis(n, openCount + 1, closeCount, current + '(', result);
    }

    // Add a close parenthesis if it's valid
    if (closeCount < openCount) {
      generateParenthesis(n, openCount, closeCount + 1, current + ')', result);
    }
  }

  // Test cases
  console.log(printParenthesis(4).length); // Should return 14
  console.log(printParenthesis(6).length); // Should return 132
  console.log(printParenthesis(7).length); // Should return 429
