/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd_1 = function (m, n) {
  if (m > n) return null;
  if (n - m === 0) return m;

  let current_and = m;
  let i = m;
  while (i < n) {
    current_and = current_and & (i + 1);
    if (current_and === 0) return 0;
    i += 1;
  }
  return current_and;
};

// Solve using greatest bit
var rangeBitwiseAnd = function (m, n) {
  if (!n) n = m;
  let rightShifts = 0;

  // Run until both m and n are 0
  while (m !== n) {
    // shift m and n one bit position to the right
    m = m >> 1;
    n = n >> 1;
    rightShifts += 1;
  }
  // shift back [rightShifts] to the left to
  return m << rightShifts;
};

const toBinary = (dec) => (dec >> 0).toString(2);

const br = `\n---------------------------------------------\n`;
var timeit = function (label, f, ...args) {
  console.time(label);
  result = f(...args);
  console.log(`${br}RESULT RETURNED: ${result}`);
  console.timeEnd(label);
};

timeit(`RESULT EXPECTED: 4\t\tTime`, rangeBitwiseAnd, 5, 7);
timeit(`RESULT EXPECTED: 0\t\tTime`, rangeBitwiseAnd, 0, 1);
timeit(`RESULT EXPECTED: 1\t\tTime`, rangeBitwiseAnd, 1);
timeit(`RESULT EXPECTED: 6\t\tTime`, rangeBitwiseAnd, 6, 7);

/* 5 7
00000101
00000110
00000111
     ^  4
*/

/* 6 7
00000110
00000111
     ^^ 6
*/
