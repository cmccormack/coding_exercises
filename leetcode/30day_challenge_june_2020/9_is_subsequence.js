const timeit = require("../../utils/timeit");

/*
Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 10^4
Both strings consists only of lowercase characters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Mostly brute force method
var isSubsequence_1 = function (s, t) {
  // store index of each letter in new map
  const letterMap = new Map();
  for (let i = 0; i < t.length; i += 1) {
    if (letterMap.has(t[i])) {
      letterMap.get(t[i]).push(i);
    } else {
      letterMap.set(t[i], [i]);
    }
  }
  let leftIndex = -1;
  for (let letter of s) {
    if (letterMap.has(letter)) {
      let letterArr = letterMap.get(letter);
      if (letterArr[letterArr.length - 1] <= leftIndex) return false;
      for (let i of letterArr) {
        if (i > leftIndex) {
          leftIndex = i;
          break;
        }
      }
    } else {
      return false;
    }
  }
  return true;
};

// Recursive method
var isSubsequence = function (s, t) {
  if (!s) return true;
  if (!t) return false;
  let index = t.indexOf(s[0]);
  return index > -1 ? isSubsequence(s.slice(1), t.slice(index + 1)) : false;
};

timeit(isSubsequence, true, "abc", "ahbgdc");
timeit(isSubsequence, false, "axc", "ahbgdc");
timeit(isSubsequence, true, "bad", "ahbgdcabacdcde");
timeit(isSubsequence, false, "aaaaa", "bbaaaa");
