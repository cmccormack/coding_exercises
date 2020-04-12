
"""
       5
      / \
    4     7
   / \   / \
  3   9 2   6
 /         /
1         8
"""

class Node:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


def find_average_depth_first(node: Node) -> list:
  result = []
  depth = 1

  def _collect(node, depth):
    if node is None:
      return
    
  if depth > len(result):
    




def print_tree(root: Node, depth: int = 1):
  tree = []

  def _collect(node: Node, depth: int):
    if node is None:
      return
    
    if depth > len(tree):
      tree.append([])

    tree[depth-1].append(node.value)
    
    _collect(node.left, depth+1)
    _collect(node.right, depth+1)
  
  _collect(root, depth)
  return tree



root = Node(5)
root.left = Node(4)
root.right = Node(7)
root.left.left = Node(3)
root.left.left.left = Node(1)
root.left.right = Node(9)
root.right = Node(7)
root.right.left = Node(2)
root.right.right = Node(6)
root.right.right.left = Node(8)

print(print_tree(root))