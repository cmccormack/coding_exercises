test_input = """
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
"""

test_input_2 = """
-1 -1 0 -9 -2 -2
-2 -1 -6 -8 -2 -5
-1 -1 -1 -2 -3 -4
-1 -9 -2 -4 -4 -5
-7 -3 -3 -2 -9 -9
-1 -3 -1 -2 -4 -5
"""

test_output = 19
test_output_2 = -6

import math

def hourglassSum(arr):
  rows = len(arr)
  cols = len(arr[0])
  max_sum = -9 * 7

  for row in range(rows - 2):
    for col in range(cols - 2):
      hourglass = [[row, col], [row, col+1], [row, col+2], [row+1, col+1], [row+2, col], [row+2, col+1], [row+2, col+2]]
      current_total = 0
      for [x,y] in hourglass:
        current_total += arr[x][y]
      max_sum = max([max_sum, current_total])
  return max_sum


def parse_input(arr):
  rows = arr.strip().split('\n')
  return list(map(lambda x: list(map(int, x.split(' '))), rows))

if __name__ == '__main__':
  
  assert hourglassSum(parse_input(test_input)) == test_output
  assert hourglassSum(parse_input(test_input_2)) == test_output_2