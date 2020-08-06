unsorted_list = [4,3,78,2,0,2]
sorted_list = []
numbers_reordered = 0 # once it is 0 the algorithm has finished
i = 0
j = 0
number_swap = 0
while i < len(unsorted_list)-1:

  while j < len(unsorted_list)-1: 

    if unsorted_list[j] > unsorted_list[i]:
      
        number_swap = unsorted_list[j]
        unsorted_list[j] = unsorted_list[j+1]
        unsorted_list[j+1] = number_swap
      

    sorted_list.append(number_swap)

    j += 1

  i += 1

print(sorted_list)