dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]


def substrings(string, dictionary)

  # creates an array fro the string
  string_subarray = string.split()

  # creates a new hash
  words_hash = Hash.new()

  # loop over wach word in the string and compare it with each word in the dictionary array. Each word is converted to lowercase for the comparison
  string_subarray.each do |word|
    
    dictionary.each do |dictionary_item|
      puts dictionary_item
      if word.downcase.include?(dictionary_item) # word in lowercase
        if words_hash.has_key?(dictionary_item)
          words_hash[dictionary_item] += 1
        else
          words_hash[dictionary_item] = 1
        end
      else
        next
      end

    end
  end

  # sorts the hash and returns a bidimensional rray with [[key, value]] format
  sorted_array_from_hash = words_hash.sort_by {|key, value| key}

  # creates a new sorted hash
  sorted_hash = Hash.new()

  sorted_array_from_hash.each do |element|
    sorted_hash[element[0]] = element[1]    
  end

  return sorted_hash

end

p substrings("Howdy partner, sit down! How's it going?",dictionary)

