const gameBtn = document.querySelector("button");
gameBtn.addEventListener("click", startGame);

const validChoices = { rock: "rock", paper: "paper", scissors: "scissors" };

const style = {
  round: [
    "background-color: #000",
    "color: #fff",
    "padding: 4px 8px",
    "border: 1px solid black",
    "border-radius: 2px",
  ],

  result: "font-weight: bold;",

  tie: "color: #562ea3;",
  win: "color: #058b17fa;",
  lose: "color: #fb091ee0;",
};

function getPlayerChoice() {
  let userInput = prompt("Choose by typing either rock, paper, or scissors");

  while (userInput?.toLowerCase() in validChoices !== true) {
    userInput = prompt("Incorrect input. Please type either rock, paper, or scissors");
  }

  return userInput.toLowerCase();
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

function startGame() {
  let playerScore = 0;
  let ComputerScore = 0;
  let roundNumber = 1;

  console.log("========");
  console.log("========");
  console.log("========");

  console.log("\n\n\n");

  while (roundNumber <= 5) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const [resultMessage, winner] = playRound(playerChoice, computerChoice);
    let messageStyle = style.result;

    if (winner === "player") {
      messageStyle += style.win;
      playerScore += 1;
    } else if (winner === "computer") {
      messageStyle += style.lose;
      ComputerScore += 1;
    } else {
      messageStyle += style.tie;
      playerScore += 1;
      ComputerScore += 1;
    }

    console.log(`%cRound ${roundNumber}`, style.round.join(";"));
    console.log("\n");

    console.log(`You chose ${playerChoice}, and the computer chose ${computerChoice}`);
    console.log(`%c${resultMessage}`, messageStyle);
    console.log(`Current score: Player = ${playerScore} || Computer = ${ComputerScore}`);
    console.log("\n");

    roundNumber += 1;
  }

  console.log(`%cFinal score: you = ${playerScore} || computer = ${ComputerScore}`, style.result);
}
