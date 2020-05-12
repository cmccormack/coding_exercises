const timeit = require("../../utils/timeit");

/*

In a town, there are N people labelled from 1 to N.  There is a rumor that one 
of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that 
the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the 
town judge.  Otherwise, return -1.

 

Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 

Note:

1 <= N <= 1000
trust.length <= 10000
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N

*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (trust.length === 0) return 1;
  const map = new Map();
  let some_person;
  for (let [person, trusted] of trust) {
    if (map.has(person)) {
      map.get(person).add(trusted);
    } else {
      map.set(person, new Set([trusted]));
      some_person = person;
    }
  }

  if (map.size >= N) return -1;
  let pool = map.get(some_person);
  for (let person of map) {
    pool = new Set(
      [...person[1]].filter((p) => {
        return pool.has(p);
      })
    );
    if (pool.size === 0) return -1;
  }
  if (pool.size > 1) return -1;
  return [...pool][0];
};

timeit(findJudge, 2, 2, [[1, 2]]);
timeit(findJudge, 3, 3, [
  [1, 3],
  [2, 3],
]);
timeit(findJudge, -1, 3, [
  [1, 3],
  [2, 3],
  [3, 1],
]);
timeit(findJudge, -1, 3, [
  [1, 2],
  [2, 3],
]);
timeit(findJudge, 3, 4, [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]);
