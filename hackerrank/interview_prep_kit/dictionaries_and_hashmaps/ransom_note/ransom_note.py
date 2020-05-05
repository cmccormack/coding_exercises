#!/bin/python3

import math
import os
import random
import re
import sys
from collections import defaultdict

# Complete the checkMagazine function below.


def checkMagazine(magazine, note):
    mag_hash = defaultdict(lambda: 0)

    for word in magazine:
        mag_hash[word] += 1

    for word in note:
        if not word in mag_hash:
            print("No")
            return "No"

        mag_hash[word] -= 1
        if mag_hash[word] == 0:
            del mag_hash[word]
    print("Yes")
    return "Yes"


def prt(fn, expected, *args):
    print("-" * 80)
    result = fn(*args)
    print(f"Result:   {result}")
    print(f"Expected: {expected}")


if __name__ == "__main__":

    prt(checkMagazine, "Yes", "give me one grand today night".split(
        " "), "give one grand today".split(" "))
    prt(checkMagazine, "No", "two times three is not four".split(
        " "), "two times two is four".split(" "))
