let playerWinCount = 0;
let computerWinCount = 0;

const analogs = {
  rock: "✊",
  paper: "✋",
  scissors: "✌",
};

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let computersChoice = Math.floor(3 * Math.random());
  return options[computersChoice];
}

const buttons = document.querySelectorAll("card");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    if (playerWinCount < 5 && computerWinCount < 5) {
      let computerChoice = getComputerChoice();
      const won = playRound(btn.id, computerChoice);
      const answer = document.querySelector("div");
      answer.innerText = won;
      displayChosen(btn.id, computerChoice);
      manageWinCondition(won);
    }
  });
});

function manageWinCondition(won) {
  const p = document.querySelector("#playerWinCount");
  const c = document.querySelector("#computerWinCount");
  p.innerText = "Player won: " + playerWinCount;
  c.innerText = "Computer won: " + computerWinCount;
}

function displayChosen(playerSelection, computerSelection) {
  const player = document.getElementById("player-chose");
  const computer = document.getElementById("computer-chose");
  player.innerText = analogs[playerSelection];
  computer.innerText = analogs[computerSelection];
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
