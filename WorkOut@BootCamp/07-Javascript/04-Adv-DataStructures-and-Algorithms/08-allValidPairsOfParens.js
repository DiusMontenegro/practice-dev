function printParenthesis(n) {
    const result = [];
    generateParenthesis(n, 0, 0, "", result);
    return result;
  }

  function generateParenthesis(n, openCount, closeCount, current, result) {

    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (openCount < n) {
      generateParenthesis(n, openCount + 1, closeCount, current + '(', result);
    }

    if (closeCount < openCount) {
      generateParenthesis(n, openCount, closeCount + 1, current + ')', result);
    }
  }

  // Test cases
  console.log(printParenthesis(4).length); // Should return 14
  console.log(printParenthesis(6).length); // Should return 132
  console.log(printParenthesis(7).length); // Should return 429
