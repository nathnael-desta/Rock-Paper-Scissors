function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber == 0 ? "Rock":
           randomNumber == 1 ? "Paper":
           "Scissors";
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    return playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper"
    ?`You Win! ${playerSelection} beats ${computerSelection}` :
    computerSelection == "rock" && playerSelection == "scissors" ||
    computerSelection == "paper" && playerSelection == "rock" ||
    computerSelection == "scissors" && playerSelection == "paper"
    ?`You lose! ${computerSelection} beats ${playerSelection}` :
    `Draw! ${playerSelection} draws against ${computerSelection}`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));