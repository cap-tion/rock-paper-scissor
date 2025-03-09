let humanScore=0;
let computerScore=0;





function playGame(){
    while((humanScore<5)&&(computerScore<5)){
    let selectedHumanChoice = getHumanChoice();
    let selectedComputerChoice = getComputerChoice();
    console.log(`Player picked: ${selectedHumanChoice} | Computer picked: ${selectedComputerChoice}`);
    
    if(selectedHumanChoice===selectedComputerChoice){
        console.log("Tie!")
    }
    else if (
        ((selectedHumanChoice === 'r') && (selectedComputerChoice === 's')) ||
        ((selectedHumanChoice === 'p') && (selectedComputerChoice === 'r')) ||
        ((selectedHumanChoice === 's') && (selectedComputerChoice === 'p'))
    ) {
        console.log("You win this round!");
        humanScore++;
    }
    else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    console.log(`Score: Player - ${humanScore}, Computer - ${computerScore}`);
}
}


    
function getComputerChoice(){
    let comp_guess = Math.floor((Math.random()*3)+1);
    if(comp_guess===1){
        return 'r';
    }
    else if (comp_guess===2){
        return 'p';
    }
    else if (comp_guess===3){
        return 's';
    }
}
function getHumanChoice(){
    let input = prompt("Enter Rock (r) Paper (p) or Scissor(s)").toLowerCase();
    return input;
}
playGame();
