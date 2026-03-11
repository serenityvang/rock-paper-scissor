function getComputerChoice() {
  let random = Math.random();
  let choice;
  if (random < 0.3) {
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

// divs
const div = document.querySelector(".rsp-buttons");
const results = document.querySelector(".scoreAndSpan");

// buttons
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const reset = document.createElement("button");

//score and results
const sumText = document.createElement("span");
const score = document.createElement("span");

// text content
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
reset.textContent = "Reset";

// styling reset button
reset.classList.add("resetbtn");

// appending child to parent
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
div.appendChild(reset);
results.appendChild(sumText);
results.appendChild(score);

// Game State
let humanScore = 0;
let computerScore = 0;

// expects a function, not the result of the function call
// does score and calls the playRound function
// checks if there is a winning score
rock.addEventListener("click", () => {
  console.log("rock button click");
  const result = playRound("rock");

  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;

  if (humanScore === 3) {
    sumText.textContent = "You won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }

  if (computerScore === 3) {
    sumText.textContent = "Computer won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
});

paper.addEventListener("click", () => {
  console.log("paper button click");
  const result = playRound("paper");

  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;

  if (humanScore === 3) {
    sumText.textContent = "You won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }

  if (computerScore === 3) {
    sumText.textContent = "Computer won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
});

scissors.addEventListener("click", () => {
  console.log("scissors button click");
  const result = playRound("scissors");

  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }

  score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;

  if (humanScore === 3) {
    sumText.textContent = "You won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }

  if (computerScore === 3) {
    sumText.textContent = "Computer won the game!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
});

reset.addEventListener("click", () => {
  resetGame();
});

// checks human choice against computers choice
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();

  if (humanChoice == computerChoice) {
    console.log(
      `Draw! Human Choice: ${humanChoice} is tied with Computers Choice: ${computerChoice}`,
    );
    sumText.textContent = `Draw! Human Choice: ${humanChoice}, is tied with Computers Choice: ${computerChoice}`;
    return "draw";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Human Wins! rock beats scissors");
    sumText.textContent = "Human Wins! rock beats scissors";
    return "human";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Human Wins! paper beats rock");
    sumText.textContent = " Human Wins! paper beats rock";
    return "human";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Human wins! scissors beats paper");
    sumText.textContent = "Human Wins! scissors beats paper";
    return "human";
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    sumText.textContent = `Computer Wins! ${computerChoice} beats ${humanChoice}`;
    return "computer";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  sumText.textContent = "";
  score.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
