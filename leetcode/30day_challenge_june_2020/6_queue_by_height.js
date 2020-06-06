const timeit = require("../../utils/timeit");
/*

Suppose you have a random list of people standing in a queue. 
Each person is described by a pair of integers (h, k), where h is 
the height of the person and k is the number of people in front of this 
person who have a height greater than or equal to h. Write an algorithm 
to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// Brute forcey solution
var reconstructQueue_1 = function (people) {
  const queue = new Array(people.length).fill(null);
  const sortedPeople = people.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
  );
  console.log(sortedPeople);
  for (let i = 0; i < people.length; i += 1) {
    let current = sortedPeople[i];
    let nullCounter = current[1];
    let j = 0;
    while (queue[j] !== null || nullCounter > 0) {
      if (queue[j] === null || queue[j][0] === current[0]) {
        nullCounter -= 1;
      }
      j += 1;
    }
    queue[j] = sortedPeople[i];
    console.log(queue);
  }
  return queue;
};

var reconstructQueue = function (people) {
  const queue = [];
  const sorted = people.sort((a, b) =>
    a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
  );

  for (let i = 0; i < sorted.length; i += 1) {
    queue.splice(sorted[i][1], 0, sorted[i]);
  }
  return queue;
};

timeit(
  reconstructQueue,
  [
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ],
  [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ]
);
