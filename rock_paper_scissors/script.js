function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const totalRounds = 5;

const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const roundInfoEl = document.getElementById("round-info");
const resultEl = document.getElementById("result");
const gameOverEl = document.getElementById("game-over");
const finalResultEl = document.getElementById("final-result");
const playAgainBtn = document.getElementById("play-again");
const choiceBtns = document.querySelectorAll("[data-choice]");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let message;
    let outcome;

    if (humanChoice === computerChoice) {
        message = "TIE! BOTH CHOSE " + humanChoice.toUpperCase();
        outcome = "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = "YOU WIN! " + humanChoice.toUpperCase() + " BEATS " + computerChoice.toUpperCase();
        outcome = "win";
    } else {
        computerScore++;
        message = "YOU LOSE! " + computerChoice.toUpperCase() + " BEATS " + humanChoice.toUpperCase();
        outcome = "lose";
    }

    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = message;
    resultEl.className = "result " + outcome;

    currentRound++;

    if (currentRound > totalRounds) {
        endGame();
    } else {
        roundInfoEl.textContent = "ROUND " + currentRound + " / " + totalRounds;
    }
}

function endGame() {
    choiceBtns.forEach(function (btn) {
        btn.disabled = true;
    });
    roundInfoEl.textContent = "GAME OVER";

    let finalMessage;
    let finalOutcome;

    if (humanScore > computerScore) {
        finalMessage = "YOU WON " + humanScore + " - " + computerScore + "!";
        finalOutcome = "win";
    } else if (computerScore > humanScore) {
        finalMessage = "YOU LOST " + humanScore + " - " + computerScore + "...";
        finalOutcome = "lose";
    } else {
        finalMessage = "IT'S A TIE " + humanScore + " - " + computerScore + "!";
        finalOutcome = "tie";
    }

    finalResultEl.textContent = finalMessage;
    finalResultEl.className = "final-result " + finalOutcome;
    gameOverEl.classList.remove("hidden");
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    humanScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    roundInfoEl.textContent = "ROUND 1 / " + totalRounds;
    resultEl.textContent = "PICK YOUR WEAPON!";
    resultEl.className = "result";
    finalResultEl.textContent = "";
    gameOverEl.classList.add("hidden");
    choiceBtns.forEach(function (btn) {
        btn.disabled = false;
    });
}

choiceBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        playRound(btn.dataset.choice);
    });
});

playAgainBtn.addEventListener("click", resetGame);
