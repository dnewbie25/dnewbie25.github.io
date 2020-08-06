list_prices = [17,3,6,9,15,8,6,1,10]
list_sorted = sorted(list_prices, reverse=True)
best_days = list()
profit = 0

for sell_price in list_prices:
  for buy_price in list_sorted:
    if buy_price < sell_price and list_prices.index(buy_price) < list_prices.index(sell_price) and sell_price-buy_price>profit:
      best_days.extend([list_prices.index(buy_price), list_prices.index(sell_price)])
      profit = sell_price - buy_price


best_days.sort()
print(best_days)

print(f"The best day to buy is day {best_days[0]+1} and the best to sell is day {best_days[-1]+1}.\nProfit: {profit}")


