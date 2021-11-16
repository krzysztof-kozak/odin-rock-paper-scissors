const buttons = document.querySelector(".buttons-js");
const roundCounter = document.querySelector(".round-js");

const playerChoiceSpan = document.querySelector(".playerChoice-js");
const computerChoiceSpan = document.querySelector(".computerChoice-js");

const playerScoreSpan = document.querySelector(".playerScore-js");
const computerScoreSpan = document.querySelector(".computerScore-js");

const startGameBtn = document.querySelector(".start-game-js");
const gameInfo = document.querySelector(".game-info-js");

const modal = document.querySelector(".modal-js");
const restartBtn = document.querySelector(".restart-js");

const winnerParagraph = document.querySelector(".winner-js");

startGameBtn.addEventListener("click", startGame);

const validChoices = { rock: "rock", paper: "paper", scissors: "scissors" };

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function startGame() {
	buttons.addEventListener("click", playRound);
	restartBtn.removeEventListener("click", restartGame);

	gameInfo.classList.toggle("hidden", false);
	startGameBtn.classList.toggle("hidden", true);
}

function playRound({ target: button }) {
	if (!button.dataset.choice) {
		return;
	}

	const playerChoice = button.dataset.choice;
	const computerChoice = getComputerChoice();
	const roundWinner = getRoundWinner(playerChoice, computerChoice);

	if (roundWinner === "player") {
		playerScore += 1;
	}

	if (roundWinner === "computer") {
		computerScore += 1;
	}

	if (roundWinner === "tie") {
		playerScore += 1;
		computerScore += 1;
	}

	roundNumber += 1;
	roundCounter.textContent = roundNumber;

	playerChoiceSpan.textContent = playerChoice;
	computerChoiceSpan.textContent = computerChoice;

	playerScoreSpan.textContent = playerScore;
	computerScoreSpan.textContent = computerScore;

	if (playerScore === 5 || computerScore === 5) {
		const winner =
			playerScore > computerScore ? "You" : computerScore > playerScore ? "Computer" : "Tie";
		announceWinner(winner);
		buttons.removeEventListener("click", playRound);
		return;
	}
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

function announceWinner(winner) {
	restartBtn.addEventListener("click", restartGame);

	if (winner === "Tie") {
		winnerParagraph.textContent = "It's a tie!";
		return;
	}

	winnerParagraph.textContent = `${winner} won!`;

	modal.classList.toggle("hidden", false);

	setTimeout(() => {
		modal.style.opacity = 1;
		modal.style.transform = "translateZ(0px)";
	}, 500);
}

function restartGame() {
	modal.classList.toggle("hidden", true);
	modal.style.opacity = 0;
	modal.style.transform = "";

	gameInfo.classList.toggle("hidden", true);
	startGameBtn.classList.toggle("hidden", false);

	playerScore = 0;
	computerScore = 0;
	roundNumber = 0;

	roundCounter.textContent = "";

	playerChoiceSpan.textContent = "";
	computerChoiceSpan.textContent = "";

	playerScoreSpan.textContent = "";
	computerScoreSpan.textContent = "";
}
