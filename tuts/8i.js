let scores = JSON.parse(localStorage.getItem("scores")) || {
    wins: 0,
    losses: 0,
};

function playGame(guess) {
    console.log(`current scores: ${scores.wins} wins & ${scores.losses} losses`);
    console.log("Your guess:", guess);

    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log("computer choice:", result);

    if (guess === result) {
        scores.wins++;
        console.log("You win!");
    } else {
        scores.losses++;
        console.log("You lose!");
    }
    saveScores();
    console.log(scores);
    console.log('');

}

function saveScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

function clearScores() {
    scores = {
        "wins": 0,
        "losses": 0,
    }
    saveScores();
    console.log(`scores have been cleared`);
    console.log(scores);
}

document.getElementById("headsButton").addEventListener("click", () => playGame("Heads"));
document.getElementById("tailsButton").addEventListener("click", () => playGame("Tails"));
document.getElementById("clearButton").addEventListener("click", () => clearScores());
