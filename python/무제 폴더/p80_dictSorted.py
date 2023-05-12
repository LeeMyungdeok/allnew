wordInfo = {'세탁기': 50, '선풍기': 30, '청소기': 40, '냉장고': 60}

myticks = sorted(wordInfo, key = wordInfo.get, reverse=True)
print(myticks)

revers_key = sorted(wordInfo.keys(), reverse=True)
print(revers_key)

revers_key = sorted(wordInfo.values(), reverse=True)
print(revers_key)

