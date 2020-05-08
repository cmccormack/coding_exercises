const timeit = require("../../utils/timeit");

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const getSlope = ([[ax, ay], [bx, by]]) => (by - ay) / (bx - ax);

  if (coordinates.length === 1) return true;
  const slope = getSlope(coordinates.slice(0, 2));

  for (let i = 1; i < coordinates.length - 1; i += 1) {
    const newPair = coordinates.slice(i, i + 2);
    if (getSlope(newPair) !== slope) return false;
  }
  return true;
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
timeit(checkStraightLine, true, [
  [1, 4],
  [3, 5],
]);
timeit(checkStraightLine, true, [[1, 1]]);
