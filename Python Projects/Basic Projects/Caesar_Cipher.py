import string # this one imports the ASCII
import re

lower_alphabet = list(string.ascii_lowercase)

upper_alphabet = list(string.ascii_uppercase)

class CaesarCipher:
  def __init__(self, phrase, shift):
    """Initialize the phrase and the shift value to use"""
    self.phrase = phrase
    self.shift = shift
    self.new_phrase = []
    self.character_list = []
    self.new_string = ''

  def split_phrase(self):
    for each_character in self.phrase:
      self.character_list.append(each_character)
    return self.character_list


  def cipher_message(self):
    """This converts a message into a ciphered code"""
    list_from_string = self.split_phrase()
    for each_letter in list_from_string:
      if each_letter in lower_alphabet:
        try:
          self.new_phrase.append(lower_alphabet[lower_alphabet.index(each_letter) + self.shift])
        except IndexError:
          self.new_phrase.append(lower_alphabet[lower_alphabet.index(each_letter) + self.shift-len(upper_alphabet)])
      elif each_letter in upper_alphabet:
        try:
          self.new_phrase.append(upper_alphabet[upper_alphabet.index(each_letter) + self.shift])
        except IndexError:
          self.new_phrase.append(upper_alphabet[upper_alphabet.index(each_letter) + self.shift-len(upper_alphabet)])
      else: 
        self.new_phrase.append(each_letter)
    
    return self.new_phrase

  def join_phrase(self):
    ciphered_list = self.cipher_message()

    return self.new_string.join(ciphered_list)


test = CaesarCipher('Hello WorldY!', 3)

print(test.join_phrase())

