const validChoices = { rock: "rock", paper: "paper", scissors: "scissors" };

function getPlayerChoice() {
  let userInput = prompt("Choose by typing either rock, paper, or scissors");

  while (userInput?.toLowerCase() in validChoices !== true) {
    userInput = prompt("Incorrect input. Please type either rock, paper, or scissors");
  }

  return userInput;
}

function getComputerChoice() {
  const maxIndexValue = 2;
  const randomIndexValue = Math.floor(Math.random() * (maxIndexValue + 1));

  return Object.keys(validChoices)[randomIndexValue];
}

function playRound(playerSelection, computerSelection) {
  // this is to save us from typing playerSelection, computerSelection and validChoices every time.
  const p = playerSelection;
  const c = computerSelection;
  const choice = validChoices;

  // all win conditions for player
  if (
    (p === choice.rock && c === choice.scissors) ||
    (p === choice.paper && c === choice.rock) ||
    (p === choice.scissors && c === choice.paper)
  ) {
    return "Player won!";
  }

  if (p === c) {
    return "It is a tie!";
  }

  // all remaining conditions are computer win conditions
  return "Computer won!";
}
