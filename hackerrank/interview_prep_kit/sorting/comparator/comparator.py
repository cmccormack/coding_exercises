from functools import cmp_to_key


class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return self.name + " " + str(self.score)

    @staticmethod
    def comparator(a, b) -> int:
        if a.score > b.score:
            return -1
        if a.score < b.score:
            return 1
        if a.score == b.score:
            if a.name > b.name:
                return 1
            if a.name < b.name:
                return -1
        return 0


class Checker:
    @staticmethod
    def compare(players):
        return sorted(players, key=cmp_to_key(Player.comparator))


input = """
amy 100
david 100
heraldo 50
aakansha 75
aleksa 150
""".strip().split(
    "\n"
)

input = map(lambda x: x.strip().split(" "), input)
input = [Player(name, int(score)) for name, score in input]
print("INPUT:")
print(input)
print("OUTPUT:")
print(Checker.compare(input))
