const timeit = require("../../utils/timeit");

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length === 1) return true;
  const run = coordinates[1][0] - coordinates[0][1];
};

timeit(checkStraightLine, true, [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
]);
timeit(checkStraightLine, false, [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
]);
timeit(checkStraightLine, true, [[1, 1]]);
