// This is rock-paper-scissors game

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
        roundResult = "You lose! Paper beats Rock.";
        console.log("You lose! paper beats rocks");
        console.log(`${winText}n/humanScore is : ${humanScore} and computer Score is : ${computerScore}`);
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
    choicesDiv.innerText = `Human choice: ${humanChoice} and  Computer choice: ${computerChoice}`;
}

// Create three buttons, one for each selection. Add an event listener to the buttons that call playRound function with the correct playerSelection every time a button is clicked.

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const playAgain = document.createElement("button");
const header = document.querySelector("h1");
const header2 = document.createElement("h2");
const div1 = document.createElement("div");
const div2 = document.createElement("div");

// Insert it before the score div (div1)
const choicesDiv = document.createElement("div");
choicesDiv.classList.add("choices");
choicesDiv.style.cssText = "margin: 20px; padding: 20px; font-size: 20px; color: white;";

div1.classList.add("score");
div2.classList.add("result");

header2.textContent = "(The player who scores 3 points first will win the match.)";
header2.style.cssText = " color:white;" ;

div1.textContent = "Score : ";
div1.style.cssText = " margin: 20px ; padding : 20px; font-size: 20px; color:white";

// div2.textContent = "Result : ";
div2.style.cssText = "margin: 20px ; padding : 20px ; font-size: 20px; color:white";

document.body.style.cssText = "background: #1E1E2E ; text-align: center"
header.style.cssText = " color: white"

rockBtn.style.cssText = " background:white; color:black; font-weight: bold; border:none; border-radius: 10px; margin:10px; padding:10px; height:40px; width:80px ";

paperBtn.style.cssText = "background:white; color:black; font-weight: bold; border:none; border-radius: 10px; margin:10px; padding:10px; height:40px; width:80px  ";

scissorBtn.style.cssText = "background:white; color:black; font-weight: bold; border:none; border-radius: 10px; margin:10px; padding:10px; height:40px; width:80px ";

playAgain.style.cssText = "background:white; color:black; font-weight: bold; border:none; border-radius: 10px; margin:10px; padding:10px; height:40px; width:80px : ";

playAgain.textContent="Restart"
rockBtn.textContent = "rock";
paperBtn.textContent = "paper";
scissorBtn.textContent = "scissors";


// document.parentNode.insertBefore(newElement, afterElement.nextsibling)
document.body.insertBefore(rockBtn,header.nextSibling);
document.body.insertBefore(paperBtn,rockBtn.nextSibling);
document.body.insertBefore(scissorBtn,paperBtn.nextSibling);
document.body.insertBefore(div1,scissorBtn.nextSibling);
document.body.insertBefore(div2,div1.nextSibling);
document.body.insertBefore(header2,header.nextSibling);
document.body.insertBefore(playAgain,div2.nextSibling);
document.body.insertBefore(choicesDiv, div1);

rockBtn.addEventListener('click',(e)=>{
    console.log(e.target.value);
   

    if (humanScore === 3 || computerScore === 3) return;
    parseInt(playRound('rock',getComupterChoice()));
   
    div1.innerText =`Human score is :${humanScore} and Computer score is :${computerScore}`;
    
    if(humanScore===3){
        return div2.innerText = " Congratulation ! You won the match ";
    }else if(computerScore===3){
        return div2.innerText = "You Lost the Match ! Better luck next Time !"
    }
});

paperBtn.addEventListener('click',()=>{
    if (humanScore === 3 || computerScore === 3) return;
    parseInt(playRound('paper',getComupterChoice()));
    
    div1.innerText =`Human score is :${humanScore} and Computer score is :${computerScore}`;
    
    if(humanScore===3){
        div2.innerText = " Congratulation ! You won the match ";
    }else if(computerScore===3){
        div2.innerText = "You Lost the Match ! Better luck next Time !"
    }
    
});

scissorBtn.addEventListener('click',()=>{
    if (humanScore === 3 || computerScore === 3) return;
    parseInt(playRound('scissors',getComupterChoice()));
    
    div1.innerText =`Human score is :${humanScore} and Computer score is :${computerScore}`;
    if(humanScore===3){
        div2.innerText = " Congratulation ! You won the match ";
    }else if(computerScore===3){
        div2.innerText = "You Lost the Match ! Better luck next Time !"
    }
});

playAgain.addEventListener('click',()=>{
    humanScore=0;
    computerScore=0;
    div1.innerText = "Score :";
    div2.innerText = "";
    choicesDiv.innerText = "";
});