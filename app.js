const validChoices = { rock: "rock", paper: "paper", scissors: "scissors" };

function getRandomChoice() {
  const maxIndexValue = validChoices.length - 1;
  const randomIndexValue = Math.floor(Math.random() * (maxIndexValue + 1));

  return validChoices[randomIndexValue];
}

function getPlayerChoice() {
  let userInput = prompt("Choose by typing either rock, paper, or scissors");

  while (userInput?.toLowerCase() in validChoices !== true) {
    userInput = prompt("Incorrect input. Please type either rock, paper, or scissors");
  }

  return userInput;
}

function getComputerChoice() {
  return getRandomChoice();
}
