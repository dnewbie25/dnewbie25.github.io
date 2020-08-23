stocks_record = [17,3,6,9,15,8,6,1,10]


def stock_picker(stocks)
  
  best_days = []
  
  profit = 0

  # loop from zero until array length entirely
  (0..(stocks.length-1)).each do |buy|
    # loop from day 2 forward for the selling. buy + 1  because otherwise it will start counting from day 2 all the time. This new loop is inclusive-exclusive
    
    ((buy + 1)...(stocks.length-1)).each do |sell|

      if stocks[sell] - stocks[buy] > profit
        best_days.push(buy)
        best_days.push(sell)

        profit = (stocks[sell] - stocks[buy])
      
      end

    end   

  end

  # take buy and selling days, we count from day one not day zero, so this adds 1 to the indexes
  buy_selling_days = [best_days.sort[0] + 1, best_days[-1] + 1]
  

  return "The best to buy is day #{buy_selling_days[0]}, with the stock price at $#{stocks[best_days.sort[0]]} and the best day to sell is day #{buy_selling_days[-1]} with the stock price at $#{stocks[best_days.sort[-1]]}.\nThe profits are: $#{profit}"




end

puts stock_picker(stocks_record)

puts "\n*****************************************\n"

puts stock_picker([11,92,75,13,25,47,87,22,89,40])