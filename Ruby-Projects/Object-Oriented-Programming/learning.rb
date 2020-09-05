class Viking

  # attr_accessor is a shortcut for getter and setter methods
  attr_accessor :name, :age, :health, :strength


  def initialize(name, age, health, strength)
      @name = name
      @age = age
      @health = health
      @strength = strength
  end

  def attack(enemy)
    #put code here
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