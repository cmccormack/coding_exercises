#!/bin/python3

import math
import time
import sys
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


# Second attempt using counting sort
def activityNotifications_2(exp, d):

    debug = False
    # Exit early if initial arguments are invalid
    if not exp or len(exp) == 0 or d > len(exp):
        return 0

    # Derive median indexes
    isEvenLen = d % 2 == 0
    mid_i = d // 2
    median_left_i = mid_i if isEvenLen else mid_i + 1

    # Create and populate counting array for use with counting sort
    counter = [0] * (max(exp) + 1)
    for v in exp[0:d]:
        counter[v] += 1

    print(counter)

    def findRight(cnt, i, stack_i):
        if cnt[i] >= stack_i:
            return [i, stack_i]

        for j in range(i + 1, len(cnt)):
            if cnt[j] > 0:
                return [j, 1]

    def findLeft(cnt, i, stack_i):
        if stack_i > 0:
            return [i, stack_i]

        for j in range(i - 1, -1, -1):
            if cnt[j] > 0:
                return [j, cnt[j]]

    # Initialize median_pointer
    median_pointer = [0, 0]
    current = median_left_i
    for median, v in enumerate(counter):
        if current - v <= 0:
            median_pointer = [median, current]
            break
        current -= v

    notifications = 0
    for v in range(d, len(exp)):
        oldest = exp[v - d]
        newest = exp[v]
        median_left = median_pointer
        median_right = median_left
        median_avg = median

        if isEvenLen:
            median_right = findRight(counter, median_pointer[0], median_pointer[1] + 1)
            median_avg = (median_avg + median_right[0]) / 2

        if newest >= median_avg * 2:
            notifications += 1

        counter[oldest] -= 1

        median, stack_ptr = median_pointer
        dir_str = f"removing> {oldest:3}"
        if oldest < median:
            if isEvenLen:
                median_pointer = findRight(counter, median, stack_ptr + 1)
                dir_str += f" <  median: {median:3}\t{median_pointer}\t>>>>>>>>"
            else:
                # Median doesn't change
                dir_str += f" <  median: {median:3}\t{median_pointer}\t><><><><"
                pass

        if oldest == median:
            if isEvenLen:
                median_pointer = findRight(counter, median, stack_ptr + 1)
                dir_str += f" == median: {median:3}\t{median_pointer}\t>>>>>>>>"
            else:
                median_pointer = findLeft(counter, median, stack_ptr - 1)
                dir_str += f" == median: {median:3}\t{median_pointer}\t<<<<<<<<"

        if oldest > median:
            if isEvenLen:
                dir_str += f" >  median: {median:3}\t{median_pointer}\t><><><><"
                pass
                # Median doesn't change
            else:
                median_pointer = findLeft(counter, median, stack_ptr - 1)
                dir_str += f" >  median: {median:3}\t{median_pointer}\t<<<<<<<<"

        if debug:
            print(dir_str)
        counter[newest] += 1
        median, stack_ptr = median_pointer
        dir_str = f"adding  > {newest:3}"
        if newest < median:
            if isEvenLen:
                median_pointer = findLeft(counter, median, stack_ptr - 1)
                dir_str += f" <  median: {median:3}\t{median_pointer}\t<<<<<<<<"
            else:
                dir_str += f" <  median: {median:3}\t{median_pointer}\t><><><><"
                pass
                # Median doesn't change

        if newest == median:
            if isEvenLen:
                dir_str += f" == median: {median:3}\t{median_pointer}\t><><><><"
                pass
                # Median doesn't change
            else:
                median_pointer = findRight(counter, median, stack_ptr + 1)
                dir_str += f" == median: {median:3}\t{median_pointer}\t>>>>>>>>"

        if newest > median:
            if isEvenLen:
                dir_str += f" >  median: {median:3}\t{median_pointer}\t><><><><"
                pass
                # Median doesn't change
            else:
                median_pointer = findRight(counter, median, stack_ptr + 1)
                dir_str += f" >  median: {median:3}\t{median_pointer}\t>>>>>>>>"

        if debug:
            print(dir_str)

        # if v > 10100:
        #     sys.exit()
    return notifications


