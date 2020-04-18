#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countSwaps function below.
def countSwaps(a):
    numSwaps = 0

    for i in range(len(a)):
        for j in range(len(a) - 1):
            if a[j] > a[j + 1]:
                a[j] = a[j] ^ a[j + 1]
                a[j + 1] = a[j] ^ a[j + 1]
                a[j] = a[j] ^ a[j + 1]

                numSwaps += 1

    print(
        f"Array is sorted in {numSwaps} swaps.\n"
        + f"First Element: {a[0]}\n"
        + f"Last Element: {a[-1]}"
    )


if __name__ == "__main__":
    a = [6, 4, 1]

    result = countSwaps(a)
    print(result)
