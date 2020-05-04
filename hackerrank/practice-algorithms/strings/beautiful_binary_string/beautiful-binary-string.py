#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the beautifulBinaryString function below.
def beautifulBinaryString(b):
    count = 0

    i = 0
    while i < len(b) - 2:
        if b[i:i+3] == "010":
            count += 1
            i+=2
        i+=1
    return count

def prt(fn, expected, *args):
    print("-" * 80)
    print(f"Expected: {expected}")
    result = fn(*args)
    print(f"Result:   {result}")


if __name__ == "__main__":

    prt(beautifulBinaryString, 2, "0101010")
    prt(beautifulBinaryString, 0, "01100")
    prt(beautifulBinaryString, 3, "0100101010")
