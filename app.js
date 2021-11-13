const buttons = document.querySelector(".buttons-js");
const roundCounter = document.querySelector(".round-js");

const playerChoiceSpan = document.querySelector(".playerChoice-js");
const computerChoiceSpan = document.querySelector(".computerChoice-js");

const playerScoreSpan = document.querySelector(".playerScore-js");
const computerScoreSpan = document.querySelector(".computerScore-js");

buttons.addEventListener("click", playRound);

const validChoices = { rock: "rock", paper: "paper", scissors: "scissors" };

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
const maxRounds = 5;

function playRound({ target: button }) {
	if (roundNumber >= maxRounds) {
		return;
	}

	const playerChoice = button.dataset.choice;
	const computerChoice = getComputerChoice();
	const winner = getRoundWinner(playerChoice, computerChoice);

	if (winner === "player") {
		playerScore += 1;
	}

	if (winner === "computer") {
		computerScore += 1;
	}

	if (winner === "tie") {
		playerScore += 1;
		computerScore += 1;
	}

	roundNumber += 1;
	roundCounter.textContent = roundNumber;

	playerChoiceSpan.textContent = playerChoice;
	computerChoiceSpan.textContent = computerChoice;

	playerScoreSpan.textContent = playerScore;
	computerScoreSpan.textContent = computerScore;
}

function getComputerChoice() {
	const maxIndexValue = 2;
	const randomIndexValue = Math.floor(Math.random() * (maxIndexValue + 1));

	return Object.keys(validChoices)[randomIndexValue];
}

function getRoundWinner(playerSelection, computerSelection) {
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
		return "player";
	}

	if (p === c) {
		return "tie";
	}

	// all remaining conditions are computer win conditions
	return "computer";
}
