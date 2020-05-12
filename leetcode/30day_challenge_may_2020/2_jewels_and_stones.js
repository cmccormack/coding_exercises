const timeit = require("../../utils/timeit");
/*

You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.  Each character in S is a type of
stone you have.  You want to know how many of the stones you have are also
jewels.

The letters in J are guaranteed distinct, and all characters in J and S
are letters. Letters are case sensitive, so "a" is considered a different
type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jewels = new Map();
  for (let i in J) {
    jewels.set(J[i], true);
  }
  let count = 0;
  for (let i = 0; i < S.length; i += 1) {
    if (jewels.has(S[i])) {
      count += 1;
    }
  }
  return count;
};

timeit(numJewelsInStones, 3, "aA", "aAAbbbb");
timeit(numJewelsInStones, 0, "z", "ZZ");
