class Viking

  # class variable
  @@starting_health = 0
  # attr_accessor is a shortcut for getter and setter methods
  attr_accessor :name, :age, :health, :strength


  def initialize(name, age, health, strength)
      @name = name
      @age = age
      @health = @@starting_health
      @strength = strength
  end

  def attack(enemy)
    #put code here
  end

  # class method, this will be available to all instances
  # this one creates random values for all of the instnce variables we had before
  def self.create_warrior(name)
    age = rand * 20 + 15 # rand gives random value between 0 and 1
    health = [age * 5, 120].min
    strength = [age / 2, 10].min
    Viking.new(name, age, health, strength)
  end

=begin

  # getter method
  def health
    @health
  end

  # setter method
  def health=(new_health)
    @health = new_health
  end

=end

  def take_damage(damage)
    self.health -= damage
    # OR we could have said @health -= damage, it's the same here
    self.shout("OUCH!") # this calls the shout method
  end

  def shout(phrase)
    puts phrase
  end
end

oleg = Viking.new("Oleg", 19, 100, 8)

puts oleg.health

puts oleg.health=(25)

oleg.take_damage(15)

puts oleg.health

sten = Viking.create_warrior("Sten") # this one was created by the factory method, which is named create_warrior. THis method creates random values for all instance variables

puts sten.inspect