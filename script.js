function ComputerPlay() 
{
    let Random_number = Math.floor(Math.random() * 9 + 1);
    if(Random_number%3 == 0) return "rock";
    else if(Random_number%3 == 1) return "paper";
    else return "scissor";
}

function playRound(playerSelection,computerSelection)
{
    if(playerSelection === computerSelection) return "Play Again!!";
    else if(playerSelection === 'rock') {
        if(computerSelection === 'scissor') return "You Win! Rock beats Scissor";
        else return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === 'paper') {
        if(computerSelection === 'scissor') return "You Lose! Scissor beats Paper";
        else return "You Win! Paper beats Rock";
    }
    else if(playerSelection === 'scissor') {
        if(computerSelection === 'paper') return "You Win! Scissor beats Paper";
        else return "You Lose! Rock beats Scissor";
    }
}

function game()
{
    let playerScore = 0, computerScore = 0;
    for(let i=0;i<5;i++) {
        const playerSelection = prompt().toLowerCase();
        const computerSelection = ComputerPlay();
        let result;
        console.log(result = playRound(playerSelection,computerSelection));
        if(result != "Play Again!!") {
            if(result.search("Win!") != -1) playerScore++;
            else computerScore++;
        }
        
    }
    console.log("player score = " + playerScore);
    console.log("computer score = " + computerScore);

    if(playerScore>computerScore) console.log("YOU are the WINNER!!");
    else if(playerScore<computerScore) console.log("Computer is the WINNER!!");
    else console.log("Game Tied!!");
}

game();
