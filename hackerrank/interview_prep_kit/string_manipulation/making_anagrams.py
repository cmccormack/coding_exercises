from collections import defaultdict

# Complete the makeAnagram function below.
def makeAnagram(a, b):

    # Get combined count of letters from both strings
    total_letters = len(a) + len(b)

    # Create storage for letters, with a default value of `0`
    adict = defaultdict(int)
    bdict = defaultdict(int)

    # Store each letter in default dict, incrementing each time letter is seen
    for letter in a: adict[letter] += 1
    for letter in b: bdict[letter] += 1

    # Iterate over either of the two dicts, subtracting the sum of matched letters
    for letter in adict:
        if letter in bdict:
            # e.g., min('C': 2, 'C': 3) is 2, subract two from both (double the difference)
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