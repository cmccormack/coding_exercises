#!/bin/python3

import math
import os
import random
import re
import sys
from collections import defaultdict

# Complete the sherlockAndAnagrams function below.


def sherlockAndAnagrams(s):
    pairs = defaultdict(lambda: 0)
    for i in range(len(s)):
        # pairs[s[i]] += 1
        for j in range(i+1, len(s)+1):
            pairs[''.join(sorted(s[i:j]))] += 1
            # print(i, j, s[i:j])

    pairs = [x[1] for x in filter(lambda x: x[1] > 1, pairs.items())]
    total = sum(map(lambda x: x * (x-1) // 2, pairs))
    return total


"""
k k
1 = 1

k k k
2 + 1 = 3

k k k k
3 + 2 + 1 = 6

k k k k k
4 + 3 + 2 + 1 = 10

k k k k k k
5 + 4 + 3 + 2 + 1 = 15

Formula for n choose 2: n(n-1)/2
"""


def prt(fn, expected, *args):
    print("-" * 80)
    result = fn(*args)
    print(f"Result:   {result}")
    print(f"Expected: {expected}")


if __name__ == "__main__":

    prt(sherlockAndAnagrams, 4, "abba")
    prt(sherlockAndAnagrams, 3, "ifailuhkqq")
    prt(sherlockAndAnagrams, 10, "kkkk")
