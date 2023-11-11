const options = ["rock", "paper", "scissors"];
let playerWinCount = 0;
let computerWinCount = 0;
game();

function getComputerChoice() {
  let computersChoice = Math.floor(3 * Math.random());
  return options[computersChoice];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();

  if (player === computerSelection) {
    return "Tie!";
  } else if (player == "rock") {
    if (computerSelection === "scissors") {
      playerWinCount++;
      return "Player wins!";
    }
    computerWinCount++;
    return "Computer wins!";
  } else if (player == "paper") {
    if (computerSelection === "rock") {
      playerWinCount++;
      return "Player wins!";
    }
    computerWinCount++;
    return "Computer wins!";
  } else if (player == "scissors") {
    if (computerSelection === "paper") {
      playerWinCount++;
      return "Player wins!";
    }
    computerWinCount++;
    return "Computer wins!";
  }
}

function game() {
  console.log("Welcome to Rock Paper Scissors!");
  console.log("Options are rock, paper, or scissors.");

  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Enter your choice (must be a valid input): ");
    userInput = userInput.toLowerCase();
    while (!options.includes(userInput)) {
      console.log("Wrong input! Try again: ");
      userInput = prompt("Enter your choice (must be a valid input): ");
      userInput = userInput.toLowerCase();
    }

    let compChoice = getComputerChoice();
    console.log("Player's choice was: " + userInput);
    console.log("Computer's choice was " + compChoice);
    console.log(playRound(userInput, compChoice));
  }

  console.log("Player won: " + playerWinCount);
  console.log("Computer won: " + computerWinCount);
}
