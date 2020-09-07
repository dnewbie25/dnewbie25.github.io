board = [["  ", " 1 ", " 2 ", " 3 "],
         [" A ", "  ", "  ", "  "],
         [" B ", "  ", "  ", "  "],
         [" C ", "  ", "  ", "  "]];

visual_board = board.each do |item|
  print "#{item.join}\n"
end

# Class to update the board
class BoardUpdate
  # This class controls the board
  @@board = [["  ", " 1 ", " 2 ", " 3 "],
          [" A ", "  ", "  ", "  "],
          [" B ", "  ", "  ", "  "],
          [" C ", "  ", "  ", "  "]];

  def update_board(move)
  # This method updates the board

    if move[0] == "A"
      if move[1] == "1"
        @@board[1][1] = " x "
      elsif move[1] == "2"
        @@board[1][2] = " x "
      elsif move[1] == "3"
        @@board[1][3] = " x "
      end
    elsif move[0] == "B"
      if move[1] == "1"
        @@board[2][1] = " x "
      elsif move[1] == "2"
        @@board[2][2] = " x "
      elsif move[1] == "3"
        @@board[2][3] = " x "
      end
    elsif move[0] == "C"
      if move[1] == "1"
        @@board[3][1] = " x "
      elsif move[1] == "2"
        @@board[3][2] = " x "
      elsif move[1] == "3"
        @@board[3][3] = " x "
      end
    else
      puts "Incorrect move"
    end

    

  end

  def show_board
    @@board.each do |item|
      print "#{item.join}\n"
    end
  end
end

board_test = BoardUpdate.new
board_test.update_board("C2")

board_test.show_board
# Class for players

class Player < BoardUpdate
  def
  end
end

# Class to determine the winner or a tie

=begin
  
Primero necesito una clase que controle el tablero, otra a los jugadores y otra que determine el ganador

La clase tablero tiene que ser heredada por los jugadores para poder actualizar el board. Deben haber 2 jugadores

La clase jugador debe poder ver el tablero, hacer un movimiento  ver el resultado en un tablero actualizado

Esto anterior para ambos jugadores, los cuales serían instancias de la clase Player.

Las jugadas deben ser privadas pero el tablero público para que pueda verse. EL tablero creo que debe ser una class variable. 
  
=end