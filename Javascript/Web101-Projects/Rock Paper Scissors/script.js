"use strict";

//Computer random selection

function computerPlay() {
  let random_number = Math.floor(Math.random() * (3 - 0) + 0); // return between [1, 4) inclusive-exclusive

  if (random_number == 0) {
    return "r";
  } else if (random_number == 1) {
    return "p";
  } else {
    return "s";
  }
}

//Player move

const rock = document.getElementsByClassName("rock")[0];
const paper = document.getElementsByClassName("paper")[0];
const scissors = document.getElementsByClassName("scissors")[0];
const result = document.getElementById("result");
const playerScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");

const restart = document.getElementById("restart-button");
let buttons = document.querySelectorAll(".buttons");

/* buttons.forEach(button => {
    
    button.addEventListener("click", (e)=>{
      
      singleRound(playerMovement(button), computerPlay);

    });

}); */

/* function playerMovement(buttonClicked) {

  if(buttonClicked.className == "rock buttons"){
    //singleRound("r", computerPlay());
    return "r";
  }else if(buttonClicked.className == "paper buttons"){
    //singleRound("p", computerPlay());
    return "p";
  }else if(buttonClicked.className == "scissors buttons"){
    //singleRound("s", computerPlay());
    return "s";
  }

} */

/* rock.addEventListener("click", function(){
  value = "r"
});

paper.addEventListener("click", function(){
  value = "p"
});

scissors.addEventListener("click", function(){
  value = "s"
});
 */



// One single round of rock paper scissors
function singleRound(playerSelection, computerSelection) {
  // player chooses ROCK
  if (playerSelection == "r") {
    switch (computerSelection) {
      case "r":
        console.log("It's a tie");
        return 0;
        break;
      case "p":
        console.log("You loose! Paper beats Rock");
        return 1;
        break;
      case "s":
        console.log("You win! Rock beats Scissors")
        return 2;
        break;
    }
    // Player chooses PAPER
  } else if (playerSelection == "p") {
    switch (computerSelection) {
      case "p":
        console.log("It's a tie");
        return 0;
        break;
      case "s":
        console.log("You loose! Scissors beat Paper");
        return 1;
        break;
      case "r":
        console.log("You win! Paper beats Rock")
        return 2;
        break;
    }
    // Player chooses SCISSORS
  } else if(playerSelection == "s"){
    switch (computerSelection) {
      case "s":
        console.log("It's a tie");
        return 0;
        break;
      case "r":
        console.log("You loose! Rock beats Scissors");
        return 1;
        break;
      case "p":
        console.log("You win! Scissors beat Paper")
        return 2;
        break;
    }
  }

}

//Winner - Looser - Tie

function winnerOrLooser(win, loose){
  if (win > loose){
    result.textContent = "You beat the machine!!";
  }else if (win < loose){
    result.textContent = "You loose. Shame on you! ";
  }else{
    result.textContent = "It's a total tie!";
  }
}


// Game 5 rounds

 // 5 rounds

 function game(){

  let wins = 0, ties = 0, looses = 0;
  for (let rounds = 0; rounds < 5; rounds++){
    let result = singleRound(playerMovement(), computerPlay());

    if (result == 0){
      ties += 1;
    }else if (result == 1){
      looses += 1;
      computerScore.textContent = looses;
    }else{
      wins += 1;
      playerScore.textContent = wins;
    }

  }

  winnerOrLooser(wins, looses);
}

game();