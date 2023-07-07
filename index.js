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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const reset = document.querySelector('.reset');
const final = document.querySelector('.final');


let playerScore = 0;
let computerScore = 0;
let turn = 0;
let isFinished = false;

function callPlayRound() {
    if (isFinished) return;
    const playerSelection = this.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection,computerSelection);

    if (result.textContent.slice(0,8) == "You Win!") {
        playerScore++;
    } else if (result.textContent.slice(0,8) == "You Lose") {
        computerScore++;
    }
    player.textContent = `Player: ${playerScore}      `;
    computer.textContent = `Computer: ${computerScore}`;
    turn++;
    if (turn == 5) {
        isFinished = true;
        final.textContent = (
            playerScore > computerScore ? `player wins`:
            playerScore < computerScore ? `computer wins`:
            `draw`)
    }
    

}

function reseter(){
    isFinished = false;
    playerScore = 0;
    computerScore = 0;
    result.textContent = '';
    final.textContent = '';
    turn = 0;
    player.textContent = '';
    computer.textContent = '';
}

rock.addEventListener('click',callPlayRound);
paper.addEventListener('click',callPlayRound);
scissors.addEventListener('click',callPlayRound);
reset.addEventListener('click', reseter);









/*
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
*/