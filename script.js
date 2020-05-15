//inits random num from 1-3 to represent rock paper or scissors
let compChoice = Math.floor(Math.random() * 3) + 1;

//prompts user to type choice and turns it to lowercase for manipulation
let userChoice = prompt("Please type Rock Paper or Scissors:").toLowerCase();

//loop that prompts user until correct choice is made
while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("You did not type a valid choice, please type Rock Paper or Scissors").toLowerCase();
}

let userNum = 5;

//depending on choice assigns corresponding value to userNum
if (userChoice == "rock") {
    userNum = 1;
}
else if (userChoice == "paper") {
    userNum = 2;
}
else if (userChoice == "scissors") { 
    userNum = 3;
}

let compType = "null";

if (compChoice == 1) {
    compType = "rock"
}
else if (compChoice == 2) {
    compType = "paper"
}
else if (compChoice == 3) {
    compType = "scissors"  
}

//inits function to declare winner after user and computer have made choice
let winner = 3;

function playRound(userValue, computerValue) {

    if(userNum == 1 && compChoice == 2) {
        winner = 2;
    }

    if(userNum == 1 && compChoice == 3) {
        winner = 1;
    }

    if(userNum == 2 && compChoice == 1) {
        winner = 1;
    }

    if(userNum == 2 && compChoice == 3) {
        winner = 2;
    }

    if(userNum == 3 && compChoice == 1) {
        winner = 2;
    }

    if(userNum == 3 && compChoice == 2) {
        winner = 1;
    }

    if(userNum == compChoice) {
        winner = 0;
    }

    return winner;
 }

winner = playRound(userNum, compChoice);

if (winner == 1) {
    console.log(`Congrats ${userChoice} beats ${compType} you win!`);
}

if (winner == 2) {
    console.log(`Sorry ${compType} beats ${userChoice} you lose.`);
}

if (winner == 0) {
    console.log(`It's a tie, ${userChoice} equals ${compType}.`);
}
