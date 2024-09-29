let scores = JSON.parse(localStorage.getItem(scores)) || {
    wins: 0,
    losses: 0,
};
// // Function to log scores
// function logScores(message) {
//     // console.log(message);
//     // console.log("Wins:", scores.wins);
//     // console.log("Losses:", scores.losses);
//     console.log("Full scores object:", JSON.stringify(scores));
// }

// Simulate a game
function playGame(guess) {
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
    localStorage.setItem("scores", JSON.stringify(scores))
    console.log(scores)

}

function saveScores() {
    console.log(localStorage.setItem("scores", JSON.stringify(scores)));
}

function clearScores() {
    scores = {
        "wins": 0,
        "losses": 0,
    }
    console.log(`scores have been cleared`)
}

document.getElementById("headsButton").addEventListener("click", () => playGame("Heads"));
document.getElementById("tailsButton").addEventListener("click", () => playGame("Tails"));
document.getElementById("clearButton").addEventListener("click", () => clearScores());
