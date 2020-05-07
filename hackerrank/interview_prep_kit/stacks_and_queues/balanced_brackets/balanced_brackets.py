#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the isBalanced function below.
def isBalanced(s):
    print(s)
    stack = []
    open_braces = {
        '[': ']',
        '{': '}',
        '(': ')'
    }

    close_braces = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    
    for brace in s:

        if brace in open_braces:
            stack.append(brace)

        elif brace in close_braces:
            if len(stack) == 0:
                return "NO"
            if stack.pop() != close_braces[brace]:
                return "NO"

        else:
            return "NO"

    return "YES" if len(stack) == 0 else "NO"


def prt(fn, expected, *args):
    print("-" * 80)
    result = fn(*args)
    print(f"Result:   {result}")
    print(f"Expected: {expected}", "❌" if result != expected else "")


if __name__ == "__main__":

    questions = open("input04.txt", 'r')
    answers = open("output04.txt", 'r')

    # questions = questions.read().splitlines()[1:]
    # answers = answers.read().splitlines()

    # for i in range(len(questions)):
    #     prt(isBalanced, answers[i], questions[i])
    prt(isBalanced, "YES", "{[()]}")
    prt(isBalanced, "NO", "{[(])}")
    prt(isBalanced, "YES", "{{[[(())]]}}")
    prt(isBalanced, "YES", "{[]}{[()]}")
    prt(isBalanced, "NO", "{{}(")
