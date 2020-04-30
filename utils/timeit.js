function timeit(func, expected, ...args) {
  const br = `\n---------------------------------------------\n`;
  const label = `   RESULT EXPECTED: ${expected}\t\tTime`;
  console.time(label);
  result = func(...args);
  const icon = result === expected ? "🎉" : "❌";
  console.log(`${br}${icon} RESULT RETURNED: ${result}`);
  console.timeEnd(label);
}

module.exports = timeit;
