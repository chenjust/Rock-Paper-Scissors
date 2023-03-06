const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let cpuChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoice.innerHTML = userChoice;
    gernerateComputerChoice();
    getResult();
}))

function gernerateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // or 3

    if(randomNumber === 1) {
        cpuChoice = 'rock';
    }
    if(randomNumber === 2) {
        cpuChoice = 'paper';
    }
    if(randomNumber === 3) {
        cpuChoice = 'scissors';
    }
    computerChoice.innerHTML = cpuChoice;
}

function getResult() {
    if(cpuChoice === userChoice) {
        result = "It's a draw";
    }
    else if(cpuChoice === 'rock' && userChoice === 'paper') {
        result = "You win"
    }
    else if(cpuChoice === 'rock' && userChoice === 'scissors') {
        result = "You lose"
    }
    else if(cpuChoice === 'paper' && userChoice === 'rock') {
        result = "You lose"
    }
    else if(cpuChoice === 'paper' && userChoice === 'scissors') {
        result = "You win"
    }
    else if(cpuChoice === 'scissors' && userChoice === 'paper') {
        result = "You lose"
    }
    else if(cpuChoice === 'scissors' && userChoice === 'rock') {
        result = "You win"
    }

    resultDisplay.innerHTML = result;
}