// initializing the  variables
let computerMove;
let result;
let scores = JSON.parse(localStorage.getItem('scores')) || {wins: 0, losses: 0, ties: 0};


// creating the function to calculate the computer move
function getComputerMove() {
    return Math.random() < 1 / 3 ? 'Rock' : Math.random() < 2 / 3 ? 'Paper' : 'Scissors'; 
}

// creating the logic to reset the score
function resetScores() {
    scores = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('scores', JSON.stringify(scores));
    alert(`Scores have been reset! Wins: ${scores.wins} Losses: ${scores.losses} and Ties: ${scores.ties} `)
    return resetScores;
}

// creating the logic for the game
function getResult(userChoice, computerMove) {
    if (userChoice === computerMove) {
        scores.ties += 1;
        return 'Tie.'
    }
    else if (userChoice === 'Rock' && computerMove === 'Scissors' ||
        userChoice === 'Paper' && computerMove === 'Rock' ||
        userChoice === 'Scissors' && computerMove === 'Paper')
    {
        scores.wins += 1;
        return 'You win.';
    } else {
        scores.losses += 1;
        return 'You lose.';
    }
}

// the function that calls the other functions!! lol
function playRps(userChoice) {
    computerMove = getComputerMove();
    result = getResult(userChoice, computerMove);
    localStorage.setItem('scores', JSON.stringify(scores));
    alert(`You picked ${userChoice}. Computer picked ${computerMove}. ${result} The scores are Wins: ${scores.wins}, Loses: ${scores.losses} and Ties: ${scores.ties} `)
}

const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
        console.log('function inside object');
    }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

console.log(product2.rating.count);

// js to json
console.log(JSON.stringify(product2))

// json to js
console.log(JSON.parse(JSON.stringify(product2)))


