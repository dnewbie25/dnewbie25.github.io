"""This program will count how many times a set of characters appear in a string"""

class SubString:
  def __init__(self, list_words):
    """Initialize the phrase to apply the substrings method"""
    #self.phrase = phrase
    self.list_words = list_words # this one is a list 
    self.dictionary_words = dict()
    self.new_list = []

  def substrings(self):
    """Search for how many times a word appears in the string"""
    self.phrase = input("Enter you phrase:")
    for word in self.list_words:
      try:
        if word in self.phrase:
          self.dictionary_words[word] = self.dictionary_words[word] + 1
      except KeyError:
        self.dictionary_words[word] = 1
           

    return self.dictionary_words

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

test_substring = SubString(dictionary)

print(test_substring.substrings())
      



