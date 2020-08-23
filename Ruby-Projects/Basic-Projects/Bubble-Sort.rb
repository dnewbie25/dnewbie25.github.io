array = [4,1,2,3,78,2,0,2,100,-15,0,45,58]

def bubble_sort(array)

  new_array = []
  # length of the array

  length = array.length
  
  # starts loop, the swapped variable should be false meaning the sort didn't do any change to the array
  swapped = true
  until swapped == false
    swapped = false
    # the loops compares an element with the next one, so we'll start looping from the second index 5 8

    # loop through 1 to array length, inclusive
    (1..(length-1)).each do |index|
      # if the index 1 is less than index 0, then if index 2 is less than index 1 and so on
      if array[index] < array[index - 1]

        # swap the elements at index 0 and 1, then swap elements at index 1 and 2 and so on
        array[index-1], array[index] = array[index], array[index-1]
        
        # if this block of code was executed, swapped = true. If swap is false then it means this swapping never happened, so the sort has finished.

        #this swap is not affected by the swapped = false we declared in the loop
        #this because the .each loops through all the array so it will always
        #be a swap unless it has already finished the bubble sort
        
        swapped = true
        
      end

    end
    
  end

  return array

end

p bubble_sort(array)