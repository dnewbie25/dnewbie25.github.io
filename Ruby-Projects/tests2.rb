class Student
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(other_person) 
    if grade > other_person.grade
      "Congrats!"
    else
      "You need to study more!"
    end
  end

  private
  def grade 
    return @grade
  end
end

chad = Student.new("Chad", 50)

peter = Student.new("Peter", 40)

puts peter.better_grade_than?(chad)

puts "well done" if chad.better_grade_than?(peter)