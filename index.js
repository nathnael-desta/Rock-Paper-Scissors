function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    return randomNumber == 0 ? "Rock":
           randomNumber == 1 ? "Paper":
           "Scissors"
}