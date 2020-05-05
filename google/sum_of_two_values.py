import math


def sumTwoValues_1(s, v):
    # Utilizing nested for loop (O(n^2))
    for i in range(len(s)-1):
        for j in range(i+1, len(s)):
            if s[i] + s[j] == v:
                return True
    return False


def sumTwoValues(s, v):
    # Utlizing Binary Search

    def binarySearch(l, v):
        leftI = 0
        rightI = len(l)-1
        pivotI = (leftI + rightI) // 2
        print(leftI, rightI, pivotI, l)
        while leftI < rightI:
            print(l, v, leftI, pivotI, rightI)
            if l[pivotI] > v:
                rightI = pivotI - 1
            if l[pivotI] < v:
                leftI = pivotI + 1
            pivotI = (leftI + rightI) // 2
            if l[pivotI] == v:
                return True
            print(l, v, leftI, pivotI, rightI)

        return False

    for i in range(len(s)):
        if binarySearch(s[0:i] + s[i+1:], v-s[i]):
            return True

    return False


def prt(fn, expected, *args):
    print("-" * 80)
    result = fn(*args)
    print(f"Result:   {result}")
    print(f"Expected: {expected}")


if __name__ == "__main__":

    prt(sumTwoValues, False, [1, 2, 4, 9], 8)
    prt(sumTwoValues, True, [1, 2, 4, 4], 8)
    # prt(sumTwoValues, True, [1, 3, 4, 4, 6, 7, 8, 12], 10)
    # prt(sumTwoValues, True, [1, 3, 4, 4, 6, 7, 8, 12, 14], 10)
    # prt(sumTwoValues, False, [3, 5, 6, 8, 12], 7)
