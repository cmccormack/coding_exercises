#!/bin/python3

import math
from collections import deque

# Initial attempt - too slow to pass large inputs
def activityNotifications_1(expenditure, d):
    if not expenditure or len(expenditure) == 0 or d > len(expenditure):
        return 0

    expenditure = sorted(expenditure[0:d]) + expenditure[d:]
    notifications = 0

    def updateTrailing(l, right, d):
        for i in range(right, right - d, -1):
            if l[i] > l[i - 1]:
                return
            # swap
            l[i] = l[i] ^ l[i - 1]
            l[i - 1] = l[i] ^ l[i - 1]
            l[i] = l[i] ^ l[i - 1]

    isEvenLen = d % 2 == 0
    mid_i = d // 2
    median_left_i = mid_i - 1 if isEvenLen else mid_i
    median_right_i = mid_i if isEvenLen else median_left_i
    for i in range(d, len(expenditure)):
        median = (expenditure[median_left_i] + expenditure[median_right_i]) / 2
        print(median_left_i, median_right_i, median)
        if 2 * median <= expenditure[i]:
            notifications += 1

        updateTrailing(expenditure, i, d)
        median_left_i += 1
        median_right_i += 1

    return notifications


# Second attempt using counting sort and deque
def activityNotifications(exp, d):
    if not exp or len(exp) == 0 or d > len(exp):
        return 0

    counter = [0] * max(exp)
    history = deque([])
    for v in exp[0:d]:
        counter[v] += 1
        print(counter, v)

    for i, v in enumerate(counter):
        for j in range(v):
            history.append(i)

    print(history)


if __name__ == "__main__":

    d = 5
    expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
    result = activityNotifications(expenditure, d)
    print(result)
