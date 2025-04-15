

const randomNumber = Math.floor(Math.random() * 100) + 1;

let userGuess = null;

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt('Guess a number between 1 and 100'))
    
    if (userGuess < randomNumber) {
        alert('Too low! Try again.');
    } else if (userGuess > randomNumber) {
        alert('Too high! Try again.')
    } else if  (userGuess == randomNumber) {
        alert('Congratulations! You guessed the correct number.')
    } else {
        alert('Something went wrong. Try again.');
    }
}