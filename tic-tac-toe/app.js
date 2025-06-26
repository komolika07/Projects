let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".winner-board");
let msg = document.querySelector(".content");
let isTurnX = true;
let main= document.querySelector("main");

main.classList.remove("hide");
let winningPattern = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
];

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(isTurnX){
            box.innerText="X";
            isTurnX = false;
        } else{
            box.innerText = "O";
            isTurnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
 
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () =>{
    isTurnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


const showWinner = (winner) =>{
    msg.innerText = `Congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};


const checkWinner = () =>{
    for(let pattern of winningPattern){
        // console.log(pattern[0], 
        //     pattern[1], 
        //     pattern[2]);
        // console.log(boxes[pattern[0]].innerText, 
        //             boxes[pattern[1]].innerText, 
        //             boxes[pattern[2]].innerText);
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 === pos1 && pos1 === pos2){
                console.log("Winner",pos0);
                showWinner(pos0);
            }
            
        }
        
    } 
};

newBtn.addEventListener("click",resetGame) 
resetbtn.addEventListener("click",resetGame);
