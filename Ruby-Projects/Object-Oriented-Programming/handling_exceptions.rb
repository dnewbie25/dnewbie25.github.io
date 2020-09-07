a = 10
b = '10'

# we can handle exceptions with begin/rescue/else

begin
  a + b
rescue
  puts "Could not add variables a (#{a.class}) and b (#{b.class})"
else
  puts "a + b is #{a + b}"
end

##################################### Another example with arrays, look how the rescue doesn't allow our program to crash and it continues looping

value = [42, 'a', 'r', 9, 5, 10022, 8.7, "sharon", "Libya", "Mars", "12", 98, rand + rand, {:dog=>'cat'}, 100, nil, 200.0000, Object, 680, 3.14, "Steve", 78, "Argo"].shuffle # ------>>> this shuffles the array

while value.length > 0
  a = value.pop
  b = value.pop

  begin
    a + b   
  rescue
    puts "Could not add variables a (#{a.class}) and b (#{b.class})"
  else
    puts "a + b is #{a + b}"
  end
end


##############################  Input Validation

while 1 # this is the same as while true
  puts "Enter a number >>"
  begin
    num = Kernel.gets.match(/\d+/)[0]
  rescue
    puts "Wrong input type. Try again..."
  else
    puts "#{num} + 1 is: #{num.to_i+1}"
  end
end