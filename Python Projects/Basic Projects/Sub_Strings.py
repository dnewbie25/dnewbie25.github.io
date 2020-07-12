"""This program will count how many times a set of characters appear in a string"""

class SubString:
  def __init__(self, list_words):
    """Initialize the phrase to apply the substrings method"""
    #self.phrase = phrase
    self.list_words = list_words # this one is a list 
    self.dictionary_words = dict() # this is the dictionary with count for every word in the list_words
    self.test_list = [] # this one stores the phrase truned into a list
    self.sorted_dictionary = dict() # stores the dictionary sorted alphabetically
    

  def substrings(self):
    """Search for how many times a word appears in the string"""
    self.phrase = input("Enter you phrase:").lower()

    # Creates a list of every word in the phrase
    self.test_list = self.phrase.split()
    print(self.test_list)
        
    # loop the found matches and create a dictionary counting them
    for item in self.test_list:
      for item2 in self.list_words:
        try:
          if item2 in item:
            self.dictionary_words[item2] = self.dictionary_words[item2] + 1
        except KeyError:
          self.dictionary_words[item2] = 1

    # Sorted dictionary
    
    for key, values in sorted(self.dictionary_words.items()):
      self.sorted_dictionary[key] = values

    return self.sorted_dictionary

# create a list of words to compare
dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

# Instance of Substring
test_substring = SubString(dictionary)

print(test_substring.substrings())
      



