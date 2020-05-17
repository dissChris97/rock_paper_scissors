//init vars for global scope manipulation within function
let rounds = 0;
let compWins = 0;
let userWins = 0;

function game() {
    
    //inits random num from 1-3 to represent rock paper or scissors
    let compChoice = Math.floor(Math.random() * 3) + 1;

    //prompts user to type choice and turns it to lowercase for easier manipulation
    let userChoice = prompt("Please type Rock Paper or Scissors:").toLowerCase();

    //loop that prompts user until correct choice is made
    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("You did not type a valid choice, please type Rock Paper or Scissors").toLowerCase();
    }

    //inits var to be manipulated by user prompt
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

    //assigns string to var for manipulation with compChoice var
    let compType = "null";

    //assigns string to comp based off math.random() func
    if (compChoice == 1) {
        compType = "rock"
    }
    else if (compChoice == 2) {
        compType = "paper"
    }
    else if (compChoice == 3) {
        compType = "scissors"  
    }

    //inits var to return value of winner for function
    let winner = 3;

    //function that returns winner based of input
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

        //inits function to determine winner
        winner = playRound(userNum, compChoice);

        //outputs winner into console
        if (winner == 1) {
            console.log(`Congrats ${userChoice} beats ${compType} you win!`);
            userWins++;
            rounds++;
        }
    
        if (winner == 2) {
            console.log(`Sorry ${compType} beats ${userChoice} you lose.`);
            compWins++;
            rounds++;
        }
    
        if (winner == 0) {
            console.log(`It's a tie, ${userChoice} equals ${compType}.`);
            rounds++;
        }

        //Outputs overall winner after five rounds have been played
        if (rounds == 5 && compWins > userWins) {
            console.log(`I am sorry, the computer has won...`);
        }

        if (rounds == 5 && compWins < userWins) {
            console.log(`Congrats, you win!`);
        }

        if (rounds == 5 && compWins == userWins) {
            console.log(`The final result was a tie.`);
        }
}

let totRounds = 0;

while(totRounds !== 5) {
    game();
    totRounds++;
}
