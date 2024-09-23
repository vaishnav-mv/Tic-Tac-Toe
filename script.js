let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-btn");
let newGameButton= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector("#msg");
let turn= true;
const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.style.color="green";
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}


const showWinner=(winner)=>{
    msg.innerText= `congrats,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val); 
            }
        }
    }
};


newGameButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
