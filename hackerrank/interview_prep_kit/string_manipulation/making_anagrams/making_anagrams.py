from collections import defaultdict

# Complete the makeAnagram function below.
def makeAnagram(a, b):
    total_letters = len(a) + len(b)
    adict = defaultdict(int)
    bdict = defaultdict(int)

    for letter in a: adict[letter] += 1
    for letter in b: bdict[letter] += 1

    for letter in adict:
        if letter in bdict:
            total_letters -= (min(adict[letter], bdict[letter])*2)

    
    return total_letters


if __name__ == '__main__':
    a = "cde"
    b = "abc"
    c = "bacdc"
    d = "dcbad"

    # res = makeAnagram(a, b)
    # res = makeAnagram(c, d)
    res = makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
    print(res)