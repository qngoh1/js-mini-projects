// // Create a new function named getComputerChoice.
// randomly return one of: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors:");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Invalid input. Please try again.");
        return getHumanChoice(); // Recursively call until valid input is received
    }
}

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    return [humanScore, computerScore];
}

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1));
        const humanSelection = getHumanChoice();
        console.log("You chose: " + humanSelection);
        const computerSelection = getComputerChoice();
        [humanScore, computerScore] = playRound(humanSelection, computerSelection, humanScore, computerScore);
    }

    // After 5 rounds, console.log the winner of the game based on who won more rounds.
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game with a score of " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Sorry! You lost the game with a score of " + humanScore + " to " + computerScore);
    } else {
        console.log("The game is a tie with a score of " + humanScore + " to " + computerScore);
    }
}

playGame();
