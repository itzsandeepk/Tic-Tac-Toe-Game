let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];
 
const resetGame = ()=>{
    turnO = true;
    
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turnO){
        box.innerText ="O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    

    checkWinner();
  });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratultions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner =() =>{
    for(let pattern of winPatterns){
         let posV1al = boxes[pattern[0]].innerText;
         let posV2al = boxes[pattern[1]].innerText;
        let posV3al = boxes[pattern[2]].innerText;

        if(posV1al != "" && posV2al != "" && posV3al != ""){
            if(posV1al === posV2al && posV2al === posV3al){
                console.log("winner", posV1al);
                showWinner(posV1al);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);