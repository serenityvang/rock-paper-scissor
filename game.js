
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

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);

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
