#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    swaps = 0
    for i, num in enumerate(arr):
        print(arr, num)
        if num != (i + 1):
            current = i
            while current != i + 1:
                # print(arr, current)
                current += 1

            arr[i] = arr[i] ^ arr[current]
            arr[current] = arr[i] ^ arr[current]
            arr[i] = arr[i] ^ arr[current]
            swaps += 1
        print(arr)
    return swaps


if __name__ == "__main__":

    arr = [7, 1, 3, 2, 4, 5, 6]

    res = minimumSwaps(arr)

    print(res)
