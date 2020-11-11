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




let choiceRock =  rock.addEventListener("click", function (event) {
    console.log("rock");
    return "r";
  });
  
  let choicePaper =  paper.addEventListener("click", function (event) {
    console.log("par");
    return "p";
  });
  
  let choiceScissors =  scissors.addEventListener("click", function (event) {
    console.log("sco");
    return "s";
  });
  


/*
rock.addEventListener("click", function (event) {
  return "r";
});

paper.addEventListener("click", function (event) {
  return "p";
});

scissors.addEventListener("click", function (event) {
  return "s";
});
 */
function playerMovement() {
  if (document.getElementsByClassName("image-container").clicked == true){
    console.log("rock");
    return "r";
  }else if(document.getElementsByClassName("paper").clicked == true){
    console.log("paper");
    return "p";
  }else if(document.getElementsByClassName("scissors").clicked == true){
    console.log("scissor");
    return "s";
  }
}

// One single round of rock paper scissors
function singleRound(playerSelection, computerSelection){
  // player chooses ROCK
  if (playerSelection == "r"){
    switch (computerSelection){
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
  }else if (playerSelection == "p"){
    switch (computerSelection){
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
  }else{
    switch (computerSelection){
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
