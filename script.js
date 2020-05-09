// inits random num from 1-3 to represent rock paper or scissors
let rand = Math.floor(Math.random() * 3) + 1;

// prompts user to type choice and turns it to lowercase for manipulation
let userChoice = prompt("Please type Rock Paper or Scissors:").toLowerCase();

// loop that prompts user until correct choice is made
while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    userChoice = prompt("You did not type a valid choice, please type Rock Paper or Scissors").toLowerCase();
}

console.log("completed");