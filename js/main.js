let player = 1
const boxes = document.querySelectorAll(".square")
console.log(boxes)

// const winCondition = [
//     [box0, box1, box2],
//     [box3, box4, box5],
//     [box6, box7, box8], 
//     [box0, box3, box6],
//     [box1, box4, box7],
//     [box2, box5, box8],
//     [box0, box4, box8],
//     [box2, box4, box6]
// ]

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
        
    }else{
        alert("NO!!")
    }
    
}

const box0 = document.getElementById("box0")
console.log("box 0 =", box0)
box0.addEventListener("click", addChar)

document.getElementById("box1").addEventListener("click", addChar)


// i want the click to add an x or o based on player number. current player is 1