def activityNotifications(exp, d):

    notifications = 0
    isEven = d % 2 == 0

    # find median index
    mid = d // 2 - 1 if isEven else d // 2

    # Initialize and fill counting sort array
    counter = [0] * (max(exp) + 1)
    for v in exp[:d]:
        counter[v] += 1

    def findMedian(cnt, m):
        medianLeft = m
        medianRight = m + 1
        res = [0, 0]
        for i, c in enumerate(cnt):
            # print(f"before: {medianLeft}, {medianRight}, {c}")
            if medianLeft < c and res[0] == 0:
                res[0] = i
            if medianRight < c:
                res[1] = i

            medianLeft -= c
            medianRight -= c
            # print(f"after: {medianLeft}, {medianRight}, {c}")
            if medianLeft < 0 and medianRight < 0:
                # print("Return:", res)
                return res

    print(counter)
    # loop over remaining values in expenditures
    for index, v in enumerate(exp[d:], d):

        # iterate over counting array to find median
        # print(f"Middle index: {mid}")
        medianLeft, medianRight = findMedian(counter, mid)

        median = medianLeft
        if isEven:
            median = (medianLeft + medianRight) / 2

        if (median * 2) <= v:
            notifications += 1
        # print(
        #     f"median:{median}\tmedian*2:{median*2}\tv:{v}\t(median * 2) <= exp[index]:{(median * 2) <= exp[index]}\tnotification:{notifications}"
        # )

        counter[exp[index - d]] -= 1
        counter[v] += 1

    return notifications


# remove oldest item by decrementing expenditure[current index - d] from counter

if __name__ == "__main__":

    d = 5
    expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5]
    # [[2, 2, 3, 3, 4], 6, 8, 4, 5] median=3
    # [2, [2, 3, 3, 4, 6], 8, 4, 5] median=3
    # [2, 3, [2, 3, 4, 6, 8], 4, 5] median=4
    # [2, 3, 4, [2, 3, 4, 6, 8] 5] median=4
    # [0,0,2,2,1],6,8,4,5]
    # [0,0,0,1,1,1,1,0,1]
    expenditure2 = [8, 2, 4, 1, 9, 2, 4, 8, 12, 23, 8, 2, 3, 8, 2, 9, 14, 18, 6, 3, 9]
    # [[1, 2, 4, 8, 9], 2, 4, 8, 12, 23, 8, 2, 3, 8, 2, 9, 14, 18, 6, 3, 9]
    # [8, [1, 2, 2, 4, 9], 4, 8, 12, 23, 8, 2, 3, 8, 2, 9, 14, 18, 6, 3, 9]
    # [8, 2 [1, 2, 4, 4, 9], 8, 12, 23, 8, 2, 3, 8, 2, 9, 14, 18, 6, 3, 9]
    # d= 5 counter: [0, 0, 2, 2, 1, 0, 0, 0, 0]    [[2, 2, *3*, 3, 4], 6, 8, 4, 5]
    # d= 6 counter: [0, 0, 2, 2, 1, 0, 1, 0, 0]    [[2, 2, *3, 3*, 4, 6], 8, 4, 5]
    # d= 7 counter: [0, 0, 2, 2, 1, 0, 1, 0, 1]    [[2, 2, 3, *3*, 4, 6, 8], 4, 5]

    # remove 2 add 6: [[2,2,*3*,4,5], 6] [[2,3,*4*,5,6]] // [3,1] -> [4,1] shift right
    # remove 2 add 3: [[2,2,*3*,4,5], 3] [[2,3,*3*,4,5]] // [3,1] -> [3,2] shift right
    # remove 2 add 1: [[2,2,*3*,4,5], 1] [[1,2,*3*,4,5]] // [3,1] -> [3,1] hold
    # remove 5 add 1: [[2,2,*3*,4,5], 1] [[1,2,*2*,3,4]] // [3,1] -> [2,2] shift left
    # remove 3 add 6: [[2,2,*3*,4,5], 6] [[2,2,*4*,5,6]] // [3,1] -> [4,1] shift right
    # remove 5 add 3: [[2,2,*3*,4,5], 3] [[2,2,*3*,3,4]] // [3,1] -> [3,1] hold
    # remove 3 add 1: [[2,2,*3*,4,5], 1] [[1,2,*2*,4,5]] // [3,1] -> [2,2] shift left
    # remove 3 add 3: [[2,2,*3*,4,5], 3] [[2,2,*3*,4,5]] // [3,1] -> [3,1] hold
    # remove 5 add 8: [[2,2,*3*,4,5], 8] [[2,2,*3*,4,8]] // [3,1] -> [3,1] hold

    # remove number < median, add number < median -> hold
    # remove number < median, add number == median -> shift right
    # remove number < median, add number > median -> shift right

    # remove number > median, add number < median -> shift left
    # remove number > median, add number == median -> hold
    # remove number > median, add number > median -> hold

    # remove number = median, add number < median -> shift left
    # remove number = median, add number = median -> hold
    # remove number = median, add number > median -> shift right

    # Combine (in order)
    # remove number = median, add number = median - hold
    # remove number <= median, add number >= median -> shift right
    # remove number >= median, add number < median -> shift left
    # else hold

    raw_input = open("./input01.txt", "r").readlines()

    meta, raw_expenditure = raw_input[0], raw_input[1]
    large_expenditure = list(map(int, raw_expenditure.split()))
    # result = activityNotifications(expenditure, d)
    result = activityNotifications(large_expenditure, int(meta.split()[1]))
    # sortedExpenditureDays = sorted(large_expenditure[0:10000])
    # print(sortedExpenditureDays)

    print(result)
