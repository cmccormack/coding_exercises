#!/bin/python3

import math
import os
import random
import re
import sys
from collections import defaultdict

# Complete the isValid function below.
def isValid(s):
    if not s:
        return "NO"

    letter_map = defaultdict(int)

    for letter in s:
        letter_map[letter] = letter_map[letter] + 1

    counts = defaultdict(int)
    for v in letter_map.values():
        counts[v] += 1

    ci = sorted(list(counts.items()), key=lambda x: x[1])

    if len(ci) == 1:
        return "YES"
    if len(ci) > 2:
        return "NO"
    if ci[0][1] > 1:
        return "NO"
    if ci[0][0] - 1 == 0:
        return "YES"
    if ci[0][0] - 1 > ci[1][0]:
        return "NO"

    return "YES"


if __name__ == "__main__":

    result = isValid("abcdefghhgfedecba")
    print("Result:", result, "Expected: YES")
    result = isValid("aabbccddeefghi")
    print("Result:", result, "Expected: NO")
    result = isValid("aaaabbcc")
    print("Result:", result, "Expected: NO")
    result = isValid("a")
    print("Result:", result, "Expected: YES")
    result = isValid(
        "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
    )
    print("Result:", result, "Expected: YES")
