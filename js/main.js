function getComputerChoice(){
    const OPTIONS = ['scissor', 'paper', 'rock'];
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function game(){
    let answerPlayer = '';
    let computerSeleccion = '';
    let winner = '';
    const ROUNDS = 3;
    let count = 1;
    let playerPoints = 0;
    let computerPoints = 0;



    while(count <= ROUNDS){
    
        answerPlayer = prompt("Paper, Rock or Scissor ? (put your answer in lowercase, please): \n");
        computerSeleccion = getComputerChoice();
        console.log(" the computer responds : " +computerSeleccion + "\n");
        winner = playRound(answerPlayer,computerSeleccion);
        winner === 'P'? playerPoints++: winner === 'C'?computerPoints++: console.log('Draw');
        count++;

    }
    return playerPoints > computerPoints? 'player win!': 'computer win';
    
    
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const MOVES = {'paper': 'rock', 'scissor': 'paper', 'rock': 'scissor'}
    if(playerSelection === computerSelection){
        return `It's Draw`
    }
    if(MOVES[playerSelection] === computerSelection){
        return 'P';
    }else{
        return 'C';
    }
}
