"use strict";

// counters

let rounds = 0;
let wins = 0;
let looses = 0;
let ties = 0;

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

const playerChoice = document.querySelectorAll(".buttons");

const result = document.getElementById("result");
const playerScore = document.getElementById("human-score");
const computerScore = document.getElementById("computer-score");

const restart = document.getElementById("restart-button");

function playerClick(){
  if(option.className == "rock buttons"){
    winnerOrLooser("r", computerPlay());
  }else if(option.className == "paper buttons"){
    winnerOrLooser("p", computerPlay());
  }else if(option.className == "scissors buttons"){
    winnerOrLooser("s", computerPlay());
  }
}

playerChoice.forEach(option => {
  option.addEventListener("click", function (){
    if(option.className == "rock buttons"){
      winnerOrLooser("r", computerPlay());
    }else if(option.className == "paper buttons"){
      winnerOrLooser("p", computerPlay());
    }else if(option.className == "scissors buttons"){
      winnerOrLooser("s", computerPlay());
    }
  });
});

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

// 5 rounds to determine winner

function winnerOrLooser(playerOption, computer){
  
    if (singleRound(playerOption, computer) === 0){
      ties += 1;
    }else if (singleRound(playerOption, computer) === 1){
      looses += 1;
      computerScore.textContent = looses;
    }else if(singleRound(playerOption, computer) === 2){
      wins += 1;
      playerScore.textContent = wins;
    }
    rounds += 1;
    
    if (rounds == 5){
      if(wins > looses){
        result.textContent = "You win!!";
        
      }else if(looses > wins){
        result.textContent = "You loose :(";
        
      }else{
        result.textContent = "It was a tie";
        
      }
    }

}

// Restart

restart.addEventListener("click", ()=>{
  window.location.reload();
});

//remove click events

if (rounds === 5) {};





