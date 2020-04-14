#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countingValleys function below.
def countingValleys(n, s):
    valleys = 0
    level = 0
    in_valley = False

    for direction in s:
        if direction == "U":
            level += 1
            if level == 0:
                in_valley = False
                valleys += 1

        if direction == "D":
            level -= 1

        if level < 0:
            in_valley = True

    return valleys
        


if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # n = int(input())

    
    print(countingValleys(8, "UDDDUDUU"))
    print(countingValleys(8, "DUDUDU"))

    # fptr.write(str(result) + '\n')

    # fptr.close()
