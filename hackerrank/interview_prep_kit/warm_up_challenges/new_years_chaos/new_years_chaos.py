

def minimumBribes(q):
  cutsies = 0
  for i, rider in enumerate(q, 1):
    if rider - i > 2:
      return "Too chaotic"
    if rider < i:
      cutsies += i - rider
  
  print(cutsies)
  return cutsies

if __name__ == '__main__':

  assert minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]) == "Too chaotic"
  assert minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]) == 7

  # 1 2 3 4 5 6 7 8
  # 1 2 5 3 4 6 7 8   // 5 jumped ahead 2
  # 1 2 5 3 6 4 7 8   // 6 jumped ahead 1
  # 1 2 5 3 7 6 4 8   // 7 jumped ahead 2
  # 1 2 5 3 7 8 6 4   // 8 jumped ahead 2