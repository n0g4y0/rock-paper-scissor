function getComputerChoice(){
    const OPTIONS = ['scissor', 'paper', 'rock'];
    return OPTIONS[Math.floor(Math.random() * 3)];
}