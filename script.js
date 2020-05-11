//inits random num from 1-3 to represent rock paper or scissors
let compNum = Math.floor(Math.random() * 3) + 1;

//prompts user to type choice and turns it to lowercase for manipulation
let userChoice = prompt("Please type Rock Paper or Scissors:").toLowerCase();

//loop that prompts user until correct choice is made
while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("You did not type a valid choice, please type Rock Paper or Scissors").toLowerCase();
}

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

let compChoice = 0;

if (compNum == 1) {
    compChoice = "rock"
}
else if (compNum == 2) {
    compChoice = "paper"
}
else if (compNum == 3) {
    compChoice = "scissors"  
}

//inits function to declare winner after user and computer have made choice
let score = function playRound(userNum, compNum) {
    
    //declare var that returns winner, 1 = user 2 = comp
    let winner = 3;

    //bunch of if statements to cycle through outcomes to determine winner
    if (userNum === compNum) {
        return winner = 0;
    }

    else if (userNum === 1 && compNum === 2) {
        return winner = 2;
    }

    else if (uuserNum === 1 && compNum === 3) {
        return winner = 1;
    }

    else if (userNum === 2 && compNum === 1) {
        return winner = 1;
    }

    else if (userNum === 2 && compNum === 3) {
        return winner = 2;
    }

    else if (userNum === 3 && compNum === 1) {
        return winner = 2;
    }

    else if (userNum === 3 && compNum === 2) {
        return winner = 1;
    }
}

if (score == 1) {
    console.log(`Congrats ${userChoice} beats ${compChoice} you win!`);
}
else if (score == 2) {
    console.log(`Sorry ${compChoice} beats ${userChoice} you lose.`);
}
else if (score == 0) {
    console.log(`It's a tie, ${userChoice} equals ${compChoice}.`);
}

console.log("program complete");