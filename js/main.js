function getComputerChoice(){
    const OPTIONS = ['scissor', 'paper', 'rock'];
    return OPTIONS[Math.floor(Math.random() * 3)];
}
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
