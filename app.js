
// accessing the boxes and the reset button 
let boxes  = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

// alternate chances that decides the turn in alternate method
let turnO = true; //playerX, playerO

// all the winning patterns in array.{multidimensional array}
// 2d array - array of arrays 
 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
};

const drawGame = ()=>{
    msg.innerText="No Winner";
    msgContainer.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){  //player 0 turn
            box.innerText = "0";
            turnO = false;
        }
        else{    //player X turn
            box.innerText= "X";
            turnO = true;
        }
        box.disabled = true;   // this lets you disable the button after u clicked them once 
       checkWinner();
       count++;
       console.log(count);
       if (count == 9) {
        drawGame();
       }
    })
});
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" ,pos1Val);
                
                showWinner(pos1Val);
            }
        }
    }
   };
 
   newGameBtn.addEventListener("click", resetGame);
   resetBtn.addEventListener("click", resetGame);

  