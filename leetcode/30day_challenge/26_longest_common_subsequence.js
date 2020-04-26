/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.

*/

// int lcs( char[] X, char[] Y, int m, int n )
// {
//   int L[][] = new int[m+1][n+1];

/* Following steps build L[m+1][n+1] in bottom up fashion. Note 
    that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
//   for (int i=0; i<=m; i++)
//   {
//     for (int j=0; j<=n; j++)
//     {
//       if (i == 0 || j == 0)
//           L[i][j] = 0;
//       else if (X[i-1] == Y[j-1])
//           L[i][j] = L[i-1][j-1] + 1;
//       else
//           L[i][j] = max(L[i-1][j], L[i][j-1]);
//     }
//   }
// return L[m][n];
// }

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence1 = function (text1, text2) {
  len1 = text1.length;
  len2 = text2.length;
  console.log(text1, text2);
  const store = Array.from({ length: len1 + 1 }).map((_) =>
    Array.from({ length: len2 + 1 }).fill(null)
  );
  for (let i = 0; i <= len1; i += 1) {
    for (let j = 0; j <= len2; j += 1) {
      if (i === 0 || j === 0) {
        store[i][j] = 0;
      } else if (text1[i - 1] === text2[j - 1]) {
        store[i][j] = store[i - 1][j - 1] + 1;
      } else {
        store[i][j] = Math.max(store[i - 1][j], store[i][j - 1]);
      }
      console.log(`i: ${i}, j: ${j}, text1: ${text1}, text2: ${text2}`);
      console.log(store);
    }
  }
  console.log(store);
  return store[len1][len2];
};

var longestCommonSubsequence = function (text1, text2) {
  len1 = text1.length;
  len2 = text2.length;
  const store = new Array(text2.length + 1).fill(0);
  for (let i = 1; i <= len1; i += 1) {
    let prev = 0;
    for (let j = 1; j <= len2; j += 1) {
      const temp = store[j];
      if (text1[i - 1] === text2[j - 1]) {
        store[j] = prev + 1;
      } else {
        store[j] = Math.max(store[j], store[j - 1]);
      }
      prev = temp;
    }
  }
  return store[len2];
};

const br = `\n---------------------------------------------\n`;
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit(
  `RESULT EXPECTED: 4\t\tTime`,
  longestCommonSubsequence,
  "abcdaf",
  "acbcfa"
);
// timeit(`RESULT EXPECTED: 3\t\tTime`, longestCommonSubsequence, "abcde", "ace");
// timeit(`RESULT EXPECTED: 3\t\tTime`, longestCommonSubsequence, "abc", "abc");
// timeit(`RESULT EXPECTED: 0\t\tTime`, longestCommonSubsequence, "abc", "def");
