let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let newBtn = document.querySelector("#new-Btn")
let msgCotainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
 let trunO = true;

 const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 const resetGame=()=>{
    trunO=true;
    enableBoxes();
    msgCotainer.classList.add("hide");

 }
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     
        if (trunO){
            box.innerHTML="O";
            trunO=false;
        }else{
            box.innerHTML="X";
            trunO=true;
        }
        box.disabled=true;
        checkWinner()
    })
 });
 const disabledBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }

 }
 const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=""
    }
    
 }
 const showWinner=(winner) =>{
    msg.innerHTML =`Winner is ${winner}`
    msgCotainer.classList.remove("hide");
     disabledBoxes()
 }
 const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val === pos3Val){
               
                showWinner(pos1Val)
            }
        }
    }

 }
 newBtn.addEventListener("click", resetGame)
 resetBtn.addEventListener("click", resetGame)