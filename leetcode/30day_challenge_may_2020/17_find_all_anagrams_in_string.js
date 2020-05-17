const timeit = require("../../utils/timeit");
/*

Given a string s and a non-empty string p, find all the start 
indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length 
of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];
  const lookupN = p.length;
  const letterMap = new Map();
  for (letter of p) {
    if (letterMap.has(letter)) {
      letterMap.set(letter, letterMap.get(letter) + 1);
    } else {
      letterMap.set(letter, 1);
    }
  }
  let currentMap = new Map(letterMap);
  let currentN = lookupN;
  let i = 0;
  let leftI = 0;
  console.log(s, p);
  while (i < s.length) {
    console.log(
      `i: ${i}, leftI: ${leftI}, s[i]: '${s[i]}', s[leftI]: '${s[leftI]}' currentN: ${currentN},`,
      currentMap
    );
    // current letter is in lookup
    if (currentMap.has(s[i])) {
      // current letter has already been found
      if (currentMap.get(s[i]) === 0) {
        console.log(leftI, s[leftI], s[i], currentMap);
        while (s[leftI] !== s[i]) {
          console.log(currentMap);
          currentMap.set(s[leftI], currentMap.get(s[leftI]) + 1);
          currentN += 1;
          leftI += 1;
        }
        currentMap.set(s[leftI], currentMap.get(s[leftI]) + 1);
        currentN += 1;
        leftI += 1;
        console.log(leftI, s[leftI], s[i], currentMap);
      }
      currentMap.set(s[i], currentMap.get(s[i]) - 1);
      currentN -= 1;
    } else {
      currentMap = new Map(letterMap);
      currentN = lookupN;
      leftI = i + 1;
    }

    if (currentN === 0) {
      console.log(`anagram found at index ${leftI}`);
      result.push(leftI);
      // remove s[leftI] from currentMap and current count
      currentMap.set(s[leftI], 1);
      currentN += 1;
      leftI += 1;
    }
    i += 1;
  }
  return result;
};

// var findAnagrams = function (s, p) {
//   console.log(s, p);
//   const lenS = s.length;
//   const lenP = p.length;
//   // create Map to store count of letters in p
//   const letterMap = new Map();
//   for (letter of p) {
//     if (letterMap.has(letter)) {
//       letterMap.set(letter, letterMap.get(letter) + 1);
//     } else {
//       letterMap.set(letter, 1);
//     }
//   }

//   let currentMap = new Map(letterMap);

//   let i = 0;
//   let leftI = 0;
//   while (i <= lenS - lenP) {
//     console.log(s.slice(i, i + lenP));
//     i += 1;
//   }
// };

timeit(findAnagrams, [0, 6], "cbaebabacd", "abc");
timeit(findAnagrams, [0, 1, 2], "abab", "ab");
timeit(findAnagrams, [0, 2], "abcba", "abc");
timeit(findAnagrams, [3, 4, 6], "abaacbabc", "abc");

/*
   c,b,a,e,b,a,b,a,c,d
a [0,0,1,0,0,1,0,1,0,0]
b [0,1,0,0,1,0,1,0,0,0]
c [1,0,0,0,0,0,0,0,1,0]
  [1,1,1,0,1,1,1,1,1,0]
*/

// Map('abc') = {a: 1, b: 1, c: 1} when a, map(a) -=1, someCount -= 1
// {a: 0, b: 0, c: 0} and/or someCount = 0

// ab  abac

// s = ab abae
// p = aabc {a: 2, b: 1, c: 1} countN = 4

// {a: 0, b: 0, c: 1} countN = 2
// leftI = 0
// i = 3
// aba b ac
