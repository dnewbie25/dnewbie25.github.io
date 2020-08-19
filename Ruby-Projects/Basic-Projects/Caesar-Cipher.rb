
lower_alphabet = ('a'..'z').to_a

upper_alphabet = ('A'..'Z').to_a

# asks for the phrase and shift value and creates an empty array for the result

puts "Enter the phrase you want to cipher"

phrase = gets.chomp


ciphered_phrase = []

puts "Enter the shifts you want"

shifts = gets.chomp.to_i

# Split the phrase into an array with all characters
require 'pry'

phrase_characters_array = phrase.split('')

# loops through the phrase_characters_array
binding.pry

phrase_characters_array.each do |character|

  # if the character is lower case
  

  if lower_alphabet.include?(character)
    character_index = lower_alphabet.index(character) # gets the index value

    if character_index + shifts > lower_alphabet.length # if it's greater than the alphaber's length
      sum = character_index + shifts

      result_of_index_substraction = sum - lower_alphabet.length

      ciphered_phrase.push(lower_alphabet[result_of_index_substraction])

    else
      new_character = lower_alphabet[character_index + shifts]
      ciphered_phrase.push(new_character)
    end

  # if the character is upper case
  elsif upper_alphabet.include?(character)
    character_index = upper_alphabet.index(character) # gets the index value

    if character_index + shifts > upper_alphabet.length
      sum = character_index + shifts

      result_of_index_substraction = sum - upper_alphabet.length

      ciphered_phrase.push(upper_alphabet[result_of_index_substraction])

    else
      new_character = upper_alphabet[character_index + shifts]
      ciphered_phrase.push(new_character)
    end

  # otherwise just adds the characters
  else
    ciphered_phrase.push(character)
  end

end

new_phrase = puts ciphered_phrase.join('')

puts new_phrase

# Now add the decipher code

################################################################################################################################################################

# Add the phrase to decipher


puts "Enter the phrase you want to decipher"

phrase = gets.chomp


ciphered_phrase = []

puts "Enter the shifts you want"

shifts = gets.chomp.to_i

# Split the phrase into an array with all characters

phrase_characters_array = phrase.split('')

# loops through the phrase_characters_array

phrase_characters_array.each do |character|

  # if the character is lower case
  if lower_alphabet.include?(character)
    character_index = lower_alphabet.index(character) # gets the index value

    if character_index - shifts < 0 # because the decipher is the same but backwards, it evaluates if the index - shift is less than zero
      substraction = character_index - shifts

      
      ciphered_phrase.push(lower_alphabet[substraction])

    else
      new_character = lower_alphabet[character_index - shifts] # reverts the operation
      ciphered_phrase.push(new_character)
    end

  # if the character is upper case
  elsif upper_alphabet.include?(character)
    character_index = upper_alphabet.index(character) # gets the index value

    if character_index - shifts < 0
      substraction = character_index - shifts

      
      ciphered_phrase.push(upper_alphabet[substraction])

    else
      new_character = upper_alphabet[character_index - shifts]
      ciphered_phrase.push(new_character)
    end

  # otherwise just adds the characters
  else
    ciphered_phrase.push(character)
  end

end

new_phrase = puts ciphered_phrase.join('')

puts new_phrase

