
let player = 1

const boxes = document.querySelectorAll(".square")


const winConditions = [
    [box0, box1, box2],
    [box3, box4, box5],
    [box6, box7, box8], 
    [box0, box3, box6],
    [box1, box4, box7],
    [box2, box5, box8],
    [box0, box4, box8],
    [box2, box4, box6]
]


for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', addChar)
}

/*
click,
for (let j = 0; wincondition[])
if wincondition = index 1 then, you win
*/

function addChar(event){
    const box = event.target.closest(".square")
    console.log("event target box", box)
    if (box.innerHTML == ""){
        if (player === 1){
            box.textContent = "X"
            player = 2
        }else{
            box.textContent = "O"
            player = 1
        }
        
        for (let j = 0; j < winConditions.length; j++){
            let winCondition = winConditions[j];
            console.log({winCondition, j})
            let a = winCondition[0].innerText
            let b = winCondition[1].innerText
            let c = winCondition[2].innerText

            console.log("a", a)
            console.log("b", b)
            console.log("c", c)

            if(a === '' || b === '' || c === '') continue;

            if (a === b && b === c){
                alert("game won")
            }
        }
    }else{
        alert("NO!!")
    }  
}

document.getElementById("resetButton")