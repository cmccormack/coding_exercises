const timeit = require("../../utils/timeit");

/*
There are 2N people a company is planning to interview. The cost
 of flying the i-th person to city A is costs[i][0], and the cost 
 of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that
 exactly N people arrive in each city.

 

Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

 

Note:

    1 <= costs.length <= 100
    It is guaranteed that costs.length is even.
    1 <= costs[i][0], costs[i][1] <= 1000

*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let a = costs.length / 2;
  let b = costs.length / 2;
  let sum = 0;
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));

  for (let i = 0; i < costs.length; i += 1) {
    if (costs[i][0] < costs[i][1]) {
      if (a > 0 || b === 0) {
        a -= 1;
        sum += costs[i][0];
      } else {
        b -= 1;
        sum += costs[i][1];
      }
    } else {
      if (b > 0 || a === 0) {
        b -= 1;
        sum += costs[i][1];
      } else {
        a -= 1;
        sum += costs[i][0];
      }
    }
  }
  console.log(costs);
  return sum;
};

timeit(twoCitySchedCost, 110, [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
]);
timeit(twoCitySchedCost, 1859, [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
]);
