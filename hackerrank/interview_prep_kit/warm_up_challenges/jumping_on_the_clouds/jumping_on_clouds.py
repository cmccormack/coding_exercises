#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c):
    clen = len(c)
    i = 0
    jumps = 0
    while (i < clen - 1):
        i += 1
        if (i+1) < clen and c[i+1] == 0:
            i+=1

        jumps += 1

    return jumps


if __name__ == '__main__':
    assert jumpingOnClouds([0,0,1,0,0,1,0]) == 4
    assert jumpingOnClouds([0,0,0,1,0,0]) == 3
    assert jumpingOnClouds([0,0,0,0,1,0]) == 3
    assert jumpingOnClouds([0,1,0,0,0,1,0,0,1,0]) == 5
    assert jumpingOnClouds([0,1,0,0,0,1,0,0,1,0,1,0]) == 6