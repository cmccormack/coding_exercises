#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the sockMerchant function below.
def sockMerchant(n, ar):
    total = 0
    loose_socks = {}
    print(n, ar)
    for item in ar:
        if item in loose_socks:
            print (ar)
            del loose_socks[item]
            total += 1
        else:
            loose_socks[item] = True
    print (total)
    print (loose_socks)
            



if __name__ == '__main__':
    # fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # n = int(input())

    # ar = list(map(int, input().rstrip().split()))

    n = 9
    ar = [10,20,20,10,10,30,50,10,20]
    result = sockMerchant(n, ar)

    # fptr.write(str(result) + '\n')

    # fptr.close()
