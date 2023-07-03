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
    ?`You Lose! ${computerSelection} beats ${playerSelection}` :
    `Draw! ${playerSelection} draws against ${computerSelection}`;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("enter hand");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.slice(0,8) == "You Win!") {
            playerScore++;
        } else if (result.slice(0,8) == "You Lose") {
            computerScore++;
        }

        console.log(`Player: ${playerScore}
                     computer: ${computerScore}`);

        if (playerScore == 3 || computerScore == 3) {
            break;
        }

    }
    console.log(playerScore > computerScore ? "player has won" :
                computerScore > playerScore ? "computer has won" :
                "it is a draw"
    )
}

game();