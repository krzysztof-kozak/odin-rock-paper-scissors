const choices = { rock: "rock", paper: "paper", scissors: "scissors" };

function getRandomChoice() {
  const maxIndexValue = choices.length - 1;
  const randomIndexValue = Math.floor(Math.random() * (maxIndexValue + 1));

  return choices[randomIndexValue];
}

function getPlayerChoice() {
  let userInput = prompt("Choose by typing either rock, paper, or scissors");

  while (userInput?.toLowerCase() in choices !== true) {
    userInput = prompt("Incorrect input. Please type either rock, paper, or scissors");
  }

  return userInput;
}

function computerPlay() {
  return getRandomChoice();
}
