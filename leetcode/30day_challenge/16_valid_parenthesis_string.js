/*
Given a string containing only three types of characters: '(', ')' and '*', 
  write a function to check whether this string is valid. We define the validity
  of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left
  parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True
Note:
The string size will be in the range [1, 100].
*/
/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function (s) {
  // Remove all explicit pairings
  while (s !== s.replace("()", "")) {
    s = s.replace("()", "");
  }

  // Check from left to right if balanced
  let stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(" || s[i] === "*") {
      stack.push(true);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // Check from right to left if balanced
  stack = [];
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === ")" || s[i] === "*") {
      stack.push(true);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return true;
};

var timeit = function (f, args, label) {
  console.time(label);
  result = f(args);
  console.log(result);
  console.timeEnd(label);
};

timeit(checkValidString, "((()))", "balanced parens");
timeit(checkValidString, "()()*)", "balanced parens");
timeit(checkValidString, "(()*)()()*", "balanced parens");
