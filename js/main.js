
let player = 1

const boxes = document.querySelectorAll(".square")
// const shotgun = new Audio(dsdshtgn.wav)




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
            gameCheck()
            player = 2
        }else{
            box.textContent = "O"
            gameCheck()
            player = 1
        }
        
       
    }else{
        alert("NO!!")
    }  
}

function gameCheck(){
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
            if(player == 1){
                alert("game won X, hit refresh to play again!")
            }else if(player == 2){
                alert("game won O, hit refresh to play again!")
            }
            
            
        // }else if(boxes.every(text => text.textContent !== '')){
        } else {
            const boxesArrayForSure = []
            boxes.forEach(box => {
                boxesArrayForSure.push(box.textContent)
            })
            if (boxesArrayForSure.every(box => box !== '')) {
                console.log("tie")
                alert("tie! hit refresh to play again!")
                break;
            }
   
        }
    }

    






}

// function boxClear(){
//     location.reload()
//     boxes = ""
    
// }
// document.getElementById("resetButton").addEventListener('on', boxClear())

