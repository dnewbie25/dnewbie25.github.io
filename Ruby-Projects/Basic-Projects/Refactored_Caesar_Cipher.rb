require 'pry'
# Asks for the type of operation, decode, cipher or exit

def caesar_cipher

  lower_alphabet = ('a'..'z').to_a

  upper_alphabet = ('A'..'Z').to_a

  puts "Enter a shift value"

  shift = gets.chomp.to_i

  puts "Enter (d)ecode, (c)ipher or (q)uit"

  mode = gets.chomp.lowercase

  if mode == 'd'
    puts "Enter a phrase to decipher"
    phrase = gets.chomp
    return decode_function(phrase, lower_alphabet, upper_alphabet, shift)
  elsif mode == 'c'
    puts "Enter a phrase to cipher"
    phrase = gets.chomp
    return cipher_function(phrase, lower_alphabet, upper_alphabet, shift)
  elsif mode == 'q'
    exit
  else
    puts "Incorrect choice. Try again"
  end

end

# Cipher function
def cipher_function(string,lower, upper, shift)
  
end

# Decode function

def decode_function(string, lower, upper, shift)

end

# Function creates an array from the phrase
def phrase_to_array(string)
  array = string.split('')
  return array
end

# Function that shift the characters

def positive_shift(string, value)
  


end
# Function that decodes the characters