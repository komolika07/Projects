const choices = document.querySelectorAll(".choose");
let user_score = 0;
let comp_score = 0;
const msg = document.querySelector("#Msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const compChoice = () =>{
    let option =["stone" , "paper", "scissor"];
    const rdmInd = Math.floor(Math.random() *3);
    return option[rdmInd];
}

const showWinner = (userWin,userChoice,compselection) =>{
    if(userWin){
        user_score++;
        userScoreP.innerText = user_score;
        msg.innerText = `You Win! Your ${userChoice} beats ${compselection}`;
        msg.style.backgroundColor ="green";
    }
    else{
        comp_score++;
        compScoreP.innerText = comp_score;
        msg.innerText = `You Lose!  ${compselection} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) => {
    console.log(`User Choice is ${userChoice}`);
    compselection = compChoice();
    console.log(`Computer Choice is ${compselection}`);

    if(userChoice === compselection){
        msg.innerText = `Game Was Draw!`;
        msg.style.backgroundColor ="gray";
        msg.style.color ="black";
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
             userWin = compselection === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compselection === "scissor" ? false : true;
       }
       else {
        userWin = compselection === "rock" ? false : true;
   }
   showWinner(userWin,userChoice,compselection);
    }
}
choices.forEach ((choice) => {
    choice.addEventListener('click' , () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
