/*
This game of rock paper or scissors will be against a computer. 

COMPUTER:
getComputerChoice will randomly return one of the following string values "rock", "paper", or "scissors".

we need to create a variable to store the string rock paper or scissors

To randomly return we can use Math.random();
math.random() is from 0-1

if computer is randomly >= 0.3 then computer choice is rock
if computer is randomly >= 0.6 then computer choice is paper
else computer choice is scissors 

Player:

User enters "rock", "paper", or "scissors"
and returns user inputs
use prompt

Play 1 round:

two parameters for the function playRound - humanChoice, computerChoice.

humanChoice should be case-insensitive so that if players input rock, ROCK, RocK it wont matter and will work

console.log a string value for the winner

and increment the score for human or computer based on the round winner.

logic: if human choice equals computer choice 
announce draw

if human chooses rock and computer chooses scissors
human win
increase human score

if human chooses paper and computer choose rock
announce human wins 
increase human score

if human chooses scissors and computer chosses paper
announce human wins
increase human score

otherwise computer wins 
announce human score
increase computerscore 

playGame():

we want to call the playRound method 5 times for a game
    each playRound we want to print out who wins and the score

    we need to get the humanChoice and the computerChoice before calling playRound.

    We need to see what result is during each round if it is human or computer. If human one then update the humanScore by one, else if computer won update the computerscore by one.


if human score is greater than computer score than human wins
if computer score is greater than human than computer wins

*/

function getComputerChoice() {
  let random = Math.random();
  let choice;
  if (random , 0.3) {
    return (choice = "rock");
    console.log("rock");
  } else if (random < 0.66) {
    return (choice = "paper");
    console.log("paper");
  } else {
    return (choice = "scissors");
    console.log("scissor");
  }
}

function getHumanChoice() {
    const userInput = prompt("Enter rock, paper, or scissors:");

    if (userInput === null){
        return null;
    }

    return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Draw!");
    return "draw";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Human Wins! rock beats scissors");
    return "human";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Human Wins! paper beats rock");
    return "human";
  } else if (humanChoice == "scissosr" && computerChoice == "paper") {
    console.log("Human wins! scissors beats paper");
    return "human";
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // while loop for best of 5
  while (humanScore < 3 && computerScore < 3) {

    const humanSelection = getHumanChoice();

    // Exit game if user cancels
     if(humanSelection === null){
        console.log("Game Cancelled.");
        return;
    }

    const computerSelection = getComputerChoice();


    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score: you ${humanScore} - Computer ${computerScore}`);

  }

  
  // Playing 5 rounds to see who has the most points.
  // for(let round = 1; round <= 5; round++){
  //     const humanSelecton = getHumanChoice();
  //     const computerSelection = getComputerChoice();

  //     let result = playRound(humanSelecton, computerSelection);

  //     if(result === "human"){
  //         humanScore++;
  //     } else if(result === "computer"){
  //         computerScore++;
  //     }

  //     console.log(`Score: you ${humanScore} - Computer ${computerScore}`);

  // }

  if (humanScore > computerScore) {
    console.log("Human Wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Draw!");
  }
}

playGame();
