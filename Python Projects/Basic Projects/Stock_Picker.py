list_prices = [17,3,6,9,15,8,6,1,10]
newlist = list()
i = 0

while i<len(list_prices):
  if list_prices[i-1] < list_prices[i]:
    newlist.append(list_prices[i])

  i += 1

print(newlist)


