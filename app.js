const choices = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const maxIndexValue = choices.length - 1;
  const randomIndexValue = Math.floor(Math.random() * (maxIndexValue + 1));

  return choices[randomIndexValue];
}
