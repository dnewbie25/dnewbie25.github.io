"""This program will count how many times a set of characters appear in a string"""

class SubString:
  def __init__(self, list_words):
    """Initialize the phrase to apply the substrings method"""
    #self.phrase = phrase
    self.list_words = list_words # this one is a list 
    self.dictionary_words = dict()
    self.test_list = []
    self.list_strings = []
    

  def substrings(self):
    """Search for how many times a word appears in the string"""
    self.phrase = input("Enter you phrase:").lower()
    self.test_list = self.phrase.split()
    print(self.test_list)
    # Create a list from every match it founds in the phrase
    """for each in self.list_words:
      for each_word in self.test_list:
        if each in each_word:
          self.list_strings.append(each)"""
    
    # loop the found matches and create a dictionary counting them
    for item in self.test_list:
      for item2 in self.list_words:
        try:
          if item2 in item:
            self.dictionary_words[item2] = self.dictionary_words[item2] + 1
        except KeyError:
          self.dictionary_words[item2] = 1
           

    return self.dictionary_words

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

test_substring = SubString(dictionary)

print(test_substring.substrings())
      



