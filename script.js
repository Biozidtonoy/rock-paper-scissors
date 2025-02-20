// This is rock-paper-scissors game which is play on your console.

// this function is for human ,who playing this game and choose their symbol.
function getHumanChoice(){
    let value2 = prompt("Please Type Which one You want to play among ('rock','paper','scissors') ")
    return value2.toLowerCase();
}

// this fuction is for computer. Using math.rondom() method for generate a random value of rock,paper and scissors .
function getComupterChoice(){
    const value1 = Math.random();
    if(value1 >= 0 && value1 <= 0.3){
        return "rock";    
    }else if(value1 >= 0.3 && value1 <= 0.6){ 
        return "paper";
    }else{
        return "scissors" ;
    }
} 


//initial value of human Score ;  
let humanScore = 0 ;
let computerScore = 0 ;

// this is the main function where humanChoice and ComputerChoice condition applied for who win human or computer .
function playRound(humanChoice,computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore +=1;
        console.log("You lose! paper beats rocks");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore +=1;
        console.log("You win ! rock beats scissors");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("Tie !");  
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);     
    }else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore +=1;
        console.log("You win ! paper beats rock");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore +=1;
        console.log("You lose ! Scissors beats paper");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("Tie !");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore +=1;
        console.log("You lose ! rock beats scissors");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore +=1;
        console.log("You win ! scissors beats paper");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("Tie !");
        console.log(`humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
    }else {
        return ` invalid input please try again`;
    }
}

// this fumction is called playround() function 5 times becauce i want every game have 5 rounds and then decide the winner.
function playGame () {
    for (let i = 1; i <= 5; i++){
       playRound(getHumanChoice(),getComupterChoice());
    }
    if(humanScore > computerScore){
        alert(`Congratulation ! You won the Game .\n human Score is : ${humanScore} and Computer Score is : ${computerScore}`)
    }else if (humanScore === computerScore){
        alert(`Tie! please play again \n human Score is : ${humanScore} and Computer Score is : ${computerScore}`)
    }
    else{
        alert(`Better Luck Next Time ! Computer Wins The Game . \n human Score is : ${humanScore} and Computer Score is : ${computerScore}`)
    }
}
playGame();

