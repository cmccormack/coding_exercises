function timeit(func, expected, ...args) {
  const br = `\n---------------------------------------------\n`;
  if (Array.isArray(expected)) expected = JSON.stringify(expected);
  const label = `   RESULT EXPECTED: ${expected}\t\tTime`;
  console.time(label);
  result = func(...args);
  if (Array.isArray(result)) result = JSON.stringify(result);
  const icon = result === expected ? "🎉" : "❌";
  console.log(`${br}${icon} RESULT RETURNED: ${result}`);
  console.timeEnd(label);
}

module.exports = timeit;
