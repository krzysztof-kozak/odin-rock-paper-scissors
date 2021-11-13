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
		return "player";
	}

	if (p === c) {
		return "tie";
	}

	// all remaining conditions are computer win conditions
	return "computer";
}

function startGame() {
	let playerScore = 0;
	let ComputerScore = 0;
	let roundNumber = 1;

	while (roundNumber <= 5) {
		const playerChoice = getPlayerChoice();
		const computerChoice = getComputerChoice();
		const winner = playRound(playerChoice, computerChoice);

		if (winner === "player") {
			playerScore += 1;
		} else if (winner === "computer") {
			ComputerScore += 1;
		} else {
			playerScore += 1;
			ComputerScore += 1;
		}

		roundNumber += 1;
	}

	console.log(`Final score: you = ${playerScore} || computer = ${ComputerScore}`);
}
