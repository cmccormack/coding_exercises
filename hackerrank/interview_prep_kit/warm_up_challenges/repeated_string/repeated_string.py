#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the repeatedString function below.
def repeatedString(s, n):
  match = 'a'
  s_len = len(s)
  s_repeats = n // s_len
  extra_chars = s[0:n%len(s)]
  count_match_in_s = s.count(match)

  total = (s_repeats * count_match_in_s) + extra_chars.count(match)

  print(f's: {s}, n: {n}, s_repeats: {s_repeats}, extra_chars: {extra_chars} count_match_in_s: {count_match_in_s}')

  print(f'total: {total}')
  return total

if __name__ == '__main__':

    assert repeatedString('aba', 10) == 7
    assert repeatedString('a', 1000000000000) == 1000000000000
