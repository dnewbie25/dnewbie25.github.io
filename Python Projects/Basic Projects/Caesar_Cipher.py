import string # this one imports the ASCII
import re

lower_alphabet = list(string.ascii_lowercase)

upper_alphabet = list(string.ascii_uppercase)

class CaesarCipher:
  def __init__(self, phrase, shift):
    """Initialize the phrase and the shift value to use"""
    self.phrase = phrase
    self.shift = shift
    new_phrase = []

  def cipher_message(self):
    """This converts a message into a ciphered code"""
    list_from_string = self.phrase.split('')
    for each_letter in self.phrase:
      if each_letter in lower_alphabet:
        new_phrase.append(lower_alphabet[indexOf(each_letter) + self.shift])

  

