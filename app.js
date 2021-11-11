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
    return ["You won!", "player"];
  }

  if (p === c) {
    return ["It is a tie!", "tie"];
  }

  // all remaining conditions are computer win conditions
  return ["Computer won!", "computer"];
}

function game() {
  let playerScore = 0;
  let ComputerScore = 0;
  let roundNumber = 1;

  while (roundNumber <= 5) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const [resultMessage, winner] = playRound(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore += 1;
    } else if (winner === "computer") {
      ComputerScore += 1;
    } else {
      playerScore += 1;
      ComputerScore += 1;
    }

    console.log(`Round ${roundNumber}`);
    console.log("\n");

    console.log(`You chose ${playerChoice}, and the computer chose ${computerChoice}`);
    console.log(resultMessage);
    console.log(`Current score: Player = ${playerScore} || Computer = ${ComputerScore}`);
    console.log("\n");

    roundNumber += 1;
  }

  console.log(`Final score: you = ${playerScore} || computer = ${ComputerScore}`);
}

game();
