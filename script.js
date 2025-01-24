let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("player score");
const computerScoreSpan = document.getElementById("computer score");
const resultP = document.getElementById("result");
const playerChoiceP = document.getElementById("player choice");
const computerChoiceP = document.getElementById("computer choice");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    playerChoiceP.textContent = `Player chose ${playerChoice}.`;
    computerChoiceP.textContent = `Computer chose ${computerChoice}.`;
    resultP.textContent = `It's a draw! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerChoiceP.textContent = `Player chose ${playerChoice}.`;
    computerChoiceP.textContent = `Computer chose ${computerChoice}.`;
    userScore++;
    userScoreSpan.textContent = `Player Score: ${userScore}`;
    resultP.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    playerChoiceP.textContent = `Player chose ${playerChoice}.`;
    computerChoiceP.textContent = `Computer chose ${computerChoice}.`;
    computerScore++;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
    resultP.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
  //reset the scores
  if (userScore === 5 || computerScore === 5) {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = `Player Score: ${userScore}`;
    computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
  }
}
const resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.textContent = `Player Score: ${userScore}`;
  computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
  playerChoiceP.textContent = "";
  computerChoiceP.textContent = "";
  resultP.textContent = "";
});

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));
