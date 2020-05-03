#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the alternatingCharacters function below.
def alternatingCharacters(s):
    if len(s) == 0:
        return 0

    count = 0
    current = s[0]
    for letter in s[1:]:
        if letter is current:
            count += 1
        else:
            current = letter

    return count


def prt(fn, expected, *args):
    print("-" * 80)
    print(f"Expected: {expected}")
    result = fn(*args)
    print(f"Result:   {result}")


if __name__ == "__main__":

    prt(alternatingCharacters, 2, "AABB")
    prt(alternatingCharacters, 6, "AAABBBAABB")
