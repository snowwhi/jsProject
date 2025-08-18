// Step 1: Grab values from HTML
let submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessFeild');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.Array');
const lowOrHi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPara');

// Step 2: Create elements and initialize state
let randomNumber = Math.floor(Math.random() * 100) + 1;
let prevGuess = [];
let numGuess = 1;
let playGame = true;
let p = document.createElement('p');

// Step 3: Check if game is active
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Step 4: Validate guess
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please write a valid number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            DisplayGuess(guess);
            DisplayMessage(`Game Over, number was ${randomNumber}`);
            EndGame();
        } else {
            DisplayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Step 5: Check the guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        DisplayMessage('You guessed it right!');
        EndGame();
    } else if (guess < randomNumber) {
        DisplayMessage('Number is too low');
    } else {
        DisplayMessage('Number is too high');
    }
}

// Step 6: Display guess and update UI
function DisplayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

// Step 7: Show feedback message
function DisplayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Step 8: End game logic
function EndGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    restartGame();
}

// Step 9: Restart game
function restartGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
