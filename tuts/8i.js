const scores = JSON.parse(localStorage.getItem("scores")) || {
    wins: 0,
    losses: 0
};


function playGame(guess) {
    
    const randNum = Math.random();
    const result = (randNum < 0.5) ? "Heads" : "Tails";
    console.log(`You chose: ${guess} \nComputer chose: ${result}`)

    const outcome = (result === guess) ? "You win!" : "You lose!";
    
    if (guess === result) {
        scores.wins++;
    } else {
        scores.losses++;
    }
    
    console.log(outcome);
    saveScores();
    console.log(`The scores are; wins: ${scores.wins} & losses: ${scores.losses}`);
    
    
    
}

function saveScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}


document.getElementById("headsButton").addEventListener("click", () => playGame("Heads"));
document.getElementById("tailsButton").addEventListener("click", () => playGame
("Tails"));



