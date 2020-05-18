const timeit = require("../../utils/timeit");

/*
Given two strings s1 and s2, write a function to return true if s2 contains 
the permutation of s1. In other words, one of the first string's permutations 
is the substring of the second string.

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False

Note:

    The input strings only contain lower case letters.
    The length of both given strings is in range [1, 10,000].

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const letterMap = new Map();
  s1.split("").forEach((s) => letterMap.set(s, (letterMap.get(s) || 0) + 1));
  let leftI = 0;
  let i = 0;
  let count = s1.length;

  while (i < s2.length) {
    // console.log(
    //   `START: i:[${i}], leftI:[${leftI}], s2[i]: '${s2[i]}'`,
    //   letterMap
    // );
    // current letter not in letter map
    if (!letterMap.has(s2[i])) {
      // Reset letterMap, leftI = i
      while (leftI < i) {
        // console.log(leftI);
        letterMap.set(s2[leftI], letterMap.get(s2[leftI]) + 1);
        count += 1;
        leftI += 1;
      }
      leftI += 1;
    } else {
      if (letterMap.get(s2[i]) === 0) {
        while (s2[leftI] !== s2[i]) {
          letterMap.set(s2[leftI], letterMap.get(s2[leftI]) + 1);
          leftI += 1;
          count += 1;
        }
        // letterMap.set(s2[leftI], letterMap.get(s2[leftI]) + 1);
        leftI += 1;
        // count += 1;
      } else {
        letterMap.set(s2[i], letterMap.get(s2[i]) - 1);
        count -= 1;
      }
      // console.log(
      //   `'${s2[i]}' found, i:[${i}], leftI:[${leftI}], count: ${count}`
      // );
    }

    if (count === 0) return true;

    // console.log(
    //   `END  : i:[${i}], leftI:[${leftI}], s2[i]: '${s2[i]}'`,
    //   letterMap
    // );
    i += 1;
  }

  return false;
};

timeit(checkInclusion, true, "ab", "eidbaooo");
timeit(checkInclusion, false, "ab", "eidboaoo");
timeit(checkInclusion, true, "abcd", "qwerkxacdabiouklj");
timeit(checkInclusion, false, "hello", "ooolleoooleh");
