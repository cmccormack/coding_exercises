

def rotLeft(a, d):
  shift = d % len(a)

  print (a[shift:] + a[0:shift])
  return a[shift:] + a[0:shift]

if __name__ == '__main__':
  
  assert rotLeft([1,2,3,4,5], 4) == [5,1,2,3,4]